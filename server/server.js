var express=require('express');
var bodyParser=require('body-parser');

var mongoose=require('./db/mongoose.js');
var Todo=require('./models/todo.js');
var User=require('./models/user.js');

var app=express();

app.use(bodyParser.json());

// post Todos
app.post('/todos',(req,res)=>{
  var todo=new Todo({
    text: req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });
});

// get Todos
app.get('/todos',(req,res)=>{
	Todo.find().then((doc)=>{
		res.send(doc);
	},(err)=>{
		console.log('unable to find Todos',err)
	})
});

// get users
app.get('/users',(req,res)=>{
	User.find().then((doc)=>{
		res.send(doc);
	},(err)=>{
		console.log('unable to find Todos',err)
	})
});


app.listen(3000,()=>{
  console.log('started on port 3000');
});
