const Controldata = require('../app/models/ControlData');


class ControlController {

    async show(req,res,next){
        Controldata.find({})
            .then(controldatas => {
                controldatas = controldatas.map(controldata => controldata.toObject())
                res.render('control',{controldatas});
            })
            .catch(next);             
    }

    //post
    control (req, res,next){
        res.json(req.body);

    }
    

}

module.exports = new ControlController;