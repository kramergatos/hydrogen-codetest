# hydrogen-codetest

## Code Test Prompt
Make a mock ‘GET Transactions’ REST API endpoint to pull transactions for a payroll debit card used by a company on the Hydrogen platform. Show the request and response with all of the fields. You are free to use any software or means of showing the API.

## Research
Found documentation  
https://www.hydrogenplatform.com/docs/nucleus/v1/?javascript#List-all-card-transactions

## Test This App
```
npm i  
node index.js
```
open Postman
  HTTP METHOD: GET  
  URL: localhost:3000/card/40d6e6e4-4695-4fe8-9f91-dbfdd96ae766/transaction

## Tech Stack
NodeJS - backend server side JavaScript environment  
HapiJS - JavaScript web app framework  
Joi - object schema description language and validator for JavaScript objects  
MongoDB - NoSQL data store  
Postman - app for API testing  

## Create Project
```
npm init  
npm i @hapi/hapi joi joi-objectid hapi-mongodb --save
```
