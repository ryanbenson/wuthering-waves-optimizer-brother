function s(){return{name:"Yaunwu",rarity:4,weapon:"Gauntlets",avatarUrl:"Yaunwu.jpg",gender:"male",element:"Electro"}}const e={1:{hp:682,attack:18,defense:134},20:{hp:1773,attack:46,defense:343},"20+":{hp:2228,attack:60,defense:430},40:{hp:3378,attack:90,defense:651},"40+":{hp:3832,attack:104,defense:343},50:{hp:4407,attack:119,defense:848},"50+":{hp:4862,attack:132,defense:935},60:{hp:5436,attack:147,defense:1045},"60+":{hp:5891,attack:161,defense:1132},70:{hp:6466,attack:176,defense:1243},"70+":{hp:6920,attack:185,defense:1330},80:{hp:7495,attack:200,defense:1440},"80+":{hp:7950,attack:209,defense:1527},90:{hp:8525,attack:225,defense:1637}},t={...e};function n(a){return e[a]}const i={name:"Normal Attack: Leihuangquan",description:'<div class="skilldescription"><span class="Title">Basic Attack</span><br>Yuanwu performs up to 5 consecutive attacks, dealing <span class="Thunder">Electro DMG</span>.<br> <br><span class="Title">Heavy Attack</span><br>Yuanwu consumes STA to attack the target, dealing <span class="Thunder">Electro DMG</span>.<br> <br><span class="Title">Mid-air Attack</span><br>Yuanwu consumes STA to launch a Mid-air Plunging Attack, dealing <span class="Thunder">Electro DMG</span>.<br> <br><span class="Title">Dodge Counter</span><br>Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Thunder">Electro DMG</span>.</div>',attacks:[{key:"LeihuangquanStage1DMG",label:"Stage 1 DMG",talents:{1:"24.70%",2:"26.73%",3:"28.76%",4:"31.59%",5:"33.62%",6:"35.95%",7:"39.19%",8:"42.43%",9:"45.67%",10:"49.11%"},type:"Basic"},{key:"LeihuangquanStage2DMG",label:"Stage 2 DMG",talents:{1:"26.06%*2",2:"28.20%*2",3:"30.34%*2",4:"33.33%*2",5:"35.46%*2",6:"37.92%*2",7:"41.34%*2",8:"44.76%*2",9:"48.18%*2",10:"51.81%*2"},type:"Basic"},{key:"LeihuangquanStage3DMG",label:"Stage 3 DMG",talents:{1:"10.99%*2 + 16.48%*2",2:"11.89%*2 + 17.83%*2",3:"12.79%*2 + 19.18%*2",4:"14.05%*2 + 21.07%*2",5:"14.95%*2 + 22.42%*2",6:"15.99%*2 + 23.98%*2",7:"17.43%*2 + 26.14%*2",8:"18.87%*2 + 28.30%*2",9:"20.31%*2 + 30.46%*2",10:"21.84%*2 + 32.76%*2"},type:"Basic"},{key:"LeihuangquanStage4DMG",label:"Stage 4 DMG",talents:{1:"26.06%*2",2:"28.20%*2",3:"30.34%*2",4:"33.33%*2",5:"35.46%*2",6:"37.92%*2",7:"41.34%*2",8:"44.76%*2",9:"48.18%*2",10:"51.81%*2"},type:"Basic"},{key:"LeihuangquanStage5DMG",label:"Stage 5 DMG",talents:{1:"24.70%*2 + 32.94%",2:"26.73%*2 + 35.64%",3:"28.76%*2 + 38.34%",4:"31.59%*2 + 42.12%",5:"33.62%*2 + 44.82%",6:"35.95%*2 + 47.93%",7:"39.19%*2 + 52.25%",8:"42.43%*2 + 56.57%",9:"45.67%*2 + 60.89%",10:"49.11%*2 + 65.48%"},type:"Basic"},{key:"LeihuangquanHeavyAttackDMG",label:"Heavy Attack DMG",talents:{1:"80.00%",2:"86.56%",3:"93.12%",4:"102.31%",5:"108.87%",6:"116.41%",7:"126.91%",8:"137.40%",9:"147.90%",10:"159.05%"},type:"Heavy"},{key:"LeihuangquanMidairAttackDMG",label:"Mid-air Attack DMG",talents:{1:"49.60%",2:"53.67%",3:"57.74%",4:"63.43%",5:"67.50%",6:"72.18%",7:"78.69%",8:"85.19%",9:"91.70%",10:"98.61%"},type:"Basic"},{key:"LeihuangquanDodgeCounterDMG",label:"Dodge Counter DMG",talents:{1:"57.60%*2",2:"62.33%*2",3:"67.05%*2",4:"73.66%*2",5:"78.39%*2",6:"83.82%*2",7:"91.38%*2",8:"98.93%*2",9:"106.49%*2",10:"114.52%*2"},type:"Basic"}]},l={name:"Resonance Skill: Leihuang Master",description:'<div class="skilldescription"><span class="Title">Thunder Wedge</span><br>Yuanwu summons <span class="Highlight">Thunder Wedge</span>, dealing <span class="Thunder">Electro DMG</span>, and forms a <span class="Highlight">Thunder Field</span> centered on the <span class="Highlight">Thunder Wedge</span>. <span class="Highlight">Thunder Wedge</span> lasts for 12s.<br>Forte Circuit <span class="Highlight">Rumbling Spark</span> and Resonance Liberation <span class="Highlight">Blazing Might</span> will immediately detonate Resonance Skill <span class="Highlight">Thunder Wedge</span> on the field, dealing <span class="Thunder">Electro DMG</span>, considered as Resonance Skill DMG.<br> <br><span class="Title">Thunder Field</span><br>The active character gains the effects below when in the <span class="Highlight">Thunder Field</span>: a Coordinated Attack from Resonance Skill <span class="Highlight">Thunder Wedge</span> is triggered when attacks hit a target, dealing <span class="Thunder">Electro DMG</span>. This can be triggered once every 1.2s. The effect lasts for 1.5s.</div>',attacks:[{key:"LeihuangMasterSkillDMG",label:"Leihuang Master DMG",talents:{1:"12.00%",2:"12.99%",3:"13.97%",4:"15.35%",5:"16.33%",6:"17.47%",7:"19.04%",8:"20.61%",9:"22.19%",10:"23.86%"},type:"Skill",attribute:"defense"},{key:"ThunderWedgeCoordinatedAttackDMG",label:"Thunder Wedge Coordinated Attack DMG",talents:{1:"4.00%",2:"4.33%",3:"4.66%",4:"5.12%",5:"5.45%",6:"5.83%",7:"6.35%",8:"6.87%",9:"7.40%",10:"7.96%"},type:"Skill",subType:"Coordinated",attribute:"defense"},{key:"ThunderWedgeDetonationDMG",label:"Thunder Wedge Detonation DMG",talents:{1:"30.00%",2:"32.46%",3:"34.92%",4:"38.37%",5:"40.83%",6:"43.66%",7:"47.59%",8:"51.53%",9:"55.47%",10:"59.65%"},type:"Skill",attribute:"defense"},{key:"RumblingSparkDMG",label:"Rumbling Spark DMG",talents:{1:"54.60%",2:"59.07%",3:"63.55%",4:"69.82%",5:"74.29%",6:"79.44%",7:"86.60%",8:"93.76%",9:"100.93%",10:"108.54%"},type:"Skill",attribute:"defense"}]},c={name:"Resonance Liberation: Blazing Might",description:'<div class="skilldescription">Awaken the power of thunder and provide Forte Circuit <span class="Highlight">Lightning Infused</span> status to all characters on a nearby team for 10s, then perform a powerful blow that deals <span class="Thunder">Electro DMG</span>.<br> </div>',attacks:[{key:"BlazingMightSkillDMG",label:"Blazing Might DMG",talents:{1:"88.00%*2",2:"95.22%*2",3:"102.44%*2",4:"112.54%*2",5:"119.76%*2",6:"128.05%*2",7:"139.60%*2",8:"151.14%*2",9:"162.69%*2",10:"174.96%*2"},type:"Liberation",attribute:"defense"},{key:"RetributiveKnucklesShield",label:"Retributive Knuckles Shield",talents:{1:"200%",2:"200%",3:"200%",4:"200%",5:"200%",6:"200%",7:"200%",8:"200%",9:"200%",10:"200%"},type:"Shield",attribute:"defense",requiresResonanceChain:"SequenceNode4RetributiveKnuckles"}]},r={name:"Forte Circuit: Unassuming Blade",description:'<div class="skilldescription"><span class="Title">Rumbling Spark</span><br>When "Readiness" is full, long press <span class="Highlight">Resonance Skill</span> to consume all "Readiness" and cast <span class="Highlight">Rumbling Spark</span>, dealing <span class="Thunder">Electro DMG</span> and entering the <span class="Highlight">Lightning Infused</span> state.<br> <br><span class="Title">Thunder Uprising</span><br>When "Readiness" is full, Resonance Skill <span class="Highlight">Thunder Wedge</span> will be replaced with <span class="Highlight">Thunder Uprising</span>, dealing <span class="Thunder">Electro DMG</span>.<br> <br><span class="Title">Lightning Infused</span><br>The character in <span class="Highlight">Lightning Infused</span> state has a greatly increased resistance to interruption.<br>When Yuanwu is in this state:<br>-<span class="Highlight">Basic Attacks</span>: Hit targets in a larger range, reduce enemy Vibration Strength with increased efficiency.<br>-<span class="Highlight">Heavy Attacks</span>: Have increased attack speed, reduce enemy Vibration Strength with increased efficiency.<br>-<span class="Highlight">Dodge Counters</span>: Have increased attack speed, reduce enemy Vibration Strength with increased efficiency.<br>-Use <span class="Highlight">Basic Attack</span> within 3s after casting a <span class="Highlight">Heavy Attack</span> or a successful <span class="Highlight">Counterattack</span> to cast <span class="Highlight">Thunderweaver</span>, dealing <span class="Thunder">Electro DMG</span>, considered as Basic Attack DMG.<br>-Does not recover "Readiness".<br> <br><span class="Title">Readiness</span><br>Yuanwu can hold up to 100 "Readiness".<br>When Resonance Skill <span class="Highlight">Thunder Wedge</span> is on the field, Yuanwu gains 6 "Readiness" every second, even when he is not the active character;<br>When Resonance Skill <span class="Highlight">Thunder Wedge</span> hits a target with a Coordinated Attack, Yuanwu gains 5 "Readiness".</div>',attacks:[{key:"ThunderUprisingDMG",label:"Thunder Uprising DMG",talents:{1:"20.00%",2:"21.64%",3:"23.28%",4:"25.58%",5:"27.22%",6:"29.11%",7:"31.73%",8:"34.35%",9:"36.98%",10:"39.77%"},type:"Skill",attribute:"defense"},{key:"LightningInfusedBasicAttackStage1DMG",label:"Lightning Infused Basic Attack Stage 1 DMG",talents:{1:"12.35%",2:"13.37%",3:"14.38%",4:"15.80%",5:"16.81%",6:"17.98%",7:"19.60%",8:"21.22%",9:"22.84%",10:"24.56%"},type:"Basic",attribute:"defense"},{key:"LightningInfusedBasicAttackStage2DMG",label:"Lightning Infused Basic Attack Stage 2 DMG",talents:{1:"13.03%*2",2:"14.10%*2",3:"15.17%*2",4:"16.67%*2",5:"17.73%*2",6:"18.96%*2",7:"20.67%*2",8:"22.38%*2",9:"24.09%*2",10:"25.91%*2"},type:"Basic",attribute:"defense"},{key:"LightningInfusedBasicAttackStage3DMG",label:"Lightning Infused Basic Attack Stage 3 DMG",talents:{1:"5.50%*2 + 8.24%*2",2:"5.95%*2 + 8.92%*2",3:"6.40%*2 + 9.59%*2",4:"7.03%*2 + 10.54%*2",5:"7.48%*2 + 11.21%*2",6:"8.00%*2 + 11.99%*2",7:"8.72%*2 + 13.07%*2",8:"9.44%*2 + 14.15%*2",9:"10.16%*2 + 15.23%*2",10:"10.92%*2 + 16.38%*2"},type:"Basic",attribute:"defense"},{key:"LightningInfusedBasicAttackStage4DMG",label:"Lightning Infused Basic Attack Stage 4 DMG",talents:{1:"5.77%*5",2:"6.24%*5",3:"6.71%*5",4:"7.38%*5",5:"7.85%*5",6:"8.39%*5",7:"9.15%*5",8:"9.90%*5",9:"10.66%*5",10:"11.46%*5"},type:"Basic",attribute:"defense"},{key:"LightningInfusedBasicAttackPartVDMG",label:"Lightning Infused Basic Attack Part V DMG",talents:{1:"8.24%*3 + 16.47%",2:"8.91%*3 + 17.82%",3:"9.59%*3 + 19.17%",4:"10.53%*3 + 21.06%",5:"11.21%*3 + 22.41%",6:"11.99%*3 + 23.97%",7:"13.07%*3 + 26.13%",8:"14.15%*3 + 28.29%",9:"15.23%*3 + 30.45%",10:"16.37%*3 + 32.74%"},type:"Basic",attribute:"defense"},{key:"LightningInfusedHeavyAttackDMG",label:"Lightning Infused Heavy Attack DMG",talents:{1:"15.60%",2:"16.88%",3:"18.16%",4:"19.95%",5:"21.23%",6:"22.70%",7:"24.75%",8:"26.80%",9:"28.84%",10:"31.02%"},type:"Heavy",attribute:"defense"},{key:"ThunderweaverDMG",label:"Thunderweaver DMG",talents:{1:"15.60% + 10.40%*2",2:"16.88% + 11.26%*2",3:"18.16% + 12.11%*2",4:"19.95% + 13.30%*2",5:"21.23% + 14.16%*2",6:"22.70% + 15.14%*2",7:"24.75% + 16.50%*2",8:"26.80% + 17.87%*2",9:"28.84% + 19.23%*2",10:"31.02% + 20.68%*2"},type:"Basic",attribute:"defense"},{key:"LightningInfusedDodgeCounterDMG",label:"Lightning Infused Dodge Counter DMG",talents:{1:"21.76% + 16.32%*2",2:"23.55% + 17.66%*2",3:"25.33% + 19.00%*2",4:"27.83% + 20.88%*2",5:"29.62% + 22.21%*2",6:"31.67% + 23.75%*2",7:"34.52% + 25.89%*2",8:"37.38% + 28.03%*2",9:"40.23% + 30.18%*2",10:"43.27% + 32.45%*2"},type:"Basic",attribute:"defense"}]},d={name:"Intro Skill: Thunder Bombardment",description:'<div class="skilldescription">Attack the target, dealing <span class="Thunder">Electro DMG</span>.</div>',attacks:[{key:"ThunderBombardmentSkillDMG",label:"Thunder Bombardment DMG",talents:{1:"32.00%",2:"34.63%",3:"37.25%",4:"40.93%",5:"43.55%",6:"46.57%",7:"50.77%",8:"54.96%",9:"59.16%",10:"63.62%"},type:"Intro",attribute:"defense"}]},o=[{key:"InherentSkillThunderous Determination",name:"Inherent Skill: Thunderous Determination",details:'<div class="skilldescription">The DMG multiplier of Resonance Skill <span class="Highlight">Thunder Uprising</span> is increased by 40%, and its reduction efficiency of enemy Vibration Strength is enhanced.</div>',hasStacks:!1,modifiers:[{modifier:"talentModifierMultiply",modifySpecificTalents:["ThunderUprisingDMG"],modifierValue:.4}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusElectroDMGBonus1",name:"Stat Bonus: Electro DMG Bonus+",details:'<div class="skilldescription">Electro DMG Bonus increased by 1.80%.</div>',hasStacks:!1,modifiers:[{modifier:"Electro",modifierValue:.018}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusElectroDMGBonus2",name:"Stat Bonus: Electro DMG Bonus+",details:'<div class="skilldescription">Electro DMG Bonus increased by 1.80%.</div>',hasStacks:!1,modifiers:[{modifier:"Electro",modifierValue:.018}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusElectroDMGBonus3",name:"Stat Bonus: Electro DMG Bonus+",details:'<div class="skilldescription">Electro DMG Bonus increased by 4.20%.</div>',hasStacks:!1,modifiers:[{modifier:"Electro",modifierValue:.042}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusElectroDMGBonus4",name:"Stat Bonus: Electro DMG Bonus+",details:'<div class="skilldescription">Electro DMG Bonus increased by 4.20%.</div>',hasStacks:!1,modifiers:[{modifier:"Electro",modifierValue:.042}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusDEF1",name:"Stat Bonus: DEF+",details:'<div class="skilldescription">DEF increased by 2.28%.</div>',hasStacks:!1,modifiers:[{modifier:"DEF",modifierValue:.028}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusDEF2",name:"Stat Bonus: DEF+",details:'<div class="skilldescription">DEF increased by 2.28%.</div>',hasStacks:!1,modifiers:[{modifier:"DEF",modifierValue:.028}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusDEF3",name:"Stat Bonus: DEF+",details:'<div class="skilldescription">DEF increased by 5.32%.</div>',hasStacks:!1,modifiers:[{modifier:"DEF",modifierValue:.0532}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusDEF4",name:"Stat Bonus: DEF+",details:'<div class="skilldescription">DEF increased by 5.32%.</div>',hasStacks:!1,modifiers:[{modifier:"DEF",modifierValue:.0532}],minStacks:0,maxStacks:0,alwaysEnabled:!1}],u=[{key:"SequenceNode3UpholderofIntegrity",name:"Sequence Node 3: Upholder of Integrity",details:`<span class="skilldescription">When the Coordinated Attacks of Resonance Skill's <span class="Highlight">Thunder Wedge</span> hits a target, the damage is additionally increased by 20% of Yuanwu's DEF.</span>`,hasStacks:!1,modifiers:[{modifier:"Talent",modifierTalentKey:"ThunderWedgeCoordinatedAttackDMG",modifierValue:{1:.2,2:.2,3:.2,4:.2,5:.2,6:.2,7:.2,8:.2,9:.2,10:.2},modifierValueTalentRef:"skill"}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode4RetributiveKnuckles",name:"Sequence Node 4: Retributive Knuckles",details:`<span class="skilldescription">When casting Resonance Liberation <span class="Highlight">Blazing Might</span>, the on-field character will gain a Shield equal to 200% of Yuanwu's DEF for 10s.</span>`,hasStacks:!1,modifiers:[{modifier:"EnableAttack",modifierValue:["SequenceNode4RetributiveKnuckles"]}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode5NeighborhoodProtector",name:"Sequence Node 5: Neighborhood Protector",details:`<span class="skilldescription">When Resonance Skill <span class="Highlight">Thunder Wedge</span> is on the field, Yuanwu's Resonance Liberation DMG Bonus is increased by 50%.</span>`,hasStacks:!1,modifiers:[{modifier:"ResonanceLiberationDMGBonus",modifierValue:.5}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode6DefenderofAllRealms",name:"Sequence Node 6: Defender of All Realms",details:'<span class="skilldescription">All team members nearby within the range of Resonance Skill <span class="Highlight">Thunder Wedge</span> will gain a 32% DEF increase, lasting 3s.</span>',hasStacks:!1,modifiers:[{modifier:"DEF",modifierValue:.32}],minStacks:0,maxStacks:0,alwaysEnabled:!1}],h={name:"Outro Skill: Lightning Manipulation",description:'<div class="skilldescription">Yuanwu unleashes thunderbolts in an area centered around the skill target, greatly reducing the Vibration Strength of enemies upon impact.</div>',attacks:[]};function g(){return{basic:s(),character:t,getCharacterStatsByLevel:n,basicAttacks:i,skillAttacks:l,liberationAttacks:c,forteCircuitAttacks:r,introAttacks:d,buffs:o,resonanceChains:u,outroAttacks:h}}export{g as getData};