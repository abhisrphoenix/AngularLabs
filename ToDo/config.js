var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;
var mongoClient = new MongoClient(new Server('localhost', 27017));
db = mongoClient.db("tododb");
BSON = MongoClient.BSONPure;


db.open(function(err, db) {
    if (!err) {
        console.log("Connected to 'tododb' database");
        db.collection('todos', {
            strict: true
        }, function(err, collection) {
            if (err) {
               // console.log("The 'todos' collection doesn't exist. Creating it with sample data...");
                //populateDB('companies');
            }
        });

      

    }
});

/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the
// application is started.

var populateDB = function(coll) {

        var todos =  [

              	       	{
              	       		tname : "Buy Milk",
              	       		tdate : new Date(),
              	       		tstatus : "Hold"
              	       	}, {
              	       		tname : "Pay bill",
              	       		tdate : new Date(),
              	       		tstatus : "Completed"
              	       	}, {
              	       		tname : "Go fishing",
              	       		tdate : new Date(),
              	       		tstatus : "Started"
              	       	}, {
              	       		tname : "Watch movie",
              	       		tdate : new Date(),
              	       		tstatus : "Pending"
              	       	} ];
       
        

            db.collection('todos', function(err, collection) {
                collection.insert(todos, {
                    safe: true
                }, function(err, result) {});
            });
       
}
            exports.db = db;