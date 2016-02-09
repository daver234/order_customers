var customers = require('../controllers/customers.js');
var orders = require('../controllers/orders.js');

module.exports = function(app) {
  	app.get('/getCustomers', function(req, res) {
  		customers.start(req, res);
  	});
  
  app.post('/addCustomer', function(req, res) {
    	console.log('in routes.js /addCustomer');
    	customers.new_customer(req, res);
    });

  app.post('/removeCustomer', function(req, res) {
    	customers.remove(req, res);
    });

  app.post('/addOrder', function(req, res) {
    console.log(' in /addOrder')
    orders.new_order(req, res);
    });

  app.get('/getOrders', function(req, res) {
    console.log(' in /getOrders route.js')
    orders.start(req, res);
    });
  
};