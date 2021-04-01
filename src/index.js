const express =  require('express');
const exphbs  = require('express-handlebars');
const path = require('path');
const app = express();
const db = require('./app/config/db');

const route = require('./routes');

// connect db

db.connect();

const port = 3000;

// set static
app.use(express.static(path.join(__dirname,'public')));
// set view 
app.set('views', path.join(__dirname,'resources/views'));

// set engine
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

// body-parse
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})