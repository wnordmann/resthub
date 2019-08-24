// routeController.js
// Import route model
Route = require('./routeModel');
Dijkstra = require('./shortestPath');
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
    const seattle = {
        a: {
            b: 1
        },
        b: {
            a: 2
        },
        c: {
            d: 3
        },
        d: {
            c: 4
        }
    }
    const path = Dijkstra(seattle, "a", "b");
    // TODO : Handle error
    res.json({
        status: "success",
        message: "Route retrieved successfully",
        path: path
    });
};
// Handle create route actions
exports.new = function (req, res) {
    var route = new Route();
    route.nodes = req.body.nodes; //TODO: Data integrity
    route.location = req.params.location;
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

// Handle view contact info
exports.byId = function (req, res) {
    Route.find({
        location: req.params.location
    }, function (err, route) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading...',
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