let router = require('express').Router();

router.get('/', function (req, res) {
    
    res.json({
       status: 'Funcionando',
       nome: 'BEA'
    });
});
module.exports = router;