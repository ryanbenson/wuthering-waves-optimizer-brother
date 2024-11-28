function t(){return{name:"Zhezhi",rarity:5,weapon:"Rectifiers",avatarUrl:"Zhezhi.jpg",gender:"female",element:"Glacio"}}const s={1:{hp:980,attack:30,defense:98},20:{hp:2549,attack:78,defense:251},"20+":{hp:3202,attack:100,defense:314},40:{hp:4854,attack:151,defense:476},"40+":{hp:5507,attack:173,defense:251},50:{hp:6333,attack:198,defense:620},"50+":{hp:6986,attack:221,defense:684},60:{hp:7812,attack:246,defense:764},"60+":{hp:8465,attack:269,defense:828},70:{hp:9291,attack:294,defense:909},"70+":{hp:9944,attack:309,defense:972},80:{hp:10770,attack:334,defense:1053},"80+":{hp:11424,attack:349,defense:1117},90:{hp:12250,attack:375,defense:1197}},e={...s};function n(a){return s[a]}const i={name:"Normal Attack: Dimming Brush",description:'<div class="skilldescription"> Basic Attack <br>Perform up to 3 consecutive attacks, dealing <span class="Ice"><strong>Glacio DMG</strong></span>.<br> Heavy Attack <br>Consume STA to perform an attack, dealing <span class="Ice"><strong>Glacio DMG</strong></span>.<br>Heavy Attack does not reset the Basic Attack cycle.<br> Mid-air Attack <br>Consume STA to perform up to 2 consecutive attacks while in mid-air, dealing <span class="Ice"><strong>Glacio DMG</strong></span>.<br>Dodge Counter<br>Use <span class="Highlight"><strong>Basic Attack</strong></span> after a successful <span class="Highlight"><strong>Dodge</strong></span> to attack the target, dealing <span class="Ice"><strong>Glacio DMG</strong></span>. </div>',attacks:[{key:"NormalAttackStage1DMG",label:"Stage 1 DMG",talents:{1:"21.00%*2",2:"22.73%*2",3:"24.45%*2",4:"26.86%*2",5:"28.58%*2",6:"30.56%*2",7:"33.32%*2",8:"36.07%*2",9:"38.83%*2",10:"41.76%*2"},type:"Basic"},{key:"NormalAttackStage2DMG",label:"Stage 2 DMG",talents:{1:"10.34%*5",2:"11.18%*5",3:"12.03%*5",4:"13.22%*5",5:"14.06%*5",6:"15.04%*5",7:"16.39%*5",8:"17.75%*5",9:"19.11%*5",10:"20.55%*5"},type:"Basic"},{key:"NormalAttackStage3DMG",label:"Stage 3 DMG",talents:{1:"67.20%",2:"72.72%",3:"78.23%",4:"85.94%",5:"91.45%",6:"97.79%",7:"106.60%",8:"115.42%",9:"124.24%",10:"133.61%"},type:"Basic"},{key:"NormalAttackHeavyAttackDMG",label:"Heavy Attack DMG",talents:{1:"56.70%",2:"61.35%",3:"66.00%",4:"72.51%",5:"77.16%",6:"82.50%",7:"89.94%",8:"97.38%",9:"104.82%",10:"112.72%"},type:"Heavy"},{key:"NormalAttackMidAirAttackDMG",label:"Mid-air Attack DMG",talents:{1:"12.55%*5 + 52.70%",2:"13.58%*5 + 57.03%",3:"14.61%*5 + 61.35%",4:"16.05%*5 + 67.40%",5:"17.08%*5 + 71.72%",6:"18.26%*5 + 76.69%",7:"19.91%*5 + 83.60%",8:"21.55%*5 + 90.52%",9:"23.20%*5 + 97.43%",10:"24.95%*5 + 104.78%"},type:"Basic"},{key:"NormalAttackDodgeCounterDMG",label:"Dodge Counter DMG",talents:{1:"14.62%*5",2:"15.82%*5",3:"17.02%*5",4:"18.70%*5",5:"19.90%*5",6:"21.28%*5",7:"23.20%*5",8:"25.11%*5",9:"27.03%*5",10:"29.07%*5"},type:"Basic"}]},o={name:"Resonance Skill: Manifestation",description:'<div class="skilldescription"> Deal <span class="Ice"><strong>Glacio DMG</strong></span>. If "Afflatus" is no less than 60, consume 60 "Afflatus" to summon <span class="Highlight"><strong>Phantasmic Imprint - Left</strong></span> and <span class="Highlight"><strong>Phantasmic Imprint - Right</strong></span>.<br>-Tap the button on the ground to summon the Phantasmic Imprints on the ground.<br>-Hold the button on the ground or tap the button in mi-dar to summon the Phantasmic Imprints in mid-air. </div>',attacks:[{key:"ManifestationPressDMG",label:"Manifestation Press DMG",talents:{1:"49.50%*3",2:"53.56%*3",3:"57.62%*3",4:"63.31%*3",5:"67.36%*3",6:"72.03%*3",7:"78.53%*3",8:"85.02%*3",9:"91.52%*3",10:"98.42%*3"},type:"Skill"},{key:"ManifestationHoldDMG",label:"Manifestation Hold DMG",talents:{1:"49.50%*3",2:"53.56%*3",3:"57.62%*3",4:"63.31%*3",5:"67.36%*3",6:"72.03%*3",7:"78.53%*3",8:"85.02%*3",9:"91.52%*3",10:"98.42%*3"},type:"Skill"},{key:"ManifestationMidAirDMG",label:"Manifestation Mid Air DMG",talents:{1:"49.50%*3",2:"53.56%*3",3:"57.62%*3",4:"63.31%*3",5:"67.36%*3",6:"72.03%*3",7:"78.53%*3",8:"85.02%*3",9:"91.52%*3",10:"98.42%*3"},type:"Skill"},{key:"SequenceNode6InfiniteLegacy",label:"S6: Imitation and Inheritance",talents:{1:"240.00%",2:"259.68%",3:"279.36%",4:"306.91%",5:"326.59%",6:"349.23%",7:"380.72%",8:"412.21%",9:"443.70%",10:"477.15%"},type:"Basic",requiresResonanceChain:"SequenceNode6InfiniteLegacy"}]},r={name:"Resonance Liberation: Living Canvas",description:'<div class="skilldescription"> Summon <span class="Highlight"><strong>Inklit Spirits</strong></span> for assistance.<br>Can be cast in mid-air.<br>Inklit Spirit<<br>When the active Resonator deals DMG, an <span class="Highlight"><strong>Inklit Spirit</strong></span> will be summoned to perform a Coordinated Attack, dealing <span class="Ice"><strong>Glacio DMG</strong></span>, considered as Basic Attack DMG.<br>-In the 3s after DMG is dealt, 1 <span class="Highlight"><strong>Inklit Spirit</strong></span> is summoned every second. This effect can be triggered once every second. Damage dealt by Inklit Spirit will not trigger this effect.<br>-Up to 1 <span class="Highlight"><strong>Inklit Spirit</strong></span> can be summoned every second, and up to 21 in total.<br>-This effect lasts for 30s, until max <span class="Highlight"><strong>Inklit Spirits</strong></span> are summoned. </div>',attacks:[{key:"InklitSpiritDMG",label:"Inklit Spirit DMG",talents:{1:"32.80%",2:"35.49%",3:"38.18%",4:"41.95%",5:"44.64%",6:"47.73%",7:"52.04%",8:"56.34%",9:"60.64%",10:"65.21%"},type:"Basic",subType:"Coordinated"},{key:"SequenceNode5CompositionsClue",label:"S5: Proper Structuring",talents:{1:"45.92%",2:"49.69%",3:"53.45%",4:"58.73%",5:"62.50%",6:"66.82%",7:"72.86%",8:"78.87%",9:"84.90%",10:"91.29%"},type:"Basic",subType:"Coordinated",requiresResonanceChain:"SequenceNode5CompositionsClue"}]},l={name:"Forte Circuit: Ink and Wash",description:`<div class="skilldescription">Phantasmic Imprint<br>Zhezhi may summon <span class="Highlight"><strong>Phantasmic Imprint</strong></span> at the cost of Afflatus when casting Resonance Skill <span class="Highlight"><strong>Manifestation</strong></span> or Heavy Attack <span class="Highlight"><strong>Conjuration</strong></span>.<br>Up to 1 of each of <span class="Highlight"><strong>Phantasmic Imprint - Left</strong></span>, <span class="Highlight"><strong>Phantasmic Imprint - Middle</strong></span>, and <span class="Highlight"><strong>Phantasmic Imprint - Right</strong></span> can exist at the same time, each lasting for 15s.<br>Heavy Attack - Conjuration<br>The 5 moves below consume STA to perform <span class="Highlight"><strong>Conjuration</strong></span> to attack the target, dealing <span class="Ice"><strong>Glacio DMG</strong></span>.<br>-Hold the <span class="Highlight"><strong>Basic Attack button</strong></span> shortly after <span class="Highlight"><strong>Basic Attack Stage 3</strong></span>.<br>-Press the <span class="Highlight"><strong>Basic Attack button</strong></span> shortly after casting Resonance Skill <span class="Highlight"><strong>Manifestation</strong></span>.<br>-Hold the <span class="Highlight"><strong>Basic Attack button</strong></span> shortly after casting Resonance Skill <span class="Highlight"><strong>Stroke of Genius</strong></span> or Resonance Skill <span class="Highlight"><strong>Creation's Zenith</strong></span>.<br>-Hold the <span class="Highlight"><strong>Basic Attack button</strong></span> while in mid-air.<br>-Hold the <span class="Highlight"><strong>Basic Attack button</strong></span> after a successful <span class="Highlight"><strong>Dodge</strong></span>.<br>If Zhezhi has at least 30 Afflatus when performing any of these, consume 30 Afflatus to summon <span class="Highlight"><strong>Phantasmic Imprint - Middle</strong></span>.<br>Resonance Skill - Stroke of Genius<br>When a <span class="Highlight"><strong>Phatasmic Imprint</strong></span> is nearby, the Resonance Skill is replaced with <span class="Highlight"><strong>Stroke of Genius</strong></span>, which can be cast while in mid-air. When it is cast, Zhezhi will:<br>-Move to the location of the <span class="Highlight"><strong>Phatasmic Imprint</strong></span>, remove it, and then summon an Ivory Herald to attack the target, dealing <span class="Ice"><strong>Glacio DMG</strong></span>, considered as Basic Attack DMG. Refresh the mid-air Dodge counter if the target <span class="Highlight"><strong>Phatasmic Imprint</strong></span> is in mid-air.<br>-Gain 1 stack of Painter's Delight, lasting for 8s and stacking up to 2 times.<br>Resonance Skill - Creation's Zenith<br>When a <span class="Highlight"><strong>Phantasmic Imprint</strong></span> is nearby and there are 2 stacks of Painter's Delight, <span class="Highlight"><strong>Stroke of Genius</strong></span> is replaced with <span class="Highlight"><strong>Creation's Zenith</strong></span>, which can be cast while in mid-air. When it is cast, Zhezhi will:<br>-Lose all stacks of Painter's Delight<br>-Move to the location of the <span class="Highlight"><strong>Phantasmic Imprint</strong></span>, remove it, and then summon an Ivory Herald to attack the target, dealing greater <span class="Ice"><strong>Glacio DMG</strong></span>, considered as Basic Attack DMG, additionally increasing the Basic Attack DMG Bonus by 18% for 27s. Refresh the mid-air Dodge counter if the target <span class="Highlight"><strong>Phatasmic Imprint</strong></span> is in mid-air.<br>Afflatus<br>Zhezhi can hold up to 90 Afflatus.<br>Normal Attacks grant Afflatus on hit.<br>Casting Intro Skill grants Afflatus.</div>`,attacks:[{key:"CompositionDMG",label:"HA: Conjuration DMG",talents:{1:"41.75%*3",2:"45.18%*3",3:"48.60%*3",4:"53.39%*3",5:"56.82%*3",6:"60.76%*3",7:"66.23%*3",8:"71.71%*3",9:"77.19%*3",10:"83.01%*3"},type:"Heavy"},{key:"StrokeOfGeniusDMG",label:"Stroke of Genius DMG",talents:{1:"150.00%",2:"162.30%",3:"174.60%",4:"191.82%",5:"204.12%",6:"218.27%",7:"237.95%",8:"257.63%",9:"277.31%",10:"298.22%"},type:"Basic"},{key:"CreationsZenithDMG",label:"Creation's Zenith DMG",talents:{1:"60.00%*3",2:"64.92%*3",3:"69.84%*3",4:"76.73%*3",5:"81.65%*3",6:"87.31%*3",7:"95.18%*3",8:"103.05%*3",9:"110.93%*3",10:"119.29%*3"},type:"Basic"}]},c={name:"Intro Skill: Brilliance in a Brush",description:'<div class="skilldescription">Attack the target, dealing <span class="Ice">Glacio DMG</span>.</div>',attacks:[{key:"BrillianceInABrushDMG",label:"Brilliance in a Brush DMG",talents:{1:"43.34%*3",2:"46.89%*3",3:"50.44%*3",4:"55.42%*3",5:"58.97%*3",6:"63.06%*3",7:"68.74%*3",8:"74.43%*3",9:"80.12%*3",10:"86.16%*3"},type:"Intro"}]},g=[{key:"CreationsZenith",name:"Creation's Zenith",details:'<div class="skilldescription">Move to the location of the <span class="Highlight">Phantasmic Imprint</span>, remove it, and then summon an Ivory Herald to attack the target, dealing greater <span class="Ice">Glacio DMG</span>, considered as Basic Attack DMG, additionally increasing the Basic Attack DMG Bonus by 18% for 27s.</div>',hasStacks:!1,modifiers:[{modifier:"BasicAttackDMGBonus",modifierValue:.18}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"InherentSkillCalligraphersTouch",name:"Inherent Skill: Calligrapher's Touch",details:`<div class="skilldescription">When casting Resonance Skill <span class="Highlight"><strong>Stroke of Genius</strong></span> or Resonance Skill <span class="Highlight"><strong>Creation's Zenith</strong></span>, ATK is increased by 6% for 27s. This can be stacked up to 3 time(s).</div>`,hasStacks:!0,modifiers:[{modifier:"ATK",modifierValue:.06}],minStacks:0,maxStacks:3,alwaysEnabled:!1},{key:"StatBonusCritRate1",name:"Stat Bonus: Crit. Rate+",details:'<div class="skilldescription">Crit. Rate increased by 1.20%.</div>',hasStacks:!1,modifiers:[{modifier:"CritRate",modifierValue:.012}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusCritRate2",name:"Stat Bonus: Crit. Rate+",details:'<div class="skilldescription">Crit. Rate increased by 1.20%.</div>',hasStacks:!1,modifiers:[{modifier:"CritRate",modifierValue:.012}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusCritRate3",name:"Stat Bonus: Crit. Rate+",details:'<div class="skilldescription">Crit. Rate increased by 2.80%.</div>',hasStacks:!1,modifiers:[{modifier:"CritRate",modifierValue:.028}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusCritRate4",name:"Stat Bonus: Crit. Rate+",details:'<div class="skilldescription">Crit. Rate increased by 2.80%.</div>',hasStacks:!1,modifiers:[{modifier:"CritRate",modifierValue:.028}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK1",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 1.80%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.018}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK2",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 1.80%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.018}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK3",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 4.20%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.042}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK4",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 4.20%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.042}],minStacks:0,maxStacks:0,alwaysEnabled:!1}],h=[{key:"SequenceNode1Brushwork'Finish",name:"Sequence Node 1: Brushwork's Finish",details:`<span class="skilldescription">When casting Resonance Skill <span class="Highlight"><strong>Creation's Zenith</strong></span>, Resonance Energy is restored by 15 and Crit. Rate is increased by 10% for 27s.</span>`,hasStacks:!1,modifiers:[{modifier:"CritRate",modifierValue:.1}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode3ReflectionsGrace",name:"Sequence Node 3: Reflection's Grace",details:`<span class="skilldescription">When Resonance Skill <span class="Highlight"><strong>Manifestation</strong></span>, Resonance Skill <span class="Highlight"><strong>Stroke of Genius</strong></span>, or Resonance Skill <span class="Highlight"><strong>Creation's Zenith</strong></span> is cast, ATK increases by 15%, stacking up to 3 time(s) for 27s.</span>`,hasStacks:!0,modifiers:[{modifier:"ATK",modifierValue:.15}],minStacks:0,maxStacks:3,alwaysEnabled:!1},{key:"SequenceNode4HuesSpectrum",name:"Sequence Node 4: Hue's Spectrum",details:'<span class="skilldescription">When Resonance Liberation <span class="Highlight"><strong>Living Canvas</strong></span> is cast, ATK of Resonators on the team increases by 20% for 30s.</span>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.2}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode5CompositionsClue",name:"Sequence Node 5: Composition's Clue",details:`<span class="skilldescription">For every 3 <span class="Highlight"><strong>Inklit Spirits</strong></span> summoned by Resonance Liberation <span class="Highlight"><strong>Living Canvas</strong></span>, 1 extra <span class="Highlight"><strong>Inklit Spirit</strong></span> is summoned to perform a Coordinated Attack, dealing DMG equal to 140% of Inklit Spirit's DMG, considered as Basic Attack DMG. This damage dealt will not further summon Inklit Spirit.</span>`,hasStacks:!1,modifiers:[{modifier:"EnableAttack",modifierValue:["SequenceNode5CompositionsClue"]}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode6InfiniteLegacy",name:"Sequence Node 6: Infinite Legacy",details:`<span class="skilldescription">When Resonance Skill <span class="Highlight"><strong>Stroke of Genius</strong></span> or Resonance Skill <span class="Highlight"><strong>Creation's Zenith</strong></span> is cast, an extra <span class="Highlight"><strong>Ivory Herald</strong></span> will be summoned to deal DMG equal to 120% of Resonance Skill <span class="Highlight"><strong>Stroke of Genius</strong></span>'s DMG, considered as Basic Attack DMG.</span>`,hasStacks:!1,modifiers:[{modifier:"EnableAttack",modifierValue:["SequenceNode6InfiniteLegacy"]}],minStacks:0,maxStacks:0,alwaysEnabled:!1}],d={name:"Outro Skill: Carve and Draw",description:'<span class="skilldescription">The incoming Resonator has their Glacio DMG Amplified by 20% and Resonance Skill DMG Amplified by 25% for 14s or until they are switched out.</span>',attacks:[]};function p(){return{basic:t(),character:e,getCharacterStatsByLevel:n,basicAttacks:i,skillAttacks:o,liberationAttacks:r,forteCircuitAttacks:l,introAttacks:c,buffs:g,resonanceChains:h,outroAttacks:d}}export{p as getData};
