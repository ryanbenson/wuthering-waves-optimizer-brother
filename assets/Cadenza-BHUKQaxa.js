const i={name:"Cadenza",image:"https://ryanbenson.github.io/wuthering-waves-assets/images/weapons/Cadenza.png",description:"An ascending crescendo. These pistols unleash bullets with the force of thunder, tearing through the heavens like a symphony of destruction.",type:"Pistols",rarity:4,passiveName:"Ceaseless Aria",passiveValue:"When Resonance Skill is released, restores Concerto Energy by 8/10/12/14/16. This effect can be triggered 1 time every 20s."},e={1:{attack:27,modifier:"EnergyRegen",modifierValue:.115},20:{attack:70,modifier:"EnergyRegen",modifierValue:.204},40:{attack:133,modifier:"EnergyRegen",modifierValue:.294},50:{attack:174,modifier:"EnergyRegen",modifierValue:.339},60:{attack:215,modifier:"EnergyRegen",modifierValue:.383},70:{attack:255,modifier:"EnergyRegen",modifierValue:.428},80:{attack:296,modifier:"EnergyRegen",modifierValue:.473},90:{attack:337,modifier:"EnergyRegen",modifierValue:.518},"20+":{attack:88,modifier:"EnergyRegen",modifierValue:.204},"40+":{attack:151,modifier:"EnergyRegen",modifierValue:.294},"50+":{attack:192,modifier:"EnergyRegen",modifierValue:.339},"60+":{attack:233,modifier:"EnergyRegen",modifierValue:.383},"70+":{attack:273,modifier:"EnergyRegen",modifierValue:.428},"80+":{attack:314,modifier:"EnergyRegen",modifierValue:.473}};function n(){return i}function r(){return e}function t(a){return e[a]}function o(){return{info:i,data:e,getWeaponInfo:n,getWeaponData:r,getWeaponDataByLevel:t}}export{o as getWeapon,r as getWeaponData,t as getWeaponDataByLevel,n as getWeaponInfo};