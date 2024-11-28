function s(){return{name:"Aalto",rarity:4,weapon:"Pistols",avatarUrl:"Aalto.jpg",gender:"male",element:"Aero"}}const e={1:{hp:788,attack:21,defense:88},20:{hp:2049,attack:54,defense:225},"20+":{hp:2574,attack:70,defense:282},40:{hp:3903,attack:105,defense:427},"40+":{hp:4428,attack:121,defense:225},50:{hp:5092,attack:139,defense:557},"50+":{hp:5617,attack:154,defense:614},60:{hp:6281,attack:172,defense:686},"60+":{hp:6807,attack:188,defense:743},70:{hp:7471,attack:206,defense:816},"70+":{hp:7996,attack:216,defense:873},80:{hp:8660,attack:234,defense:946},"80+":{hp:9185,attack:244,defense:1003},90:{hp:9850,attack:262,defense:1075}},t={...e};function i(a){return e[a]}const n={name:"Normal Attack: Half Truths",description:'<div class="skilldescription"><span class="Title">Basic Attack</span><br>Aalto fires up to 5 consecutive shots, dealing <span class="Wind">Aero DMG</span>. Basic Attack 4 will spread the "Mist" forward, which lasts for 1.5s.<br> <br><span class="Title">Heavy Attack</span><br>Aalto enters the aiming state for a more powerful shot.<br>The aimed shot fired after charging finishes deals <span class="Wind">Aero DMG</span>.<br> <br><span class="Title">Mid-air Attack</span><br>Aalto consumes STA to perform consecutive shots at the target in mid-air, dealing <span class="Wind">Aero DMG</span>.<br> <br><span class="Title">Dodge Counter</span><br>Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Wind">Aero DMG</span>.</div>',attacks:[{key:"HalfTruthsStage1DMG",label:"Stage 1 DMG",talents:{1:"16%",2:"17.32%",3:"18.63%",4:"20.47%",5:"21.78%",6:"23.29%",7:"25.39%",8:"27.48%",9:"29.58%",10:"31.81%"},type:"Basic"},{key:"HalfTruthsStage2DMG",label:"Stage 2 DMG",talents:{1:"26.67%",2:"28.86%",3:"31.04%",4:"34.11%",5:"36.29%",6:"38.81%",7:"42.31%",8:"45.8%",9:"49.3%",10:"53.02%"},type:"Basic"},{key:"HalfTruthsStage3DMG",label:"Stage 3 DMG",talents:{1:"24%*2",2:"25.97%*2",3:"27.94%*2",4:"30.7%*2",5:"32.66%*2",6:"34.93%*2",7:"38.08%*2",8:"41.22%*2",9:"44.37%*2",10:"47.72%*2"},type:"Basic"},{key:"HalfTruthsStage4DMG",label:"Stage 4 DMG",talents:{1:"25.34%*2",2:"27.42%*2",3:"29.49%*2",4:"32.4%*2",5:"34.48%*2",6:"36.87%*2",7:"40.19%*2",8:"43.51%*2",9:"46.84%*2",10:"50.37%*2"},type:"Basic"},{key:"HalfTruthsStage5DMG",label:"Stage 5 DMG",talents:{1:"90.4%",2:"97.82%",3:"105.23%",4:"115.61%",5:"123.02%",6:"131.55%",7:"143.41%",8:"155.27%",9:"167.13%",10:"179.73%"},type:"Basic"},{key:"HalfTruthsMidAirAttackDMG",label:"Mid-air Attack",talents:{1:"30%",2:"32.46%",3:"34.92%",4:"38.37%",5:"40.83%",6:"43.66%",7:"47.59%",8:"51.53%",9:"55.47%",10:"59.65%"},type:"Basic"},{key:"HalfTruthsAimedShotDMG",label:"Aimed Shot Damage",talents:{1:"18.00%",2:"19.48%",3:"20.96%",4:"23.02%",5:"24.50%",6:"26.20%",7:"28.56%",8:"30.92%",9:"33.28%",10:"35.79%"},type:"Heavy"},{key:"HalfTruthsChargedAimedShotDMG",label:"Fully Charged Aimed Shot Damage",talents:{1:"40.50%",2:"43.83%",3:"47.15%",4:"51.80%",5:"55.12%",6:"58.94%",7:"64.25%",8:"69.56%",9:"74.88%",10:"80.52%"},type:"Heavy"},{key:"HalfTruthsDodgeCounterDMG",label:"Dodge Counter DMG",talents:{1:"107.7%",2:"116.54%",3:"125.37%",4:"137.73%",5:"146.56%",6:"156.72%",7:"170.85%",8:"184.98%",9:"199.11%",10:"214.12%"},type:"Basic"},{key:"SequenceNode3HazeyTransitionHalfTruthsStage1DMG",label:"S3 Hazey Transition Stage 1 DMG",talents:{1:"8%*2",2:"8.66%*2",3:"9.32%*2",4:"10.24%*2",5:"10.89%*2",6:"11.65%*2",7:"12.7%*2",8:"13.74%*2",9:"14.79%*2",10:"15.91%*2"},type:"Basic",requiresResonanceChain:"SequenceNode3HazeyTransitionHalfTruthsStage1DMG"},{key:"SequenceNode3HazeyTransitionHalfTruthsStage2DMG",label:"S3 Hazey Transition Stage 2 DMG",talents:{1:"13.34%*2",2:"14.43%*2",3:"15.52%*2",4:"17.06%*2",5:"18.14%*2",6:"19.41%*2",7:"21.16%*2",8:"22.9%*2",9:"24.65%*2",10:"26.51%*2"},type:"Basic",requiresResonanceChain:"SequenceNode3HazeyTransitionHalfTruthsStage2DMG"},{key:"SequenceNode3HazeyTransitionHalfTruthsStage3DMG",label:"S3 Hazey Transition Stage 3 DMG",talents:{1:"12%*4",2:"12.99%*4",3:"13.97%*4",4:"15.35%*4",5:"16.33%*4",6:"17.47%*4",7:"19.04%*4",8:"20.61%*4",9:"22.19%*4",10:"23.86%*4"},type:"Basic",requiresResonanceChain:"SequenceNode3HazeyTransitionHalfTruthsStage3DMG"},{key:"SequenceNode3HazeyTransitionHalfTruthsStage4DMG",label:"S3 Hazey Transition Stage 4 DMG",talents:{1:"12.67%*4",2:"13.71%*4",3:"14.75%*4",4:"16.2%*4",5:"17.24%*4",6:"18.44%*4",7:"20.1%*4",8:"21.76%*4",9:"23.42%*4",10:"25.19%*4"},type:"Basic",requiresResonanceChain:"SequenceNode3HazeyTransitionHalfTruthsStage4DMG"},{key:"SequenceNode3HazeyTransitionHalfTruthsStage5DMG",label:"S3 Hazey Transition Stage 5 DMG",talents:{1:"45.2%*2",2:"48.91%*2",3:"52.62%*2",4:"57.8%*2",5:"61.51%*2",6:"65.78%*2",7:"71.71%*2",8:"77.64%*2",9:"83.57%*2",10:"89.87%*2"},type:"Basic",requiresResonanceChain:"SequenceNode3HazeyTransitionHalfTruthsStage5DMG"},{key:"SequenceNode3HazeyTransitionHalfTruthsMidAirAttackDMG",label:"S3 Hazey Transition Mid-air Attack",talents:{1:"15%*2",2:"16.23%*2",3:"17.46%*2",4:"19.19%*2",5:"20.42%*2",6:"21.83%*2",7:"23.8%*2",8:"25.76%*2",9:"27.74%*2",10:"29.83%*2"},type:"Basic",requiresResonanceChain:"SequenceNode3HazeyTransitionHalfTruthsMidAirAttackDMG"}]},l={name:"Resonance Skill: Shift Trick",description:`<div class="skilldescription"><span class="Title">Mist Avatar</span><br>Casts "Mist" and 1 "Mist Avatar(s)" to taunt the surrounding targets. The avatars inherit a portion of Aalto's HP and generate 6 Mist Bullets around them, dealing <span class="Wind">Aero DMG</span>.<br> <br><span class="Title">Mist Bullets</span><br>Deals <span class="Wind">Aero DMG</span>, considered as Resonance Skill DMG.</div>`,attacks:[{key:"MistBulletDamage",label:"Mist Bullet DMG",talents:{1:"30.00%",2:"32.46%",3:"34.92%",4:"38.37%",5:"40.83%",6:"43.66%",7:"47.59%",8:"51.53%",9:"55.47%",10:"59.65%"},type:"Skill"}]},r={name:"Resonance Liberation: Flower in the Mist",description:'<div class="skilldescription">Generate a "Gate of Quandary" in front, dealing <span class="Wind">Aero DMG</span>. When bullets pass through the "Gate of Quandary", they deal increased DMG. "Gate of Quandary" lasts for 10s.</div>',attacks:[{key:"FlowerintheMistDamage",label:"Flower in the Mist DMG",talents:{1:"200.00%",2:"216.4%",3:"232.8%",4:"255.76%",5:"272.16%",6:"291.02%",7:"317.26%",8:"343.5%",9:"369.74%",10:"397.62%"},type:"Liberation"}]},o={name:"Forte Circuit: Misty Cover",description:'<div class="skilldescription">When Aalto passes through "Mist" or "Gate of Quandary", he enters the <span class="Highlight">Mistcloak Dash</span>.<br> <br><span class="Title">Mistcloak Dash</span><br>-Movement speed increased;<br>-During this period, "Mist Drops" are continuously consumed, and for each 1 "Mist Drop" consumed, 1 Mist Bullet(s) is generated.<br> <br><span class="Title">Mist Drops</span><br>Aalto can hold up to 6 "Mist Drops".<br>When <span class="Highlight">Basic Attack</span> or <span class="Highlight">Mid-air Attack</span> passes through "Mist" and hits the target, 1 "Mist Drop" is recovered.</div>',attacks:[{key:"MistBulletDMG",label:"Mist Bullet DMG",talents:{1:"30.00%",2:"32.46%",3:"34.92%",4:"38.37%",5:"40.83%",6:"43.66%",7:"47.59%",8:"51.53%",9:"55.47%",10:"59.65%"},type:"Skill"}]},c={name:"Intro Skill: Feint Shot",description:'<div class="skilldescription">Aalto shows up out of thin air to perform rapid continuous shooting, dealing <span class="Wind">Aero DMG</span>.</div>',attacks:[{key:"FeintShotSkillDMG",label:"Feint Shot DMG",talents:{1:"33.34%*3",2:"36.07%*3",3:"38.8%*3",4:"42.63%*3",5:"45.36%*3",6:"48.51%*3",7:"52.88%*3",8:"57.25%*3",9:"61.63%*3",10:"66.27%*3"},type:"Intro"}]},d=[{key:"GateofQuandary",name:"Gate of Quandary",details:'<div class="skilldescription">Generate a "Gate of Quandary" in front, dealing <span class="Wind">Aero DMG</span>. When bullets pass through the "Gate of Quandary", ATK is increased. "Gate of Quandary" lasts for 10s.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.1}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"InherentSkillPerfectPerformance",name:"Inherent Skill: Perfect Performance",details:`<div class="skilldescription">Aalto's <span class="Highlight">Heavy Attack</span> will always critically hit, triggered once every 30s.</div>`,hasStacks:!1,modifiers:[{modifier:"CritRate",modifySpecificTalents:["HalfTruthsAimedShotDMG","HalfTruthsChargedAimedShotDMG"],modifierValue:.25}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusAeroDMGBonus1",name:"Stat Bonus: Aero DMG Bonus+",details:'<div class="skilldescription">Aero DMG Bonus increased by 1.80%.</div>',hasStacks:!1,modifiers:[{modifier:"Aero",modifierValue:.018}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusAeroDMGBonus2",name:"Stat Bonus: Aero DMG Bonus+",details:'<div class="skilldescription">Aero DMG Bonus increased by 1.80%.</div>',hasStacks:!1,modifiers:[{modifier:"Aero",modifierValue:.018}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusAeroDMGBonus3",name:"Stat Bonus: Aero DMG Bonus+",details:'<div class="skilldescription">Aero DMG Bonus increased by 4.20%.</div>',hasStacks:!1,modifiers:[{modifier:"Aero",modifierValue:.042}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusAeroDMGBonus4",name:"Stat Bonus: Aero DMG Bonus+",details:'<div class="skilldescription">Aero DMG Bonus increased by 4.20%.</div>',hasStacks:!1,modifiers:[{modifier:"Aero",modifierValue:.042}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK1",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 1.80%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.018}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK2",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 1.80%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.018}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK3",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 4.20%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.042}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK4",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 4.20%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.042}],minStacks:0,maxStacks:0,alwaysEnabled:!1}],h=[{key:"SequenceNode2MistweaversDebut",name:"Sequence Node 2: Mistweaver's Debut",details:'<span class="skilldescription">"Mist Avatar" inherits 100% more HP from Aalto. When Aalto attacks targets taunted by the "Mist Avatar(s)", his ATK is increased by 15%.</span>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.15}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode3HazeyTransition",name:"Sequence Node 3: Hazey Transition",details:`<span class="skilldescription">When Aalto's <span class="Highlight">Basic Attack</span> or <span class="Highlight">Mid-air Attack</span> passes through the Mist, 2 more bullets will be generated, dealing 50% of the DMG of <span class="Highlight">Basic Attack</span> or <span class="Highlight">Mid-air Attack</span>.</span>`,hasStacks:!1,modifiers:[{modifier:"EnableAttack",modifierValue:["SequenceNode3HazeyTransitionHalfTruthsStage1DMG","SequenceNode3HazeyTransitionHalfTruthsStage2DMG","SequenceNode3HazeyTransitionHalfTruthsStage3DMG","SequenceNode3HazeyTransitionHalfTruthsStage4DMG","SequenceNode3HazeyTransitionHalfTruthsStage5DMG","SequenceNode3HazeyTransitionHalfTruthsMidAirAttackDMG"]}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode4BlakeBloomforFinale",name:"Sequence Node 4: Blake Bloom for Finale",details:'<span class="skilldescription">The damage of Resonance Skill <span class="Highlight">Mist Bullets</span> is increased by 30%; Aalto receives 30% less damage in his Forte Circuit <span class="Highlight">Mistcloak Dash</span> state.</span>',hasStacks:!1,modifiers:[{modifySpecificTalents:["MistBulletDamage"],modifierValue:.3}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode5ApplauseoftheLost",name:"Sequence Node 5: Applause of the Lost",details:`<span class="skilldescription">In the Forte Circuit <span class="Highlight">Mistcloak Dash</span> state, Aalto's Aero DMG Bonus is increased by 25% for 6s.</span>`,hasStacks:!1,modifiers:[{modifier:"Aero",modifierValue:.25}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode6BrokersSecrets",name:"Sequence Node 6: Broker's Secrets",details:`<span class="skilldescription">Resonance Liberation <span class="Highlight">Flower in the Mist</span> now additionally increases Crit. Rate by 8%. When Aalto's Heavy Attack passes through the "Gate of Quandary", the damage dealt is additionally increased by 50%.</span>`,hasStacks:!1,modifiers:[{modifier:"CritRate",modifierValue:.08},{modifySpecificTalents:["HalfTruthsAimedShotDMG","HalfTruthsChargedAimedShotDMG"],modifierValue:.5}],minStacks:0,maxStacks:0,alwaysEnabled:!1}],u={name:"Outro Skill: Dissolving Mist",description:'<div class="skilldescription">The incoming Resonator has their Aero DMG Amplified by 23% for 14s or until they are switched out.</div>',attacks:[]};function f(){return{basic:s(),character:t,getCharacterStatsByLevel:i,basicAttacks:n,skillAttacks:l,liberationAttacks:r,forteCircuitAttacks:o,introAttacks:c,buffs:d,resonanceChains:h,outroAttacks:u}}export{f as getData};
