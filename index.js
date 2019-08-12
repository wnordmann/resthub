// Starting point - https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d
// FileName: index.js
let express = require('express') // Import express
let bodyParser = require('body-parser'); // Import Body parser
let mongoose = require('mongoose'); // Import Mongoose
let apiRoutes = require("./api-routes") // Import routes

let app = express(); // Initialize the app

var port = process.env.PORT || 8080; // Setup server port

app.get('/', (req, res) => res.send('Hello World with Express')); // Send message for default URL

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});

app.use('/api', apiRoutes) // Use Api routes in the App

// // Configure bodyparser to handle post requests
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/resthub', {
    useNewUrlParser: true
});
var db = mongoose.connection;

// Added check for DB connection
if (!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")