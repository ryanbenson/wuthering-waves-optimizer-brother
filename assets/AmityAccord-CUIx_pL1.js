const i={name:"Amity Accord",image:"https://ryanbenson.github.io/wuthering-waves-assets/images/weapons/AmityAccord.png",description:`A weapon designed to commemorate the Midnight Rangers' comradeship. "Thin garments yield to icy moons, while armor withstands the chill of stars."`,type:"Gauntlets",rarity:4,passiveName:"Camaraderie",passiveValue:"When Intro Skill is released, increases Resonance Liberation DMG Bonus by 20%/25%/30%/35%/40%, lasting for 15s.",passiveData:[{key:"AmityAccordResonanceLiberationDMGBonus",hasStacks:!1,modifier:"ResonanceLiberationDMGBonus",modifierByRefinement:{1:.2,2:.25,3:.3,4:.35,5:.4},minStacks:0,maxStacks:0,details:"When Intro Skill is released, increases Resonance Liberation DMG Bonus by 20%/25%/30%/35%/40%, lasting for 15s.",alwaysEnabled:!1}]},e={1:{attack:27,modifier:"DEF",modifierValue:.136},20:{attack:70,modifier:"DEF",modifierValue:.243},40:{attack:133,modifier:"DEF",modifierValue:.349},50:{attack:174,modifier:"DEF",modifierValue:.402},60:{attack:215,modifier:"DEF",modifierValue:.455},70:{attack:255,modifier:"DEF",modifierValue:.509},80:{attack:296,modifier:"DEF",modifierValue:.562},90:{attack:337,modifier:"DEF",modifierValue:.615},"20+":{attack:88,modifier:"DEF",modifierValue:.243},"40+":{attack:151,modifier:"DEF",modifierValue:.349},"50+":{attack:192,modifier:"DEF",modifierValue:.402},"60+":{attack:233,modifier:"DEF",modifierValue:.455},"70+":{attack:273,modifier:"DEF",modifierValue:.509},"80+":{attack:314,modifier:"DEF",modifierValue:.562}};function t(){return i}function o(){return e}function n(a){return e[a]}function r(){return{info:i,data:e,getWeaponInfo:t,getWeaponData:o,getWeaponDataByLevel:n}}export{r as getWeapon,o as getWeaponData,n as getWeaponDataByLevel,t as getWeaponInfo};
