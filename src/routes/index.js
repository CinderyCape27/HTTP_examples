const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => { //Una ruta equis que devuelve Hello World
    const data = {
        "name": "Julio",
        "Web": "youtube.com/julioprofe"
    }
    res.json(data); // puede ser un objeto estático o dinámico
});

module.exports = router;