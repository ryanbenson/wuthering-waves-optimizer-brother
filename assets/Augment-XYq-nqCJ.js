const i={name:"Augment",image:"https://ryanbenson.github.io/wuthering-waves-assets/images/weapons/Augment.png",description:"This Rectifier is a ceremonial weapon used by the Jinzhou Magistrate of Huanglong at the inauguration ceremony. The golden ginkgo leaf pattern represents that Huanglong should be like ginkgo, although it is left alone in the world, it is still prosperous and long-lasting.",type:"Rectifier",rarity:4,passiveName:"Forgiving Resilience",passiveValue:"When Resonance Liberation is released, increases the caster's ATK by 15%/23.25%/31.5%/39.75%/48%, lasting for 15s.",passiveData:[{key:"AugmentATK",hasStacks:!1,modifier:"ATK",modifierByRefinement:{1:.15,2:.2325,3:.315,4:.3975,5:.48},minStacks:0,maxStacks:0,details:"When Resonance Liberation is released, increases the caster's ATK by 15%/23.25%/31.5%/39.75%/48%, lasting for 15s.",alwaysEnabled:!1}]},e={1:{attack:33,modifier:"CritRate",modifierValue:.045},20:{attack:85,modifier:"CritRate",modifierValue:.079},40:{attack:163,modifier:"CritRate",modifierValue:.114},50:{attack:213,modifier:"CritRate",modifierValue:.132},60:{attack:263,modifier:"CritRate",modifierValue:.149},70:{attack:312,modifier:"CritRate",modifierValue:.167},80:{attack:362,modifier:"CritRate",modifierValue:.184},90:{attack:412,modifier:"CritRate",modifierValue:.202},"20+":{attack:107,modifier:"CritRate",modifierValue:.079},"40+":{attack:185,modifier:"CritRate",modifierValue:.114},"50+":{attack:235,modifier:"CritRate",modifierValue:.132},"60+":{attack:285,modifier:"CritRate",modifierValue:.149},"70+":{attack:334,modifier:"CritRate",modifierValue:.167},"80+":{attack:384,modifier:"CritRate",modifierValue:.184}};function t(){return i}function r(){return e}function o(a){return e[a]}function n(){return{info:i,data:e,getWeaponInfo:t,getWeaponData:r,getWeaponDataByLevel:o}}export{n as getWeapon,r as getWeaponData,o as getWeaponDataByLevel,t as getWeaponInfo};
