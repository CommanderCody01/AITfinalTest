<!-- The content below is an example project proposal / requirements document. Replace the text below the lines marked "__TODO__" with details specific to your project. Remove the "TODO" lines. -->

<!-- (__TODO__: your project name) -->



# Game forum

## Overview

(__TODO__: a brief one or two paragraph, high-level description of your project)

This site is about a forum for games discuession. Users can create and log into their account. They can post the games they want to discuss on the web, and others can add comment on it via registered user or guest.


## Data Model

(__TODO__: a description of your application's data and their relationships to each other) 

The application will store Users, Games, Reviews

* Users can have multiple games (via embedding)
* Games can have multiple reviews (via embedding)

(__TODO__: sample documents)

An Example User:

```javascript
{
  username: "shannonshopper",
  hash: // a password hash,
  gameLists: // a array of games (games need to have distinct names)
}
```

An Example Games:
```javascript
{
  name: "xxx",
  company: 'x',
  type: 'xx'
  year: 'xx'
  reviews : [reviewId1, reviewId2... ]
  ...
}
```

An Example Reviews:
```javascript
{
  user: // a reference to a User object
  game: 'xxx'
  createdAt: // timestamp
  content: 'xxxx'
}
```


## [Link to Commented First Draft Schema](db.mjs) 

(__TODO__: create a first draft of your Schemas in db.mjs and link to it)
https://github.com/nyu-csci-ua-0467-001-002-spring-2023/final-project-CommanderCody01/blob/master/db.mjs



## Wireframes

(__TODO__: wireframes for all of the pages on your site; they can be as simple as photos of drawings or you can use a tool like Balsamiq, Omnigraffle, etc.)
https://github.com/nyu-csci-ua-0467-001-002-spring-2023/final-project-CommanderCody01/blob/master/morn%20Po.pdf



## Site map

(__TODO__: draw out a site map that shows how pages are related to each other)
https://github.com/nyu-csci-ua-0467-001-002-spring-2023/final-project-CommanderCody01/blob/master/Creore%20Acsunt.pdf



## User Stories or Use Cases


1. as non-registered user, I can register a new account with the site
2. as a user, I can log in to the site
3. as a user, I can create a new game list
4. as a user, I can view all comments from other users about particular games
5. as a user, I can add filter comments based on user and games
6. as a user, I can cross off games in an existing game list

## Research Topics

(__TODO__: the research topics that you're planning on working on along with their point values... and the total points of research topics listed)

Mocha for testing & Bootstrap for front-end framework
* (5 points) Integrate user authentication
    * I'm going to be using passport for user authentication
    * And account has been made for testing; I'll email you the password
    * see <code>cs.nyu.edu/~jversoza/ait-final/register</code> for register page
    * see <code>cs.nyu.edu/~jversoza/ait-final/login</code> for login page
* (4 points) Perform client side form validation using a JavaScript library
    * see <code>cs.nyu.edu/~jversoza/ait-final/my-form</code>
    * if you put in a number that's greater than 5, an error message will appear in the dom
* (5 points) vue.js
    * used vue.js as the frontend framework; it's a challenging library to learn, so I've assigned it 5 points

10 points total out of 8 required points (___TODO__: addtional points will __not__ count for extra credit)
  
  Mocha Test 3 points
  Headless Chrome 3 points
  Bootstrap 2 points
  Jquery  5 points

## [Link to Initial Main Project File](app.mjs) 

(__TODO__: create a skeleton Express application with a package.json, app.mjs, views folder, etc. ... and link to your initial app.mjs)
https://github.com/nyu-csci-ua-0467-001-002-spring-2023/final-project-CommanderCody01/blob/master/app.mjs


## Annotations / References Used

(__TODO__: list any tutorials/references/etc. that you've based your code off of)

1. [passport.js authentication docs](http://passportjs.org/docs) - (add link to source code that was based on this)
2. [tutorial on vue.js](https://vuejs.org/v2/guide/) - (add link to source code that was based on this)

