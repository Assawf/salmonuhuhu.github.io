const express = require('express');
const router = express.Router();
const monitorController = require('../controllers/monitor.controller');
const Auth          = require('../middleware/auth');

// router.get('/',Auth.isLoggedIn, monitorController.index);

router.get('/control/control-data', function(req,res){})
router.get('/', monitorController.watch);


module.exports = router;