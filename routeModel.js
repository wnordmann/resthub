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


// Export route model
var Route = module.exports = mongoose.model('route', routeSchema);
module.exports.get = function (callback, limit) {
    Route.find(callback).limit(limit);
}