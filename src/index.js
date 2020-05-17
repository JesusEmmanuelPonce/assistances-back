const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes/routes');
const cors = require('cors');

//Connect mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://assistances:yisus123@ds131814.mlab.com:31814/heroku_5nsjk69r', {
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

//Routes
app.use('/', routes());

app.listen(app.get('port'), () =>{
    console.log('On port', app.get('port'));
})