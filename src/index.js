const express = require('express');
const mongoose = require('mongoose')
const app = express();
const cors = require('cors');

//Connect mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/assistences', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

//Settings
app.set('port', process.env.PORT || 3001);

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(app.get('port'), () =>{
    console.log('On port', app.get('port'));
})