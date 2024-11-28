const i={name:"Training Rectifier",image:"https://ryanbenson.github.io/wuthering-waves-assets/images/weapons/TrainingRectifier.png",description:"This rectifier is designed specifically for training and teaching, offering only the basic features.",type:"Rectifier",rarity:1,passiveName:"Persevere",passiveValue:"Increases ATK by 4%/5%/6%/7%/8%.",passiveData:[{key:"TrainingRectifierATK",hasStacks:!1,modifier:"ATK",modifierByRefinement:{1:.04,2:.05,3:.06,4:.07,5:.08},minStacks:0,maxStacks:0,details:"Increases ATK by 4%/5%/6%/7%/8%.",alwaysEnabled:!0}],maxLevel:"70",weaponLevelOverride:["1","20","20+","40","40+","50","50+","60","60+","70"]},e={1:{attack:20,modifier:"ATK",modifierValue:.025},20:{attack:52,modifier:"ATK",modifierValue:.045},40:{attack:99,modifier:"ATK",modifierValue:.065},50:{attack:129,modifier:"ATK",modifierValue:.075},60:{attack:159,modifier:"ATK",modifierValue:.084},70:{attack:189,modifier:"ATK",modifierValue:.094},"20+":{attack:65,modifier:"ATK",modifierValue:.045},"40+":{attack:112,modifier:"ATK",modifierValue:.065},"50+":{attack:142,modifier:"ATK",modifierValue:.075},"60+":{attack:172,modifier:"ATK",modifierValue:.084}};function t(){return i}function r(){return e}function n(a){return e[a]}function o(){return{info:i,data:e,getWeaponInfo:t,getWeaponData:r,getWeaponDataByLevel:n}}export{o as getWeapon,r as getWeaponData,n as getWeaponDataByLevel,t as getWeaponInfo};
