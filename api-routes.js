// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();
var bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({
    extended: false
})

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});

// Import route controller
var routeController = require('./routeController');

router.route('/maps/:location')
    .get(routeController.byId)
    .put(jsonParser, routeController.new);

router.route('/maps/')
    .get(routeController.index)

router.route('/maps/:location/path/:start/:end')
    .get(routeController.path);

// Export API routes
module.exports = router;