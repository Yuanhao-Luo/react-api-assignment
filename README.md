# Assignment 2 - Web API.

Name: Yuanhao Luo

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)

 + Modify favourite movies
 + New API routes
 + Mongo integration 
 + React integration
 + Object referencing in Mongo/Mongoose
 + Basic Authentication and protected routes
 + Error handling
 + Substantial React App integration
 + Additional regular expression
 + API documentation
 + Movie recommender using algorithm based on user's favourites

## Setup requirements.



## API Configuration

______________________
NODEENV=development
PORT=8080
HOST=localhost
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
______________________

## API Design

[Swaggerhub](https://app.swaggerhub.com/apis-docs/Yuanhao-Luo/movie/1.0.0#/)

## Security and Authentication

Users can register an account, and login with this account. Then an authentication token will be recieved from api. The token will store in user's browser untill user logout.
Users need the authentication token to access movie detail page, company detail page, favoutite movie page, review writing page and recommand movie page.

## Integrating with React App

I changed all TMDB API to my Web API. The views includes home page, upcoming movies, now_playing movies, movie details, similar movies... I store some basic account information in browser so that users can automatically login after refresh the page. The favourite movies will record in database, it won't disappear if users close their browser. Recommand movies are based on users' favourite movies. TMDB has a api to get recommand movies of one movie. I use this api to generate recommand movies aftering deleting repeated movie and other favourite movies.

## Independent learning (if relevant)

Briefly explain any non-standard features developed for the app. 