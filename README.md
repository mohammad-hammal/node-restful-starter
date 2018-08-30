# Node.js RESTful API boilerplate

node.js boilerplate to make bulding RESTful API faster, with mongodb nosql database.

## Features

* User model with Authentication 
* Easy Validation Process
* Json web token
* Use ES6 features

### Installing

Clone the project
```
git clone https://github.com/mohammad-hammal/node-restful-starter.git
```

Install dependencies 
```
npm install 
```
or
```
yarn install
```
## Start

``` npm start```

## Documentation

### Setup variables

you can put the port number, mongodb connection link, and json web token key from ``` .env ``` :
```
PORT = 5000
DATABASE = connection_link
JWT_KEY = key 
```
### Routing

you can put your routes and assign them to controllers in ```index.js``` inside routes folder

```
router.get('/users/me', asyncMethod(isLogggedIn), userController.getData);
```

### Validation
I used [express-validator](https://github.com/express-validator/express-validator) package for validation.
put your validation rules inside ```validators.js``` middleware inside middleware folder and use you rule like this:

```router.post('/users/register',validate(SaveUser) ,asyncMethod(userController.register));```

### Async Methods

when using async/await in controller method put the method inside asyncMethod from ```index.js```  inside helpers folder to catch Promises errors.

```
router.post('/users/login', asyncMethod(userController.login));
```

### Gurd Routes

you can gurd any routes using auth middleware like this:

```
router.get('/users/me', asyncMethod(isLogggedIn), userController.getData);
```
### User Routes
#### Register 
* Route: /users/register
* Method: POST
* Content-type: application/json
* Body: ```name```, ```email```, ```password```

#### Login 
* Route: /users/login
* Method: POST
* Content-type: application/json
* Body: ```email```, ```password```
* Result: token
#### Get user data 
* Route: /users/getData
* Method: GET
* Authorization: token
* Result: current user data
