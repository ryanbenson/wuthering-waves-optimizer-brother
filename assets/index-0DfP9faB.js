function s(){return{name:"Xiangli Yao",rarity:5,weapon:"Gauntlets",avatarUrl:"XiangliYao.jpg",gender:"male",element:"Electro"}}const e={1:{hp:850,attack:34,defense:100},20:{hp:2210,attack:88,defense:256},"20+":{hp:2777,attack:113,defense:321},40:{hp:4210,attack:171,defense:486},"40+":{hp:4776,attack:196,defense:256},50:{hp:5493,attack:225,defense:633},"50+":{hp:6059,attack:250,defense:698},60:{hp:6776,attack:279,defense:780},"60+":{hp:7342,attack:305,defense:845},70:{hp:8059,attack:333,defense:927},"70+":{hp:8625,attack:350,defense:992},80:{hp:9342,attack:379,defense:1075},"80+":{hp:9908,attack:396,defense:1139},90:{hp:10625,attack:425,defense:1222}},t={...e};function n(a){return e[a]}const i={name:"Normal Attack: Probe",description:'<div class="skilldescription">Basic Attack<br>Perform up to 5 consecutive attacks, dealing <span style="color: #b45bff;"><strong>Electro DMG</strong></span>.<br> <br>Heavy Attack<br>Perform a charged attack at the cost of STA, dealing <span style="color: #b45bff;"><strong>Electro DMG</strong></span>.<br> <br>Mid-air Attack<br>Perform a Plunging Attack from mid-air at the cost of STA, dealing <span style="color: #b45bff;"><strong>Electro DMG</strong></span>.<br> <br>Dodge Counter<br>Use <span class="Highlight"><strong>Basic Attack</strong></span> after a successful <span class="Highlight"><strong>Dodge</strong></span> to attack the target, dealing <span style="color: #b45bff;"><strong>Electro DMG</strong></span>.</div>',attacks:[{key:"ProbeStage1DMG",label:"Stage 1 DMG",talents:{1:"16.65%*2",2:"18.02%*2",3:"19.39%*2",4:"21.30%*2",5:"22.66%*2",6:"24.23%*2",7:"26.42%*2",8:"28.60%*2",9:"30.79%*2",10:"33.11%*2"},type:"Basic"},{key:"ProbeStage2DMG",label:"Stage 2 DMG",talents:{1:"50.10%",2:"54.21%",3:"58.32%",4:"64.07%",5:"68.18%",6:"72.91%",7:"79.48%",8:"86.05%",9:"92.62%",10:"99.61%"},type:"Basic"},{key:"ProbeStage3DMG",label:"Stage 3 DMG",talents:{1:"20.00%*3",2:"21.64%*3",3:"23.28%*3",4:"25.58%*3",5:"27.22%*3",6:"29.10%*3",7:"31.73%*3",8:"34.35%*3",9:"36.98%*3",10:"39.76%*3"},type:"Basic"},{key:"ProbeStage4DMG",label:"Stage 4 DMG",talents:{1:"26.68%*2 + 13.34%",2:"28.87%*2 + 14.44%",3:"31.06%*2 + 15.53%",4:"34.12%*2 + 17.06%",5:"36.31%*2 + 18.16%",6:"38.83%*2 + 19.42%",7:"42.33%*2 + 21.17%",8:"45.83%*2 + 22.92%",9:"49.33%*2 + 24.67%",10:"53.05%*2 + 26.53%"},type:"Basic"},{key:"ProbeStage5DMG",label:"Stage 5 DMG",talents:{1:"100.00%",2:"108.20%",3:"116.40%",4:"127.88%",5:"136.08%",6:"145.51%",7:"158.63%",8:"171.75%",9:"184.87%",10:"198.81%"},type:"Basic"},{key:"ProbeHeavyAttackDMG",label:"Heavy Attack DMG",talents:{1:"41.65%*2",2:"45.07%*2",3:"48.49%*2",4:"53.27%*2",5:"56.68%*2",6:"60.61%*2",7:"66.07%*2",8:"71.54%*2",9:"77.00%*2",10:"82.81%*2"},type:"Heavy"},{key:"ProbeMidAirAttackDMG",label:"Mid-air Attack DMG",talents:{1:"62.00%",2:"67.09%",3:"72.17%",4:"79.29%",5:"84.37%",6:"90.22%",7:"98.36%",8:"106.49%",9:"114.62%",10:"123.27%"},type:"Basic"},{key:"ProbeDodgeCounterDMG",label:"Dodge Counter DMG",talents:{1:"120.00%",2:"129.84%",3:"139.68%",4:"153.46%",5:"163.30%",6:"174.62%",7:"190.36%",8:"206.10%",9:"221.85%",10:"238.58%"},type:"Basic"}]},o={name:"Resonance Skill: Deduction",description:'<div class="skilldescription">Attack the target, dealing <span class="Thunder">Electro DMG</span>.</div>',attacks:[{key:"DeductionSkillDMG",label:"Deduction DMG",talents:{1:"100.00%",2:"108.20%",3:"116.40%",4:"127.88%",5:"136.08%",6:"145.51%",7:"158.63%",8:"171.75%",9:"184.87%",10:"198.81%"},type:"Skill"}]},r={name:"Resonance Liberation: Cogitation Model",description:'<div class="text-sm font-normal">Attack the target, dealing <span class="Thunder"><strong>Electro DMG</strong></span>. Enter <span class="Highlight"><strong>Intuition</strong></span>.<br>When in <span class="Highlight"><strong>Intuition</strong></span>:<br>-Obtain 3 Hypercube(s). Each time Resonance Skill <span class="Highlight"><strong>Law of Reigns</strong></span> is cast, consume 1 Hypercube(s). <span class="Highlight"><strong>Intuition</strong></span> ends once all Hypercubes are consumed.<br>-<span class="Highlight"><strong>Basic Attack</strong></span> and <span class="Highlight"><strong>Heavy Attack</strong></span> are replaced with Basic Attack <span class="Highlight"><strong>Pivot - Impale</strong></span>, which performs up to 3 consecutive attacks, dealing <span class="Thunder"><strong>Electro DMG</strong></span>.<br>-Resonance Skill <span class="Highlight"><strong>Deduction</strong></span> is replaced with Resonance Skill <span class="Highlight"><strong>Divergence</strong></span>, which deals <span class="Thunder"><strong>Electro DMG</strong></span>.<br>-<span class="Highlight"><strong>Dodge Counter</strong></span> is replaced with Dodge Counter <span class="Highlight"><strong>Unfathomed</strong></span>, considered as Resonance Liberation DMG.</div>',attacks:[{key:"CogitationModelDMG",label:"Cogitation Model DMG",talents:{1:"737.42%",2:"797.89%",3:"858.35%",4:"943.01%",5:"1003.48%",6:"1073.02%",7:"1169.76%",8:"1266.51%",9:"1363.26%",10:"1466.06%"},type:"Liberation"},{key:"PivotImpaleStage1DMG",label:"Pivot - Impale Stage 1 DMG",talents:{1:"60.19%",2:"65.13%",3:"70.06%",4:"76.97%",5:"81.91%",6:"87.59%",7:"95.48%",8:"103.38%",9:"111.28%",10:"119.67%"},type:"Basic"},{key:"PivotImpaleStage2DMG",label:"Pivot - Impale Stage 2 DMG",talents:{1:"30.65%*4",2:"33.16%*4",3:"35.67%*4",4:"39.19%*4",5:"41.70%*4",6:"44.59%*4",7:"48.61%*4",8:"52.63%*4",9:"56.65%*4",10:"60.92%*4"},type:"Basic"},{key:"PivotImpaleStage3DMG",label:"Pivot - Impale Stage 3 DMG",talents:{1:"67.03%*2",2:"72.52%*2",3:"78.02%*2",4:"85.71%*2",5:"91.21%*2",6:"97.53%*2",7:"106.32%*2",8:"115.12%*2",9:"123.91%*2",10:"133.25%*2"},type:"Basic"},{key:"DivergenceDMG",label:"Divergence DMG",talents:{1:"24.94%*3 + 87.29%*2",2:"26.99%*3 + 94.45%*2",3:"29.04%*3 + 101.61%*2",4:"31.90%*3 + 111.63%*2",5:"33.94%*3 + 118.79%*2",6:"36.30%*3 + 127.02%*2",7:"39.57%*3 + 138.47%*2",8:"42.84%*3 + 149.93%*2",9:"46.11%*3 + 161.38%*2",10:"49.59%*3 + 173.55%*2"},type:"Skill"},{key:"DodgeAttackUnfathomedDMG",label:"Unfathomed DMG",talents:{1:"19.53%*2 + 156.22%",2:"21.13%*2 + 169.03%",3:"22.73%*2 + 181.84%",4:"24.98%*2 + 199.77%",5:"26.58%*2 + 212.58%",6:"28.42%*2 + 227.31%",7:"30.98%*2 + 247.81%",8:"33.54%*2 + 268.30%",9:"36.10%*2 + 288.80%",10:"38.83%*2 + 310.58%"},type:"Liberation"}]},l={name:"Forte Circuit: Forever Seeking",description:'<div class="text-sm font-normal">Resonance Skill - Decipher<br>When Capacity reaches 100, Resonance Skill <span class="Highlight"><strong>Deduction</strong></span> is replaced with Resonance Skill <span class="Highlight"><strong>Decipher</strong></span>.<br>Consume 100 Capacity to cast Resonance Skill <span class="Highlight"><strong>Decipher</strong></span>, dealing <span class="Thunder"><strong>Electro DMG</strong></span>, considered as Resonance Liberation DMG.<br>Resonance Skill - Law of Reigns<br>When in <span class="Highlight"><strong>Intuition</strong></span> triggered by Resonance Liberation and Performance Capacity reaches 5, Resonance Skill <span class="Highlight"><strong>Divergence</strong></span> is replaced with Resonance Skill <span class="Highlight"><strong>Law of Reigns</strong></span>.<br>Consume 5 Performance Capacity to cast Resonance Skill <span class="Highlight"><strong>Law of Reigns</strong></span>, dealing <span class="Thunder"><strong>Electro DMG</strong></span>, considered as Resonance Liberation DMG.<br>Mid-air Attack - Revamp<br>Shortly after casting Resonance Skill <span class="Highlight"><strong>Decipher</strong></span> or Resonance Skill <span class="Highlight"><strong>Divergence</strong></span>, use <span class="Highlight"><strong>Basic Attack</strong></span> to perform Mid-air Attack <span class="Highlight"><strong>Revamp</strong></span> at the cost of STA, dealing <span class="Thunder"><strong>Electro DMG</strong></span>, considered as Resonance Liberation DMG.<br>Capacity<br>Xiangli Yao can hold up to 100 Capacity.<br>Every Normal Attack <span class="Highlight"><strong>Probe</strong></span> on hit grants Capacity.<br>Every Resonance Skill <span class="Highlight"><strong>Deduction</strong></span> on hit grants Capacity.<br>Performance Capacity<br>Xiangli Yao can hold up to 5 Performance Capacity.<br>When in <span class="Highlight"><strong>Intuition</strong></span> triggered by Resonance Liberation:<br>Obtain 1 Performance Capacity when Stage 1 of Basic Attack <span class="Highlight"><strong>Pivot - Impale</strong></span> hits a target.<br>Obtain 2 Performance Capacity when Stage 2 or 3 of Basic Attack <span class="Highlight"><strong>Pivot - Impale</strong></span> hits a target.<br>Obtain 2 Performance Capacity for every Resonance Skill <span class="Highlight"><strong>Divergence</strong></span> on hit.<br>Obtain 3 Performance Capacity for every Mid-air Attack <span class="Highlight"><strong>Revamp</strong></span> on hit.<br>Obtain 2 Performance Capacity for every Dodge Counter <span class="Highlight"><strong>Unfathomed</strong></span> on hit.</div>',attacks:[{key:"DecipherDMG",label:"Decipher DMG",talents:{1:"200.10%",2:"216.51%",3:"232.92%",4:"255.89%",5:"272.30%",6:"291.17%",7:"317.42%",8:"343.68%",9:"369.93%",10:"397.82%"},type:"Liberation"},{key:"LawofReignsDMG",label:"Law of Reigns DMG",talents:{1:"48.15%*4 + 128.40%",2:"52.10%*4 + 138.93%",3:"56.05%*4 + 149.46%",4:"61.58%*4 + 164.20%",5:"65.53%*4 + 174.73%",6:"70.07%*4 + 186.84%",7:"76.39%*4 + 203.69%",8:"82.70%*4 + 220.53%",9:"89.02%*4 + 237.38%",10:"95.73%*4 + 255.28%"},type:"Liberation"},{key:"RevampDMG",label:"Revamp DMG",talents:{1:"11.00%*4 + 33.00%*2",2:"11.91%*4 + 35.71%*2",3:"12.81%*4 + 38.42%*2",4:"14.07%*4 + 42.21%*2",5:"14.97%*4 + 44.91%*2",6:"16.01%*4 + 48.02%*2",7:"17.45%*4 + 52.35%*2",8:"18.90%*4 + 56.68%*2",9:"20.34%*4 + 61.01%*2",10:"21.87%*4 + 65.61%*2"},type:"Liberation"},{key:"SequenceNode1ProdigyofProteges",label:"S1: Prodigy of Protégés DMG",talents:{1:"25.68%*6",2:"27.79%*6",3:"29.90%*6",4:"32.84%*6",5:"34.95%*6",6:"37.37%*6",7:"40.74%*6",8:"44.11%*6",9:"47.48%*6",10:"51.06%*6"},type:"Liberation",requiresResonanceChain:"SequenceNode1ProdigyofProteges"}]},c={name:"Intro Skill: Principle",description:'<div class="skilldescription">Attack the target, dealing <span class="Thunder">Electro DMG</span>.</div>',attacks:[{key:"PrincipleSkillDMG",label:"Principle DMG",talents:{1:"50.00%*2",2:"54.10%*2",3:"58.20%*2",4:"63.94%*2",5:"68.04%*2",6:"72.76%*2",7:"79.32%*2",8:"85.88%*2",9:"92.44%*2",10:"99.41%*2"},type:"Intro"}]},g=[{key:"InherentSkillKnowing",name:"Inherent Skill: Knowing",details:'<div class="skilldescription">Gain 5% Electro DMG Bonus after casting Resonance Skill for 8s, stackable for up to 4 times.</div>',hasStacks:!0,modifiers:[{modifier:"Electro",modifierValue:.05}],minStacks:0,maxStacks:4,alwaysEnabled:!1},{key:"StatBonusCritDMG1",name:"Stat Bonus: Crit. DMG+",details:'<div class="skilldescription">Crit. DMG increased by 2.40%.</div>',hasStacks:!1,modifiers:[{modifier:"CritDMG",modifierValue:.024}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusCritDMG2",name:"Stat Bonus: Crit. DMG+",details:'<div class="skilldescription">Crit. DMG increased by 2.40%.</div>',hasStacks:!1,modifiers:[{modifier:"CritDMG",modifierValue:.024}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusCritDMG3",name:"Stat Bonus: Crit. DMG+",details:'<div class="skilldescription">Crit. DMG increased by 5.60%.</div>',hasStacks:!1,modifiers:[{modifier:"CritDMG",modifierValue:.056}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusCritDMG4",name:"Stat Bonus: Crit. DMG+",details:'<div class="skilldescription">Crit. DMG increased by 5.60%.</div>',hasStacks:!1,modifiers:[{modifier:"CritDMG",modifierValue:.056}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK1",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 1.80%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.018}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK2",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 1.80%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.018}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK3",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 4.20%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.042}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK4",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 4.20%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.042}],minStacks:0,maxStacks:0,alwaysEnabled:!1}],d=[{key:"SequenceNode1ProdigyofProteges",name:"Sequence Node 1: Prodigy of Protégés",details:`<span class="skilldescription">Resonance Skill <span class="Hightlight">Law of Reigns</span> additionally launches 6 Convolution Matrices at enemies, each dealing Resonance Liberation DMG equal to 8% of the skill's DMG Multiplier.</span>`,hasStacks:!1,modifiers:[{modifier:"EnableAttack",modifierValue:["SequenceNode1ProdigyofProteges"]}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode2TracesofPredecessors",name:"Sequence Node 2: Traces of Predecessors",details:'<span class="skilldescription">Casting Resonance Skill or Resonance Liberation <span class="Highlight">Cogitation Model</span> increases Crit. DMG by 30% for 8s.</span>',hasStacks:!1,modifiers:[{modifier:"CritDMG",modifierValue:.3}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode3RuinsofAncient",name:"Sequence Node 3: Ruins of Ancient",details:'<span class="skilldescription">Casting Resonance Liberation <span class="Highlight"><strong>Cogitation Model</strong></span> increases the DMG of the following Resonance Skill moves by 63% for 24s:<br><span class="Highlight"><strong>Decipher</strong></span>, <span class="Highlight"><strong>Deduction</strong></span>, <span class="Highlight"><strong>Divergence</strong></span>, and <span class="Highlight"><strong>Law of Reigns</strong></span>.<br>This effect can be triggered up to 5 times.</span>',hasStacks:!1,modifiers:[{modifySpecificTalents:["DecipherDMG","DeductionSkillDMG","DivergenceDMG","LawofReignsDMG","SequenceNode1ProdigyofProteges"],modifierValue:.63}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode4VesselofRebirth",name:"Sequence Node 4: Vessel of Rebirth",details:`<span class="skilldescription">Casting Resonance Liberation <span class="Highlight"><strong>Cogitation Model</strong></span> grants a 25% DMG Bonus to all team members' Resonance Liberation for 30s.</span>`,hasStacks:!1,modifiers:[{modifier:"ResonanceLiberationDMGBonus",modifierValue:.25}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode5EndofStars",name:"Sequence Node 5: End of Stars",details:'<span class="skilldescription"> The DMG Multiplier of Outro Skill <span class="Highlight"><strong>Chain Rule</strong></span> is increased by 222%. The DMG Multiplier of Resonance Liberation <span class="Highlight"><strong>Cogitation Model</strong></span> is increased by 100%. </span>',hasStacks:!1,modifiers:[{modifier:"talentModifierMultiply",modifySpecificTalents:["CogitationModelDMG"],modifierValue:1},{modifier:"talentModifierMultiply",modifySpecificTalents:["OutroSkillDMG"],modifierValue:2.22}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode6SolaceoftheOrdinary",name:"Sequence Node 6: Solace of the Ordinary",details:'<span class="skilldescription"> The Hypercubes obtained from Resonance Liberation <span class="Highlight"><strong>Cogitation Model</strong></span> are enhanced, increasing the DMG Multiplier of Resonance Skill <span class="Highlight"><strong>Law of Reigns</strong></span> by 76%.</span>',hasStacks:!1,modifiers:[{modifier:"talentModifierMultiply",modifySpecificTalents:["LawofReignsDMG","SequenceNode1ProdigyofProteges"],modifierValue:.76}],minStacks:0,maxStacks:0,alwaysEnabled:!1}],p={name:"Outro Skill: Chain Rule",description:`<div class="skilldescription">Xiangli Yao will call down a laser beam upon the first target the incoming Resonator's <span class="Highlight"><strong>Basic Attack</strong></span> hits, dealing <span class="Thunder"><strong>Electro DMG</strong></span> equal to 237.63% of Xiangli Yao's ATK to an area. This effect lasts for 8s and can be triggered once every 2s, up to 3 times.</div>`,attacks:[{key:"OutroSkillDMG",label:"Chain Rule Coordinated Outro DMG",talent:"237.63%",type:"Outro",subType:"Coordinated"}]};function h(){return{basic:s(),character:t,getCharacterStatsByLevel:n,basicAttacks:i,skillAttacks:o,liberationAttacks:r,forteCircuitAttacks:l,introAttacks:c,buffs:g,resonanceChains:d,outroAttacks:p}}export{h as getData};