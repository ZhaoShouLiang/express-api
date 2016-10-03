var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/zsldb');

var db = mongoose.connection;

db.once('open', function(){
  console.log('success')
  var perSchema = mongoose.Schema({
      name: String,
      pasward:Number,
      age:Number
    });
  var Person = mongoose.model('person', perSchema);
    // var ZSL = new Person({ name: 'ZSL' ,pasward:925925,age:22});增加
    // console.log(ZSL.name);
    // ZSL.save();
    // ZSL.pasward = 123456;
    // ZSL.save();
  Person.findById({_id : "57ecd029067cc3271aa483ee"},function(err,person){
      // person.name = "zzzzz"
      // person.pasward = "321654"
      // person.save(function(err){
      // console.log('更新了!')
      person.remove(function(err){
        console.log('删除!')
        Person.find().exec(function(err,people){
        // 异步执行，将查找的结果打印出来
        console.log(people);
        });
      });
  });
  console.log('我先出来')
})
