var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Customer = mongoose.model('Customer');
var moment = require('moment');
moment().format(); 

module.exports = (function() {
  return {
  start: function(req, res) {
    console.log('in start for Orders:');
    Order.find({}, function(err, orders) {
      if(err){
          console.log("something wrong in finding all customers");
        } else {
          console.log('got all customers');
        }
      res.json(orders); 
    })
  },

  new_order: function(req, res) {
    console.log('In new_order');
    console.log("the id is:", req.body.id);
    console.log('order name is:', req.body.customer_name)
    var order_date = moment().format("MMMM DD, YYYY");

    //Customer.findOne({_id: req.params.id}, function(err, customer) {
      // console.log('here is customer', customer);
      var order = new Order({order_qty: req.body.order_qty, order_name: req.body.order_name, order_date: order_date, customer_name: req.body.customer_name});
      // customer.orders.push(order);
      order.save(function(err){
         if(err) {
            console.log('something went wrong in saving new order');
          } else { 
            console.log('successfully added a order!');
            res.end();
                  }
          })
        }
      }
  }) ();