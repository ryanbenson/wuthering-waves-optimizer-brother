function s(){return{name:"Mortefi",rarity:4,weapon:"Pistols",avatarUrl:"Mortefi.jpg",gender:"male",element:"Fusion"}}const a={1:{hp:802,attack:20,defense:93},20:{hp:2086,attack:52,defense:238},"20+":{hp:2620,attack:67,defense:298},40:{hp:3972,attack:100,defense:452},"40+":{hp:4507,attack:115,defense:238},50:{hp:5182,attack:132,defense:589},"50+":{hp:5717,attack:147,defense:649},60:{hp:6393,attack:164,defense:725},"60+":{hp:6928,attack:179,defense:786},70:{hp:7603,attack:196,defense:862},"70+":{hp:8138,attack:206,defense:923},80:{hp:8814,attack:223,defense:999},"80+":{hp:9349,attack:233,defense:1060},90:{hp:10025,attack:250,defense:1136}},t={...a};function i(e){return a[e]}const n={name:"Normal Attack: Impromptu Show",description:'<div class="skilldescription"><span class="Title">Basic Attack</span><br>Mortefi uses his dual pistols and flames to perform up to 4 consecutive shots, dealing <span class="Fire">Fusion DMG</span>.<br> <br><span class="Title">Heavy Attack</span><br>Mortefi enters the aiming state for a more powerful shot.<br>The aimed shot fired after charging finishes deals <span class="Fire">Fusion DMG</span>.<br> <br><span class="Title">Mid-air Attack</span><br>Mortefi consumes STA to perform consecutive shots at the target in mid-air, dealing <span class="Fire">Fusion DMG</span>.<br> <br><span class="Title">Dodge Counter</span><br>Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Fire">Fusion DMG</span>.</div>',attacks:[{key:"ImpromptuShowStage1DMG",label:"Stage 1 DMG",talents:{1:"24.29%",2:"26.29%",3:"28.28%",4:"31.07%",5:"33.06%",6:"35.35%",7:"38.54%",8:"41.72%",9:"44.91%",10:"48.30%"},type:"Basic"},{key:"ImpromptuShowStage2DMG",label:"Stage 2 DMG",talents:{1:"20.51%*2",2:"22.20%*2",3:"23.88%*2",4:"26.23%*2",5:"27.92%*2",6:"29.85%*2",7:"32.54%*2",8:"35.23%*2",9:"37.92%*2",10:"40.78%*2"},type:"Basic"},{key:"ImpromptuShowStage3DMG",label:"Stage 3 DMG",talents:{1:"53.97%",2:"58.40%",3:"62.83%",4:"69.02%",5:"73.45%",6:"78.54%",7:"85.62%",8:"92.70%",9:"99.78%",10:"107.30%"},type:"Basic"},{key:"ImpromptuShowStage4DMG",label:"Stage 4 DMG",talents:{1:"10.57%*4 + 63.84%",2:"11.44%*4 + 69.08%",3:"12.31%*4 + 74.31%",4:"13.52%*4 + 81.64%",5:"14.39%*4 + 86.88%",6:"15.39%*4 + 92.90%",7:"16.77%*4 + 101.27%",8:"18.16%*4 + 109.65%",9:"19.55%*4 + 118.03%",10:"21.02%*4 + 126.93%"},type:"Basic"},{key:"ImpromptuShowAimedShotDMG",label:"Aimed Shot DMG",talents:{1:"49.14%",2:"53.17%",3:"57.20%",4:"62.85%",5:"66.87%",6:"71.51%",7:"77.96%",8:"84.40%",9:"90.85%",10:"97.70%"},type:"Heavy"},{key:"ImpromptuShowFullyChargedAimedShotDMG",label:"Fully Charged Aimed Shot DMG",talents:{1:"84.00%",2:"90.89%",3:"97.78%",4:"107.42%",5:"114.31%",6:"122.23%",7:"133.25%",8:"144.27%",9:"155.30%",10:"167.01%"},type:"Heavy"},{key:"ImpromptuShowMidAirAttackStage1DMG",label:"Mid-air Attack Stage 1 DMG",talents:{1:"11.69%",2:"12.65%",3:"13.61%",4:"14.95%",5:"15.91%",6:"17.02%",7:"18.55%",8:"20.08%",9:"21.62%",10:"23.25%"},type:"Basic"},{key:"ImpromptuShowMidAirAttackStage2DMG",label:"Mid-air Attack Stage 2 DMG",talents:{1:"11.69%",2:"12.65%",3:"13.61%",4:"14.95%",5:"15.91%",6:"17.02%",7:"18.55%",8:"20.08%",9:"21.62%",10:"23.25%"},type:"Basic"},{key:"ImpromptuShowDodgeCounterDMG",label:"Dodge Counter DMG",talents:{1:"98.07%",2:"106.12%",3:"114.16%",4:"125.42%",5:"133.46%",6:"142.71%",7:"155.57%",8:"168.44%",9:"181.31%",10:"194.98%"},type:"Basic"}]},l={name:"Resonance Skill: Passionate Variation",description:'<div class="skilldescription">Launch a flashing lightning of flames forward, dealing <span class="Fire">Fusion DMG</span>.</div>',attacks:[{key:"PassionateVariation",label:"Passionate Variation DMG",talents:{1:"105.00%",2:"113.61%",3:"122.22%",4:"134.28%",5:"142.89%",6:"152.79%",7:"166.57%",8:"180.34%",9:"194.12%",10:"208.76%"},type:"Skill"},{key:"SequenceNodeFuneraryQuartet",label:"S5: Funerary Quartet DMG",talents:{1:"8.00%",2:"8.66%",3:"9.32%",4:"10.24%",5:"10.89%",6:"11.65%",7:"12.70%",8:"13.74%",9:"14.79%",10:"15.91%"},type:"Basic",subType:"Coordinated",requiresResonanceChain:"SequenceNodeFuneraryQuartet"}]},o={name:"Resonance Liberation: Violent Finale",description:`<div class="skilldescription">Deal <span class="Fire">Fusion DMG</span>, and apply <span class="Highlight">Burning Rhapsody</span> to all characters on the team.<br> <br><span class="Title">Burning Rhapsody</span><br>When the active character's <span class="Highlight">Basic Attack</span> hits the target, Mortefi launches a Coordinated Attack, firing 1 <span class="Highlight">Marcato</span>.<br>When the active character's <span class="Highlight">Heavy Attack</span> hits the target, Mortefi launches a Coordinated Attack, firing 2 <span class="Highlight">Marcato</span>.<br>Mortefi can launch one Coordinated Attack every 0.35s.<br> <br><span class="Title">Marcato</span><br>Deals <span class="Fire">Fusion DMG</span>.</div>`,attacks:[{key:"ViolentFinaleDamage",label:"Violent Finale DMG",talents:{1:"80.00%",2:"86.56%",3:"93.12%",4:"102.31%",5:"108.87%",6:"116.41%",7:"126.91%",8:"137.40%",9:"147.90%",10:"159.05%"},type:"Liberation"},{key:"MarcatoDamage",label:"Marcato DMG",talents:{1:"16.00%",2:"17.32%",3:"18.63%",4:"20.47%",5:"21.78%",6:"23.29%",7:"25.39%",8:"27.48%",9:"29.58%",10:"31.81%"},type:"Liberation",subType:"Coordinated"}]},r={name:"Forte Circuit: Fury Fugue",description:`<div class="skilldescription"><span class="Title">Resonance Skill: Fury Fugue</span><br>When Mortefi's Annoyance reaches 100, his <span class="Highlight">Resonance Skill</span> is replaced with <span class="Highlight">Fury Fudge</span>.<br>When casting Fury Fudge, Mortefi consumes all Annoyance to unleash high-speed flame lightning, dealing <span class="Fire">Fusion DMG</span>, considered as Resonance Skill damage.<br> <br><span class="Title">Annoyance</span><br>Mortefi can hold up to 100 Annoyance and can restore Annoyance in the following ways:<br>- When Normal Attack <span class="Highlight">Impromptu Show</span> hits the target<br>- When Intro Skill <span class="Highlight">Dissonance</span> hits the target<br>- When Resonance Skill <span class="Highlight">Passionate Variation</span> hits the target<br>- Within 5s after casting <span class="Highlight">Passionate Variation</span>, Normal Attack <span class="Highlight">Impromptu Show</span> that hits the target restores Annoyance additionally.</div>`,attacks:[{key:"FuryFugueDamage",label:"Fury Fugue DMG",talents:{1:"164.00%",2:"177.45%",3:"190.90%",4:"209.73%",5:"223.18%",6:"238.64%",7:"260.16%",8:"281.67%",9:"303.19%",10:"326.05%"},type:"Skill"}]},c={name:"Intro Skill: Dissonance",description:'<div class="skilldescription">Attack the target, dealing <span class="Fire">Fusion DMG</span>.</div>',attacks:[{key:"DissonanceSkillDMG",label:"Dissonance DMG",talents:{1:"85.00%",2:"91.97%",3:"98.94%",4:"108.70%",5:"115.67%",6:"123.69%",7:"134.84%",8:"145.99%",9:"157.14%",10:"168.99%"},type:"Intro"}]},d=[{key:"InherentSkillHarmonicControl",name:"Inherent Skill: Harmonic Control",details:'<div class="skilldescription">After casting Resonance Skill <span class="Highlight">Passionate Variation</span>, the damage of Resonance Skill <span class="Highlight">Fury Fugue</span> is increased by 25% for 8s.</div>',hasStacks:!1,modifiers:[{modifySpecificTalents:["FuryFugueDamage"],modifierValue:.25}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"InherentSkillRhythmicVibrato",name:"Inherent Skill: Rhythmic Vibrato",details:'<div class="skilldescription">During Resonance Liberation <span class="Highlight">Burning Rhapsody</span>, each hit of Resonance Liberation <span class="Highlight">Marcato</span> will increase the DMG of the next Resonance Liberation <span class="Highlight">Marcato</span> by 1.5%, which can be triggered once every 0.35s, stacking up to 50 times.<br>The effect will be reset after Resonance Liberation <span class="Highlight">Burning Rhapsody</span> ends.</div>',hasStacks:!0,modifiers:[{modifySpecificTalents:["MarcatoDamage","SequenceNodeFuneraryQuartet"],modifierValue:.015}],minStacks:0,maxStacks:50,alwaysEnabled:!1},{key:"StatBonusFusionDMGBonus1",name:"Stat Bonus: Fusion DMG Bonus+",details:'<div class="skilldescription">Fusion DMG Bonus increased by 1.80%.</div>',hasStacks:!1,modifiers:[{modifier:"Fusion",modifierValue:.018}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusFusionDMGBonus2",name:"Stat Bonus: Fusion DMG Bonus+",details:'<div class="skilldescription">Fusion DMG Bonus increased by 1.80%.</div>',hasStacks:!1,modifiers:[{modifier:"Fusion",modifierValue:.018}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusFusionDMGBonus3",name:"Stat Bonus: Fusion DMG Bonus+",details:'<div class="skilldescription">Fusion DMG Bonus increased by 4.20%.</div>',hasStacks:!1,modifiers:[{modifier:"Fusion",modifierValue:.042}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusFusionDMGBonus4",name:"Stat Bonus: Fusion DMG Bonus+",details:'<div class="skilldescription">Fusion DMG Bonus increased by 4.20%.</div>',hasStacks:!1,modifiers:[{modifier:"Fusion",modifierValue:.042}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK1",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 1.80%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.018}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK2",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 1.80%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.018}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK3",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 4.20%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.042}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK4",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 4.20%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.042}],minStacks:0,maxStacks:0,alwaysEnabled:!1}],p=[{key:"SequenceNode3FlamingRecitativo",name:"Sequence Node 3: Flaming Recitativo",details:`<span class="skilldescription">During Resonance Liberation <span class="Highlight">Burning Rhapsody</span>, the Crit. DMG of Resonance Liberation's <span class="Highlight">Marcato</span> is increased by 30%.</span>`,hasStacks:!1,modifiers:[{modifier:"CritDMG",modifySpecificTalents:["MarcatoDamage","SequenceNodeFuneraryQuartet"],modifierValue:.3}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNodeFuneraryQuartet",name:"Sequence Node 5: Funerary Quartet",details:`<span class="skilldescription">When Resonance Skill <span class="Highlight">Passionate Variation</span> or Resonance Skill <span class="Highlight">Fury Fugue</span> hits a target, Coordinated Attacks will be triggered to fire 4 Resonance Liberation's <span class="Highlight">Marcato</span> hit(s), dealing <span class="Fire">Fusion Damage</span>. DMG of Resonance Liberation's <span class="Highlight">Marcato</span> fired in this way is reduced by 50%.</span>`,hasStacks:!1,modifiers:[{modifier:"EnableAttack",modifierValue:["SequenceNodeFuneraryQuartet"]}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode6ApoplecticInstrumental",name:"Sequence Node 6: Apoplectic Instrumental",details:'<span class="skilldescription">When Resonance Liberation <span class="Highlight">Violent Finale</span> is cast, ATK of all team members is increased by 20% for 20s.</span>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.2}],minStacks:0,maxStacks:0,alwaysEnabled:!1}],h={name:"Outro Skill: Rage Transposition",description:'<div class="skilldescription">The incoming Resonator gains 38% Heavy Attack DMG Amplification for 14s or until they are switched out.</div>',attacks:[]};function u(){return{basic:s(),character:t,getCharacterStatsByLevel:i,basicAttacks:n,skillAttacks:l,liberationAttacks:o,forteCircuitAttacks:r,introAttacks:c,buffs:d,resonanceChains:p,outroAttacks:h}}export{u as getData};