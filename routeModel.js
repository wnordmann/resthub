// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var routeSchema = mongoose.Schema({
    nodes: {
        type: {}
    },
    location: {
        type: String
    }
});

// var routeSchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     gender: String,
//     phone: String,
//     create_date: {
//         type: Date,
//         default: Date.now
//     }
// });
// Export route model
var Route = module.exports = mongoose.model('route', routeSchema);
module.exports.get = function (callback, limit) {
    Route.find(callback).limit(limit);
}