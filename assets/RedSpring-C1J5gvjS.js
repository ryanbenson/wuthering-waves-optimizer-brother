const a={name:"Red Spring",image:"https://ryanbenson.github.io/wuthering-waves-assets/images/weapons/RedSpring.png",description:"A camellia bud silently unfurls. As promised, she holds this infinite world in bloom in her palms, where fine crimson vines twine around her fingertips. The dull ache, like sand scratching against the heart, is proof of your fateful encounter.",type:"Sword",rarity:5,passiveName:"Beyond the Cycle",passiveValue:`<span class="skilldescription">Increase ATK by <span class="param">12%/15%/18%/21%/24%</span>. When dealing Basic Attack DMG, the wielder gains <span class="param">10%/12.5%/15%/17.5%/20%</span> Basic Attack DMG Bonus for <span class="param">14</span>s. This effect can be triggered once per second, stacking up to <span class="param">3</span> times.<br>
When the wielder's Concerto Energy is consumed, gain <span class="param">40%/50%/60%/70%/80%</span> Basic DMG Bonus for <span class="param">10</span>. This effect can be triggered once per second and ends when the wielder is switched off the field.</span>`,passiveData:[{key:"BeyondtheCycleAtk",hasStacks:!1,modifier:"ATK",modifierByRefinement:{1:.12,2:.15,3:.18,4:.21,5:.24},details:"Attack power increases by 12/15/18/21/24%.",alwaysEnabled:!0},{key:"BeyondtheCycleBasicBonus",hasStacks:!0,modifier:"BasicAttackDMGBonus",modifierByRefinement:{1:.1,2:.125,3:.15,4:.175,5:.2},minStacks:0,maxStacks:3,details:"When dealing Basic Attack DMG, the wielder gains 10%/12.5%/15%/17.5%/20% Basic Attack DMG Bonus for 14s. This effect can be triggered once per second, stacking up to 3 times.",alwaysEnabled:!1},{key:"BeyondtheCycleBasicBonusOutro",hasStacks:!1,modifier:"BasicAttackDMGBonus",modifierByRefinement:{1:.4,2:.5,3:.6,4:.7,5:.8},minStacks:0,maxStacks:0,details:"When the wielder's Concerto Energy is consumed, gain 40%/50%/60%/70%/80% Basic DMG Bonus for 10. This effect can be triggered once per second and ends when the wielder is switched off the field.",alwaysEnabled:!1}]},e={1:{attack:47,modifier:"CritRate",modifierValue:.054},20:{attack:122,modifier:"CritRate",modifierValue:.095},"20+":{attack:153,modifier:"CritRate",modifierValue:.095},40:{attack:232,modifier:"CritRate",modifierValue:.137},"40+":{attack:264,modifier:"CritRate",modifierValue:.137},50:{attack:303,modifier:"CritRate",modifierValue:.158},"50+":{attack:335,modifier:"CritRate",modifierValue:.158},60:{attack:374,modifier:"CritRate",modifierValue:.179},"60+":{attack:406,modifier:"CritRate",modifierValue:.179},70:{attack:445,modifier:"CritRate",modifierValue:.2},"70+":{attack:476,modifier:"CritRate",modifierValue:.2},80:{attack:516,modifier:"CritRate",modifierValue:.221},"80+":{attack:547,modifier:"CritRate",modifierValue:.221},90:{attack:587,modifier:"CritRate",modifierValue:.243}};function t(){return a}function s(){return e}function n(i){return e[i]}function r(){return{info:a,data:e,getWeaponInfo:t,getWeaponData:s,getWeaponDataByLevel:n}}export{r as getWeapon,s as getWeaponData,n as getWeaponDataByLevel,t as getWeaponInfo};