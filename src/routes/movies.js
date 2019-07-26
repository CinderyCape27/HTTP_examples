// Este es otra ruta normal pero aquí mandaré todas las peliculas de mi imaginaria DB
const { Router } = require ('express');
const router = Router()
const movies = require('../example.json')
console.log(movies)

router.get('/', (req, res) => { // Para que /api/ funcione hay que omitir en esta seccion la ruta, tal cual vemos
    res.send(movies); //Puede ser estático o dinámico
}) // En este caso al ser estático le puse como variable "movies" para que en el servidor me mande el arreglo de example.json



module.exports = router;



//Para crea, actualizar o eliminar un dato se usan los otros métodos, es decir otras peticiones
// Para conseguirlo necesitamos Postman