const fs = require("fs");
const { stringify } = require("querystring");

let weapon=JSON.parse(fs.readFileSync('./weapons.json','utf-8'))
// console.log(weapon);
let converted=weapon.map(e=>{
    return{
    displayName : e.displayName,
    category : e.category.slice(e.category.indexOf('::')+2),
    displayIcon : e.displayIcon}
    // return displayName,category,displayIcon
    // fireRate = e.weaponStats.fireRate,
    // magazineSize = e.weaponStats.magazineSize
})
// console.log(converted);
// let str='EEquippableCategory::SMG'
// console.log(str.slice(str.indexOf('::')+2));
let write=fs.writeFileSync('./weapons.json',JSON.stringify(converted,null,2))

// "fireRate": 12,
//             "magazineSize": 100,
//             "runSpeedMultiplier": 0.76,
//             "equipTimeSeconds": 1.25,
//             "reloadTimeSeconds": 5,
//             "firstBulletAccuracy": 0.8,
let weaponStats=weapon.map(e=>{
    if (e.weaponStats===null){
        return {
            displayName:e.displayName,
            fireRate:`Melee`,
            magazineSize:`Melee`,
            runSpeedMultiplier:`Melee`,
            reloadTime:`Melee`,
            equipTime:`Melee`,
            accuracy:`Melee`
        }
    }else{
        return {
            displayName:e.displayName,
            fireRate:e.weaponStats.fireRate,
            magazineSize:e.weaponStats.magazineSize,
            runSpeedMultiplier:e.weaponStats.runSpeedMultiplier,
            reloadTime:e.weaponStats.reloadTimeSeconds,
            equipTime:e.weaponStats.equipTimeSeconds,
            accuracy:e.weaponStats.firstBulletAccuracy
        }
    }
})
// console.log(weaponStats);
let writeStats=fs.writeFileSync('./weaponStat.json',JSON.stringify(weaponStats,null,2))
