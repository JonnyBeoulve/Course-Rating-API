# Course Rating API
This Node and Express-based REST API allows users to interact with a Mongo database comprised of users, school courses, and course reviews.

## How to Use
1. From terminal, install node dependencies by typing 'npm install'.
2. Start up a Mongo database (https://docs.mongodb.com/getting-started/shell).
3. Type 'npm start' to initiate the program.
4. This program has no GUI, but all transactions can be initiated and watched using programs such as Postman.

## Programming
* HTML
* CSS
* JavaScript
* Node.js
* Express
* MongoDB

## Notes
* The Mongo database is seeded upon each start using the data.json file in /src/data, resetting the state of the database. This functionality can be removed in the index.js file.
* The CourseAPI.postman_collection.json file in the root directory contains example requests you can use to test the REST API. Using Postman you can import the file to quickly gain access to each of its requests.
