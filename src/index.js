const express = require('express');
const app = express();
const morgan = require('morgan'); //middleware --> función que procesa datos antes de que los reciba 

// Settings
app.set('port', process.env.PORT || 3000); // Verificación que el puerto 3000 esté disponible
// app.set('json spaces' 2); Puedes cambiar el espaciado del texto json para que sea presentable



// Middlewares
app.use(morgan('dev')); // Módulo de morgan que nos dice como veremos los datos... se puede cambiar
app.use(express.urlencoded({extended: false})); // Como solo enviaremos formatos JSON se escribe y quizá luego se necesite usar en otra appextended: false
app.use(express.json()); // Como solo enviaremos formatos JSON tenemos que especificarlo

// Routes
app.use(require('./routes/index')); 
app.use('/api/movies', require('./routes/movies')); // Es totalmente válido poner: '/api/ruta/'




// Staring the server
app.listen(app.get('port') ,() => {
    console.log(`server on port: ${app.get('port')}`)
});