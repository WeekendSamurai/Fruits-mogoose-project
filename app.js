const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please chech the data entry. No name specified."]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Peach",
  rating: 10,
  review: "Peaches are yummy"
});

// fruit.save();

const peopleSchema = mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const People = new mongoose.model("People", peopleSchema);

const mango = new Fruit({
  name: "Mango",
  rating: 10,
  review: "Savage"
});
mango.save();

// const people = new People({
//   name: "John",
//   age: 37,
//   favouriteFruit: pineapple
// });

// people.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 10,
//   review: "The best"
// });
//
// const orange = new Fruit({
//   name: "Orange",
//   rating: 4,
//   review: "Too sour"
// });
//
// const banana = new Fruit({
// name: "Banana",
// rating: 9,
// review: "Pure daycent"
// });
//
// Fruit.insertMany([kiwi, banana, orange], function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully saved fruits to fruitsDB");
//   }});

Fruit.find(function(err, fruits){
  if (err){
    console.log(err);
  } else {

mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne({_id: "60f83adb52968789a8066c41"},{name: "Pineapple"}, function(err){
//   if (err){
//     console.log(err);
//   } else{
//     console.log("Succesfully updated the doc");
//   }
// })

// Fruit.deleteOne({_id: "60f83adb52968789a8066c41"}, function(err){
// if(err){
//   console.log(err);
// } else {
//   console.log("Succesfully deleted");
// }
// });

People.updateOne({name: "John"}, {favouriteFruit: mango}, function(err){
  if (err){
    console.log(err);
  } else{
    console.log("Succesfully updated the doc");
  }
});


// People.deleteMany({name: "John"}, function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted all entries.");
//   }
// });
