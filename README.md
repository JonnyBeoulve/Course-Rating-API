# Course Rating API
This express-based rest API allows users to interact with a Mongo database comprised of users, school courses, and course reviews.

## How to Use
1. From terminal, install node dependencies by typing 'npm install'.
2. Start up a Mongo database (https://docs.mongodb.com/getting-started/shell).
3. Type 'npm start' to initiate the program.
4. This program has no GUI, but all transactions can be initiated and watched using programs such as Postman.

## Programming
* Basic Auth (https://www.npmjs.com/package/basic-auth)
* BCrypt (https://www.npmjs.com/package/bcrypt)
* Body Parser (https://www.npmjs.com/package/body-parser)
* Express (https://www.npmjs.com/package/express)
* Express Session (https://www.npmjs.com/package/express-session)
* MongoDB (https://www.npmjs.com/package/mongodb)
* Mongoose (https://www.npmjs.com/package/mongoose)
* Mongoose Seeder (https://www.npmjs.com/package/mongoose-seeder)
* Morgan (https://www.npmjs.com/package/morgan)
* Validator (https://www.npmjs.com/package/validator)

## Notes
* The Mongo database is seeded upon each start, resetting the state of the database. This functionality can be removed in the index.js file.
