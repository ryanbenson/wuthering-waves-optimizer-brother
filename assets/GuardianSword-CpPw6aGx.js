const a={name:"Guardian Sword",image:"https://ryanbenson.github.io/wuthering-waves-assets/images/weapons/GuardianSword.png",description:"The first Jinzhou Magistrate, in memory of the mysterious person who helped defend the border and build the city, created the Guardian series under his guidance. Today, it has become an indispensable cornerstone for the development of new weapons.",type:"Sword",rarity:3,passiveName:"Unified",passiveValue:"Increases Resonance Skill DMG by 12%/15%/18%/21%/24%.",passiveData:[{key:"GuardianSwordResonanceSkillDMGBonus",hasStacks:!1,modifier:"ResonanceSkillDMGBonus",modifierByRefinement:{1:.12,2:.15,3:.18,4:.21,5:.24},details:"Increases Resonance Skill DMG by 12%/15%/18%/21%/24%.",alwaysEnabled:!0}]},e={1:{attack:24,modifier:"HP",modifierValue:.067},20:{attack:62,modifier:"HP",modifierValue:.119},40:{attack:118,modifier:"HP",modifierValue:.172},50:{attack:155,modifier:"HP",modifierValue:.198},60:{attack:191,modifier:"HP",modifierValue:.224},70:{attack:227,modifier:"HP",modifierValue:.251},80:{attack:263,modifier:"HP",modifierValue:.277},90:{attack:300,modifier:"HP",modifierValue:.303},"20+":{attack:78,modifier:"HP",modifierValue:.119},"40+":{attack:134,modifier:"HP",modifierValue:.172},"50+":{attack:171,modifier:"HP",modifierValue:.198},"60+":{attack:207,modifier:"HP",modifierValue:.224},"70+":{attack:243,modifier:"HP",modifierValue:.251},"80+":{attack:279,modifier:"HP",modifierValue:.277}};function o(){return a}function t(){return e}function r(i){return e[i]}function n(){return{info:a,data:e,getWeaponInfo:o,getWeaponData:t,getWeaponDataByLevel:r}}export{n as getWeapon,t as getWeaponData,r as getWeaponDataByLevel,o as getWeaponInfo};
