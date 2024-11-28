function s(){return{name:"Changli",rarity:5,weapon:"Swords",avatarUrl:"test.jpg",gender:"female",element:"Fusion"}}const a={1:{hp:831,attack:37,defense:90},20:{hp:2161,attack:96,defense:230},"20+":{hp:2715,attack:123,defense:289},40:{hp:4116,attack:186,defense:437},"40+":{hp:4670,attack:214,defense:230},50:{hp:5370,attack:245,defense:570},"50+":{hp:5924,attack:273,defense:628},60:{hp:6624,attack:304,defense:702},"60+":{hp:7178,attack:331,defense:760},70:{hp:7878,attack:363,defense:835},"70+":{hp:8432,attack:381,defense:893},80:{hp:9133,attack:412,defense:967},"80+":{hp:9133,attack:431,defense:1025},90:{hp:10387,attack:462,defense:1099}},i={...a};function t(e){return a[e]}const n={name:"Basic Attack: Blazing Enlightment",description:'<div class="skilldescription"><span class="Title">Basic Attack</span><br>Perform up to 4 consecutive attacks, dealing <span class="Fire">Fusion DMG</span>.<br>After releasing <span class="Highlight">Ground Basic Attack Stage 4</span>, Changli enters <span class="Highlight">True Sight</span>, lasting for 12s.<br><span class="Title">Mid-air Attack</span><br>Consume Stamina to perform up to 4 consecutive attacks in mid-air, dealing <span class="Fire">Fusion DMG</span>.<br>After releasing <span class="Highlight">Mid-air Attack Stage 4</span>, Changli enters <span class="Highlight">True Sight</span>, lasting for 12s.<br><span class="Title">Heavy Attack</span><br>Hold <span class="Highlight">Basic Attack</span> on the ground to consume Stamina to perform an upward strike, dealing <span class="Fire">Fusion DMG</span>. Use <span class="Highlight">Basic Attack</span> within a certain time to release <span class="Highlight">Mid-air Attack Stage 3</span>.<br><span class="Title">Mid-air Heavy Attack</span><br>Shortly after holding <span class="Highlight">Basic Attack</span> in mid-air or using Basic Attack <span class="Highlight">True Sight: Charge</span>, use <span class="Highlight">Basic Attack</span> to consume Stamina to perform a Plunging Attack, dealing <span class="Fire">Fusion DMG</span>. Use <span class="Highlight">Basic Attack</span> within a certain time to release <span class="Highlight">Basic Attack Stage 3</span>.<br><span class="Title">Dodge Counter</span><br>Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Fire">Fusion DMG</span>.</div>',attacks:[{key:"BasicAttack1DMG",label:"Basic Attack 1 DMG",talents:{1:"14.84%*2",2:"16.05%*2",3:"17.27%*2",4:"18.97%*2",5:"20.19%*2",6:"21.59%*2",7:"23.53%*2",8:"25.48%*2",9:"27.43%*2",10:"29.49%*2"},type:"Basic"},{key:"BasicAttack2DMG",label:"Basic Attack 2 DMG",talents:{1:"17.85%*2",2:"19.32%*2",3:"20.78%*2",4:"22.83%*2",5:"24.30%*2",6:"25.98%*2",7:"28.32%*2",8:"30.66%*2",9:"33.00%*2",10:"35.49%*2"},type:"Basic"},{key:"BasicAttack3DMG",label:"Basic Attack 3 DMG",talents:{1:"18.34%*3",2:"19.84%*3",3:"21.34%*3",4:"23.45%*3",5:"24.95%*3",6:"26.68%*3",7:"29.08%*3",8:"31.49%*3",9:"33.89%*3",10:"36.45%*3"},type:"Basic"},{key:"BasicAttack4DMG",label:"Basic Attack 4 DMG",talents:{1:"25.50% + 14.88%*4",2:"27.60% + 16.10%*4",3:"29.69% + 17.32%*4",4:"32.61% + 19.03%*4",5:"34.71% + 20.25%*4",6:"37.11% + 21.65%*4",7:"40.46% + 23.60%*4",8:"43.80% + 25.55%*4",9:"47.15% + 27.50%*4",10:"50.70% + 29.58%*4"},type:"Basic"},{key:"MidAirAttack1DMG",label:"Mid-Air Attack 1 DMG",talents:{1:"30.86%",2:"33.39%",3:"35.92%",4:"39.46%",5:"41.99%",6:"44.90%",7:"48.95%",8:"53.00%",9:"57.05%",10:"61.35%"},type:"Basic"},{key:"MidAirAttack2DMG",label:"Mid-Air Attack 2 DMG",talents:{1:"25.59%*2",2:"27.69%*2",3:"29.79%*2",4:"32.72%*2",5:"34.82%*2",6:"37.23%*2",7:"40.59%*2",8:"43.95%*2",9:"47.30%*2",10:"50.87%*2"},type:"Basic"},{key:"MidAirAttack3DMG",label:"Mid-Air Attack 3 DMG",talents:{1:"22.13%*3",2:"23.95%*3",3:"25.76%*3",4:"28.30%*3",5:"30.12%*3",6:"32.20%*3",7:"35.11%*3",8:"38.01%*3",9:"40.91%*3",10:"44.00%*3"},type:"Basic"},{key:"MidAirAttack4DMG",label:"Mid-Air Attack 4 DMG",talents:{1:"19.13% + 11.16%*4",2:"20.70% + 12.08%*4",3:"22.27% + 12.99%*4",4:"24.46% + 14.27%*4",5:"26.03% + 15.19%*4",6:"27.83% + 16.24%*4",7:"30.34% + 17.70%*4",8:"32.85% + 19.17%*4",9:"35.36% + 20.63%*4",10:"38.03% + 22.18%*4"},type:"Basic"},{key:"HeavyAttackDMG",label:"Heavy Attack DMG",talents:{1:"14.58%*3 + 18.75%",2:"15.78%*3 + 20.28%",3:"16.97%*3 + 21.82%",4:"18.65%*3 + 23.97%",5:"19.84%*3 + 25.51%",6:"21.22%*3 + 27.28%",7:"23.13%*3 + 29.74%",8:"25.04%*3 + 32.20%",9:"26.95%*3 + 34.65%",10:"28.99%*3 + 37.27%"},type:"Heavy"},{key:"MidAirHeavyAttackDMG",label:"Mid-Air Heavy Attack DMG",talents:{1:"62.00%",2:"67.09%",3:"72.17%",4:"79.29%",5:"84.37%",6:"90.22%",7:"98.36%",8:"106.49%",9:"114.62%",10:"123.27%"},type:"Heavy"},{key:"DodgeCounterDMG",label:"Dodge Counter DMG",talents:{1:"41.57%*3",2:"44.98%*3",3:"48.39%*3",4:"53.16%*3",5:"56.57%*3",6:"60.49%*3",7:"65.94%*3",8:"71.40%*3",9:"76.85%*3",10:"82.64%*3"},type:"Basic"}]},l={name:"Resonance Skill: Tripartite Flames",description:'<div class="skilldescription"><span class="Title">True Sight: Capture</span><br>After releasing <span class="Highlight">Resonance Skill</span>, Changli rapidly attacks the enemy and enters <span class="Highlight">True Sight</span>, lasting for 12s. In the end, Changli releases a Plunging Attack, dealing <span class="Fire">Fusion DMG</span>.<br><span class="Highlight">True Sight: Capture</span> has 2 initial attempts and can be used up to 2 times. The number of attempts is increased by 1 every 12s.<br><span class="Title">Basic Attack: True Sight - Conquest</span><br>When in <span class="Highlight">True Sight</span>, if Changli uses <span class="Highlight">Ground Basic Attack</span>, she releases <span class="Highlight">True Sight: Conquest</span>, rapidly approaching the enemy and dealing <span class="Fire">Fusion DMG</span>, considered as Resonance Skill DMG. After releasing <span class="Highlight">True Sight: Conquest</span>, <span class="Highlight">True Sight</span> ends.<br><span class="Title">Basic Attack: True Sight - Charge</span><br>When in <span class="Highlight">True Sight</span>, if Changli <span class="Highlight">jumps</span> or uses <span class="Highlight">Basic Attack</span> in mid-air, she releases <span class="Highlight">True Sight: Charge</span>, dashing towards the enemy and dealing <span class="Fire">Fusion DMG</span>, considered as Resonance Skill DMG. After releasing <span class="Highlight">True Sight: Charge</span>, <span class="Highlight">True Sight</span> ends.</div>',attacks:[{key:"TrueSightCaptureDMG",label:"True Sight - Capture DMG",talents:{1:"41.19%*3 + 82.37%",2:"44.57%*3 + 89.13%",3:"47.94%*3 + 95.88%",4:"52.67%*3 + 105.34%",5:"56.05%*3 + 112.09%",6:"59.93%*3 + 119.86%",7:"65.34%*3 + 130.67%",8:"70.74%*3 + 141.47%",9:"76.14%*3 + 152.28%",10:"81.88%*3 + 163.76%"},type:"Skill"},{key:"TrueSightConquestDMG",label:"True Sight - Conquest DMG",talents:{1:"29.65%*2 + 41.51% + 47.44%",2:"32.08%*2 + 44.91% + 51.33%",3:"34.51%*2 + 48.32% + 55.22%",4:"37.92%*2 + 53.08% + 60.67%",5:"40.35%*2 + 56.49% + 64.56%",6:"43.14%*2 + 60.40% + 69.03%",7:"47.03%*2 + 65.85% + 75.25%",8:"50.92%*2 + 71.29% + 81.48%",9:"54.81%*2 + 76.74% + 87.70%",10:"58.95%*2 + 82.52% + 94.31%"},type:"Skill"},{key:"TrueSightChargeDMG",label:"True Sight - Charge DMG",talents:{1:"36.56% + 54.84%",2:"39.56% + 59.34%",3:"42.56% + 63.83%",4:"46.75% + 70.13%",5:"49.75% + 74.62%",6:"53.20% + 79.80%",7:"58.00% + 86.99%",8:"62.79% + 94.18%",9:"67.59% + 101.38%",10:"72.68% + 109.02%"},type:"Skill"}]},c={name:"Resonance Liberation: Radiance of Fealty",description:'<div class="skilldescription">Deal <span class="Fire">Fusion DMG</span> to nearby targets, obtaining 4 stacks of [Enflamement], and entering <span class="Highlight">Fiery Feather</span>.<br><span class="Title">Fiery Feather</span><br>When Changli releases Heavy Attack <span class="Highlight">Flaming Sacrifice</span> within 10s, her ATK is increased by 25%, after which <span class="Highlight">Fiery Feather</span> ends.</div>',attacks:[{key:"RadianceofFealty",label:"Radiance of Fealty DMG",talents:{1:"610.00%",2:"660.02%",3:"710.04%",4:"780.07%",5:"830.09%",6:"887.62%",7:"967.65%",8:"1047.68%",9:"1127.71%",10:"1212.75%"},type:"Liberation"}]},r={name:"Forte Circuit: Flaming Vow",description:'<div class="skilldescription"><span class="Title">Heavy Attack: Flaming Sacrifice</span><br>When releasing <span class="Highlight">Heavy Attack</span>, if Changli carries 4 stacks of [Enflamement], she consumes all stacks of [Enflamement] to release <span class="Highlight">Flaming Sacrifice</span>, dealing <span class="Fire">Fusion DMG</span>, considered as Resonance Skill DMG.<br><span class="Title">Enflamement</span><br>Changli can hold up to 4 stacks of [Enflamement].<br>Changli obtains 1 stack of [Enflamement] for every Basic Attack: <span class="Highlight">True Sight - Conquest</span> on hit.<br>Changli obtains 1 stack of [Enflamement] for every Basic Attack: <span class="Highlight">True Sight - Charge</span> on hit.<br>Changli obtains 4 stacks of [Enflamement] for every Resonance Liberation <span class="Highlight">Radiance of Fealty</span>.</div>',attacks:[{key:"FlamingVowDMG",label:"Flaming Vow DMG",talents:{1:"19.74%*5 + 230.30%",2:"21.36%*5 + 249.18%",3:"22.98%*5 + 268.07%",4:"25.25%*5 + 294.51%",5:"26.87%*5 + 313.39%",6:"28.73%*5 + 335.11%",7:"31.32%*5 + 365.32%",8:"33.91%*5 + 395.54%",9:"36.50%*5 + 425.75%",10:"39.25%*5 + 457.85%"},type:"Skill"}]},o={name:"Intro Skill: Obedience of Rules",description:'<div class="skilldescription">Changli appears in mid-air, attacks the target, and enters <span class="Highlight">True Sight</span>, lasting for 12s.</div>',attacks:[{key:"ObedienceofRulesSkillDMG",label:"Obedience of Rules DMG",talents:{1:"22.38% + 13.06%*4",2:"24.22% + 14.13%*4",3:"26.06% + 15.20%*4",4:"28.62% + 16.70%*4",5:"30.46% + 17.77%*4",6:"32.57% + 19.00%*4",7:"35.51% + 20.71%*4",8:"38.44% + 22.43%*4",9:"41.38% + 24.14%*4",10:"44.50% + 25.96%*4"},type:"Intro"}]},d=[{key:"FieryFeather",name:"Fiery Feather",details:'<div class="skilldescription">When Changli releases Heavy Attack <span class="Highlight">Flaming Sacrifice</span> within 10s, her ATK is increased by 25%, after which <span class="Highlight">Fiery Feather</span> ends.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifySpecificTalents:["FlamingVowDMG"],modifierValue:.25}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"InherentSkillSecretStrategist",name:"Inherent Skill: Secret Strategist",details:`<div class="skilldescription">When Changli releases Basic Attack: <span class="Highlight">True Sight - Conquest</span> or Basic Attack: <span class="Highlight">True Sight - Charge</span>, for each stack of [Enflamement], Changli's Fusion DMG is increased by 5%.</div>`,hasStacks:!0,modifiers:[{modifySpecificTalents:["TrueSightConquestDMG","TrueSightChargeDMG"],modifierValue:.05}],minStacks:0,maxStacks:4,alwaysEnabled:!1},{key:"InherentSkillSweepingForce",name:"Inherent Skill: Sweeping Force",details:`<div class="skilldescription">When Changli releases Heavy Attack <span class="Highlight">Flaming Sacrifice</span> or Resonance Liberation <span class="Highlight">Radiance of Fealty</span>, Changli's Fusion DMG Bonus is increased by 20%, and Changli ignores 15% of the target's DEF when dealing damage.</div>`,hasStacks:!1,modifiers:[{modifySpecificTalents:["FlamingVowDMG","RadianceofFealty"],modifierValue:.2},{modifier:"DEFIgnore",modifySpecificTalents:["FlamingVowDMG","RadianceofFealty"],modifierValue:.15}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusCritRate1",name:"Stat Bonus: Crit. Rate+",details:'<div class="skilldescription">Crit. Rate increased by 1.20%.</div>',hasStacks:!1,modifiers:[{modifier:"CritRate",modifierValue:.012}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusCritRate2",name:"Stat Bonus: Crit. Rate+",details:'<div class="skilldescription">Crit. Rate increased by 1.20%.</div>',hasStacks:!1,modifiers:[{modifier:"CritRate",modifierValue:.012}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK1",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 1.80%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.018}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK2",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 1.80%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.018}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusCritRate3",name:"Stat Bonus: Crit. Rate+",details:'<div class="skilldescription">Crit. Rate increased by 2.80%.</div>',hasStacks:!1,modifiers:[{modifier:"CritRate",modifierValue:.028}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusCritRate4",name:"Stat Bonus: Crit. Rate+",details:'<div class="skilldescription">Crit. Rate increased by 2.80%.</div>',hasStacks:!1,modifiers:[{modifier:"CritRate",modifierValue:.028}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK3",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 4.20%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.042}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK4",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 4.20%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.042}],minStacks:0,maxStacks:0,alwaysEnabled:!1}],h=[{key:"SequenceNode1HiddenThoughts",name:"Sequence Node 1: Hidden Thoughts",details:`<span class="skilldescription">Resonance Skill <span class="Highlight">Tripartite Flames</span> and Heavy Attack <span class="Highlight">Flaming Vow</span> increases Changli's DMG dealt by 10% and resistance to interruption.</span>`,hasStacks:!1,modifiers:[{modifySpecificTalents:["FlamingVowDMG","TrueSightCaptureDMG","TrueSightConquestDMG","TrueSightChargeDMG"],modifierValue:.1}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode2PursuitofDesires",name:"Sequence Node 2: Pursuit of Desires",details:`<span class="skilldescription">[Enflamement] increases Changli's Crit Rate by 25%, lasting for 8s.</span>`,hasStacks:!1,modifiers:[{modifier:"CritRate",modifierValue:.25}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode3LearnedSecrets",name:"Sequence Node 3: Learned Secrets",details:'<span class="skilldescription">Resonance Liberation <span class="Highlight">Radiance of Fealty</span> DMG is increased by 80%.</span>',hasStacks:!1,modifiers:[{modifier:"ResonanceLiberationDMGBonus",modifierValue:.8}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode4PolishedWords",name:"Sequence Node 4: Polished Words",details:'<span class="skilldescription">Intro Skill increases the ATK of all team members by 20%, lasting for 30s.</span>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.2}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode5SacrificedGains1",name:"Sequence Node 5: Sacrificed Gains: Flaming Vow Buff",details:`<span class="skilldescription">Heavy Attack <span class="Highlight">Flaming Vow</span>'s multiplier is increased by 50%.</span>`,hasStacks:!1,modifiers:[{modifier:"talentModifierMultiply",modifySpecificTalents:["FlamingVowDMG"],modifierValue:.5}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode5SacrificedGains2",name:"Sequence Node 5: Sacrificed Gains: Flaming Vow Buff",details:'<span class="skilldescription"> When Heavy Attack Flaming Vow is released, it receives a 50% DMG Bonus.</span>',hasStacks:!1,modifiers:[{modifySpecificTalents:["FlamingVowDMG"],modifierValue:.5}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode6RealizedPlans",name:"Sequence Node 6: Realized Plans",details:`<span class="skilldescription">Resonance Skill <span class="Highlight">Tripartite Flames</span>, Heavy Attack <span class="Highlight">Flaming Vow</span>, and Resonance Liberation <span class="Highlight">Radiance of Fealty</span> ignore an additional 40% of the target's DEF when dealing damage.</span>`,hasStacks:!1,modifiers:[{modifier:"DEFIgnore",modifySpecificTalents:["TrueSightCaptureDMG","TrueSightConquestDMG","TrueSightChargeDMG","FlamingVowDMG","RadianceofFealty"],modifierValue:.4}],minStacks:0,maxStacks:0,alwaysEnabled:!1}],p={name:"Outro Skill: Strategy of Duality",description:'<div class="skilldescription">The incoming Resonator has their Fusion DMG Amplified by 20% and Resonance Liberation DMG Amplified by 25% for 10s or until the Resonator is switched out.</div>',attacks:[]};function g(){return{basic:s(),character:i,getCharacterStatsByLevel:t,basicAttacks:n,skillAttacks:l,liberationAttacks:c,forteCircuitAttacks:r,introAttacks:o,buffs:d,resonanceChains:h,outroAttacks:p}}export{g as getData};
