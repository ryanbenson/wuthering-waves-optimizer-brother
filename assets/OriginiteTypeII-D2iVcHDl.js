const i={name:"Originite: Type II",image:"https://ryanbenson.github.io/wuthering-waves-assets/images/weapons/OriginiteTypeII.png",description:"A mass-produced sword model developed in Huanglong. Codename: Edged.",type:"Sword",rarity:3,passiveName:"Vanquish",passiveValue:"When Resonance Liberation is released, restores HP by 5%/6.25%/7.5%/8.75%/10%. This effect can be triggered 1 time(s) every 20s."},e={1:{attack:26,modifier:"ATK",modifierValue:.054},20:{attack:67,modifier:"ATK",modifierValue:.095},40:{attack:128,modifier:"ATK",modifierValue:.137},50:{attack:168,modifier:"ATK",modifierValue:.158},60:{attack:207,modifier:"ATK",modifierValue:.179},70:{attack:246,modifier:"ATK",modifierValue:.2},80:{attack:285,modifier:"ATK",modifierValue:.221},90:{attack:325,modifier:"ATK",modifierValue:.243},"20+":{attack:84,modifier:"ATK",modifierValue:.095},"40+":{attack:146,modifier:"ATK",modifierValue:.137},"50+":{attack:185,modifier:"ATK",modifierValue:.158},"60+":{attack:224,modifier:"ATK",modifierValue:.179},"70+":{attack:263,modifier:"ATK",modifierValue:.2},"80+":{attack:303,modifier:"ATK",modifierValue:.221}};function t(){return i}function o(){return e}function r(a){return e[a]}function n(){return{info:i,data:e,getWeaponInfo:t,getWeaponData:o,getWeaponDataByLevel:r}}export{n as getWeapon,o as getWeaponData,r as getWeaponDataByLevel,t as getWeaponInfo};
