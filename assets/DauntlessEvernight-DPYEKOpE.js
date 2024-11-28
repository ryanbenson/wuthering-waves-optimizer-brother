const a={name:"Dauntless Evernight",image:"https://ryanbenson.github.io/wuthering-waves-assets/images/weapons/DauntlessEvernight.png",description:`A weapon designed to commemorate the Midnight Rangers' preparedness. "Autumn fades in endless nights, ready blades gleam with silent might."`,type:"Broadblade",rarity:4,passiveName:"Battlebound",passiveValue:"When Intro Skill is released, increases ATK by 8%/10%/12%/14%/16% and DEF by 15%/18.75%/22.5%/26.25%/30%, lasting for 15s.",passiveData:[{key:"DauntlessPassiveATK",hasStacks:!1,modifier:"ATK",modifierByRefinement:{1:.08,2:.1,3:.12,4:.14,5:.16},minStacks:0,maxStacks:0,details:"When Intro Skill is released, increases ATK by 8%/10%/12%/14%/16% and DEF by 15%/18.75%/22.5%/26.25%/30%, lasting for 15s. (ATK)",alwaysEnabled:!1},{key:"DauntlessPassiveDEF",hasStacks:!1,modifier:"DEF",modifierByRefinement:{1:.15,2:.1875,3:.225,4:.2625,5:.3},minStacks:0,maxStacks:0,details:"When Intro Skill is released, increases ATK by 8%/10%/12%/14%/16% and DEF by 15%/18.75%/22.5%/26.25%/30%, lasting for 15s. (DEF)",alwaysEnabled:!1}]},e={1:{attack:27,modifier:"DEF",modifierValue:.136},20:{attack:70,modifier:"DEF",modifierValue:.243},40:{attack:133,modifier:"DEF",modifierValue:.349},50:{attack:174,modifier:"DEF",modifierValue:.402},60:{attack:215,modifier:"DEF",modifierValue:.455},70:{attack:255,modifier:"DEF",modifierValue:.509},80:{attack:296,modifier:"DEF",modifierValue:.562},90:{attack:337,modifier:"DEF",modifierValue:.615},"20+":{attack:88,modifier:"DEF",modifierValue:.243},"40+":{attack:151,modifier:"DEF",modifierValue:.349},"50+":{attack:192,modifier:"DEF",modifierValue:.402},"60+":{attack:233,modifier:"DEF",modifierValue:.455},"70+":{attack:273,modifier:"DEF",modifierValue:.509},"80+":{attack:314,modifier:"DEF",modifierValue:.562}};function t(){return a}function s(){return e}function n(i){return e[i]}function r(){return{info:a,data:e,getWeaponInfo:t,getWeaponData:s,getWeaponDataByLevel:n}}export{r as getWeapon,s as getWeaponData,n as getWeaponDataByLevel,t as getWeaponInfo};