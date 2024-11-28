function e(){return{name:"Danjin",rarity:4,weapon:"Swords",avatarUrl:"test.jpg",gender:"female",element:"Havoc"}}const a={1:{hp:755,attack:21,defense:94},20:{hp:1963,attack:54,defense:241},"20+":{hp:2467,attack:70,defense:302},40:{hp:3739,attack:105,defense:456},"40+":{hp:4242,attack:121,defense:241},50:{hp:4879,attack:139,defense:595},"50+":{hp:5382,attack:154,defense:656},60:{hp:6018,attack:172,defense:733},"60+":{hp:6522,attack:188,defense:794},70:{hp:7158,attack:206,defense:872},"70+":{hp:7661,attack:216,defense:933},80:{hp:8297,attack:234,defense:1010},"80+":{hp:8801,attack:244,defense:1071},90:{hp:9437,attack:262,defense:1148}},i={...a};function n(s){return a[s]}const t={name:"Basic Attack: Execution",description:`
    <div class="skilldescription">
      <span class="Title">Basic Attack</span>
      <br>
      Danjin performs up to 3 consecutive attacks, dealing <span class="Dark">Havoc DMG</span>.
      <br>
      <br>
      <span class="Title">Heavy Attack</span>
      <br>Danjin combines her Forte with the blade in her hand and consumes
      Stamina to launch consecutive attacks, dealing <span class="Dark">Havoc DMG</span>.
      <br>
      <br>
      <span class="Title">Mid-air Attack</span>
      <br>Consumme Stamina to perform a Mid-air Plunging Attack, dealing
      <span class="Dark">Havoc DMG</span>.
      <br>
      <br>
      <span class="Title">Dodge counter</span>
      <br>Use <span class="Highlight">Basic Attack</span> after a successfull
      <span class="Highlight">Dodge</span> to launch an attack, dealing
      <span class="Dark">Havoc DMG</span>.
      <br>
      <br>
      <span class="Title">Dodge Counter: Ruby Shades</span>
      <br>After a successfull Dodge Counter, Danjin can use Resonance Skill
      <span class="Highlight">Crimson Fragment</span> to perform Resonance Skill:
      <span class="Highlight">Crimson Erosion</span>.
    </div>`,attacks:[{key:"Part1DMG",label:"Part 1 DMG",talents:{1:"28.80%",2:"31.17%",3:"33.53%",4:"36.83%",5:"39.20%",6:"41.91%",7:"45.69%",8:"49.47%",9:"53.25%",10:"57.26%"},type:"Basic"},{key:"Part2DMG",label:"Part 2 DMG",talents:{1:"29.60%",2:"32.03%",3:"34.46%",4:"37.86%",5:"40.28%",6:"43.08%",7:"46.96%",8:"50.84%",9:"54.73%",10:"58.85%"},type:"Basic"},{key:"Part3DMG",label:"Part 3 DMG",talents:{1:"40.00%",2:"43.28%",3:"46.56%",4:"51.16%",5:"54.44%",6:"58.21%",7:"63.46%",8:"68.70%",9:"73.95%",10:"79.53%"},type:"Basic"},{key:"HeavyAttackDMG2",label:"Heavy Attack DMG",talents:{1:"18.67%*3",2:"20.20%*3",3:"21.73%*3",4:"23.88%*3",5:"25.41%*3",6:"27.17%*3",7:"29.62%*3",8:"32.06%*3",9:"34.51%*3",10:"37.12%*3"},type:"Heavy"},{key:"MidAirAttackDMG2",label:"Mid-Air Attack DMG",talents:{1:"49.60%",2:"53.67%",3:"57.74%",4:"63.43%",5:"67.50%",6:"72.18%",7:"78.69%",8:"85.19%",9:"91.70%",10:"98.61%"},type:"Basic"},{key:"DodgeCounterDMG2",label:"Dodge Counter DMG",talents:{1:"32.00%*3",2:"34.63%*3",3:"37.25%*3",4:"40.93%*3",5:"43.55%*3",6:"56.57%*3",7:"50.77%*3",8:"54.96%*3",9:"59.16%*3",10:"63.62%*3"},type:"Basic"}]},l={name:"Resonance Skill: Crimson Fragment",description:`
    <div class="skilldescription">
      <p>
        When casting <span class="Highlight">Crimson Fragment</span>, each attack
        consumes 3% of Danjin's max HP. When Danjin's HP is less than 1%, this no
        longer consumes HP.
      </p>
      <span class="Title">Carmine Gleam</span>
      <p>
        Danjin attacks the target, dealing <span class="Dark">Havoc DMG</span>
      </p>
      <span class="Title">Crimson Erosion</span>
      <p>
        After <span class="Highlight">Basic Attack 2</span>,
        <span class="Highlight">Dodge Counter</span> or Intro Skill
        <span class="Highlight">Vindication</span>, use
        <span class="Highlight">Resonance Skill</span> to perform up to 2
        consecutive strikes, dealing <span class="Dark">Havoc DMG</span>. When
        <span class="Highlight">Crimson Erosion II</span> hits a target, apply
        <span class="Highlight">Incinerating Will</span> to it.
      </p>
      <span class="Title">Incinerating Will</span>
      <p>
        Danjin's damage dealt to targets marked with
        <span class="Highlight">Incinerating Will</span> is increased by 20%.
      </p>
      <span class="Title">Sanguine Pulse</span>
      <p>
        Use <span class="Highlight">Resonance Skill</span> after
        <span class="Highlight">Basic Attack 3</span> to perform up to 3
        consecutive attacks, dealing <span class="Dark">Havoc DMG</span>.
      </p>
    </div>
  `,attacks:[{key:"CarmineGleam",label:"Carmine Gleam DMG",talents:{1:"19.20%*2",2:"20.78%*2",3:"22.35%*2",4:"24.56%*2",5:"26.13%*2",6:"27.94%*2",7:"30.46%*2",8:"32.98%*2",9:"35.50%*2",10:"38.18%*2"},type:"Skill"},{key:"CrimsonErosion1",label:"Crimson Erosion Part 1 DMG",talents:{1:"32.40%*2",2:"35.06%*2",3:"37.72%*2",4:"41.44%*2",5:"44.09%*2",6:"47.15%*2",7:"51.40%*2",8:"55.65%*2",9:"59.90%*2",10:"64.12%*2"},type:"Skill"},{key:"CrimsonErosion2",label:"Crimson Erosion Part 2 DMG",talents:{1:"30.00%*2",2:"32.46%*2",3:"34.92%*2",4:"38.37%*2",5:"40.83%*2",6:"43.66%*2",7:"47.59%*2",8:"51.53%*2",9:"55.47%*2",10:"59.65%*2"},type:"Skill"},{key:"SanguinePulse1",label:"Sanguine Pulse Part 1 DMG",talents:{1:"28.20%*2",2:"30.52%*2",3:"32.83%*2",4:"36.07%*2",5:"38.38%*2",6:"41.04%*2",7:"44.74%*2",8:"48.44%*2",9:"52.14%*2",10:"56.07%*2"},type:"Skill"},{key:"SanguinePulse2",label:"Sanguine Pulse Part 2 DMG",talents:{1:"21.60%*3",2:"23.38%*3",3:"25.15%*3",4:"27.63%*3",5:"29.40%*3",6:"31.44%*3",7:"34.27%*3",8:"37.10%*3",9:"39.94%*3",10:"42.95%*3"},type:"Skill"},{key:"SanguinePulse3",label:"Sanguine Pulse Part 3 DMG",talents:{1:"32.40%*3",2:"35.06%*3",3:"37.72%*3",4:"41.44%*3",5:"44.09%*3",6:"47.15%*3",7:"51.40%*3",8:"55.65%*3",9:"59.90%*3",10:"64.42%*3"},type:"Skill"}]},c={name:"Resonance Liberation: Crimson Bloom",description:`
    <div class="skilldescription">
      <p>
        Danjin's anger intensifies as she frantically swings her dual blades,
        performing multiple rapid consecutive attacks, and 1 Scarlet Burst attack(s),
        dealing <span class="Dark>Havoc DMG</span>.
      </p>
    </div>`,attacks:[{key:"CrimsonBloomContinuousATKDMG",label:"Crimson Bloom Continuous DMG",talents:{1:"24.69%*8",2:"26.72%*8",3:"28.74%*8",4:"31.58%*8",5:"33.60%*8",6:"35.93%*8",7:"39.17%*8",8:"42.41%*8",9:"45.64%*8",10:"49.09%*8"},type:"Liberation"},{key:"CrimsonBloomScarletBurstDMG",label:"Scarlet Burst DMG",talents:{1:"197.50%",2:"213.70%",3:"229.89%",4:"252.57%",5:"268.76%",6:"287.39%",7:"313.30%",8:"339.21%",9:"365.12%",10:"392.65%"},type:"Liberation"}]},o={name:"Forte Circuit: Qingloong at War",description:`
    <div class="skilldescription">
      <span class="Title">Heavy Attack: Chasocleave</span>
      <p>
        After accumulating 60 "Ruby lossom", long press <span class="Highlight">Basic Attack</span>
        to consume all "Ruby Blossom", to cast <span class="Highlight">Chaoscleave</span>, dealing
        <span class="Dark">Havoc DMG</span> considered as Heavy Attack damage, and restore HP for
        Danjin. If current "Ruby Blossom" reaches over 120, this skill consumes 120 "Ruby Blossom"
        to increase the damage multiplier of <span class="Highlight">Chaoscleave</span> and
        <span class="Highlight">Scatterbloom</span> performed this time.
      </p>
      <span class="Title">Heavy Attack: Scatterbloom</span>
      <p>
        Use <span class="Highlight">Basic Attack</span> after Heavy Attack
        <span class="Highlight">Chaoscleave</span> to cast <span class="Highlight">Shatter</span>
        to attack the target, dealing <span class="Dark">Havoc DMG</span>, considered as Heavy
        Attack damage.
      </p>
      <span class="Title">Ruby Blossom</span>
      <p>
        Danjin can hold up to 120 stacks of Ruby Blossom.
        <br>Danjin obtains "Ruby Blossom" when using Resonance Skill
        <span class="Highlight">Crimson Fragment</span>
      </p>
    </div>
  `,attacks:[{key:"ChaoscleaveDamage",label:"Chaoscleave DMG",talents:{1:"30.00%*7",2:"32.46%*7",3:"34.92%*7",4:"38.37%*7",5:"40.83%*7",6:"43.66%*7",7:"47.59%*7",8:"51.53%*7",9:"55.47%*7",10:"59.65%*7"},type:"Heavy"},{key:"ScatterbloomDamage",label:"Scatterbloom DMG",talents:{1:"90.00%",2:"97.38%",3:"104.76%",4:"115.10%",5:"122.48%",6:"130.96%",7:"142.77%",8:"154.58%",9:"166.39%",10:"178.93%"},type:"Heavy"},{key:"FullScatterbloomDamage",label:"Full Energy Scatterbloom DMG",talents:{1:"72.00%*7",2:"77.91%*7",3:"83.81%*7",4:"92.08%*7",5:"97.98%*7",6:"104.77%*7",7:"114.22%*7",8:"123.66%*7",9:"133.11%*7",10:"143.15%*7"},type:"Heavy"},{key:"FullChaoscleaveDamage",label:"Full Energy Chaoscleave DMG",talents:{1:"216.00%",2:"233.72%",3:"251.43%",4:"276.43%",5:"293.94%",6:"314.31%",7:"342.65%",8:"370.98%",9:"399.32%",10:"429.43%"},type:"Heavy"}]},r={name:"Intro Skill: Vindication",description:`<div class="skilldescription">
      <p>
        With unwavering determination, Danjin unleashes a strike, dealing
        <span class="Dark">Havoc DMG</span>.
      </p>
    </div>`,attacks:[{key:"SkillDMG",label:"Vindication DMG",talents:{1:"25.00%*4",2:"27.05%*4",3:"29.10%*4",4:"31.87%*4",5:"34.97%*4",6:"36.38%*4",7:"39.66%*4",8:"42.94%*4",9:"46.22%*4",10:"49.71%*4"},type:"Intro"}]},d=[{key:"IncineratingWill",name:"Incinerating Will",details:`
      <div class="skilldescription">
        Danjin's damage dealt to targets marked with
        <span class="Highlight">Incinerating Will</span> is increased by 20%.
      </div>
    `,hasStacks:!1,modifiers:[{modifier:"DMGBonus",modifierValue:.2}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"InherentSkillCrimsonLight",name:"Inherent Skill: Crimson Light",details:`
      <div class="skilldescription">
        Damage of resonance skill <span class="Highlight">Crimson Erosion</span> triggered by
        <span class="Highlight">Dodge Counter: Ruby Shades</span> is increased by 20%. The HP cost
        and stacks of "Ruby Blossom" are recovered and doubled.
      </div>
    `,hasStacks:!1,modifiers:[{modifySpecificTalents:["CrimsonErosion1","CrimsonErosion2"],modifierValue:.2}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"InherentSkillOverflow",name:"Inherent Skill: Overflow",details:`
      <div class="skilldescription">
        After casting the Resonance Skill <span class="Highlight">Sanguine Pulse</span>,
        Danjin's Heavy Attack damage is increased by 30% for 5s.
      </div>
    `,hasStacks:!1,modifiers:[{modifier:"HeavyAttackDMGBonus",modifierValue:.3}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusHavoc1",name:"Stat Bonus: Havoc DMG Bonus+",details:`
      <div class="skilldescription">
        Havoc DMG Bonus increased by 1.80%
      </div>
    `,hasStacks:!1,modifiers:[{modifier:"Havoc",modifierValue:.018}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusHavoc2",name:"Stat Bonus: Havoc DMG Bonus+",details:`
      <div class="skilldescription">
        Havoc DMG Bonus increased by 1.80%
      </div>
    `,hasStacks:!1,modifiers:[{modifier:"Havoc",modifierValue:.018}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusHavoc3",name:"Stat Bonus: Havoc DMG Bonus+",details:`
      <div class="skilldescription">
        Havoc DMG Bonus increased by 4.20%
      </div>
    `,hasStacks:!1,modifiers:[{modifier:"Havoc",modifierValue:.042}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusHavoc4",name:"Stat Bonus: Havoc DMG Bonus+",details:`
      <div class="skilldescription">
        Havoc DMG Bonus increased by 4.20%
      </div>
    `,hasStacks:!1,modifiers:[{modifier:"Havoc",modifierValue:.042}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK1",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 1.80%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.018}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK2",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 1.80%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.018}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK3",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 4.20%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.042}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"StatBonusATK4",name:"Stat Bonus: ATK+",details:'<div class="skilldescription">ATK increased by 4.20%.</div>',hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.042}],minStacks:0,maxStacks:0,alwaysEnabled:!1}],p=[{key:"SequenceNode1",name:"Sequence Node 1: Crimson Heart of Justice",details:`
      <span class="skilldescription">
        When Danjin attacks a target with Resonance Skill's
        <span class="Highlight">Incinerating Will</span>, her ATK is increased
        by 5% for 6s, stacking up to 6 times. Danjin loses 1 stacks of this effect
        each time she takes damage.
      </span>
    `,hasStacks:!0,modifiers:[{modifier:"ATK",modifierValue:.05}],minStacks:0,maxStacks:6,alwaysEnabled:!1},{key:"SequenceNode2",name:"Sequence Node 2: Dusted Mirror",details:`
      <span class="skilldescription">
        When Danjin attacks a target with Resonance Skill's
        <span class="Highlight">Incinerating Will</span>, her damage dealt is
        increased by 20%.
      </span>
    `,hasStacks:!1,modifiers:[{modifier:"DMGBonus",modifierValue:.2}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode3",name:"Sequence Node 3: Fleeting Blossom",details:`
      <span class="skilldescription">
        Resonance Liberation DMG Bonus is increased by 30%.
      </span>
    `,hasStacks:!1,modifiers:[{modifier:"ResonanceLiberationDMGBonus",modifierValue:.3}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode4",name:"Sequence Node 4: Solitary Carnation",details:`
      <span class="skilldescription">
        When Danjin has more than 60 "Ruby Blossom", her Crit. Rate is increased
        by 15%. This effect lasts until the end of
        <span class="Highlight">Heavy Attack: Scatterbloom</span> even after all
        "Ruby Blossom" is consumed when casting
        <span class="Highlight">Heavy Attack: Chaoscleave</span>.
      </span>
    `,hasStacks:!1,modifiers:[{modifier:"CritRate",modifierValue:.15}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode51",name:"Sequence Node 5: Reigning Blade",details:`
      <span class="skilldescription">
        Danjin's Havoc DMG Bonus is increased by 15%
      </span>
    `,hasStacks:!1,modifiers:[{modifier:"Havoc",modifierValue:.15}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode52",name:"Sequence Node 5: Reigning Blade",details:`
      <span class="skilldescription">
        Danjin's Havoc DMG Bonus is further increased by another 15% when
        her HP is lower than 60%.
      </span>
    `,hasStacks:!1,modifiers:[{modifier:"Havoc",modifierValue:.15}],minStacks:0,maxStacks:0,alwaysEnabled:!1},{key:"SequenceNode6",name:"Sequence Node 6: Bloodied Jade",details:`
      <span class="skilldescription">Heavy Attack <span class="Highlight">Chaoscleave</span> increases the ATK of all team members by 20% for 20s.</span>
    `,hasStacks:!1,modifiers:[{modifier:"ATK",modifierValue:.2}],minStacks:0,maxStacks:0,alwaysEnabled:!1}],k={name:"Outro Skill: Duality",description:'<div class="skilldescription">The incoming Resonator has their Havoc DMG Amplified by 23% for 14s or until they are switched out.</div>',attacks:[]};function m(){return{basic:e(),character:i,getCharacterStatsByLevel:n,basicAttacks:t,skillAttacks:l,liberationAttacks:c,forteCircuitAttacks:o,introAttacks:r,buffs:d,resonanceChains:p,outroAttacks:k}}export{m as getData};
