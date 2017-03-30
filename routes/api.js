const express = require('express');
const router = express.Router();

// Obtenemos nuestro API List

router.get('/', (req,res) => {
    res.send('API Works - API Funcionando');
})

module.exports = router;