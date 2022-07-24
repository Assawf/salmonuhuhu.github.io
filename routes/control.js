const express = require('express');
const router = express.Router();
const controlController = require('../controllers/controlx2');
const Auth          = require('../middleware/auth');

// router.get('/',Auth.isLoggedIn, controlController.index);
router.get('/control/control-data', function(req,res){});
router.put('/control/updateroof', function(req,res){
    ControlData.find({})
    .then(controlData =>{
        controlData[0].isOpenRoof = false;
        controlData[0].save();
    })
});

// router.post('/', controlController.index);


router.post('/control/controlfan', controlController.control);
router.get('/', controlController.show);
router.post('/', controlController.show);
module.exports = router;