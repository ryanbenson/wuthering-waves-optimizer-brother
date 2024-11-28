const t={name:"Verdant Summit",image:"https://ryanbenson.github.io/wuthering-waves-assets/images/weapons/VerdantSummit.png",description:"The ancient mountain stands tall, its peak reaching towards the sky. A river flows for thousands of years, forming the blade of a powerful weapon. As it is unsheathed, a powerful dragon's roar echoes through the heavens and earth, causing the sea to churn. This awe-inspiring weapon strikes fear in all who witness its might.",type:"Broadblade",rarity:5,passiveName:"Swordsworn",passiveValue:"Increases Attribute DMG Bonus by 12%/15%/18%/21%/24%. Every time Intro Skill or Resonance Liberation is cast, increases Heavy Attack DMG Bonus by 24%/30%/36%/42%/48%, stacking up to 2 time(s). This effect lasts for 14s.",passiveData:[{key:"VerdantSummitAllElementAttributeBonus",hasStacks:!1,modifier:"AllElementAttributeBonus",modifierByRefinement:{1:.12,2:.15,3:.18,4:.21,5:.24},details:"Increases Attribute DMG Bonus by 12%/15%/18%/21%/24%.",alwaysEnabled:!0},{key:"VerdantSummitHeavyAttackDMGBonus",hasStacks:!0,modifier:"HeavyAttackDMGBonus",modifierByRefinement:{1:.24,2:.3,3:.36,4:.42,5:.48},minStacks:0,maxStacks:2,details:"Every time Intro Skill or Resonance Liberation is cast, increases Heavy Attack DMG Bonus by 24%/30%/36%/42%/48%, stacking up to 2 time(s). This effect lasts for 14s.",alwaysEnabled:!1}]},e={1:{attack:47,modifier:"CritDMG",modifierValue:.108},20:{attack:122,modifier:"CritDMG",modifierValue:.191},40:{attack:232,modifier:"CritDMG",modifierValue:.275},50:{attack:303,modifier:"CritDMG",modifierValue:.317},60:{attack:374,modifier:"CritDMG",modifierValue:.359},70:{attack:445,modifier:"CritDMG",modifierValue:.401},80:{attack:516,modifier:"CritDMG",modifierValue:.443},90:{attack:587,modifier:"CritDMG",modifierValue:.486},"20+":{attack:153,modifier:"CritDMG",modifierValue:.191},"40+":{attack:264,modifier:"CritDMG",modifierValue:.275},"50+":{attack:335,modifier:"CritDMG",modifierValue:.317},"60+":{attack:406,modifier:"CritDMG",modifierValue:.359},"70+":{attack:476,modifier:"CritDMG",modifierValue:.401},"80+":{attack:547,modifier:"CritDMG",modifierValue:.443}};function a(){return t}function r(){return e}function o(i){return e[i]}function s(){return{info:t,data:e,getWeaponInfo:a,getWeaponData:r,getWeaponDataByLevel:o}}export{s as getWeapon,r as getWeaponData,o as getWeaponDataByLevel,a as getWeaponInfo};
