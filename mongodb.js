//CRUD create read update delete
// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const {MongoClient, ObjectID} = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectID();
// console.log(id.id.length);
// console.log(id.toHexString().length);

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
  if(error) {
    return console.log("Unable to connect to database!");
  }

  const db = client.db(databaseName);

  db.collection("tasks").deleteOne({description: "Eat"}).then(result => {
    console.log(result);
  }).catch(error => {
    console.log(error);
  });

  // db.collection("users").deleteMany({age: 26}).then(result => {
  //   console.log(result);
  // }).catch(error => {
  //   console.log(error);
  // });

  // db.collection("tasks").updateMany({
  //   completed: false
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }).then(result => {
  //   console.log(result);
  // }).catch(error => {
  //   console.log(error);
  // });

  // db.collection("users").updateOne({
  //   _id: new ObjectID("5fba2d3852d0944b3c83479e")
  // }, {
  //   $inc: {
  //     age: 1
  //   }
  // }).then((result) => {
  //   console.log(result);
  // }).catch(error => {
  //   console.log(error);
  // });

  // db.collection("tasks").findOne({_id: new ObjectID("5fba3007232a1e2694e00e8d")}, (error, task) => {
  //   if(error) {
  //     return console.log("Unable to fetch!");
  //   }

  //   console.log(task);
  // });

  // db.collection("tasks").find({completed: false}).toArray((error, task) => {
  //   if(error) {
  //     return console.log("Unable to fetch!");
  //   }

  //   console.log(task);
  // });

  // db.collection("users").findOne({_id: new ObjectID("5fba35574ab56c0634b25704")}, (error, user) => {
  //   if(error) {
  //     return console.log("Unable to fetch!");
  //   }

  //   console.log(user);
  // });

  // db.collection("users").find({age: 25}).toArray((error, users) => {
  //   console.log(users);
  // });

  // db.collection("users").find({age: 25}).count((error, users) => {
  //   console.log(users);
  // });

  // db.collection("users").insertOne({
  //   name: "Brian",
  //   age: 26
  // }, (error, result) => {
  //   if(error) {
  //     return console.log("Unable to insert user");
  //   }

  //   console.log(result.ops);
  // });

  // db.collection("users").insertMany([
  //   {
  //     name: "Jen",
  //     age: 28
  //   },
  //   {
  //     name: "Gunther",
  //     age: 27
  //   }
  // ], (error, result) => {
  //   if(error) {
  //     return console.log("Unable to insert documents!");
  //   }
    
  //   console.log(result.ops);
  // });

  // db.collection("tasks").insertMany([
  //   {
  //     description: "Study",
  //     completed: false
  //   },
  //   {
  //     description: "Eat",
  //     completed: true
  //   },
  //   {
  //     description: "Work Out",
  //     completed: false
  //   }
  // ], (error, result) => {
  //   if(error) {
  //     return console.log("Unable to insert tasks!");
  //   }

  //   console.log(result.ops);
  // });
  
});