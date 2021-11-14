const {Weapon, WeaponStat}=require('../models/index')

class Controller{
    static home(req,res){
        Weapon.findAll({
            raw:true,
            include:[{model: WeaponStat}]

            // include: {
            //     model: Weapon,
            //     required: true
            // }
        })
            .then(data=>{
                // console.log(data[0]['WeaponStat.fireRate']);
                res.render('home',{data})
            })
            .catch(err=>{
                res.send(err)
            })
    }
    static update(req,res){
        WeaponStat.update({
            weaponid:id
        })
        .then(data=>{
            console.log(data);
            res.render('home',{data})
        })
        .catch(err=>{
            res.send(err)
        })
    }
}
module.exports=Controller