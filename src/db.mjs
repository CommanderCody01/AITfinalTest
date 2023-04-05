import mongoose from 'mongoose'
import slug from 'mongoose-slug-updater';



console.log('Waiting for connection to database...')
// try {
//   await mongoose.connect('mongodb://localhost/finalTest', {useNewUrlParser: true});
//   console.log('Successfully connected to database.')
// } catch (err) {
//   console.log('ERROR: ', err);
// }

try {
  await mongoose.connect('mongodb://qy624:5aniwGzT@class-mongodb.cims.nyu.edu/qy624', {useNewUrlParser: true});
  console.log('Successfully connected to database.')
} catch (err) {
  console.log('ERROR: ', err);
}

mongoose.plugin(slug);


const reviewScheme = new mongoose.Schema({
  reviewManName: {type: String, required: true, minLength: 1},         // gameName 是unique的
  game: {type: String, required: true},
  description: {type: String, required: true},
  slug: {type: String, slug: ["reviewManName","game"], unique: true}
},{timestamps: true}
);

const gameSchema = new mongoose.Schema({
  gameName: {type: String, required: true, minLength: 1},         // gameName 是unique的
  company: {type: String, required: true},
  type: {type: String, },
  year: {type: String},
  reviews: [reviewScheme]
});

const UserSchema = new mongoose.Schema({
  username: {type: String, required: true, minLength: 1, maxLength: 20},         // userName 是unique的
  password: {type: String, required: true, minLength: 8},
  email: {type: String, required: true},
  gameLists: [gameSchema]
});





mongoose.model('User', UserSchema);
mongoose.model('Game', gameSchema);
mongoose.model('Review', reviewScheme);

// // OPTIONAL: modify the connection code below if
// // using mongodb authentication
// const mongooseOpts = {
//   useNewUrlParser: true,  
//   useUnifiedTopology: true
// };

// // mongoose.connect('mongodb://localhost/hw05', mongooseOpts, (err) => {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log('connected to database'); 
// //   }
// // });

// // TODO: create schema and register models

// const Review = new mongoose.Schema({
//   courseNumber: String,
//   courseName: String,
//   semester: String,
//   year: Number,
//   professor: String,
//   review: String
// });

// mongoose.model("Review",Review);

// mongoose.connect('mongodb://localhost/hw05');