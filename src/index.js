const express = require('express')
exphbs  = require('express-handlebars');
const path = require('path');
const app = express()
const port = 3000;

// set static
app.use(express.static(path.join(__dirname,'public')));
// set view 
app.set('views', path.join(__dirname,'resources/views'));

// set engine
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');


app.get('/', (req, res) => {
  res.render('home');
}) 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})