const Monitordata = require('../app/models/Monitor')
class MonitorController {

    async watch(req,res,next){
        Monitordata.find({})
            .then(monitordatas => {
                monitordatas = monitordatas.map(monitordata => monitordata.toObject())
                res.render('monitor',{monitordatas});
            })
            .catch(next);            
    }
    

}

module.exports = new MonitorController;