const a={name:"Autumntrace",image:"https://ryanbenson.github.io/wuthering-waves-assets/images/weapons/Autumntrace.png",description:"This Broadblade is a ceremonial weapon used by the Jinzhou Magistrate of the Huanglong province at the inauguration ceremony. The golden ginkgo leaf pattern represents that Huanglong should be like ginkgo, although it is left alone in the world, it is still prosperous and long-lasting.",type:"Broadblade",rarity:4,passiveName:"Edge Direction",passiveValue:"Increases ATK by 4%/6.2%/8.4%/10.6%/12.8% upon dealing Basic Attack DMG or Heavy Attack DMG, stacking up to 5 time(s). This effect lasts for 7s and can be triggered 1 time(s) every 1s.",passiveData:[{key:"AutumntraceATK",hasStacks:!0,modifier:"ATK",modifierByRefinement:{1:.04,2:.062,3:.084,4:.106,5:.128},minStacks:0,maxStacks:5,details:"Increases ATK by 4%/6.2%/8.4%/10.6%/12.8% upon dealing Basic Attack DMG or Heavy Attack DMG, stacking up to 5 time(s)",alwaysEnabled:!1}]},e={1:{attack:33,modifier:"CritRate",modifierValue:.045},20:{attack:85,modifier:"CritRate",modifierValue:.079},40:{attack:163,modifier:"CritRate",modifierValue:.114},50:{attack:213,modifier:"CritRate",modifierValue:.132},60:{attack:263,modifier:"CritRate",modifierValue:.149},70:{attack:312,modifier:"CritRate",modifierValue:.167},80:{attack:362,modifier:"CritRate",modifierValue:.184},90:{attack:412,modifier:"CritRate",modifierValue:.202},"20+":{attack:107,modifier:"CritRate",modifierValue:.079},"40+":{attack:185,modifier:"CritRate",modifierValue:.114},"50+":{attack:235,modifier:"CritRate",modifierValue:.132},"60+":{attack:285,modifier:"CritRate",modifierValue:.149},"70+":{attack:334,modifier:"CritRate",modifierValue:.167},"80+":{attack:384,modifier:"CritRate",modifierValue:.184}};function i(){return a}function r(){return e}function o(t){return e[t]}function n(){return{info:a,data:e,getWeaponInfo:i,getWeaponData:r,getWeaponDataByLevel:o}}export{n as getWeapon,r as getWeaponData,o as getWeaponDataByLevel,i as getWeaponInfo};