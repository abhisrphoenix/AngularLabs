var mongoose = require('mongoose');
 var todoSchema_ = new mongoose.Schema({
	tname : 'String',
	tdate : 'String',
	tstatus : 'String'
});
 
 exports.todoSchema = todoSchema_;
