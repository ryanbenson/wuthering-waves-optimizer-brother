function t(){return{name:"Carlotta",rarity:5,weapon:"Pistols",avatarUrl:"Carlotta.jpg",gender:"female",element:"Glacio"}}const e={1:{hp:996,attack:37,defense:98},20:{hp:2590,attack:96,defense:251},"20+":{hp:3254,attack:123,defense:314},40:{hp:4933,attack:186,defense:476},"40+":{hp:5597,attack:214,defense:251},50:{hp:6436,attack:245,defense:620},"50+":{hp:7100,attack:273,defense:684},60:{hp:7940,attack:304,defense:764},"60+":{hp:8603,attack:331,defense:828},70:{hp:9443,attack:363,defense:909},"70+":{hp:10107,attack:381,defense:972},80:{hp:10946,attack:412,defense:1053},"80+":{hp:11610,attack:431,defense:1117},90:{hp:12450,attack:462,defense:1197}},s={...e};function i(a){return e[a]}const n={name:"Normal Attack: Silent Execution",description:`<div class="skilldescription"><span class="Title">Basic Attack</span><br>
Perform up to 2 consecutive attacks, dealing <span class="Ice">Glacio</span> damage.<br><br>

<span class="Title">Basic Attack: Necessary Means</span><br>
When Carlotta has <span class="Highlight">【Amorphous Prism】</span> on her, the Basic Attack will be replaced with Necessary Means.
Perform up to 3 consecutive attacks, dealing <span class="Ice">Glacio</span> damage. Each Necessary Means will consume 1<span class="Highlight"> 【Amorphous Prism】</span>.<br><br>

<span class="Title">Heavy Attack</span><br>
Consume STAMINA to attack the target, dealing <span class="Ice">Glacio</span> damage.<br><br>

<span class="Title">Restrictive Strategy</span><br>
When Carlotta's <span class="Highlight">【Spiritual Extract】</span> is full, the Charged Attack will be replaced with Restrictive Strategy, consuming all <span class="Highlight">【Spiritual Extract】</span>, dealing <span class="Ice">Glacio</span> damage, and reducing the cooldown of the Resonance Skill Aesthetics of Violence by 6 seconds.<br><br>

<span class="Title">Aerial Attack</span><br>
Consume STAMINA to perform an aerial downward attack, dealing <span class="Ice">Glacio</span> damage. After performing the aerial attack, if you press Basic Attack within a short time upon landing, you can perform Ceremonial Greeting.<br>
Aerial Attack: Ceremonial Greeting<br>
Perform a backward somersault and attack, dealing <span class="Ice">Glacio</span> damage.<br><br>

<span class="Title">Dodge Counterattack</span><br>
When successfully dodging, pressing Basic Attack within a short time will attack the target, dealing <span class="Ice">Glacio</span> damage, and consuming 1 <span class="Highlight">【Amorphous Prism】</span>.`,attacks:[{key:"SilentExecutionStage1DMG",label:"Stage 1 DMG",talents:{1:"27.20%",2:"29.44%",3:"31.67%",4:"34.79%",5:"37.02%",6:"39.58%",7:"43.15%",8:"46.72%",9:"50.29%",10:"54.08%"},type:"Basic"},{key:"SilentExecutionStage2DMG",label:"Stage 2 DMG",talents:{1:"19.89% + 19.89% + 26.52%",2:"21.53% + 21.53% + 28.70%",3:"23.16% + 23.16% + 30.87%",4:"25.44% + 25.44% + 33.92%",5:"27.07% + 27.07% + 36.09%",6:"28.95% + 28.95% + 38.59%",7:"31.56% + 31.56% + 42.07%",8:"34.17% + 34.17% + 45.55%",9:"36.78% + 36.78% + 49.03%",10:"39.55% + 39.55% + 52.73%"},type:"Basic"},{key:"NecessaryMeansStage1DMG",label:"Necessary Means Stage 1 DMG",talents:{1:"33.15%",2:"35.87%",3:"38.59%",4:"42.40%",5:"45.12%",6:"48.24%",7:"52.59%",8:"56.94%",9:"61.29%",10:"65.91%"},type:"Basic"},{key:"NecessaryMeansStage2DMG",label:"Necessary Means Stage 2 DMG",talents:{1:"30.22% + 36.94%",2:"32.70% + 39.97%",3:"35.18% + 42.99%",4:"38.65% + 47.23%",5:"41.12% + 50.26%",6:"43.97% + 53.75%",7:"47.94% + 58.59%",8:"51.90% + 63.44%",9:"55.87% + 68.28%",10:"60.08% + 73.43%"},type:"Basic"},{key:"NecessaryMeansStage3DMG",label:"Necessary Means Stage 3 DMG",talents:{1:"70.38% + 11.73%*4",2:"76.16% + 12.70%*4",3:"81.93% + 13.66%*4",4:"90.01% + 15.01%*4",5:"95.78% + 15.97%*4",6:"102.41% + 17.07%*4",7:"111.65% + 18.61%*4",8:"120.88% + 20.15%*4",9:"130.12% + 21.69%*4",10:"139.93% + 23.33%*4"},type:"Basic"},{key:"HeavyAttackDMG",label:"Heavy Attack DMG",talents:{1:"11.48%*2 + 11.48%*2 + 30.60%",2:"12.42%*2 + 12.42%*2 + 33.11%",3:"13.36%*2 + 13.36%*2 + 35.62%",4:"14.68%*2 + 14.68%*2 + 39.14%",5:"15.62%*2 + 15.62%*2 + 41.65%",6:"16.70%*2 + 16.70%*2 + 44.53%",7:"18.21%*2 + 18.21%*2 + 48.55%",8:"19.71%*2 + 19.71%*2 + 52.56%",9:"21.22%*2 + 21.22%*2 + 56.58%",10:"22.82%*2 + 22.82%*2 + 60.84%"},type:"Heavy"},{key:"RestrictiveStrategyDMG",label:"Restrictive Strategy DMG",talents:{1:"17.22%*2 + 17.22%*2 + 45.90%",2:"18.63%*2 + 18.63%*2 + 49.67%",3:"20.04%*2 + 20.04%*2 + 53.43%",4:"22.02%*2 + 22.02%*2 + 58.70%",5:"23.43%*2 + 23.43%*2 + 62.47%",6:"25.05%*2 + 25.05%*2 + 66.79%",7:"27.31%*2 + 27.31%*2 + 72.82%",8:"29.57%*2 + 29.57%*2 + 78.84%",9:"31.83%*2 + 31.83%*2 + 84.86%",10:"34.23%*2 + 34.23%*2 + 91.26%"},type:"Heavy"},{key:"AerialAttackDMG",label:"Aerial Attack DMG",talents:{1:"52.70%",2:"57.03%",3:"61.35%",4:"67.40%",5:"71.72%",6:"76.69%",7:"83.60%",8:"90.52%",9:"97.43%",10:"104.78%"},type:"Basic"},{key:"CeremonialGreetingDMG",label:"Ceremonial Greeting DMG",talents:{1:"54.32%",2:"58.77%",3:"63.23%",4:"69.46%",5:"73.92%",6:"79.04%",7:"86.16%",8:"93.29%",9:"100.42%",10:"107.99%"},type:"Basic"},{key:"DodgeCounterattackDMG",label:"Dodge Counterattack DMG",talents:{1:"52.20% + 69.19%",2:"56.48% + 74.86%",3:"60.76% + 80.54%",4:"66.75% + 88.48%",5:"71.03% + 94.15%",6:"75.95% + 100.68%",7:"82.80% + 109.76%",8:"89.65% + 118.83%",9:"96.49% + 127.91%",10:"103.77% + 137.55%"},type:"Basic"}]},l={name:"Resonance Skill: Aesthetics of Violence",description:`<div class="skilldescription">Deals Glacio damage and applies the Chroma effect to hit targets. After casting, pressing the Resonance Skill within a short time will trigger Brilliant Will.<br><br>

<span class="Title">Chroma</span><br>
During the effect's duration, no actions can be performed. The effect lasts for 1.5 seconds.<br><br>

<span class="Title">Brilliant Will</span><br>
Carlotta consumes all of her current <span class="Highlight">【Amorphous Prism】</span> to deal <span class="Ice">Glacio</span> damage to the target.
If the Resonance Skill Brilliant Will is not cast within a certain time or if the character is switched, the skill enters cooldown.</div>`,attacks:[{key:"ChromaSkillDMG",label:"Chroma Skill DMG",talents:{1:"46.41% + 46.41%",2:"50.21% + 50.21%",3:"54.02% + 54.02%",4:"59.35% + 59.35%",5:"63.15% + 63.15%",6:"67.53% + 67.53%",7:"73.61% + 73.61%",8:"79.70% + 79.70%",9:"85.79% + 85.79%",10:"92.26% + 92.26%"},type:"Skill"},{key:"BrilliantWillDMG",label:"Brilliant Will DMG",talents:{1:"36.30% + 36.30% + 108.90%",2:"39.28% + 39.28% + 117.83%",3:"42.26% + 42.26% + 126.76%",4:"46.43% + 46.43% + 139.27%",5:"49.40% + 49.40% + 148.20%",6:"52.83% + 52.83% + 158.47%",7:"57.59% + 57.59% + 172.75%",8:"62.35% + 62.35% + 187.04%",9:"67.11% + 67.11% + 201.33%",10:"72.17% + 72.17% + 216.51%"},type:"Skill"}]},r={name:"Resonance Liberation: New Wave Era",description:`<div class="skilldescription">
Deals <span class="Ice">Glacio</span> damage to targets within range and applies the Dissociation effect to hit targets. Enters the Gunflower Waltz state. This damage is considered Resonance Skill damage.<br>
<br>
Can be cast while airborne.<br>
<br>
<span class="Title">Dissociation</span><br>
Carlotta ignores 18% of the target's defense when dealing damage to a target affected by Dissociation.
Gunflower Waltz<br>
While in the Gunflower Waltz state, pressing Basic Attack or Resonance Liberation casts Death Omen.<br>
Each time Death Omen is cast, gain 1 【Kaleido Prism】.<br>
When 【Kaleido Prism】 reaches 4 points, pressing Basic Attack or Resonance Liberation will cast Death's End.<br>
Upon entering and exiting the Gunflower Waltz state, Spiritual Extract is cleared. While in the Gunflower Waltz state, Heavy Strike: Restrictive Strategy and Heavy Strike: Final March cannot be cast.<br>
<br>
<span class="Title">Death Omen</span><br>
Death Omen includes Death Omen: Funeral and Death Omen: Rest.<br>
Each time Death Omen is cast, Carlotta can move a short distance in the direction of the arrow keys.<br>
<br>
<span class="Title">Death Omen: Funeral</span><br>
Carlotta uses her blunderbuss to attack, dealing <span class="Ice">Glacio</span> damage. This damage is considered Resonance Skill damage.<br>
<br>
<span class="Title">Death Omen: Rest</span><br>
Carlotta’s blunderbuss behind her shatters, transforming into crystals to attack, dealing <span class="Ice">Glacio</span> damage. This damage is considered Resonance Skill damage.<br>
<br>
<span class="Title">Death's End</span><br>
Deals Glacio damage to targets within range. This damage is considered Resonance Skill damage.
</div>`,attacks:[{key:"NewWaveEraDMG",label:"New Wave Era DMG",talents:{1:"383.20%",2:"414.63%",3:"446.05%",4:"490.04%",5:"521.46%",6:"557.60%",7:"607.88%",8:"658.15%",9:"708.43%",10:"761.84%"},type:"Skill"},{key:"DeathOmenFuneralDMG",label:"Death Omen: Funeral DMG",talents:{1:"174.74%",2:"189.07%",3:"203.40%",4:"223.46%",5:"237.79%",6:"254.27%",7:"277.19%",8:"300.12%",9:"323.05%",10:"347.40%"},type:"Skill"},{key:"DeathOmenRestDMG",label:"Death Omen: Rest DMG",talents:{1:"13.80% * 4",2:"14.93% * 4",3:"16.06% * 4",4:"17.65% * 4",5:"18.78% * 4",6:"20.08% * 4",7:"21.89% * 4",8:"23.70% * 4",9:"25.51% * 4",10:"27.43% * 4"},type:"Skill"},{key:"DeathsEndDMG",label:"Death's End DMG",talents:{1:"613.12%",2:"663.40%",3:"713.68%",4:"784.06%",5:"834.34%",6:"892.16%",7:"972.60%",8:"1053.04%",9:"1133.48%",10:"1218.95%"},type:"Skill"}]},c={name:"Forte Circuit: Art Odyssey",description:`<div class="skilldescription">
<span class="Title">Heavy Attack · End of the Road</span><br> 
Carlotta can activate 【Chroma Prism】 every 22 seconds. When 【Spiritual Extract】 is full and 【Chroma Prism】 is in its activated state, holding the Basic Attack will consume all 【Spiritual Extract】 and trigger the Heavy Attack End of the Road. After casting, 【Chroma Prism】 enters cooldown. This damage is considered <span class="Ice">Glacio</span> damage and reduces the cooldown of the Resonance Skill Violent Aesthetics by 6 seconds.<br> <br> 

<span class="Title">【Spiritual Extract】 Acquisition Rules</span><br> 
Maximum 120 points.<br> 
Casting the Intro Skill Winter’s Lament restores 30 points of 【Spiritual Extract】.<br> 
Casting the Resonance Skill Brilliant Will restores 10 points of 【Spiritual Extract】 for each 【Amorphous Prism】 consumed.<br> 
Basic Attack · Necessary Means hits restore 10 points of 【Spiritual Extract】.<br> 
Successful Dodge Counter hits restore 10 points of 【Spiritual Extract】.<br> 
<br> 
<span class="Title">【Amorphous Prism】 Acquisition Rules</span><br> 
Maximum 6 units.<br> 
Casting the second segment of Basic Attack restores 3 【Amorphous Prisms】.<br> 
Casting Heavy Attack restores 3 【Amorphous Prisms】.<br> 
Casting Aerial Attack · Courtesy Greeting restores 3 【Amorphous Prisms】.<br> 
Casting the Resonance Skill Violent Aesthetics restores 3 【Amorphous Prisms】.<br> 
Successful dodge restores 3 【Amorphous Prisms】.<br> 
</div>`,attacks:[{key:"EndoftheRoadDMG",label:"End of the Road DMG",talents:{1:"33.62% * 5 + 252.11%",2:"36.38% * 5 + 272.78%",3:"39.13% * 5 + 293.45%",4:"42.99% * 5 + 322.39%",5:"45.75% * 5 + 343.07%",6:"48.92% * 5 + 366.84%",7:"53.33% * 5 + 399.92%",8:"57.74% * 5 + 432.99%",9:"62.15% * 5 + 466.07%",10:"66.83% * 5 + 501.21%"},type:"Heavy"}]},o={name:"Intro Skill: Winter's Lament",description:'<div class="skilldescription">Attack the target, dealing Glacio damage.</div>',attacks:[{key:"WintersLamentDMG",label:"Winter's Lament DMG",talents:{1:"140.00%",2:"151.48%",3:"162.96%",4:"179.04%",5:"190.52%",6:"203.72%",7:"222.09%",8:"240.45%",9:"258.82%",10:"278.34%"},type:"Intro"}]},d=[{key:"Dissociation",name:"Dissociation",details:`<div class="skilldescription">Carlotta ignores 18% of the target's defense when dealing damage to a target affected by <span class="Highlight">Dissociation</span>.</div>`,hasStacks:!1,modifiers:[{modifier:"DEFIgnore",modifySpecificTalents:["DeathsEndDMG","DeathOmenFuneralDMG","DeathOmenRestDMG"],modifierValue:.18}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"InherentSkillFlawlessPurity",name:"Inherent Skill: Flawless Purity",details:`<div class="skilldescription">After casting the Resonance Skill Brilliant Will, performing an Aerial Attack within a certain time grants immunity to damage and being hit before the attack deals damage.<br>
Soaring Stamina consumption -20%.</div>`,hasStacks:!1,modifiers:[],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"InherentSkillArtAboveAll",name:"Inherent Skill: Art Above All",details:`<div class="skilldescription">The Intro Skill Winter's Sigh, Resonance Skill Brilliant Will, Resonance Liberation Death Omen, and Heavy Attack End of the Road can inflict the Dissociation effect on hit targets.</div>`,hasStacks:!1,modifiers:[{modifier:"DEFIgnore",modifySpecificTalents:["WintersLamentDMG","BrilliantWillDMG","EndoftheRoadDMG","DeathOmenFuneralDMG","DeathOmenRestDMG"],modifierValue:.18}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusCritRate1",name:"Stat Bonus: Crit. Rate+",details:'<div class="skilldescription">Crit. Rate increased by 1.20%.</div>',hasStacks:!1,modifiers:[{modifier:"CritRate",modifierValue:.012}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusCritRate2",name:"Stat Bonus: Crit. Rate+",details:'<div class="skilldescription">Crit. Rate increased by 1.20%.</div>',hasStacks:!1,modifiers:[{modifier:"CritRate",modifierValue:.012}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK1",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 1.80%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.018}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK2",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 1.80%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.018}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusCritRate3",name:"Stat Bonus: Crit. Rate+",details:'<div class="skilldescription">Crit. Rate increased by 2.80%.</div>',hasStacks:!1,modifiers:[{modifier:"CritRate",modifierValue:.028}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusCritRate4",name:"Stat Bonus: Crit. Rate+",details:'<div class="skilldescription">Crit. Rate increased by 2.80%.</div>',hasStacks:!1,modifiers:[{modifier:"CritRate",modifierValue:.028}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK3",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 4.20%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.042}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK4",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 4.20%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.042}],minStacks:0,maxStacks:0,alwaysEnabled:!1}],m=[{key:"SequenceNode1BeautyorDeathBrillianceFadesintoWithering",name:"Sequence Node 1: Beauty or Death, Brilliance Fades into Withering",details:`<span class="skilldescription">When Carlotta casts the Intro Skill "Winter's Lament," she restores 3 units of <span class="Highlight">【Amorphous Prism】</span> and increases her <span class="Ice">Glacio</span> damage bonus by 30% for 15 seconds. When casting the Resonance Skill <span class="Highlight">"Brilliant Will"</span> on a target in the Chroma state, and hitting it, she additionally restores 30 points of <span class="Highlight">【Spiritual Extract】</span>.</span>`,hasStacks:!1,modifiers:[{modifier:"Glacio",modifierValue:.3}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode2SilenceandDeathDecayBecomesRebirth",name:"Sequence Node 2: Silence and Death, Decay Becomes Rebirth",details:'<span class="skilldescription">When Carlotta attacks a target with the Dissociation effect, the critical hit chance of that damage increases by 15%, and critical hit damage is increased by 20%.</span>',hasStacks:!1,modifiers:[{modifier:"CritRate",modifySpecificTalents:["DeathsEndDMG","DeathOmenFuneralDMG","DeathOmenRestDMG"],modifierValue:.15},{modifier:"CritDMG",modifySpecificTalents:["DeathsEndDMG","DeathOmenFuneralDMG","DeathOmenRestDMG"],modifierValue:.2}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode2SilenceandDeathDecayBecomesRebirthAboveAll",name:"Sequence Node 2: Silence and Death, Decay Becomes Rebirth",details:'<span class="skilldescription"><em>Activate if Art Above All is enabled</em><br>When Carlotta attacks a target with the Dissociation effect, the critical hit chance of that damage increases by 15%, and critical hit damage is increased by 20%.</span>',hasStacks:!1,modifiers:[{modifier:"CritRate",modifySpecificTalents:["WintersLamentDMG","BrilliantWillDMG","EndoftheRoadDMG"],modifierValue:.15},{modifier:"CritDMG",modifySpecificTalents:["WintersLamentDMG","BrilliantWillDMG","EndoftheRoadDMG"],modifierValue:.2}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode3StepForwardEleganceinProgression",name:"Sequence Node 3: Step Forward, Elegance in Progression",details:'<span class="skilldescription">After casting the Outro Skill "Final Address," Carlotta performs an additional attack, dealing 779.67% of her Attack as Glacio damage. The damage multiplier for the Heavy Attack "End of the Road" is increased by 80%.</span>',hasStacks:!1,modifiers:[{modifier:"EnableAttack",modifierValue:["SequenceNode3StepForwardEleganceinProgression"]},{modifier:"talentModifierMultiply",modifySpecificTalents:["EndoftheRoadDMG"],modifierValue:.8}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode4WithOldRainaHymnofBitterWine",name:"Sequence Node 4: With Old Rain, a Hymn of Bitter Wine",details:'<span class="skilldescription">When Carlotta casts Heavy Attack, Heavy Attack Restrictive Strategy, or Heavy Attack "End of the Road," all nearby allies’ Basic Attack damage is increased by 25% for 30 seconds.</span>',hasStacks:!1,modifiers:[{modifier:"BasicAttackDMGBonus",modifierValue:.25}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode5SalutingtheNightPastTodayandThatMoment",name:"Sequence Node 5: Saluting the Night Past, Today, and That Moment",details:'<span class="skilldescription">When Carlotta casts the Resonance Skill "Aesthetic Violence," her attack is increased by 10% for 20 seconds.</span>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.1}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode6IRemaintheSameAttheEndoftheCurtain",name:"Sequence Node 6: I Remain the Same, At the End of the Curtain",details:'<span class="skilldescription">The damage multiplier of "Funeral" in the Death Omen skill is increased by 109%, and each Death Omen: Rest in Peace generates 1 more bullet. When the Resonance Liberation "Funeral" hits a target, it applies the Iridescent effect, which prevents any actions from being performed during its duration. The effect is removed if damage is taken or after 1 second.</span>',hasStacks:!1,modifiers:[{modifier:"talentModifierMultiply",modifySpecificTalents:["DeathOmenFuneralDMG"],modifierValue:1.09}],minStacks:0,maxStacks:0,alwaysEnabled:!1}],h={name:"Outro Skill: Final Address",description:`<div class="skilldescription">Attack the target, dealing Glacio damage equal to 772.01% of Carlotta's Attack.</div>`,attacks:[{key:"FinalAddressDMG",label:"Final Address DMG",talent:"772.01%",type:"Outro"},{key:"S3StepForwardEleganceinProgressionDMG",label:"S3 Step Forward, Elegance in Progression DMG",talent:"779.67%",type:"Outro",requiresResonanceChain:"SequenceNode3StepForwardEleganceinProgression"}]};function k(){return{basic:t(),character:s,getCharacterStatsByLevel:i,basicAttacks:n,skillAttacks:l,liberationAttacks:r,forteCircuitAttacks:c,introAttacks:o,buffs:d,resonanceChains:m,outroAttacks:h}}export{k as getData};