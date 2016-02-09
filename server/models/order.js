var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OrderSchema = new mongoose.Schema({
 // since this a reference to a different document, the _ is the naming convention!
 _customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
 order_qty: Number,
 order_name: String,
 order_date: String, 
 created_at: {type: Date, default: new Date},
 customer_name: String,
});
mongoose.model('Order', OrderSchema); 

