// routeController.js
// Import route model
Route = require('./routeModel');
// Handle index actions
exports.index = function (req, res) {
    Route.get(function (err, routes) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Route retrieved successfully",
            data: routes
        });
    });
};
exports.path = function (req, res) {
    console.log(req);
    // TODO : Handle error
    res.json({
        status: "success",
        message: "Route retrieved successfully",
    });
};
// Handle create route actions
exports.new = function (req, res) {
    var route = new Route();
    route.nodes = req.body.nodes; //TODO: Data integrity
    route.location = req.params[0]; //TODO: Verify params[0]
    // save the route and check for errors
    route.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New route created!',
            data: route
        });
    });
};
// Handle view route info
exports.view = function (req, res) {
    Route.findById(req.params.route_id, function (err, route) {
        if (err)
            res.send(err);
        res.json({
            message: 'route details loading..',
            data: route
        });
    });
};
// Handle update route info
// exports.update = function (req, res) {
//     Route.findById(req.params.route_id, function (err, route) {
//         if (err) {
//             res.send(err);
//         }
//         route.node = req.body.name ? req.body.name : route.name;
//         route.gender = req.body.gender;
//         route.email = req.body.email;
//         route.phone = req.body.phone;
//         // save the route and check for errors
//         route.save(function (err) {
//             if (err)
//                 res.json(err);
//             res.json({
//                 message: 'route Info updated',
//                 data: route
//             });
//         });
//     });
// };
// Handle delete route
exports.delete = function (req, res) {
    Route.remove({
        _id: req.params.route_id
    }, function (err, route) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'route deleted'
        });
    });
};