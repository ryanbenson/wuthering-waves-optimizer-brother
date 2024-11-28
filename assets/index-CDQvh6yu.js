function s(){return{name:"Rover Havoc",rarity:5,weapon:"Swords",avatarUrl:"RoverHavocMale.jpg",gender:"male",element:"Havoc"}}const a={1:{hp:866,attack:33,defense:103},20:{hp:2252,attack:85,defense:264},"20+":{hp:2829,attack:110,defense:331},40:{hp:4289,attack:166,defense:500},"40+":{hp:4866,attack:190,defense:264},50:{hp:5596,attack:218,defense:652},"50+":{hp:6173,attack:243,defense:719},60:{hp:6903,attack:271,defense:803},"60+":{hp:7480,attack:296,defense:870},70:{hp:8210,attack:323,defense:955},"70+":{hp:8788,attack:340,defense:1022},80:{hp:9517,attack:368,defense:1107},"80+":{hp:10095,attack:384,defense:1174},90:{hp:10825,attack:412,defense:1258}},t={...a};function n(e){return a[e]}const i={name:"Normal Attack: Tuneslayer",description:'<div class="skilldescription"><span class="Title">Basic Attack</span><br>Rover-Havoc performs up to 5 consecutive attacks, dealing <span class="Dark">Havoc DMG</span>.<br> <br><span class="Title">Heavy Attack</span><br>Rover-Havoc consumes STA to attack, dealing <span class="Dark">Havoc DMG</span>.<br>Use <span class="Highlight">Basic Attack</span> after casting Heavy Attack to cast Basic Attack 4.<br> <br><span class="Title">Mid-air Attack</span><br>Rover-Havoc consumes STA to cast a Mid-Air Plunging Attack, dealing <span class="Dark">Havoc DMG</span>.<br> <br><span class="Title">Dodge Counter</span><br>Use <span class="Highlight">Basic Attack</span> after a successful Dodge to attack the target, dealing <span class="Dark">Havoc DMG</span>.</div>',attacks:[{key:"TuneslayerBasicAttack1DMG",label:"Stage 1 DMG",talents:{1:"28.50%",2:"30.84%",3:"33.18%",4:"36.45%",5:"38.79%",6:"41.48%",7:"45.21%",8:"48.95%",9:"52.69%",10:"56.67%"},type:"Basic"},{key:"TuneslayerBasicAttack2DMG",label:"Stage 2 DMG",talents:{1:"28.50%*2",2:"30.84%*2",3:"33.18%*2",4:"36.45%*2",5:"38.79%*2",6:"41.48%*2",7:"45.21%*2",8:"48.95%*2",9:"52.69%*2",10:"56.67%*2"},type:"Basic"},{key:"TuneslayerBasicAttack3DMG",label:"Stage 3 DMG",talents:{1:"42.75%",2:"46.26%",3:"49.77%",4:"54.67%",5:"58.18%",6:"62.21%",7:"67.82%",8:"73.43%",9:"79.04%",10:"85.00%"},type:"Basic"},{key:"TuneslayerBasicAttack4DMG",label:"Stage 4 DMG",talents:{1:"20.27%*3",2:"21.93%*3",3:"23.60%*3",4:"25.92%*3",5:"27.58%*3",6:"29.50%*3",7:"32.15%*3",8:"34.81%*3",9:"37.47%*3",10:"40.30%*3"},type:"Basic"},{key:"TuneslayerBasicAttack5DMG",label:"Stage 5 DMG",talents:{1:"47.50%*2",2:"51.40%*2",3:"55.29%*2",4:"60.75%*2",5:"64.64%*2",6:"69.12%*2",7:"75.35%*2",8:"81.59%*2",9:"87.82%*2",10:"94.44%*2"},type:"Basic"},{key:"TuneslayerHeavyAttackDMG",label:"Heavy Attack DMG",talents:{1:"48.00%",2:"51.94%",3:"55.88%",4:"61.39%",5:"65.32%",6:"69.85%",7:"76.15%",8:"82.44%",9:"88.74%",10:"95.43%"},type:"Heavy"},{key:"TuneslayerMidAirAttackDMG",label:"Mid-air Attack DMG",talents:{1:"58.90%",2:"63.73%",3:"68.56%",4:"75.33%",5:"80.16%",6:"85.71%",7:"93.44%",8:"101.17%",9:"108.89%",10:"117.10%"},type:"Basic"},{key:"TuneslayerDodgeCounterDMG",label:"Dodge Counter DMG",talents:{1:"90.25%",2:"97.66%",3:"105.06%",4:"115.42%",5:"122.82%",6:"131.33%",7:"143.17%",8:"155.01%",9:"166.85%",10:"179.43%"},type:"Basic"}]},c={name:"Resonance Skill: Wingblade",description:'<div class="skilldescription">Transform sound into feathers, dealing <span class="Dark">Havoc DMG</span>.</div>',attacks:[{key:"WingbladeSkillDMG",label:"Wingblade DMG",talents:{1:"144.00%*2",2:"155.81%*2",3:"167.62%*2",4:"184.15%*2",5:"195.96%*2",6:"209.54%*2",7:"228.43%*2",8:"247.32%*2",9:"266.22%*2",10:"286.29%*2"},type:"Skill"}]},l={name:"Resonance Liberation: Deadening Abyss",description:'<div class="skilldescription">Rover gathers resonating sounds to attack a target, dealing <span class="Dark">Havoc DMG</span>.</div>',attacks:[{key:"DeadeningAbyssSkillDMG",label:"Deadening Abyss DMG",talents:{1:"765.00%",2:"827.73%",3:"890.46%",4:"978.29%",5:"1041.02%",6:"1113.16%",7:"1213.52%",8:"1313.89%",9:"1414.26%",10:"1520.90%"},type:"Liberation"}]},r={name:"Forte Circuit: Umbra Eclipse",description:'<div class="skilldescription"><span class="Title">Devastation</span><br>When "Umbra" is full, hold <span class="Highlight">Basic Attack</span> to cast <span class="Highlight">Devastation</span> to attack the target, dealing <span class="Dark">Havoc DMG</span>, considered as Heavy Attack DMG.<br> <br><span class="Title">Dark Surge</span><br>After casting <span class="Highlight">Devastation</span>, Rover enters the <span class="Highlight">Dark Surge</span> state. In this state:<br><span class="Highlight">Basic Attack</span> is replaced with <span class="Highlight">Enhanced Basic Attack</span>, which performs up to 5 consecutive attacks, dealing <span class="Dark">Havoc DMG</span>.<br><span class="Highlight">Heavy Attack</span> is replaced with <span class="Highlight">Enhanced Heavy Attack</span>;<br>Use <span class="Highlight">Basic Attack</span> after casting <span class="Highlight">Enhanced Heavy Attack</span> to cast Heavy Attack <span class="Highlight">Thwackblade</span> to attack the target, dealing <span class="Dark">Havoc DMG</span>, considered as Heavy Attack DMG.<br>Use <span class="Highlight">Basic Attack</span> after casting Heavy Attack <span class="Highlight">Thwackblade</span> to cast <span class="Highlight"> Enhanced Basic Attack 3</span> to attack the target, dealing <span class="Dark">Havoc DMG</span>;<br>Resonance Skill <span class="Highlight">Wingblade</span> is replaced with Resonance Skill <span class="Highlight">Lifetaker</span>, transforming sounds into blades to attack the target, dealing <span class="Dark">Havoc DMG</span>.<br> <br><span class="Title">Umbra</span><br>Rover can hold up to 100 points of Umbra.<br>Normal Attack <span class="Highlight">Tuneslayer</span> recovers Umbra on hit.<br>Resonance Skill <span class="Highlight">Wingblade</span> recovers Umbra when cast.<br>Resonance Skill <span class="Highlight">Lifetaker</span> recovers Umbra when cast.<br>Intro Skill <span class="Highlight">Instant of Annihilation</span> recovers Umbra when cast.</div>',attacks:[{key:"DevastationDamage",label:"Devastation DMG",talents:{1:"114.75%",2:"124.16%",3:"133.57%",4:"146.75%",5:"156.16%",6:"166.98%",7:"182.03%",8:"197.09%",9:"212.14%",10:"228.14%"},type:"Heavy"},{key:"UmbraBasicAttack1DMG",label:"Umbra: Basic Attack Stage 1 DMG",talents:{1:"28.35%",2:"30.68%",3:"33.00%",4:"36.26%",5:"38.58%",6:"41.26%",7:"44.98%",8:"48.70%",9:"52.42%",10:"56.37%"},type:"Basic"},{key:"UmbraBasicAttack2DMG",label:"Umbra: Basic Attack Stage 2 DMG",talents:{1:"47.25%",2:"51.13%",3:"55.00%",4:"60.43%",5:"64.30%",6:"68.76%",7:"74.96%",8:"81.16%",9:"87.36%",10:"93.94%"},type:"Basic"},{key:"UmbraBasicAttack3DMG",label:"Umbra: Basic Attack Stage 3 DMG",talents:{1:"78.30%",2:"84.73%",3:"91.15%",4:"100.14%",5:"106.56%",6:"113.94%",7:"124.21%",8:"134.49%",9:"144.76%",10:"155.67%"},type:"Basic"},{key:"UmbraBasicAttack4DMG",label:"Umbra: Basic Attack Stage 4 DMG",talents:{1:"18.68%*3 + 56.03%",2:"20.21%*3 + 60.62%",3:"21.74%*3 + 65.22%",4:"23.89%*3 + 71.65%",5:"25.42%*3 + 76.24%",6:"27.18%*3 + 81.53%",7:"29.63%*3 + 88.88%",8:"32.08%*3 + 96.23%",9:"34.53%*3 + 103.58%",10:"37.13%*3 + 111.39%"},type:"Basic"},{key:"UmbraBasicAttack5DMG",label:"Umbra: Basic Attack Stage 5 DMG",talents:{1:"14.35%*4 + 57.38%",2:"15.52%*4 + 62.08%",3:"16.70%*4 + 66.79%",4:"18.35%*4 + 73.38%",5:"19.52%*4 + 78.08%",6:"20.88%*4 + 83.49%",7:"22.76%*4 + 91.02%",8:"24.64%*4 + 98.55%",9:"26.52%*4 + 106.07%",10:"28.52%*4 + 114.07%"},type:"Basic"},{key:"UmbraHeavyAttackDMG",label:"Umbra: Heavy Attack DMG",talents:{1:"64.80%",2:"70.12%",3:"75.43%",4:"82.87%",5:"88.18%",6:"94.30%",7:"102.80%",8:"111.30%",9:"119.80%",10:"128.83%"},type:"Heavy"},{key:"UmbraThwackbladeDamage",label:"Umbra: Thwackblade DMG",talents:{1:"63.70% + 5.00%*4",2:"68.93% + 5.41%*4",3:"74.15% + 5.82%*4",4:"81.46% + 6.40%*4",5:"86.69% + 6.81%*4",6:"92.69% + 7.28%*4",7:"101.05% + 7.94%*4",8:"109.41% + 8.59%*4",9:"117.77% + 9.25%*4",10:"126.65% + 9.95%*4"},type:"Heavy"},{key:"UmbraPlungingAttackDMG",label:"Umbra: Plunging Attack DMG",talents:{1:"62.00%",2:"67.09%",3:"72.17%",4:"79.29%",5:"84.37%",6:"90.22%",7:"98.36%",8:"106.49%",9:"114.62%",10:"123.27%"},type:"Basic"},{key:"UmbraDodgeCounterDMG",label:"Umbra: Dodge Counter DMG",talents:{1:"159.30%",2:"172.37%",3:"185.43%",4:"203.72%",5:"216.78%",6:"231.80%",7:"252.70%",8:"273.60%",9:"294.50%",10:"316.71%"},type:"Basic"},{key:"UmbraLifetakerDamage",label:"Umbra: Lifetaker DMG",talents:{1:"139.00%*2 + 5.00%*4",2:"150.40%*2 + 5.41%*4",3:"161.80%*2 + 5.82%*4",4:"177.76%*2 + 6.40%*4",5:"189.16%*2 + 6.81%*4",6:"202.26%*2 + 7.28%*4",7:"220.50%*2 + 7.94%*4",8:"238.74%*2 + 8.59%*4",9:"256.97%*2 + 9.25%*4",10:"276.35%*2 + 9.95%*4"},type:"Skill"},{key:"SequenceNode5AeonSymphony",label:"S5: Aeon Symphony",talents:{1:"7.18%*4 + 28.69%",2:"7.76%*4 + 31.04%",3:"8.35%*4 + 33.40%",4:"9.18%*4 + 36.69%",5:"9.76%*4 + 39.04%",6:"10.44%*4 + 41.75%",7:"11.38%*4 + 45.51%",8:"12.32%*4 + 49.28%",9:"13.26%*4 + 53.04%",10:"14.26%*4 + 57.04%"},type:"Basic",requiresResonanceChain:"SequenceNode5AeonSymphony"}]},o={name:"Intro Skill: Instant of Annihilation",description:'<div class="skilldescription">Attack the target, dealing <span class="Dark">Havoc DMG</span>.</div>',attacks:[{key:"InstantofAnnihilationSkillDMG",label:"Instant of Annihilation DMG",talents:{1:"100.00%",2:"108.20%",3:"116.40%",4:"127.88%",5:"136.08%",6:"145.51%",7:"158.63%",8:"171.75%",9:"184.87%",10:"198.81%"},type:"Intro"}]},k=[{key:"InherentSkillMetamorph",name:"Inherent Skill: Metamorph",details:'<div class="skilldescription">In the <span class="Highlight">Dark Surge</span> state, Havoc DMG Bonus is increased by 20%.</div>',hasStacks:!1,modifiers:[{modifier:"Havoc",modifierValue:.2}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK1",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 1.80%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.018}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK2",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 1.80%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.018}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK3",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 4.20%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.042}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK4",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 4.20%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.042}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusHavoc1",name:"Stat Bonus: Havoc+",details:'<div class="skilldescription">Havoc DMG Bonus increased by 1.80%.</div>',hasStacks:!1,modifiers:[{modifier:"Havoc",modifierValue:.018}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusHavoc2",name:"Stat Bonus: Havoc+",details:'<div class="skilldescription">Havoc DMG Bonus increased by 1.80%.</div>',hasStacks:!1,modifiers:[{modifier:"Havoc",modifierValue:.018}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusHavoc3",name:"Stat Bonus: Havoc+",details:'<div class="skilldescription">Havoc DMG Bonus increased by 4.20%.</div>',hasStacks:!1,modifiers:[{modifier:"Havoc",modifierValue:.042}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusHavoc4",name:"Stat Bonus: Havoc+",details:'<div class="skilldescription">Havoc DMG Bonus increased by 4.20%.</div>',hasStacks:!1,modifiers:[{modifier:"Havoc",modifierValue:.042}],minStacks:0,maxStacks:0,alwaysEnabled:!1}],d=[{key:"SequenceNode1CrypticInsight",name:"Sequence Node 1: Cryptic Insight",details:'<span class="skilldescription">Resonance Skill DMG Bonus is increased by 30%.</span>',hasStacks:!1,modifiers:[{modifier:"ResonanceSkillDMGBonus",modifierValue:.3}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode4AnnihilatedSilence",name:"Sequence Node 4: Annihilated Silence",details:'<span class="skilldescription">Heavy Attack <span class="Highlight">Devastation</span> and Resonance Liberation <span class="Highlight">Deadening Abyss</span> reduces enemy Havoc RES by 10% for 20s on hit.</span>',hasStacks:!1,modifiers:[{modifier:"ResistShred:Havoc",modifierValue:.1}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode5AeonSymphony",name:"Sequence Node 5: Aeon Symphony",details:'<span class="skilldescription">In the <span class="Highlight">Dark Surge</span> state, <span class="Highlight">Basic Attack 5</span> deals an additional <span class="Dark">Havoc damage</span> equal to 50% of <span class="Highlight">Basic Attack 5</span> damage.</span>',hasStacks:!1,modifiers:[{modifier:"EnableAttack",modifierValue:["SequenceNode5AeonSymphony"]}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode6EbbingUndercurrent",name:"Sequence Node 6: Ebbing Undercurrent",details:`<span class="skilldescription">In the <span class="Highlight">Dark Surge</span> state, Rover's Crit. Rate is increased by 25%.</span>`,hasStacks:!1,modifiers:[{modifier:"CritRate",modifySpecificTalents:["DevastationDamage","UmbraBasicAttack1DMG","UmbraBasicAttack2DMG","UmbraBasicAttack3DMG","UmbraBasicAttack4DMG","UmbraBasicAttack5DMG","UmbraHeavyAttackDMG","UmbraThwackbladeDamage","UmbraPlungingAttackDMG","UmbraDodgeCounterDMG","UmbraLifetakerDamage","SequenceNode5AeonSymphony"],modifierValue:.25}],minStacks:0,maxStacks:0,alwaysEnabled:!1}],p={name:"Outro Skill: Soundweaver",description:`<div class="skilldescription">Rover summons a Havoc Field, dealing <span class="Dark">Havoc DMG</span> of 143.3% of Rover's ATK to all targets within the range every 2s for 6s.</div>`,attacks:[{key:"OutroSkillDMG",label:"Soundweaver DMG DoT",talent:"143.3%",type:"Outro"}]};function m(){return{basic:s(),character:t,getCharacterStatsByLevel:n,basicAttacks:i,skillAttacks:c,liberationAttacks:l,forteCircuitAttacks:r,introAttacks:o,buffs:k,resonanceChains:d,outroAttacks:p}}export{m as getData};