function e(){return{name:"Encore",rarity:5,weapon:"Rectifiers",avatarUrl:"Encore.jpg",gender:"female",element:"Fusion"}}const s={1:{hp:841,attack:34,defense:102},20:{hp:2187,attack:88,defense:261},"20+":{hp:2748,attack:113,defense:327},40:{hp:4165,attack:171,defense:495},"40+":{hp:4726,attack:196,defense:261},50:{hp:5434,attack:225,defense:646},"50+":{hp:5995,attack:250,defense:712},60:{hp:6704,attack:279,defense:796},"60+":{hp:7264,attack:305,defense:862},70:{hp:7973,attack:333,defense:946},"70+":{hp:8534,attack:350,defense:1012},80:{hp:9243,attack:379,defense:1096},"80+":{hp:9803,attack:396,defense:1162},90:{hp:10512,attack:425,defense:1246}},i={...s};function t(a){return s[a]}const n={name:"Normal Attack: Wooly Attack",description:'<div class="skilldescription"><span class="Title">Basic Attack</span><br>Encore performs up to 4 consecutive attacks, dealing <span class="Fire">Fusion DMG</span>.<br> <br><span class="Title">Basic Attack: Wooly Strike</span><br>After <span class="Highlight">Basic Attack 4</span>, press the Basic Attack button to attack the target, dealing <span class="Fire">Fusion DMG</span>.<br> <br><span class="Title">Heavy Attack</span><br>Encore consumes STA to attack the target, dealing <span class="Fire">Fusion DMG</span>.<br> <br><span class="Title">Mid-air Attack</span><br>Encore consumes STA to perform a Mid-Air Plunging Attack, dealing <span class="Fire">Fusion DMG</span>.<br> <br><span class="Title">Dodge Counter</span><br>Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Fire">Fusion DMG</span>.</div>',attacks:[{key:"Stage1DMG",label:"Stage 1 DMG",talents:{1:"28.00%",2:"30.29%",3:"32.59%",4:"35.80%",5:"38.10%",6:"40.74%",7:"44.41%",8:"48.09%",9:"51.76%",10:"55.66%"},type:"Basic"},{key:"Stage2DMG",label:"Stage 2 DMG",talents:{1:"33.30%",2:"36.03%",3:"38.76%",4:"42.58%",5:"45.31%",6:"48.45%",7:"52.82%",8:"57.19%",9:"61.56%",10:"66.20%"},type:"Basic"},{key:"Stage3DMG",label:"Stage 3 DMG",talents:{1:"33.35%*2",2:"36.08%*2",3:"38.81%*2",4:"42.64%*2",5:"45.38%*2",6:"48.52%*2",7:"52.90%*2",8:"57.27%*2",9:"61.65%*2",10:"66.30%*2"},type:"Basic"},{key:"Stage4DMG",label:"Stage 4 DMG",talents:{1:"19.25%*4",2:"20.82%*4",3:"22.40%*4",4:"24.61%*4",5:"26.19%*4",6:"28.01%*4",7:"30.53%*4",8:"33.06%*4",9:"35.58%*4",10:"38.27%*4"},type:"Basic"},{key:"WooliesDamage",label:"Woolies DMG",talents:{1:"120.00%",2:"129.84%",3:"139.67%",4:"153.45%",5:"163.29%",6:"174.61%",7:"190.35%",8:"206.10%",9:"221.84%",10:"238.57%"},type:"Basic"},{key:"HeavyAttackDMG",label:"Heavy Attack DMG",talents:{1:"94.10%",2:"101.81%",3:"109.53%",4:"120.33%",5:"128.05%",6:"136.92%",7:"149.27%",8:"161.61%",9:"173.96%",10:"187.08%"},type:"Heavy"},{key:"MidAirAttack",label:"Mid-air Attack DMG",talents:{1:"62.00%",2:"67.08%",3:"72.16%",4:"79.28%",5:"84.36%",6:"90.21%",7:"98.35%",8:"106.48%",9:"114.61%",10:"123.26%"},type:"Basic"},{key:"DodgeCounterDMG",label:"Dodge Counter DMG",talents:{1:"63.34%*2",2:"68.54%*2",3:"73.73%*2",4:"81.01%*2",5:"86.20%*2",6:"92.18%*2",7:"100.49%*2",8:"108.80%*2",9:"117.11%*2",10:"125.94%*2"},type:"Basic"}]},o={name:"Resonance Skill: Flaming Woolies",description:`<div class="skilldescription"><span class="Title">Flaming Woolies</span>
    <br>Encore summons Cloudy and Cosmos to attack with burning rays, dealing <span class="Fire">Fusion DMG</span>.
    <br> 
    <br><span class="Title">Energetic Welcome</span>
    <br>After casting <span class="Highlight">Flaming Woolies</span>, use <span class="Highlight">Resonance Skill</span> to perform <span class="Highlight">Energetic Welcome</span>, dealing <span class="Fire">Fusion DMG</span>.</div>`,attacks:[{key:"FlamingWooliesDamage",label:"Flaming Woolies DMG",talents:{1:"38.53%*8",2:"41.69%*8",3:"44.85%*8",4:"49.28%*8",5:"52.44%*8",6:"56.07%*8",7:"61.13%*8",8:"66.18%*8",9:"71.24%*8",10:"76.61%*8"},type:"Skill"},{key:"EnergeticWelcomeDamage",label:"Energetic Welcome DMG",talents:{1:"170.60%",2:"184.58%",3:"198.57%",4:"218.16%",5:"232.15%",6:"248.24%",7:"270.62%",8:"293.00%",9:"315.38%",10:"339.16%"},type:"Skill"}]},l={name:"Resonance Liberation: Cosmos Rave",description:'<div class="skilldescription">As Encore loses control, Cosmos breaks free and wreaks havoc on its surroundings.<br> <br><span class="Title">Basic Attack: Cosmos - Frolicking</span><br>During Cosmos Rave, the <span class="Highlight">Basic Attack</span> is replaced with <span class="Highlight">Cosmos - Frolicking</span>, which performs up to 4 consecutive attacks, dealing <span class="Fire">Fusion DMG</span>, considered as Basic Attack DMG.<br> <br><span class="Title">Cosmos - Heavy Attack</span><br>During Cosmos Rave, the <span class="Highlight">Heavy Attack</span> is replaced with <span class="Highlight">Cosmos - Heavy Attack</span>, consuming STA to attack the target, dealing <span class="Fire">Fusion DMG</span>, considered as Heavy Attack DMG.<br> <br><span class="Title">Resonance Skill: Cosmos - Rampage</span><br>During Cosmos Rave, <span class="Highlight">Flaming Woolies</span> is replaced with <span class="Highlight">Cosmos - Rampage</span>, dealing <span class="Fire">Fusion DMG</span>, considered as Resonance Skill DMG.<br> <br><span class="Title">Cosmos - Dodge Counter</span><br>During Cosmos Rave, use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Fire">Fusion DMG</span>, considered as Basic Attack DMG.</div>',attacks:[{key:"CosmosFrolickingStage1DMG",label:"Cosmos: Frolicking Stage 1 DMG",talents:{1:"45.36%*2",2:"49.08%*2",3:"52.80%*2",4:"58.01%*2",5:"61.73%*2",6:"66.01%*2",7:"71.96%*2",8:"77.91%*2",9:"83.86%*2",10:"90.18%*2"},type:"Basic"},{key:"CosmosFrolickingStage2DMG",label:"Cosmos: Frolicking Stage 2 DMG",talents:{1:"28.37%*3",2:"30.70%*3",3:"33.02%*3",4:"36.28%*3",5:"38.61%*3",6:"41.28%*3",7:"45.00%*3",8:"48.72%*3",9:"52.45%*3",10:"56.40%*3"},type:"Basic"},{key:"CosmosFrolickingStage3DMG",label:"Cosmos: Frolicking Stage 3 DMG",talents:{1:"33.19%*4",2:"35.92%*4",3:"38.64%*4",4:"42.45%*4",5:"45.17%*4",6:"48.30%*4",7:"52.65%*4",8:"57.01%*4",9:"61.36%*4",10:"65.99%*4"},type:"Basic"},{key:"CosmosFrolickingStage4DMG",label:"Cosmos: Frolicking Stage 4 DMG",talents:{1:"97.59%*3",2:"105.59%*3",3:"113.59%*3",4:"124.79%*3",5:"132.79%*3",6:"142.00%*3",7:"154.80%*3",8:"167.60%*3",9:"180.40%*3",10:"194.01%*3"},type:"Basic"},{key:"CosmosHeavyAttackDMG",label:"Cosmos: Heavy Attack DMG",talents:{1:"109.44%",2:"118.42%",3:"127.39%",4:"139.96%",5:"148.93%",6:"159.25%",7:"173.61%",8:"187.97%",9:"202.32%",10:"217.58%"},type:"Heavy"},{key:"CosmosRampageDamage",label:"Cosmos Rampage DMG",talents:{1:"31.85%*4",2:"34.46%*4",3:"37.07%*4",4:"40.72%*4",5:"43.34%*4",6:"46.34%*4",7:"50.52%*4",8:"54.70%*4",9:"58.88%*4",10:"63.32%*4"},type:"Skill"},{key:"CosmosDodgeCounterDMG",label:"Cosmos: Dodge Counter DMG",talents:{1:"33.19%*4",2:"35.92%*4",3:"38.64%*4",4:"42.45%*4",5:"45.17%*4",6:"48.30%*4",7:"52.65%*4",8:"57.01%*4",9:"61.36%*4",10:"65.99%*4"},type:"Basic"}]},c={name:"Forte Circuit: Black & White Woolies",description:`<div class="skilldescription"><span class="Title">Heavy Attack: Cloudy Frenzy</span><br>When Encore's "Mayhem" is full, after casting a <span class="Highlight">Heavy Attack</span>, Encore will consume all "Mayhem" to enter the Mayhem state, reducing damage taken by 70%. Switching Characters does not interrupt the Mayhem state.<br>After the Mayhem state ends, Encore will cast <span class="Highlight">Cloudy Frenzy</span>, dealing <span class="Fire">Fusion DMG</span>, considered as Resonance Liberation damage.<br> <br><span class="Title">Heavy Attack: Cosmos Rupture</span><br>During Cosmos Rave, when casting <span class="Highlight">Heavy Attack</span>, if "Mayhem" is full, Encore will consume all "Mayhem" to enter Cosmos' Mayhem state, reducing damage taken by 70%. Switching Characters does not interrupt the Cosmos' Mayhem state.<br>After Cosmos' Mayhem state ends, Encore will cast <span class="Highlight">Cosmos Rupture</span>, dealing <span class="Fire">Fusion DMG</span>, considered as Resonance Liberation damage. <br><span class="Title">Mayhem</span><br>Encore can hold up to 100 "Mayhem".<br>When Normal Attack <span class="Highlight">Wooly Attack</span> hits a target, Encore restores "Mayhem".<br>When Resonance Skill <span class="Highlight">Flaming Woolies</span> hits a target, Encore restores "Mayhem".<br>When Resonance Skill <span class="Highlight">Energetic Welcome</span> hits a target, Encore restores "Mayhem".<br>When Intro Skill <span class="Highlight">Woolies Helpers</span> hits a target, Encore restores "Mayhem".<br>During the duration of Resonance Liberation <span class="Highlight">Cosmos Rave</span>, Encore restores "Mayhem" when hitting a target.</div>`,attacks:[{key:"CloudyFrenzyDamage",label:"Cloudy Frenzy DMG",talents:{1:"168.00%",2:"181.77%",3:"195.55%",4:"214.83%",5:"228.61%",6:"244.45%",7:"266.49%",8:"288.53%",9:"310.58%",10:"334.00%"},type:"Liberation"},{key:"CosmosRuptureDamage",label:"Cosmos Rupture DMG",talents:{1:"23.35%*6 + 249.08%",2:"25.26%*6 + 269.51%",3:"27.18%*6 + 289.93%",4:"29.86%*6 + 318.53%",5:"31.77%*6 + 338.95%",6:"33.97%*6 + 362.44%",7:"37.04%*6 + 395.12%",8:"40.10%*6 + 427.80%",9:"43.17%*6 + 460.48%",10:"46.42%*6 + 495.21%"},type:"Liberation"}]},r={name:"Intro Skill: Woolies Helpers",description:'<div class="skilldescription">Encore pounces at the enemies with Cosmos, dealing <span class="Fire">Fusion DMG</span>.</div>',attacks:[{key:"SkillDMG",label:"Woolies Helpers DMG",talents:{1:"100.00%",2:"108.20%",3:"116.40%",4:"127.88%",5:"136.08%",6:"145.51%",7:"158.63%",8:"171.75%",9:"184.87%",10:"198.81%"},type:"Intro"}]},d=[{key:"InherentSkillAngryCosmos",name:"Inherent Skill: Angry Cosmos",details:`<div class="skilldescription">During the Resonance Liberation <span class="Highlight">Cosmos Rave</span>, when Encore's HP is above 70%, DMG dealt is increased by 10%.</div>`,hasStacks:!1,modifiers:[{modifySpecificTalents:["CosmosFrolickingStage1DMG","CosmosFrolickingStage2DMG","CosmosFrolickingStage3DMG","CosmosFrolickingStage4DMG","CosmosHeavyAttackDMG","CosmosRampageDamage","CosmosDodgeCounterDMG"],modifierValue:.1}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"InherentSkillWooliesCheerDance",name:"Inherent Skill: Woolies Cheer Dance",details:`<div class="skilldescription">When Resonance Skill <span class="Highlight">Flaming Woolies</span> or Resonance Skill <span class="Highlight">Cosmos - Rampage</span> is cast, Encore's Fusion DMG Bonus is increased by 10% for 10s.</div>`,hasStacks:!1,modifiers:[{modifier:"Fusion",modifierValue:.1}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusFusionDMGBonus1",name:"Stat Bonus: Fusion DMG Bonus+",details:'<div class="skilldescription">Fusion DMG Bonus increased by 1.80%.</div>',hasStacks:!1,modifiers:[{modifier:"Fusion",modifierValue:.018}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusFusionDMGBonus2",name:"Stat Bonus: Fusion DMG Bonus+",details:'<div class="skilldescription">Fusion DMG Bonus increased by 1.80%.</div>',hasStacks:!1,modifiers:[{modifier:"Fusion",modifierValue:.018}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusFusionDMGBonus3",name:"Stat Bonus: Fusion DMG Bonus+",details:'<div class="skilldescription">Fusion DMG Bonus increased by 4.20%.</div>',hasStacks:!1,modifiers:[{modifier:"Fusion",modifierValue:.042}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusFusionDMGBonus4",name:"Stat Bonus: Fusion DMG Bonus+",details:'<div class="skilldescription">Fusion DMG Bonus increased by 4.20%.</div>',hasStacks:!1,modifiers:[{modifier:"Fusion",modifierValue:.042}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK1",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 1.80%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.018}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK2",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 1.80%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.018}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK3",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 4.20%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.042}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK4",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 4.20%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.042}],minStacks:0,maxStacks:0,alwaysEnabled:!1}],p=[{key:"SequenceNode1WoolysFairyTale",name:"Sequence Node 1: Wooly's Fairy Tale",details:`<span class="skilldescription">When <span class="Highlight">Basic Attack</span> hits a target, Encore's Fusion DMG Bonus is increased by 3%, stacking up to 4 time(s) for 6s.</span>`,hasStacks:!0,modifiers:[{modifier:"Fusion",modifierValue:.03}],minStacks:0,maxStacks:4,alwaysEnabled:!1},{key:"SequenceNode3FogTheBlackShores",name:"Sequence Node 3: Fog? The Black Shores!",details:'<span class="skilldescription">The DMG multiplier of Heavy Attack <span class="Highlight">Cloudy Frenzy</span> and Heavy Attack <span class="Highlight">Cosmos Rupture</span> is increased by 40%.</span>',hasStacks:!1,modifiers:[{modifier:"talentModifierMultiply",modifySpecificTalents:["CloudyFrenzyDamage","CosmosRuptureDamage"],modifierValue:.4}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode4AdventureLetsgo!",name:"Sequence Node 4: Adventure? Let’s go!",details:'<span class="skilldescription">Heavy Attack <span class="Highlight">Cosmos Rupture</span> increases the Fusion DMG Bonus of all team members by 20% for 30s.</span>',hasStacks:!1,modifiers:[{modifier:"Fusion",modifierValue:.2}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode5HeroTakestheStage",name:"Sequence Node 5: Hero Takes the Stage!",details:'<span class="skilldescription">Resonance Skill DMG Bonus is increased by 35%.</span>',hasStacks:!1,modifiers:[{modifier:"ResonanceSkillDMGBonus",modifierValue:.35}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode6WooliesSavetheWorld",name:"Sequence Node 6: Woolies Save the World!",details:'<span class="skilldescription">During Resonance Liberation <span class="Highlight">Cosmos Rave</span>, Encore gains 1 stack(s) of "Lost Lamb" every time she deals damage, each stack increasing her ATK by 5% for 10s, stacking up to 5 time(s).</span>',hasStacks:!0,modifiers:[{modifier:"ATK",modifierValue:.05}],minStacks:0,maxStacks:5,alwaysEnabled:!1}],m={name:"Outro Skill: Thermal Field",description:`<div class="skilldescription">Encore generates a Thermal Field centered around skill target, with a radius of 3m. Targets inside the Thermal Field are continuously burned, suffering <span class="Fire">Fusion DMG</span> equal to 176.76% of Encore's ATK every 1.5s for 6s.</div>`,attacks:[{key:"OutroSkillDMG",label:"Thermal Field DoT",talent:"176.76%",type:"Outro"}]};function k(){return{basic:e(),character:i,getCharacterStatsByLevel:t,basicAttacks:n,skillAttacks:o,liberationAttacks:l,forteCircuitAttacks:c,introAttacks:r,buffs:d,resonanceChains:p,outroAttacks:m}}export{k as getData};
