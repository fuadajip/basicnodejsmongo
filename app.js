//Create account in mlab

var mongoose = require('mongoose');


//connect to mongoose
mongoose.connect('mongodb://rookie:rookie@ds119750.mlab.com:19750/simplenode');

//create simple schema
var mySchema = new mongoose.Schema({
    data : String,
});

var myModel = mongoose.model('myModel', mySchema);
var data = { data : 'Nama saya fuad aji pratomo'};

myModel(data).save(function(err){
  if(err) throw err;
  console.log("Saved");
})
