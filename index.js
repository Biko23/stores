//Requires should come first. The app requires express.
require('dotenv/config')
const express = require ('express');
const app = express();
const routes = require('./routes/registeration');
const path = require ('path');
const bodyParser = require ('body-parser');
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

mongoose.connection.on('open', () =>{
    console.log('Mongoose connection open');
}).on ('error', (err) =>{
    console.log('connection error: ${err.message}')
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.use((req, res, next) =>{
    console.log('Time: ', Date.now())
    next()
})

app.use('/', routes);

/*
app.get('/pathparams/:name', (req, res) =>{
    res.send('My path param is ' + req.params.name)
})
*/

app.get('*', (req, res) =>{
    res.send('No Page found');
})
//all routes are defined before the app.listen function is called.
//Hence these typically come last.
app.listen(3000, () => 
console.log('listening to port 3000'))