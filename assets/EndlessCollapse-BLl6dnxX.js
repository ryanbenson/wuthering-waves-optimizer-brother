const e={name:"Endless Collapse",image:"https://ryanbenson.github.io/wuthering-waves-assets/images/weapons/EndlessCollapse.png",description:"A prototype weapon designed by the Black Shores for elite combatants. This sword takes its name from the heart of a blazar—a galactic nucleus whose blinding radiance pierces the cosmos, shining unmistakably across billions of light years.",type:"Sword",rarity:4,passiveName:"Intergalactic Gaze",passiveValue:'<span class="skilldescription">Casting the Resonance Skill grants <span class="param">6/7/8/9/10</span> Resonance Energy and increases ATK by <span class="param">10%/12.5%/15%/17.5%/20%</span>, lasting for <span class="param">16</span>s. This effect can be triggered once every <span class="param">20</span>s.</span>',passiveData:[{key:"EndlessCollapseATK",hasStacks:!1,modifier:"ATK",modifierByRefinement:{1:.1,2:.125,3:.15,4:.175,5:.2},minStacks:0,maxStacks:0,details:'<span class="skilldescription">Casting the Resonance Skill grants <span class="param">6/7/8/9/10</span> Resonance Energy and increases ATK by <span class="param">10%/12.5%/15%/17.5%/20%</span>, lasting for <span class="param">16</span>s. This effect can be triggered once every <span class="param">20</span>s.</span>',alwaysEnabled:!1}]},a={1:{attack:37,modifier:"ATK",modifierValue:.04},20:{attack:96,modifier:"ATK",modifierValue:.071},"20+":{attack:120,modifier:"ATK",modifierValue:.071},40:{attack:183,modifier:"ATK",modifierValue:.103},"40+":{attack:207,modifier:"ATK",modifierValue:.103},50:{attack:239,modifier:"ATK",modifierValue:.119},"50+":{attack:263,modifier:"ATK",modifierValue:.119},60:{attack:294,modifier:"ATK",modifierValue:.134},"60+":{attack:319,modifier:"ATK",modifierValue:.134},70:{attack:350,modifier:"ATK",modifierValue:.15},"70+":{attack:375,modifier:"ATK",modifierValue:.15},80:{attack:406,modifier:"ATK",modifierValue:.166},"80+":{attack:431,modifier:"ATK",modifierValue:.166},90:{attack:462,modifier:"ATK",modifierValue:.182}};function i(){return e}function n(){return a}function t(s){return a[s]}function r(){return{info:e,data:a,getWeaponInfo:i,getWeaponData:n,getWeaponDataByLevel:t}}export{r as getWeapon,n as getWeaponData,t as getWeaponDataByLevel,i as getWeaponInfo};
