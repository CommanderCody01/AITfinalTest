import express from 'express'
import mongoose from 'mongoose';
import sanitize from 'mongo-sanitize';
import path from 'path'
import { fileURLToPath } from 'url';
import bcrypt from 'bcryptjs';
import session from 'express-session';
import './db.mjs';
import {startAuthenticatedSession, endAuthenticatedSession} from './auth.mjs';

// 要在 SRC 下run


const app = express();
app.use(express.urlencoded({ extended: false }));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'hbs');

app.use(session({
    secret: 'add session secret here!',
    resave: false,
    saveUninitialized: true,
}));

const User = mongoose.model('User');
const Game = mongoose.model('Game');
const Review = mongoose.model('Review');

const authRequired = (req, res, next) => {
    if(!req.session.user) {
      req.session.redirectPath = req.path;
      res.redirect('/login'); 
    } else {
      next();
    }
  };
  
app.use((req, res, next) => {
    // can use {{user}} in your template
    res.locals.user = req.session.user;
    next();
});


app.get("/",(req, res) =>{

    res.render('index', {user: req.session.user});
});

app.get("/user/:slug",authRequired, async(req, res) =>{

    const user = await User.findOne({username: req.params.slug}).exec();

    const gameLst = user.gameLists;

    // const f1 = req.query.gameName;                 // filter 1
    // const f2 = req.query.company;
    // const f3 = req.query.year;
    // const f4 = req.query.type;

    
    // console.log(user);
    res.render('user',{data: gameLst});

});

app.post("/user/:slug",authRequired, async(req, res) =>{

    const user = await User.findOne({username: req.params.slug}).exec();
    const s = '/user/' + user.username;
    const gn = req.body.gameName;
    const gm = await Game.findOne({gameName: gn}).exec();

    if(!gm){                      // 只有没找到game才能add game 进DB
        const g = new Game({
            gameName: req.body.gameName,
            company: req.body.company,
            type: req.body.type,
            year: req.body.year,
        });
        g.save().then( async(saved) => {
            const list = user.gameLists;
            list.push(g);
            await User.updateOne({username: req.params.slug},{$set: {gameLists: list}}).exec();
            res.redirect(s);
        } );
    }
    else{
        const list = user.gameLists;
        list.push(gm);
        await User.updateOne({username: req.params.slug},{$set: {gameLists: list}}).exec();
        res.redirect(s);
    }

    

    // console.log(user);
    // if( user.gameLists === null){
    //     user.gameLists = [];
    // }



});

app.get("/forum", authRequired, (req, res)=>{

  const f1 = req.query.reviewManName;                 // filter 1
  const f2 = req.query.game;
  const f3 = req.query.userName;
  console.log(f3);
    

  res.render('forum');
})


app.get("/register",(req, res) =>{
    res.render('register');
});

app.post('/register', async (req, res) => {
    const username = sanitize(req.body.username);
    const password = sanitize(req.body.password);
    const email = sanitize(req.body.email);
  
    try {

      const existingUser = await User.findOne({username}).exec();
      if(existingUser){
        res.render('register', {message: "could not register"});
      }
      else{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const user = new User({
          username: username,
          password: hash,
          email: email
        })
        const savedUser = await user.save();
        await startAuthenticatedSession(req, savedUser);
        res.redirect("/");
      }
  
    } catch (err) {
      if(err instanceof mongoose.Error.ValidationError) {
        res.render('register', {message: err.message});
      } else {
        throw err;
      }
    }
  });

app.post('/logout', async (req, res) => {
    await endAuthenticatedSession(req);
    res.redirect('/');
});

app.get("/login",(req, res) =>{
    res.render('login')
});

app.post('/login', async (req, res) => {
    const username = sanitize(req.body.username);
    const password = sanitize(req.body.password);
  
    try {

      const existingUser = await User.findOne({username}).exec();

      if(existingUser){
        // console.log(bcrypt.compareSync(password , existingUser.password));
        if(bcrypt.compareSync(password , existingUser.password)){
          await startAuthenticatedSession(req, existingUser);
          res.redirect("/");
        }
        else{
          res.render('login', {message: "Wrong password"});
        }
  
      }else{
        res.render('login', {message: "Did not find user"});
      }
  
  
    } catch (err) {
      if(err instanceof mongoose.Error.ValidationError) {
        res.render('login', {message: err.message});
      } else {
        throw err;
      }
    }
  });

app.listen(process.env.PORT || 3000);
