/*
 * GET home page.
 */

exports.index = function(req, res) {
	res.render('index', {
		title : 'ToDo'
	});
};

exports.findAll = function(req, res) {

	db.collection('todos', function(err, collection) {

		collection.find().toArray(function(err, items) {
			res.send(items);
		});
	});

}

exports.saveTodo = function(req, res) {

	var todo = req.body;
	console.log(req.body);
	db.collection('todos', function(err, collection) {

		collection.insert(todo, {
			w : 1
		}, function(err, result) {

			if (err) {
				res.send({
					'error' : 'An error has occurred'
				});
			} else {
				console.log('Success: ' + JSON.stringify(result[0]));
				res.send(result[0]);
			}

		});
	});
}

exports.removeTodo = function(req, res) {

	var todo = req.body;
	console.log(todo["_id"]);
	var mongodb = require('mongodb');
	db.collection('todos', function(err, collection) {

		collection.remove({_id: new mongodb.ObjectID(todo["_id"])}, {
			w : 1
		}, function(err, result) {

			if (err) {
				res.send({
					'error' : 'An error has occurred'
				});
			} else {
				console.log('Success');
				res.send('Success');
			}

		});
	});
}


exports.updateTodo = function(req, res) {
	
	var mongodb = require('mongodb');
	var todo = req.body;
	console.log(req.body);
	db.collection('todos', function(err, collection) {

		collection.update({_id: new mongodb.ObjectID(todo["_id"])},{ $set:{tstatus:todo["tstatus"]}}, {
			w : 1
		}, function(err, result) {

			if (err) {
				res.send({
					'error' : 'An error has occurred'
				});
			} else {
				console.log('Success: ' + JSON.stringify(result[0]));
				res.send(result[0]);
			}

		});
	});
}