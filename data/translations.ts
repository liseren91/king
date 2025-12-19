import { GameClass } from "../types";

export const translations = {
  en: {
    nav: {
      lore: "Lore",
      classes: "Classes",
      rules: "Rules",
      combat: "Combat",
      timeline: "Timeline",
      logistics: "Logistics",
      cta: "Join the LARP"
    },
    hero: {
      title: "King's Bounty",
      subtitle: "The Legend Returns",
      tagline: "\"Because you've been missing games like this!\"",
      startBtn: "Start Your Journey",
      oracleBtn: "Consult the Oracle",
      scroll: "Scroll"
    },
    features: {
      title: "Epic Strategy Reborn",
      items: [
        { title: "Tactical Hex Combat", desc: "Command your armies in classic hexagonal turn-based battles. Utilize terrain, magic, and Rage Spirits.", icon: "⚔️" },
        { title: "Non-Linear World", desc: "Explore the continent of Endoria freely. Sail between islands, descend into mines, and fly on your pegasus.", icon: "🗺️" },
        { title: "Rage Spirits", desc: "Summon powerful spirits from the Box of Rage. Level them up and unleash devastating attacks.", icon: "🔥" }
      ]
    },
    lore: {
      title: "The World of Endoria",
      subtitle: "To set the mood - backstory and faction previews",
      tabs: {
        history: "World History",
        knights: "Knights",
        princesses: "Princesses",
        villains: "Evil League",
        smac: "SMAC (Monsters)"
      },
      content: {
        history: [
          "Once upon a time, in a certain kingdom, there lived... normal people. No, son, this isn't about us.",
          "Peasants tilled the soil, servants quietly pilfered from their masters, knights wore out their chainmail trousers at feasts and squeezed sweaty maids in corners. Kings fought each other using customs duties, court painters confidently flattered princesses, and enemies of the state acted so quietly they couldn't be caught for ages. Life was ordinary until the royal printing house published a book of fairy tales.",
          "The first knight in shining armor and a white cloak was looked at askance. The tenth — with apprehension. Against such rabid romantics, normal knights looked pale. Suddenly, beautiful princesses appeared — with unicorns, songbirds, and manners that made them the adoration of the entire male court.",
          "Real princesses immediately went on a hunger strike to compete, but it was no use! The situation heated up. Exhausted by male whining and female hysterics, the king signed a decree — all overly heroic knights and overly beautiful princesses were to be put on a ship and expelled — to the devil, or in this case, to the West.",
          "Meanwhile, the dark side suffered from the same disease. The villains decided — anyone caught doing a creepy evil laugh was to be sent away so as not to compromise the cause. Wearing a black cloak? Get out. Have an unlocked secret gate in your castle? Out. Talking to a defeated enemy? Out, and don't come back. Under cover of night, a ship with all the villainous villains sailed — straight to the East.",
          "Everything would have been fine if the earth hadn't turned out to be round.",
          "...On the other side of the world, on a small island, monsters lived peacefully in a Very Dark Forest. And then — crash-bang! — on the left, light forces charged under colorful banners trampling dandelions; on the right, dark forces built a gloomy citadel and laughed so sinisterly that cuckoos dropped dead from branches. The monsters wailed, groaned... and dug in right in the middle.",
          "And that's how we've been living in a fairy tale ever since, son."
        ],
        knights: [
          "Welcome to the School of Knighthood, lad! Leave your rusty, blood-stained greatsword at the entrance; here we teach how to be true knights without fear or reproach.",
          "Our school was founded by King Mark himself, God grant him long life, and is led by Sir Richard Iron Tooth – yes, the very one who bit off a dragon's tail in his youth.",
          "We only accept the best of the best here, lad, but the life of a knight is a sight to behold!",
          "Up at eight, porridge for breakfast, light warm-up – and off to perform training feats. Defeating princesses, saving monsters – that is, the other way around, or at least however it goes.",
          "In the evening – poetry, lute playing, contests for the best serenade under the balcony – fortunately, the finishing school for noble maidens is nearby. What do you need to enroll? Besides impenetrable stu... err, courage?",
          "You'll need a good squire, lad. One who will sharpen your sword, pick daisies for princesses, and always know where your second sock is. If you don't have a squire, we can find someone via the exchange program.",
          "Alright, lad, move along, don't hold up the line. Welcome to the School of Knighthood!"
        ],
        princesses: [
          "Shhh! No sniffling, no shuffling, and absolutely no spitting sunflower seeds on the floor. Do you hear those enchanting sounds, those steel notes in the voice? One-two-three, one-two-three... That is Her Majesty the Queen practicing a new waltz with the princesses for the graduation ball.",
          "Here at the finishing school for noble maidens, everything is thought out to the smallest detail, every day is scheduled to the minute. Her Majesty's motto is piety and etiquette, and believe me, the students not only know the purpose of each of the fifteen forks on the table but can also stick any of them into a rival's leg absolutely soundlessly, without staining their dress with blood or dropping their prayer book. Ah, that old school, that friendly female collective!",
          "Of course, a true princess has mastered self-defense to perfection – she can deliver a slap even through a visor and faint so that her skirt doesn't ride up.",
          "But you should see how their faithful ladies-in-waiting fuss over the princesses! After all, it is very tiring – changing several knights a day. All those letters, hysterics, blown kisses, a timely tear... And how many handkerchiefs need to be embroidered – it's a terrible business.",
          "Well then, my dear, don't be so jealous, or your mascara will run, it's not worth it.",
          "Moving along..."
        ],
        villains: [
          "Ladies and gentlemen! I mean, treacherous villains and their minions, bow down before the Dark Lord, the great and terrible!",
          "Tonight at midnight, by the light of the blood moon, the Evil League of Evil is holding a day... Night of Open Doors!",
          "Only the most creepy, inhumane, and cold-blooded villains stay in the League for long; all others quickly go to feed the Dark Lord's favorite sundew.",
          "Only true villains can make a career – the very ones who tell the hero their plans before killing them and leave the ventilation shaft unlocked. Try your hand at serving Darkness too!",
          "We need blood, more blood! Thank you, that's enough.",
          "Here, take a flyer and come to the first class. We will teach you completely free of charge how to properly develop Stockholm syndrome in a princess.",
          "Villains accredited in our League receive the right to a monthly dressing-down from the Dark Lord, an evil laugh generator, and a subscription to attend orgies (6+).",
          "What? Why does the subscription say '6+'? Don't torture yourself, leave that for your enemies.",
          "And now we will inspect the torture chamber. I need two volunteers..."
        ],
        smac: [
          "How to properly prepare Knight-style Bigos?",
          "We'll need one moderately plump knight, preferably in full armor. Find a suitable knight, demoralize him, and without removing the armor, place on a slow fire. While the knight is stewing, you can chop some cabbage...",
          "This and many other useful and delicious recipes are in our Monster's Cookbook. Look how many interesting things there are! Princess marinated in her own tears. Complex Shchi from Lancelot and Guinevere. 'Robin Hood' pies with onions and eggs...",
          "Becoming a true master of combat cooking, you can add your own recipe to the Cookbook.",
          "At SMAC – the Fairytale Monsters Academy of Cooking – we accept only real monsters. You won't be lonely in the Very Dark Forest anymore, for here you'll meet many like-minded individuals and connoisseurs of your culinary talents.",
          "Our motto – cook always, cook everywhere! Knights, princesses, villains – everyone will find a place in our large friendly cauldron!"
        ]
      }
    },
    classes: {
      title: "Character & Classes",
      subtitle: "Development, Classes and Special Abilities",
      roles: {
        [GameClass.WARRIOR]: { 
          title: "The Warrior", 
          role: "Tank / Leader",
          details: [
            { label: "Starting Equipment", value: "Physical Attack, Physical Defense." },
            { label: "Ability — Iron Will", value: "Once per hour, a warrior can use a fourth hit point in combat." },
            { label: "Activation Marker", value: "A roar and the word \"Persevere\" (Prevazmogayu)." }
          ]
        },
        [GameClass.WIZARD]: { 
          title: "The Wizard", 
          role: "Magic Damage",
          details: [
            { label: "Starting Equipment", value: "Magic Attack, Magic Defense." },
            { label: "Ability — Power Blast", value: "Once per hour, one of the wizard's attacks deals 1 extra hit damage (if the attack lands)." },
            { label: "Activation Marker", value: "The word \"Flash!\" (Vspyshka!)" }
          ]
        },
        [GameClass.ROGUE]: { 
          title: "The Rogue", 
          role: "Debuff / Striker",
          details: [
            { label: "Starting Equipment", value: "Physical Attack, Magic Defense." },
            { label: "Ability — Cunning Trick", value: "Once per hour, a rogue can disable one piece of defensive equipment on an opponent (The equipment regenerates its properties following the same rules as natural hit point recovery)." },
            { label: "Activation Marker", value: "The word \"Slice!\" (Podrezayu!) and indicating the equipment slot the rogue wants to spoil. If this opponent's slot is empty, the rogue missed, the ability is considered used, and nothing happens." }
          ]
        },
        [GameClass.MONSTER]: { 
          title: "The Monster", 
          role: "Boss / Chef",
          details: [
            { label: "Faction Info", value: "All monsters are members of SMAC, all members of SMAC are monsters." },
            { label: "Starting Equipment", value: "Magic Attack, Physical Defense." },
            { label: "ATTENTION!", value: "Monsters as a single character have 6 hits." },
            { label: "Ability — Devour", value: "Once per hour, after winning a battle, a Monster can devour a severely wounded opponent, restoring 2 hits. Devouring implies automatic finishing off of the opponent." },
            { label: "Activation Marker", value: "The word \"DEVOUR\" (\"ZHRU\") and roleplay according to culinary preferences." }
          ]
        }
      },
      capital: {
        title: "Starting Capital",
        desc: "10 points for equipment.",
        items: [
          "1 pt: Shield of your type",
          "2 pts: Immunity (your type), Shield (other type)",
          "4 pts: Immunity (other type)",
          "Free: 2 attacks (your type)",
          "Free: 1 special ability",
          "Bonus: 11th point if check-in < 2 mins"
        ]
      },
      abilities: {
        title: "Special Abilities",
        subtitle: "1 special ability is chosen at the start of the game, 1 more can be purchased for experience during the game.",
        list: [
          { name: "1. Black Widow", desc: "Skill for women only. Used in combat against men. The Black Widow has one extra attacking death-word (the death-word is prescribed in advance, e.g., fire attack). Used according to general combat rules." },
          { name: "2. Last Chance", desc: "Gives the character a pre-written level 2 attack that they can use only after losing all hit points." },
          { name: "3. Tactician", desc: "A skill that allows you to learn 1 death-word damaging the opponent instead of attacking. Can be used repeatedly during combat. Activation marker - the word \"Strategist\"." },
          { name: "4. Bodyguard", desc: "The skill specifies exactly whom the character protects. If the protected person is attacked, the attacker must first engage the bodyguard if they are in line of sight. Until the bodyguard is defeated, the protected person cannot be attacked. The protected person can explicitly order the bodyguard NOT to engage in battle instead of them." },
          { name: "5. Invisibility OR Stone Skin", desc: "The body becomes transparent/impenetrable, granting protection from all physical/magical damage. Blocks the last attack dealt, allowing an attack in the same round (does not consume an action). Used once per battle. Activation marker: person hugs their shoulders with their arms and bows their head." },
          { name: "6. Combo", desc: "Two identical attacks per round. Activation marker - \"Combo\" (declared immediately, together with the death-word). Used once per battle." },
          { name: "7. Berserker", desc: "Removes one hit point from yourself and the enemy. Activation marker - \"Berserker\". Used once per battle." },
          { name: "8. Armor", desc: "Allows ignoring the first missed attack. Not signaled." },
          { name: "9. Dodge", desc: "Dodge one attack. Activation marker - \"Dodge\". Used once per battle." }
        ]
      },
      items: {
        title: "Single-Use Items",
        desc: "Single-use items come in the form of **certificates** describing their effects. A character can hold **no more than THREE** single-use items at any time. These items may be **traded or gifted**, but **cannot be taken by force**. A single-use item may be used **as an action on your turn**, *except for* **healing potions** and **stunners**, which **do not require an action**. Once used, the item’s certificate is **destroyed**."
      }
    },
    roleExamples: {
      title: "Role Examples, or Who You Can Play As",
      subtitle: "In our game, the hero and their faithful companion are an equal tandem. The glory of one is the success of both!",
      labels: {
        hero: "Hero",
        companion: "Companion",
      },
      princesses: {
        title: "Princesses & gentlewoman",
          items: [
            { hero: "Cinderella", companion: "Fairy Godmother" },
            { hero: "Elsa", companion: "Olaf" },
            { hero: "Snow White", companion: "Loyal Dwarf" },
          { hero: "Jasmine", companion: "Rajah the Tiger" },
          { hero: "Fiona", companion: "Dragon Lady" },
        ]
      },
      knights: {
        title: "Knights & Squires",
        items: [
          { hero: "Sir Lancelot", companion: "Trombone" },
          { hero: "Shrek", companion: "Donkey" },
          { hero: "Don Quixote", companion: "Sancho Panza" },
          { hero: "Geralt of Rivia", companion: "Dandelion" },
          { hero: "Aladdin", companion: "Abu" }
        ]
      },
      villains: {
        title: "Villains & Minions",
        items: [
          { hero: "Maleficent", companion: "Diaval the Raven" },
          { hero: "Urfin Jus", companion: "Kaggi-Karr" },
          { hero: "Snow Queen", companion: "Kai" },
          { hero: "Count Dracula", companion: "Victor" },
          { hero: "Evil Queen", companion: "Loyal Huntsman" }
        ]
      },
      monsters: {
        title: "Monsters (Loners)",
        items: [
          "Troll",
          "The Beast (without Beauty)",
          "Banshee",
          "Nessie",
          "Shelob",
          "Boogeyman",
        ]
      }
    },
    rules: {
      title: "Game Engine",
      victory: { 
        title: "Victory", 
        desc: "The supreme goal of every hero is to win the RPG. The winner is the hero who has the maximum number of Glory points at the end of the game. Also winning is the companion who led their hero to victory." 
      },
      hero: { title: "Hero", desc: "Knight, Villain, Princess, or Monster." },
      companion: { title: "Companion", desc: "Squire, Minion, or Lady-in-waiting." },
      quests: { 
        title: "Quests", 
        desc: "There are several types of tasks.\n\nThe simplest and cheapest (in terms of XP) quests are given to players at the start of the game as their personal load.\nAlso, unlimited quests can be obtained from a Quest-giver.\n\nSuch quests come in three tiers:\n1. Simple (performed by a Hero-Companion pair)\n2. Complex (performed by two pairs and involve a Dungeon run; requires 4+ Glory)\n3. Very Complex (quests affecting the entire faction; requires 10+ Glory)\n\nCompleting a quest awards Glory and XP.\n\nIMPORTANT: If players have an idea for an adventure, they can pitch it to a Quest-giver, who may convert it into a quest with rewards." 
      },
      glory: { 
        title: "Glory", 
        desc: "A stat representing the hero's fame. Heroes earn Glory points for completing quests. If a hero fails a quest, they gain no Glory. If a hero completes a quest in a manner unbefitting their faction (e.g., a Knight wins with a Villain's help), and it becomes known, points may be revoked.\n\nGlory cannot be looted or transferred. It determines the hero's rank and access to quest tiers. Only Heroes have Glory; Companions do not. When multiple heroes complete a quest, Glory is split evenly." 
      },
      xp: { 
        title: "XP (Experience)", 
        desc: "A stat representing experience, power, and wealth.\nUnlike Glory, XP is transferable, though not lootable. XP can be spent on character upgrades, services from others, and yes, in our game, experience can be drunk away.\nWhen you transfer XP, consider it as handing over beautiful Golden Expandus coins.\nBoth Heroes and Companions receive XP.\nWhen a quest is completed by multiple characters, XP is split evenly unless agreed otherwise." 
      },
      dungeon: {
        title: "Dungeon",
        desc: "A special zone with potential deviations from basic game mechanics, necessary for completing certain quests. The only way to enter a dungeon is by having the corresponding quest."
      },
      masters: { 
        title: "Quest-Givers", 
        desc: "Game masters who dispense quests and distribute XP/Glory. After completing a quest, the hero and companion return to the Quest-giver who issued it (or their faction Quest-giver for starter quests).\n\nQuest-givers at locations:\n• Knights: The King & Sir Richard Irontooth\n• Princesses: The Queen & Frau Bock\n• Villains: The Dark Lord & His Minion Bootlicker\n• Monsters: The Sphinx" 
      },
      factions: {
        title: "Relations Between Factions",
        knights: { name: "Knights", allies: "Allies: Princesses, Monsters", enemy: "Enemy: Villains" },
        princesses: { name: "Princesses", allies: "Allies: Knights, Villains", enemy: "Enemy: Monsters" },
        monsters: { name: "Monsters", allies: "Allies: Knights, Villains", enemy: "Enemy: Princesses" },
        villains: { name: "Villains", allies: "Allies: Princesses, Monsters", enemy: "Enemy: Knights" },
        warn: "Cooperation with enemy block is improper and punished by loss of Glory."
      }
    },
    combat: {
      title: "Combat Rules",
      subtitle: "Non-contact. Dramatic. Deadly.",
      general: {
        title: "Overview",
        list: [
          "Combat is non-contact.",
          "Always 1 vs 1. Mass battles are a series of 1v1 duels.",
          "HP: 3 (Heroes) / 6 (Monsters).",
          "Character sheet lists all Attacks, Defenses, and Immunities."
        ]
      },
      equipment: {
        title: "Equipment & Defense",
        desc: "Defense/Immunities are granted by equipment chips on your sheet. No costume requirement.",
        slots: "6 Slots: Helm, Armor, Shield, Gloves, Boots, Amulet.",
        mechanic: "Each item holds 2 defenses/immunities (Amulet only defenses). Attacks are unlimited and don't take slots."
      },
      flow: { 
        title: "Combat Flow", 
        start: "Start by shouting 'Attack!' + Target. Stops all other actions.",
        round: "Turn-based. 1 Action per round.",
        actions: [
          { name: "Attack", desc: "Use a Death Word. Example: 'I strike with my flaming sword!'" },
          { name: "Item/Ability", desc: "Use a single-use item or class ability." },
          { name: "Castling (Swap)", desc: "Swap with an ally by mutual consent. Takes 1 full action (attack next round)." }
        ]
      },
      words: { 
        title: "Death Words",
        escalation: [
          "No fairytale character ever uses their strongest weapon in combat without first trying to strike the opponent with a weaker one.",
          "Thus, higher-level death-words can only be used after all available lower-level death-words have been used.",
          "The exception is magic scrolls, which are considered a single-use item, not an attack."
        ],
        levels: [
          { lvl: "Level 1 (Physical)", list: "Piercing, Slashing, Chopping, Crushing" },
          { lvl: "Level 1 (Magical)", list: "Fire, Ice, Acid, Lightning" },
          { lvl: "Level 2", list: "Light, Dark, Shadow, Astral" },
          { lvl: "Level 3", list: "Crushing (Ultimate)" }
        ],
        consequences: {
          intro: "Attacking action can lead to the following consequences:",
          items: [
             "Removes 3 HP if the opponent is vulnerable to the declared death-word.",
             "Removes 1 HP if the opponent has protection from the declared death-word.",
             "Removes 0 HP if the opponent has immunity to the declared death-word."
          ]
        }
      },
      aftermath: { 
        title: "Aftermath", 
        states: [
          { name: "Wounded", desc: "0 HP. Cannot fight/resist. Heals in 10 mins at home base." },
          { name: "Finishing", desc: "Requires 'I finish you' + Roleplay. Sends victim to GM." },
          { name: "Afterlife", desc: "Write an essay on 'How I avoided death' to respawn. Better essay = faster respawn." }
        ]
      },
      captivity: {
        title: "Captivity Rules",
        intro: "You can capture anyone in the game using the following methods:",
        ways: [
          "By mutual consent of both parties to enhance the roleplay.",
          "You can capture a defeated opponent after winning a battle. Important! If a hero is defeated, their companion can either continue the fight, go into captivity with the hero, or flee to tell others what happened."
        ],
        inPrison: {
          title: "In Captivity",
          desc: "If you leave your prisoner alone and don't interact with them for more than ten minutes, they take out paper and begin writing an essay on \"How I Miraculously Escaped from Captivity\".",
          prevent: "The only way to prevent them from writing the essay is by giving them your attention. While you engage them in conversation or demonstrate torture instruments, they cannot plan an escape and therefore won't flee.",
          escape: "When the essay is finished, the player is free to leave their dungeon.",
          noChase: "You cannot pursue such a character.",
          exception: "However, the escaped player is only invulnerable to the villain who captured them."
        }
      },
      mercy: {
        title: "Mercy Rules",
        intro: "After defeating a character in combat, you can utter the sacred phrase \"I shall spare you!\"",
        noFinish: "After this phrase, you can no longer finish off the defeated — you can only release them.",
        reward: "In return, the defeated must truthfully answer 1 question from the victor OR provide 1 service (this service cannot involve game mechanics — you cannot ask them to share XP or give up their items)."
      }
    },
    timeline: {
      title: "Timeline",
      desc: "Our game has a strict timeline. Game starts with graduation. Knights learn feats, Princesses learn etiquette, Villains learn evil, Monsters learn cooking.\n\nAfter exams, free play begins (quests). Each location hosts one major event yielding Glory.",
      events: [
        { time: "21:30", event: "Game Start" },
        { time: "22:00-01:00", event: "Classes at locations." },
        { time: "01:00", event: "Lights out" },
        { time: "09:00", event: "Wake up, breakfast, prep for exams" },
        { time: "11:00", event: "Exams." },
        { time: "12:00", event: "Free Play Start. Quests, intrigue." },
        { time: "15:00", event: "Tournament (Knights) & Orgy (Villains, 6+)" },
        { time: "16:00", event: "Lunch (Everywhere)." },
        { time: "17:00", event: "Ball (Princesses) & Cooking Contest (SMAC)." },
        { time: "18:00", event: "Free Play continues" },
        { time: "24:00", event: "Game Over & Results." }
      ]
    },
    logistics: {
      title: "Life & Logistics",
      fee: {
        title: "Participation Fee",
        desc: "We don't know yet, but we're planning between 20 and 40 euros."
      },
      accommodation: {
        title: "Accommodation",
        desc: "To avoid non-game 'overlaps', we recommend setting up tents near your faction location. Therefore, do not take one tent for two if you are going to different locations."
      },
      food: {
        title: "Food",
        desc: "We will provide centralized catering (Friday dinner, Saturday breakfast and lunch, post-game dinner). During the game, food will be organized by locations (factions) and is part of the gameplay. We also organize food for players who arrive early or stay after the game if they are ready to help the master group."
      },
      alcohol: {
        title: "Alcohol",
        desc: "We do not forbid alcohol but call for moderation. Excess will be determined at our discretion and may lead to temporary exclusion or removal from the site. There will be an in-game bar where you can drink for experience points. The rule 'experience cannot be drunk away' does not apply here!"
      },
      ecology: {
        title: "Ecology",
        desc: "No cutting green wood, no littering, and no open fires outside designated areas. Separate waste collection (plastic, glass, metal) will be organized. Please leave the site better than you found it."
      },
      transport: {
        title: "Transport",
        desc: "Parking will be designated. Do not use vehicles during the game unless absolutely necessary. We don't organize delivery to the site, but you might arrange a ride with other drivers personally."
      },
      medicine: {
        title: "Medicine",
        desc: "We will have a basic first aid kit, but bring your specific medications. In case of emergency, we have master transport for evacuation to the nearest medical facility."
      }
    },
    oracle: {
      title: "Ask the Royal Oracle",
      poweredBy: "Powered by Gemini AI",
      placeholder: "Ask the Oracle...",
      btn: "Ask",
      initial: "Hark, brave soul! I am the Royal Oracle. Ask me of dangers to come, secrets of classes, or legends of Endoria.",
      loading: "The mists of time thicken..."
    },
    footer: {
      disclaimer: "\"The Legend Returns\" is a fan tribute and concept.",
      rights: "© 2025 Katauri Interactive / 1C Company Tribute",
      links: ["Privacy", "Terms", "Masters"]
    },
    mastersArea: {
      title: "Master's Secret Sanctum",
      loginTitle: "Access Restricted",
      loginSubtitle: "Enter the secret word to reveal the hidden knowledge",
      passwordPlaceholder: "Enter secret word...",
      loginBtn: "Unlock Secrets",
      error: "Wrong word, traveler. The secrets remain hidden.",
      content: {
        cheatsheet: {
          title: "XP Distribution Cheatsheet for GMs",
          table: {
            headers: ["Quest Type", "Glory", "XP"],
            rows: [
              ["Simple", "1", "10"],
              ["Complex (Dungeon)", "2", "20"],
              ["Final (4th)", "3", "30"],
              ["Faction", "4 / 1", "40 / 10"]
            ]
          },
          sections: [
            {
              title: "Simple Quest",
              desc: "From envelope or issued by you. Rewards: 1 Glory, 10 XP per player. Done by a pair or 1 monster. Duration: ~30 mins. All non-dungeon quests are considered simple. If a player is stuck, push a simple quest on them."
            },
            {
              title: "Complex Quest (Dungeon)",
              desc: "Reward: 2 Glory, 20 XP per player. Can be completed by four players (the monster requires two, but the XP is for one). A hard quest can be taken by a player with at least 4 Glory. Dungeon quests respawn."
            },
            {
              title: "Final Character Quest",
              desc: "The 4th quest from their envelope. Rewards: 3 Glory, 30 XP per player. Done by a pair and 1 monster."
            },
            {
              title: "Faction Quest",
              desc: "Can be taken by a character with at least 10 Glory, performed by a group. Upon completion, the player who took the quest receives 4 Glory and 40 XP per player (for themselves and their companion); all who joined receive 1 Glory and 10 XP per player.\n\nA Faction Quest is a 'tug-of-war' or 'capture the flag' scenario. Each block has a symbol of power – the King's crown, the Queen's fan, the Dark Lord's rod, the Sphinx's ladle. The quest's essence: the GM asks to bring the symbol of power from an enemy location (Knights vs Villains, Princesses vs Monsters). There should be lots of action and fighting. GMs participate in the fight; we will provide cards. If the symbol of power is removed from a location, the GMs there give their players no other quests except to return it. Returning the symbol of power is also a Faction Quest; it can be given to someone with 10 Glory or, if none are available, to whoever has the most."
            }
          ]
        },
        xpCosts: {
          title: "Cost in XP",
          table: {
            headers: ["", "Attack", "Defense", "Immunity"],
            rows: [
              ["Level 1 (own class)", "10", "5", "10"],
              ["Level 1 (foreign class)", "20", "10", "20"],
              ["Level 2", "30", "15", "30"],
              ["Level 3", "50", "25", "50"]
            ]
          },
          startingEquip: [
            { class: "Warrior", equipment: "physical attack, physical defense." },
            { class: "Wizard", equipment: "magic attack, magic defense." },
            { class: "Rogue", equipment: "physical attack, magic defense." },
            { class: "Monster", equipment: "magic attack, physical defense." }
          ],
          items: {
            title: "Items",
            rows: [
              ["Healing Potion", "10"],
              ["Wall-up", "10"],
              ["Friendship Potion", "10"],
              ["Stunner", "10"],
              ["Switch Potion", "10"],
              ["Battle Mirror", "15"],
              ["Level 1 Scroll", "5"],
              ["Level 2 Scroll", "8"],
              ["Level 3 Scroll", "15"]
            ]
          },
          abilitiesNote: "Abilities — 1 free at start. Purchase during the game — 20."
        },
        envelopeQuests: {
          title: "Envelope Quests",
          subtitle: "Character-specific goals from starting envelopes",
          characters: [
            {
              name: "Lancelot",
              quests: [
                "Challenge the most pretentious villain to a duel and win.",
                "Give a ceremonial speech and win applause.",
                "Earn the queen's love and invite her to a walk in the forest to see the heather bloom.",
                "Become the leader of all knights and receive the official title of 'First Knight of the Kingdom' from the king."
              ]
            },
            {
              name: "Don Quixote",
              quests: [
                "Mistook a princess for a terrifying monster and defeat her in combat.",
                "Confused again and received a token of favor from the monster, then dedicated a feat to him.",
                "Uncover and prevent a villain's plan.",
                "Discover a terrible injustice in the world, inform a large number of people about it, and then correct it."
              ]
            },
            {
              name: "Shrek",
              quests: [
                "Scare anyone to the point of screaming.",
                "Substitute for a knight in a feat (perform the feat in their stead).",
                "Defeat the monster who has captured the princess and free her.",
                "Arrange a wedding for the princess to a knight, but before the wedding, challenge the knight to a duel, defeat him, and take the princess for yourself."
              ]
            },
            {
              name: "Princess in Armor",
              quests: [
                "Defeat someone in a duel who makes a sexist joke.",
                "Rescue a knight from captivity or certain death.",
                "Defeat the winner of a knight's tournament.",
                "Become the leader of all knights and receive the official title of 'First Knight of the Kingdom' from the king."
              ]
            },
            {
              name: "Aladdin",
              quests: [
                "Give Princess Jasmine an animal (with a bow).",
                "Trick a villain to your advantage.",
                "Infiltrate the Dark Citadel disguised as a villain.",
                "Organize trade between factions."
              ]
            },
            {
              name: "Robin Hood",
              quests: [
                "Distribute all experience earned from one feat to the most infamous knights.",
                "Capture a villain, bring him to the Light Castle, feed him, and release him in exchange for experience or items.",
                "Rob a caravan.",
                "Assemble a Sherwood Forest Brotherhood of at least 5 characters, establish a common symbolism, and jointly adopt the Sherwood Brotherhood Charter. Then, carry out a joint raid on the Dark Citadel to save someone from certain and terrible death."
              ]
            },
            {
              name: "Witcher",
              quests: [
                "Befriend a monster and share a drink with it in a tavern.",
                "Kiss 5 princesses.",
                "Receive experience for defeating a monster.",
                "Compile a book of witcher lore: learn and record the culinary preferences of all the monsters on the range, then give a public lecture."
              ]
            },
            {
              name: "Galahad",
              quests: [
                "Choose the Seat of Doom and sit upon it, which must be witnessed by a large number of knights.",
                "Subject yourself to a temptation that could deprive Galahad of his purity, and overcome it.",
                "Save the honor of a virgin.",
                "Bring the Grail to the king (the cup is somewhere in the Dark Citadel)."
              ]
            },
            {
              name: "Conan the Barbarian",
              quests: [
                "Steal a princess of your choice and drag her to your place.",
                "Make any princess faint with your uncourtly behavior.",
                "Defeat a dark mage in a duel.",
                "Defeat three opponents in a row without returning to your location or castling."
              ]
            },
            {
              name: "Malvina",
              quests: [
                "Choose the most unkempt and ill-mannered knight and teach him to wash his hands before eating.",
                "Capture someone who is poor at arithmetic and lock them in a closet for educational purposes.",
                "Do something nasty to the ill-mannered Princess Brunhilda.",
                "Obtain the golden key (somewhere in the Very Dark Forest from the monsters)."
              ]
            },
            {
              name: "Barbie",
              quests: [
                "Arrange a duel between two men motivated by jealousy over Princess Barbie.",
                "Disgrace Snow White in public.",
                "Become the Queen of Love and Beauty at a knight's tournament.",
                "Spread your style to 2/3 of the princesses in the location: they must wear a specific symbol (a heather flower in their buttonhole, a ribbon in their hair, etc.)."
              ]
            },
            {
              name: "Snow White",
              quests: [
                "Have a knight publicly declare that Snow White is more beautiful than the queen herself.",
                "Help break a spell or remove a curse from someone.",
                "Disgrace Princess Barbie in public.",
                "Conquer evil with love."
              ]
            },
            {
              name: "Cinderella",
              quests: [
                "Restore order and cleanliness in the boarding school for noble maidens.",
                "Help two princesses prepare for the ball so that Cinderella is thanked.",
                "Perform a dirty trick on the princess of Bremen.",
                "Lose a slipper (or other item of clothing) so that a handsome knight or villain finds it. Marry the finder."
              ]
            },
            {
              name: "Princess from Bremen",
              quests: [
                "Find Donkey, Cat, and Dog and put on a performance.",
                "Sing a duo of 'Ray of Golden Sunshine' with someone.",
                "Put a dirty trick on Cinderella.",
                "Run away from home: ensure she is accepted as a full member of any other faction."
              ]
            },
            {
              name: "Jasmine",
              quests: [
                "Put a dirty trick on Vasilisa.",
                "Get an audience with the Dark Lord and receive a quest from him.",
                "Lure one of the princesses into captivity with the evil League.",
                "Discover the evil plan of one of the villains and help Aladdin thwart it."
              ]
            },
            {
              name: "Elsa",
              quests: [
                "Accidentally harm one of the princesses.",
                "Repair the consequences of harm done to a princess.",
                "Help two loving hearts unite.",
                "Challenge the Snow Queen and either convince her to join the good side or expose all her evil plans and prevent them from coming to fruition."
              ]
            }
          ]
        },
        simpleQuests: {
          title: "Simple Quest Examples",
          subtitle: "Quests that can be issued by Quest-givers",
          blocks: [
            {
              title: "Light Faction (Knights)",
              quests: [
                "Eavesdrop on a villainous secret",
                "Gather a bouquet and give it to the Queen",
                "Build a ram for storming the dark citadel",
                "Challenge a villain to a duel and defeat them",
                "Obtain a symbol of favor from a beautiful lady",
                "Collect evidence of the Loch Ness Monster's existence",
                "Bring a captured villain for interrogation to the Academy of Knighthood",
                "Teach Zmey Gorynych (The Three-Headed Dragon) to sing in a choir",
                "Deliver a letter from the King to the Dark Lord",
                "Put a villain in an awkward situation in public",
                "Compose a poem about your exploits and read it publicly in the castle"
              ]
            },
            {
              title: "Pink Faction (Princesses)",
              quests: [
                "Convince a knight to dedicate their next exploit to a princess",
                "Get captured and be rescued",
                "Provoke a duel between a knight and a villain",
                "Decorate the finishing school for noble maidens",
                "Inspire a knight to defeat a monster",
                "Find out why Bluebeard has a blue beard",
                "Find out if the Unspeakable Horror is really that scary and if it's worth fearing",
                "Conduct an etiquette lesson in the Dark Citadel",
                "Conduct a test to determine the most courtly knight",
                "Make a tragedy out of nothing"
              ]
            },
            {
              title: "Dark Faction (Villains)",
              quests: [
                "Make two knights quarrel",
                "Eavesdrop on a light secret",
                "Write 'The Dark Lord is a great guy' on the wall of the light castle",
                "Kidnap a princess and sway her to the dark side",
                "Defeat a knight in a duel",
                "Tame a monster",
                "Build an emergency exit from the Dark Citadel",
                "Persuade three princesses to come to an orgy",
                "Lull Snow White to sleep with conversation",
                "Rob a caravan"
              ]
            },
            {
              title: "Monsters (SMAC)",
              quests: [
                "Cook a stew from a knight in armor",
                "Marinate a princess with conversation until she is completely out of it",
                "Cook aspic from the bones of some undead",
                "Prepare canapés from dwarves",
                "Prepare shawarma from a dog, cat, or some other animal",
                "Organize a good place for an ambush in the Very Dark Forest",
                "Have an explanatory conversation with a Princess in armor and decide if she is a knight or a princess - should you eat her or not?",
                "Invent a princess lure",
                "Find out the Dark Lord's culinary preferences"
              ]
            }
          ]
        },
        polygraphy: {
          title: "Polygraphy & Materials",
          subtitle: "Printable documents and game assets",
          items: [
            { title: "XP 1", url: "https://docs.google.com/document/d/1JaFK1h5nD5CedblB6upcFMYKY9Nj4Z0h/edit" },
            { title: "XP 5", url: "https://docs.google.com/document/d/1dnbg49N1hXdk7H5Ml1w-dOrsSil3-G32/edit" },
            { title: "XP 10", url: "https://docs.google.com/document/d/1jdcXHv-fkpIIJW64VB2WNjaHR4PUKOBG/edit" },
            { title: "XP 20", url: "https://docs.google.com/document/d/1Pyb0pKNcV4Mb65ByZKIuKhNNwhMESSA7/edit" }
          ]
        },
        characterCard: {
          title: "Character Card Template",
          subtitle: "Official game character sheet for players",
          attacks: "Attacks",
          defense: "Defense & Immunities",
          classLabel: "Character Class",
          ability1: "Ability 1",
          ability2: "Ability 2",
          slot: "Slot",
          types: {
            physical: ["Piercing", "Slashing", "Chopping", "Crushing"],
            magical: ["Fire", "Ice", "Acid", "Lightning"],
            tier2: ["Light", "Dark", "Shadow", "Astral"],
            ultimate: "Ultimate"
          }
        },
        factionDungeons: {
          knights: {
            title: "Dungeon Quests for Knights",
            quests: [
              {
                title: "Hollow Hills",
                objective: "The King sends the party to the Seeds to ask advice on how to place a sword between him and the Queen – guard up or guard down. The answer must be whatever the game technicians find funniest.",
                execution: "The Seeds invite the characters one by one and ask them riddles (the game technicians must come up with one in advance!), while also offering them food. Whoever eats the riddles will not leave without an additional ransom (they must sing, dance, recite poems from a stool – to torment the character at their own discretion).",
                victory: "2 riddles out of 4 – the quest is completed, and they receive advice. 3 or 4 – the answer and loot.",
                stuff: "A plate of goodies",
                loot: "A level 2 helmet with two defenses"
              },
              {
                title: "The Necromancer's Tower",
                objective: "The King sends the party to kill the Necromancer and bring him his crown.",
                execution: "Brawl: four characters against three gamemasters. Undead must be burned with fire or light.",
                victory: "Bring the necromancer's crown to the king.",
                stuff: "Crown, three character cards for the necromancer, zombie, and skeleton",
                loot: "One-time item, drops with the crown"
              },
              {
                title: "Demon",
                objective: "The king asks the party to drive out a demon that has settled on the border of the royal domain.",
                execution: "Option 1: Simply stab the demon. Option 2 (preferred): Talk to the demon. The demon is a total mess. He asks you to beat up a guy who's hitting on his beloved Princess Tamara. He doesn't know who this guy is, but he knows that Tamara lives in a boarding school for noble maidens. The party goes to the pink block and begins making inquiries. It turns out (from the queen) that the queen is Princess Tamara. The players' objective: convince the queen to visit the demon. Scripted scene: 'Where were you 20 years ago?' the queen asks. The demon flies away in anguish, leaving behind an amulet.",
                victory: "Report to the king that the demon has disappeared one way or another.",
                stuff: "Character card for the demon",
                loot: "Amulet with two second-level defenses (only if the demon has flown away, does not drop from corpses)"
              },
              {
                title: "Gypsy camp",
                objective: "The Gypsies have stolen the best horse from the royal stable. You must bring it back.",
                execution: "Beat the Gypsies at pine cones and stones. Each character has one turn. Each side wagers something. The Gypsies wager a horse (if the horse has already been won, then scrolls), the players wager items or experience.",
                victory: "Bring the horse to the king.",
                stuff: "Game, coconuts",
                loot: "Scrolls (you get as many as you win)"
              },
              {
                title: "The Miserly Knight",
                objective: "The King sends the knights to an old knight who is thirty-four years behind on his membership fee to the Academy of Knighthood to extort the fee.",
                execution: "They arrive at the castle, where the Miserly Knight is reading a monologue of short tragedies over a chest. Naturally, he doesn't pay the fee. The heroes are called aside by the Miserly Knight's son, who says his father has withheld the inheritance and suggests killing him. If you help the son kill the Miserly Knight, you can take the money, but this fails the quest—it's not knightly (minus fame). If you refuse and tell the Miserly Knight about his son, he will die of grief, and you can take the money from the chest—wine.",
                victory: "Bring the king gold without killing the Miserly Knight.",
                stuff: "Chest, gold, a Stingy Knight card for battle",
                loot: "One-time use item from the chest"
              }
            ]
          },
          princesses: {
            title: "Dungeon Quests for Princesses",
            quests: [
              {
                title: "Apples of Rejuvenation",
                objective: "Bring the Queen apples of rejuvenation from the magical garden.",
                execution: "The apples are hung on a tree at a fairly high altitude. You must physically reach one apple, either by climbing on each other's shoulders or by some other means—it doesn't matter.",
                victory: "Bring the apple to the Queen",
                stuff: "Apples, rope",
                loot: "-"
              },
              {
                title: "Magical Forest",
                objective: "The Queen sends the princesses into the forest to pick snowdrops.",
                execution: "They are met in the forest by a wood goblin (Leshy). The wood goblin must be forced to reveal where the snowdrops are. To do this, he must be caught. The girls are blindfolded and must form a chain around the wood goblin—for a time. Grabbing the wood goblin's clothes is prohibited. If caught, he will hand over the snowdrops.",
                victory: "Bring the snowdrops to the Queen",
                stuff: "Snowdrops, blindfolds",
                loot: "One-time item, dropped by the Leshy if he liked the princesses"
              },
              {
                title: "The Giant's Castle",
                objective: "The Queen sends the Princess with the condition that she lure a knight to learn the fate of Princess X, who was kidnapped by the Giant.",
                execution: "They arrive at the Giant's castle, the Giant attacks, they defeat the Giant, and the Princess runs out, saying that they ruined her love life and that she won't go anywhere with them. She writes a letter to the Queen about how everything was going well for her.",
                victory: "Bring the Queen the letter.",
                stuff: "Giant card, piece of paper, pen",
                loot: "One-time item from the Giant"
              },
              {
                title: "Eulenspiegel's Mirror",
                objective: "The Queen sends the Princesses for a magic mirror (who is the fairest of them all?).",
                execution: "They arrive at the dungeon, where Eulenspiegel is in a frame, cruelly mocking everyone. The Queen cannot be given such a mirror (which the players must subtly hint at) – he must be taught good manners. The rehabilitated mirror, in the form of some abstract mirror, is carried to the Queen – this is a win. If Eulenspiegel is not rehabilitated, but brought to the Queen like this, Eulenspiegel will be rude to her, the Queen will be angry, and the experience will be lost.",
                victory: "Bring the mirror that Eulenspiegel gives to the Queen.",
                stuff: "Frame for Eulenspiegel, small mirror",
                loot: "One-time item – Battle Mirror (only if Eulenspiegel is rehabilitated)"
              },
              {
                title: "Courtly Love",
                objective: "A knight at the Queen's court publicly doubted the great power of love, declaring that physical love is more important than spiritual love. He must be humbled.",
                execution: "Challenge the knight to a contest and win a courteous argument. Two princesses are arguing, while their ladies-in-waiting sit to the side and whisper advice. The game masters decide who wins.",
                victory: "Report to the Queen that you've won the argument with the knight.",
                stuff: "-",
                loot: "Friendship potion"
              }
            ]
          },
          villains: {
            title: "Dungeon Quests for Villains",
            quests: [
              {
                title: "Popol Vuh",
                objective: "The Dark Overlord tells us that the King's team recently beat the Lords of the Underworld in a game of ball. ZLZ needs to do the same.",
                execution: "The Lords of the Underworld play Pioneerball against the players. Three on three, with one player designated as the referee. During the game, it is said that the winning team, as the most worthy, will be sacrificed.",
                victory: "Win unfairly to survive and complete the quest. Win fairly: complete the quest through the Dead Man's Land. Lose: do not complete the quest.",
                stuff: "Net, Ball",
                loot: "One-time item (given only in case of unfair winning)"
              },
              {
                title: "The Seventh Seal",
                objective: "The Dark Overlord sends the party to an abandoned haunted house to retrieve an ancient relic.",
                execution: "The ghost of a knight returning home from the Holy Land carrying some kind of relic, and Death, haunt the house. On the way, the knight played chess with Death and should have died gracefully and at the right time, but his horse stumbled, he fell, and bluntly broke his neck. The game remains unfinished (there's a chess problem on the board). It must be completed for either side. If you finish the game for Death, the knight dies, and the relic can be taken from him. If you finish the game for the knight, he will give the relic in gratitude, but then tell the king that noble villains saved him from Death, and the Dark Lord will take back his glory.",
                victory: "Bring the relic to the Dark Lord",
                stuff: "Chessboard, chess problem, relic",
                loot: "One-time use item (only from a dead knight)"
              },
              {
                title: "The Ring of Omnipotence",
                objective: "The Dark Lord sends the heroes to find a pretty ring for his latest flame.",
                execution: "The heroes arrive and find a ring lying around. They take it, and three Nazgûl fly out. A fight ensues. The heroes bring the ring to the Dark Lord, who says: 'This isn't the ring I read about in that fairy tale. Melt it down, just to be on the safe side.' The heroes look for a place to melt it; the ring can be melted in the Sphinx's cauldron.",
                victory: "Melt the ring in the Sphinx's cauldron and report back to the Dark Lord.",
                stuff: "Ring, three Nazgûl cards",
                loot: "One-time use item from the Nazgûl"
              },
              {
                title: "Fairy Godmothers",
                objective: "The Dark Lord sends villains to ruin Princess Aurora's christening. To do this, they need someone to wish her ill will at the christening.",
                execution: "Three game fairies are going to write poems with wishes (they say that the wishes must be in verse). The fairies must be distracted and write the poems themselves, making the wishes the most vile. The fairies read them and become furious.",
                victory: "Write nasty things in verse and report to the overlord.",
                stuff: "Notebook and pen",
                loot: "-"
              },
              {
                title: "Faust",
                objective: "The Dark Overlord asks you to help an inexperienced demon buy a soul – he's having trouble with something.",
                execution: "Mephistopheles and Faust are in the dungeon. Faust says he'll sell his soul only for newfound joys in life, namely, a kiss from a beautiful maiden and delicious food. Objective 1: Find the princess, persuade her to leave the dungeon, and kiss Faust. The princess doesn't receive fame or experience, but receives an amulet from Faust. Objective 2: trick the Sphinx into giving him some food. Faust sells his soul, and the party gains glory.",
                victory: "Report to the Overlord that the soul has been purchased.",
                stuff: "Pen, paper",
                loot: "Amulet with two level 2 defenses (for the princess)"
              }
            ]
          },
          monsters: {
            title: "Dungeon Quests for Monsters",
            quests: [
              {
                title: "Poetry Honey",
                objective: "The Sphinx sends monsters to the giants for poetry honey for a new sauce.",
                execution: "The giants challenge the players to complete challenges. Race in sacks – the game tech has a sack with a hole for the legs. Eat porridge faster – the player's porridge is terribly oversalted. Stain the nurse – both are blindfolded, the game tech has a blindfold with holes for the eyes. Then they are told: it is impossible to outrun thought, outeat fire, overcome old age. And they are given honey.",
                victory: "Bring the Sphinx honey.",
                stuff: "Two canvas sacks, two plates of food, salt, two blindfolds, a jar of honey",
                loot: "One-time item (awarded if the players played well and didn't push their limits)"
              },
              {
                title: "Spider's Lair",
                objective: "The Sphinx sends the heroes to fetch the meat of a rare bird caught in a spider's web.",
                execution: "A spider web is stretched. You must crawl through it without touching it. Each person crawls in turn; whoever touches it remains in place. If everyone gets stuck, a spider comes and eats one (random, it goes to the undead), and the quest is failed.",
                victory: "Bring the meat to the Sphinx.",
                stuff: "Can of stew, rope for the spider web",
                loot: "Armor left over from the previous seeker (armor with two magic immunities)"
              },
              {
                title: "Rainbow with Leprechauns",
                objective: "The Sphinx sends monsters to fetch the gold that the leprechauns keep because gold is the most comfortable place to sleep. Leprechauns cannot be killed because they are endangered.",
                execution: "Leprechauns are greedy but cowardly. You must find out from the leprechauns what they fear most. Leprechauns' greatest fear is getting sober. You need to go to the training ground, find some kefir/pickle juice/something, bring it back, and scare the leprechauns. Then they'll give you the gold.",
                victory: "Bring the gold to the Sphinx.",
                stuff: "Gold",
                loot: "-"
              },
              {
                title: "Poacher's Camp",
                objective: "The poachers have captured some rare animal and are keeping it in a sack. The Sphinx sends monsters to deal with the poachers.",
                execution: "The poachers must be killed. They have some unknown substance in the sack, it refuses to come out and demands cheese. If you find some cheese at the training ground and put it in the sack, the animal will give you some chewed-up ancient artifact in return.",
                victory: "Report to the Sphinx about killing the poachers.",
                stuff: "Large sack, 2 poacher cards",
                loot: "Shield with two magic immunities (given by a well-fed animal)"
              },
              {
                title: "Marinade",
                objective: "The Sphinx sends monsters on a practice run – help a friendly monster marinate a princess.",
                execution: "The princess marinates in tears; to do this, she must be upset enough to burst into tears. The party is trying to touch the princess's heart within a short timeframe, as she turns 18 in 15 minutes and will be too old for this dish.",
                victory: "Report to the Sphinx that the princess has marinated.",
                stuff: "-",
                loot: "One-time item gifted from a monster"
              }
            ]
          }
        }
      }
    }
  },
  ru: {
    nav: {
      lore: "Лор",
      classes: "Классы",
      rules: "Правила",
      combat: "Бой",
      timeline: "Таймлайн",
      logistics: "Быт",
      cta: "Вступить в игру"
    },
    hero: {
      title: "King's Bounty",
      subtitle: "Возвращение Легенды",
      tagline: "\"Потому что вы скучали по таким играм!\"",
      startBtn: "Начать Путь",
      oracleBtn: "Спросить Оракула",
      scroll: "Скролл"
    },
    features: {
      title: "Эпическая Стратегия Возрождается",
      items: [
        { title: "Тактические бои", desc: "Командуйте армиями в классических пошаговых битвах на гексах. Используйте ландшафт, магию и Духов Ярости.", icon: "⚔️" },
        { title: "Нелинейный Мир", desc: "Свободно исследуйте континент Эндоррия. Путешествуйте между островами, спускайтесь в шахты и летайте на пегасах.", icon: "🗺️" },
        { title: "Духи Ярости", desc: "Призывайте могущественных духов из Шкатулки Ярости. Прокачивайте их и обрушивайте разрушительные атаки.", icon: "🔥" }
      ]
    },
    lore: {
      title: "Мир Эндоррии",
      subtitle: "Для настроения - предыстория и обзор фракций",
      tabs: {
        history: "История Мира",
        knights: "Рыцари",
        princesses: "Принцессы",
        villains: "Лига Зла",
        smac: "СМАК (Монстры)"
      },
      content: {
        history: [
          "Жили-были в некотором царстве, в некотором государстве... нормальные люди. Нет, сынок, это не про нас.",
          "Крестьяне пахали, слуги по-тихому тащили у господ, рыцари протирали кольчужные штаны на пирах и жамкали по углам потных служанок. Короли воевали таможенными пошлинами, придворные живописцы уверенно льстили принцессам, а враги государства действовали так тихо, что их годами не могли поймать. Жизнь была обычной, пока королевская типография не выпустила сборник сказок.",
          "На первого рыцаря в сияющих латах и белом плаще посмотрели косо. На десятого — с опаской. На фоне таких оголтелых романтиков нормальные рыцари выглядели бледновато. Вдруг появились прекрасные принцессы — с единорогами, певчими птицами и манерами, от которых млел весь мужской двор.",
          "Настоящие принцессы тут же объявили голодовку, чтобы соответствовать, но куда там! Обстановка накалилась. Утомленный мужским нытьем и женскими истериками, король подписал указ — всех чересчур героических рыцарей и чересчур прекрасных принцесс посадить на корабль и выслать — к черту, ну или в данном случае, на Запад.",
          "Тем временем темная сторона страдала тем же недугом. Злодеи постановили — всех, кто замечен за жутким злодейским смехом, высылать, дабы не компрометировали дело. Носишь черный плащ? Вон. В замке есть незапертая потайная калитка? Вон. Разговариваешь с поверженным врагом? Вон, и не возвращайся. Под покровом ночи корабль со всеми злодейскими злодеями отчалил — прямиком на Восток.",
          "Все бы ничего, если бы земля не оказалась круглой.",
          "...На другом конце света, на небольшом островке, в Очень Темном Лесу мирно жили монстры. И тут — трах-бабах! — слева ломятся светлые силы под цветными знаменами, топчут одуванчики; справа темные силы возвели мрачную цитадель и хохочут так зловеще, что кукушки с веток дохнут. Монстры взвыли, застонали... и окопались ровно посередине.",
          "Так мы с тех пор и живем в сказке, сынок."
        ],
        knights: [
          "Добро пожаловать в Школу Рыцарства, парень! Оставь свой ржавый двуручник в кровище на входе, здесь мы учим быть истинными рыцарями без страха и упрека.",
          "Нашу школу основал сам король Марк, дай бог ему здоровья, а руководит сэр Ричард Железный Зуб – да-да, тот самый, что в молодости отгрыз дракону хвост.",
          "Мы берем сюда только лучших из лучших, парень, но жизнь рыцаря – это загляденье!",
          "Подъем в восемь, овсянка, легкая разминка – и вперед, совершать учебные подвиги. Побеждать принцесс, спасать монстров – то есть наоборот, ну или как пойдет.",
          "Вечером – стихи, игра на лютне, конкурсы на лучшую серенаду под балконом – благо, пансион благородных девиц рядом. Что нужно для поступления? Кроме непробиваемой ту... э-э, отваги?",
          "Тебе понадобится хороший оруженосец, парень. Такой, что и меч наточит, и ромашек для принцесс нарвет, и всегда будет знать, где твой второй носок. Если оруженосца нет – подберем по программе обмена.",
          "В общем, проходи, парень, не задерживай очередь. Добро пожаловать в Школу Рыцарства!"
        ],
        princesses: [
          "Тс-с-с! Не шмыгать носом, не шаркать и уж тем более не плевать семечки на пол. Слышите эти чарующие звуки, эти стальные нотки в голосе? Раз-два-три, раз-два-три... Это Ее Величество Королева разучивает с принцессами новый вальс к выпускному балу.",
          "У нас в пансионе благородных девиц все продумано до мелочей, каждый день расписан по минутам. Девиз Ее Величества – благочестие и этикет, и уж поверьте, воспитанницы не только знают назначение каждой из пятнадцати вилок на столе, но и могут воткнуть любую из них в ногу сопернице абсолютно беззвучно, не запачкав платье кровью и не уронив молитвенник. Ах, эта старая школа, этот дружный женский коллектив!",
          "Конечно, настоящая принцесса в совершенстве владеет самообороной – может дать пощечину даже через забрало и упасть в обморок так, чтобы юбка не задралась.",
          "Но видели бы вы, как возятся с принцессами их верные фрейлины! Ведь это очень утомительно – менять по нескольку рыцарей на дню. Все эти письма, истерики, воздушные поцелуи, вовремя пущенная слеза... А сколько платков нужно вышить – жуткое дело.",
          "Ну что же вы, милочка, не завидуйте так громко, тушь потечет, оно того не стоит.",
          "Проходим, проходим..."
        ],
        villains: [
          "Дамы и господа! То есть, коварные злодеи и их прихвостни, падите ниц пред Темным Властелином, великим и ужасным!",
          "Сегодня в полночь, при свете кровавой луны, в Злой Лиге Зла проводится день... Ночь Открытых Дверей!",
          "В Лиге надолго задерживаются только самые жуткие, бесчеловечные и хладнокровные злодеи, все прочие быстро идут на корм любимой росянке Темного Властелина.",
          "Карьеру могут сделать только истинные злодеи – те самые, что рассказывают герою свои планы перед убийством и оставляют незапертой вентиляционную шахту. Попробуй и ты свои силы в служении Тьме!",
          "Нам нужна кровь, больше крови! Спасибо, достаточно.",
          "Возьмите флаер и приходите на первое занятие. Мы совершенно бесплатно научим вас, как правильно выработать у принцессы стокгольмский синдром.",
          "Злодеи, аккредитованные в нашей Лиге, получают право на ежемесячный разнос от Темного Властелина, генератор злобного смеха и абонемент на посещение оргий (6+).",
          "Что? Почему в абонементе написано «6+»? Не мучьте себя, оставьте это для врагов.",
          "А сейчас мы осмотрим пыточную. Мне нужны два добровольца..."
        ],
        smac: [
          "Как правильно приготовить бигус по-рыцарски?",
          "Нам потребуется один в меру упитанный рыцарь, желательно в полной броне. Найдите подходящего рыцаря, деморализуйте его и, не вынимая из доспеха, поставьте на медленный огонь. Пока рыцарь тушится, можно успеть нарубить немного капусты…",
          "Этот и многие другие полезные и вкусные рецепты есть в нашей Поваренной книге монстра. Взгляните, сколько всего интересного! Принцесса, маринованная в собственных слезах. Сложные щи из Ланцелота и Гвиневеры. Пирожки «Робин Гуд» с луком и яйцами…",
          "Став настоящим мастером боевой кулинарии, вы сможете добавить свой рецепт в Поваренную книгу.",
          "В СМАК – сказочных монстров академию кулинарии – мы принимаем только настоящих чудовищ. Вам больше не будет одиноко в Очень темном лесу, ведь здесь вы встретите множество единомышленников и ценителей ваших кулинарных талантов.",
          "Наш девиз – готовьте всегда, готовьте везде! Рыцари, принцессы, злодеи – всем найдется место в нашем большом дружеском котле!"
        ]
      }
    },
    classes: {
      title: "Персонажи и Классы",
      subtitle: "Развитие, Классы и Специальные Способности",
      roles: {
        [GameClass.WARRIOR]: { 
          title: "Воин", 
          details: [
            { label: "Стартовое снаряжение", value: "Физическая Атака, Физическая Защита." },
            { label: "Способность — Железная Воля", value: "Раз в час воин может использовать четвертый хит в бою." },
            { label: "Маркер активации", value: "Рык и слово \"Превозмогаю\"." }
          ]
        },
        [GameClass.WIZARD]: { 
          title: "Маг", 
          details: [
            { label: "Стартовое снаряжение", value: "Магическая Атака, Магическая Защита." },
            { label: "Способность — Силовой Взрыв", value: "Раз в час одна из атак мага наносит 1 дополнительный хит урона (если атака прошла)." },
            { label: "Маркер активации", value: "Слово \"Вспышка!\"" }
          ]
        },
        [GameClass.ROGUE]: { 
          title: "Вор", 
          details: [
            { label: "Стартовое снаряжение", value: "Физическая Атака, Магическая Защита." },
            { label: "Способность — Подлый Трюк", value: "Раз в час вор может отключить один предмет защитного снаряжения на противнике (Снаряжение восстанавливает свойства по правилам восстановления хитов)." },
            { label: "Маркер активации", value: "Слово \"Подрезаю!\" и указание на слот снаряжения. Если слот пуст — промах." }
          ]
        },
        [GameClass.MONSTER]: { 
          title: "Монстр", 
          details: [
            { label: "Инфо о фракции", value: "Все монстры — члены СМАК, все члены СМАК — монстры." },
            { label: "Стартовое снаряжение", value: "Магическая Атака, Физическая Защита." },
            { label: "ВНИМАНИЕ!", value: "Монстры как единичный персонаж имеют 6 хитов." },
            { label: "Способность — Пожирание", value: "Раз в час после победы Монстр может сожрать тяжелораненого врага, восстановив 2 хита. Это означает автоматическое добивание." },
            { label: "Маркер активации", value: "Слово \"ЖРУ\" и отыгрыш согласно кулинарным предпочтениям." }
          ]
        }
      },
      capital: {
        title: "Стартовый Капитал",
        desc: "10 очков на снаряжение.",
        items: [
          "1 очко: Щит своего типа",
          "2 очка: Иммунитет (свой тип), Щит (чужой тип)",
          "4 очка: Иммунитет (чужой тип)",
          "Бесплатно: 2 атаки (свой тип)",
          "Бесплатно: 1 спецспособность",
          "Бонус: 11-е очко при регистрации < 2 мин"
        ]
      },
      abilities: {
        title: "Специальные Способности",
        subtitle: "1 спецспособность выбирается на старте, еще 1 можно купить за опыт в процессе игры.",
        list: [
          { name: "1. Черная Вдова", desc: "Навык только для женщин. Применяется в бою против мужчин. Черная Вдова имеет одно дополнительное атакующее слово смерти (прописывается заранее). Применяется по общим правилам." },
          { name: "2. Последний Шанс", desc: "Дает персонажу прописанную атаку 2 уровня, которую он может использовать только потеряв все хиты." },
          { name: "3. Тактик", desc: "Навык позволяет выучить 1 слово смерти, наносящее урон противнику, вместо атаки. Можно использовать многократно. Маркер - слово \"Стратег\"." },
          { name: "4. Телохранитель", desc: "Навык точно указывает, кого защищает персонаж. Если атакуют подзащитного, агрессор обязан сначала вступить в бой с телохранителем, если тот в прямой видимости. До победы над телохранителем бить подзащитного нельзя." },
          { name: "5. Невидимость ИЛИ Каменная Кожа", desc: "Тело становится прозрачным/непробиваемым. Блокирует последнюю нанесенную атаку, позволяет атаковать в том же раунде. Раз в бой. Маркер: обнять себя за плечи и склонить голову." },
          { name: "6. Комбо", desc: "Две одинаковые атаки за раунд. Маркер - \"Комбо\". Раз в бой." },
          { name: "7. Берсерк", desc: "Снимает один хит с себя и с врага. Маркер - \"Берсерк\". Раз в бой." },
          { name: "8. Броня", desc: "Позволяет игнорировать первую пропущенную атаку. Не маркируется." },
          { name: "9. Уклонение", desc: "Уклониться от одной атаки. Маркер - \"Уворот\". Раз в бой." }
        ]
      },
      items: {
        title: "Одноразовые Предметы",
        desc: "Одноразовые предметы существуют в виде **сертификатов**. Персонаж может иметь **не более ТРЕХ** предметов одновременно. Их можно **передавать или дарить**, но **нельзя отнять силой**. Использование — **действие в свой ход**, *кроме* **зелий лечения** и **оглушалок** (не требуют действия). После использования сертификат **рвется**."
      }
    },
    roleExamples: {
      title: "Примеры ролей, или за кого можно играть",
      subtitle: "В нашей игре герой и его верный спутник — это равноправный тандем. Слава одного — это успех обоих!",
      labels: {
        hero: "Герой",
        companion: "Напарник",
        loner: "Одиночка"
      },
      princesses: {
        title: "Принцессы и Фрейлины",
          items: [
            { hero: "Золушка", companion: "Крестная фея" },
            { hero: "Эльза", companion: "Олаф" },
            { hero: "Белоснежка", companion: "Верный гном" },
          { hero: "Жасмин", companion: "Тигр" },
          { hero: "Фиона", companion: "Дракониха" }
        ]
      },
      knights: {
        title: "Рыцари и Оруженосцы",
        items: [
          { hero: "Сэр Ланселот", companion: "Тромбон" },
          { hero: "Шрек", companion: "Осел" },
          { hero: "Дон Кихот", companion: "Санчо Панса" },
          { hero: "Геральт из Ривии", companion: "Лютик" },
          { hero: "Алладин", companion: "Абу" }
        ]
      },
      villains: {
        title: "Злодеи и Миньоны",
        items: [
          { hero: "Малефисента", companion: "Ворон Диаваль" },
          { hero: "Урфин Джюс", companion: "Кагги-Карр" },
          { hero: "Снежная королева", companion: "Кай" },
          { hero: "Граф Дракула", companion: "Виктор" },
          { hero: "Злая Королева", companion: "Верный охотник" }
        ]
      },
      monsters: {
        title: "Монстры (Одиночки)",
        items: [
          "Тролль",
          "Чудовище (без красавицы)",
          "Баньши",
          "Нэсси",
          "Бука",
        ]
      }
    },
    rules: {
      title: "Движок Игры",
      victory: { 
        title: "Победа", 
        desc: "Высшая цель каждого героя — выиграть в РПГ. Победителем считается герой, набравший максимальное количество Славы на конец игры. Также победителем считается компаньон, приведший своего героя к победе." 
      },
      hero: { title: "Герой", desc: "Рыцарь, Злодей, Принцесса или Монстр." },
      companion: { title: "Компаньон", desc: "Оруженосец, Миньон или Фрейлина." },
      quests: { 
        title: "Квесты", 
        desc: "Есть несколько типов задач.\n\nСамые простые (по XP) квесты выдаются на старте как личная загрузка.\nТакже неограниченные квесты можно брать у Квестодателей.\n\nТри уровня квестов:\n1. Простые (выполняет пара Герой-Компаньон)\n2. Сложные (две пары, включают Данж; нужно 4+ Славы)\n3. Очень Сложные (влияют на всю фракцию; нужно 10+ Славы)\n\nВыполнение дает Славу и Опыт." 
      },
      glory: { 
        title: "Слава", 
        desc: "Стат, отражающий известность героя. Герои получают Славу за квесты. Провал квеста не дает Славы. Если герой выполняет квест неподобающим образом (Рыцарь с помощью Злодея), очки могут быть отозваны.\n\nСлаву нельзя передать или украсть. Она определяет ранг и доступ к квестам. Только у Героев есть Слава." 
      },
      xp: { 
        title: "XP (Опыт)", 
        desc: "Стат, отражающий опыт, силу и богатство.\nВ отличие от Славы, XP можно передавать (но не грабить). Опыт можно тратить на прокачку, услуги, и да, его можно пропить.\nПередача опыта выглядит как передача красивых монет Golden Expandus." 
      },
      dungeon: {
        title: "Данж",
        desc: "Особая зона с возможными отклонениями от базовых механик, необходимая для выполнения некоторых квестов."
      },
      masters: { 
        title: "Квестодатели", 
        desc: "Мастера, выдающие квесты и награды. После выполнения вернитесь к тому, кто выдал квест.\n\nЛокации:\n• Рыцари: Король и сэр Ричард\n• Принцессы: Королева и Фрекен Бок\n• Злодеи: Темный Властелин и Лизоблюд\n• Монстры: Сфинкс" 
      },
      factions: {
        title: "Отношения Фракций",
        knights: { name: "Рыцари", allies: "Союзники: Принцессы, Монстры", enemy: "Враг: Злодеи" },
        princesses: { name: "Принцессы", allies: "Союзники: Рыцари, Злодеи", enemy: "Враг: Монстры" },
        monsters: { name: "Монстры", allies: "Союзники: Рыцари, Злодеи", enemy: "Враг: Принцессы" },
        villains: { name: "Злодеи", allies: "Союзники: Принцессы, Монстры", enemy: "Враг: Рыцари" },
        warn: "Сотрудничество с вражеским блоком не приветствуется и карается потерей Славы."
      }
    },
    combat: {
      title: "Правила Боя",
      subtitle: "Бесконтактно. Драматично. Смертельно.",
      general: {
        title: "Общие места",
        list: [
          "Боевка бесконтактная.",
          "Всегда 1 на 1. Массовые бои — это серия дуэлей.",
          "Хиты: 3 хита, кроме чудовищ. У чудовищ 6 хитов.",
          "У каждого есть Карта Персонажа с атаками, защитами и иммунитетами."
        ]
      },
      equipment: {
        title: "Снаряжение и Защита",
        desc: "Защиты/Иммунитеты обусловлены надетой экипировкой (чипы в карте). Соответствие костюма не требуется.",
        slots: "6 Слотов: Шлем, Броня, Щит, Перчатки, Обувь, Амулет.",
        mechanic: "В 1 предмет входит 2 защиты/иммунитета (в Амулет — только защиты). Атаки не занимают слоты."
      },
      flow: { 
        title: "Ход Боя", 
        start: "Начало: Слово «Атака» + Указание на жертву. Останавливает другие действия.",
        round: "Пошагово. 1 действие в раунд.",
        actions: [
          { name: "Атака", desc: "С использованием слова смерти. Пример: «Я поражу тебя своим огненным мечом»." },
          { name: "Предмет/Способность", desc: "Использование одноразового предмета или способности." },
          { name: "Рокировка", desc: "Замена на другого персонажа по обоюдному согласию. Занимает целое действие (атака в след. раунде)." }
        ]
      },
      words: { 
        title: "Слова Смерти",
        escalation: [
          "Ни один сказочный персонаж никогда не использует в бою своё самое сильное оружие, не попробовав поразить оппонента более слабым.",
          "Так что смерть-слова более высокого уровня могут использоваться только после использования всех доступных персонажу смерть-слов более низкого уровня.",
          "Исключением являются магические свитки, являющиеся не атакой, а использованием одноразового предмета."
        ],
        levels: [
          { lvl: "Уровень 1 (Физ)", list: "Колющее, Режущее, Рубящее, Дробящее" },
          { lvl: "Уровень 1 (Маг)", list: "Огонь, Лед, Кислота, Молния" },
          { lvl: "Уровень 2", list: "Свет, Тьма, Тень, Астрал" },
          { lvl: "Уровень 3", list: "Сокрушительное" }
        ],
        consequences: {
          intro: "Атакующее действие может привести к следующим последствиям:",
          items: [
             "Снимает с противника 3 хита, если он уязвим к заявленному смерть-слову.",
             "Снимает с противника 1 хит, если у него есть защита от заявленного смерть-слова.",
             "Не снимает хитов, если у противника иммунитет к заявленному смерть-слову."
          ]
        }
      },
      aftermath: { 
        title: "Последствия", 
        states: [
          { name: "Тяжелое ранение", desc: "0 Хитов. Нельзя драться/сопротивляться. Лечится 10 мин на своей локации." },
          { name: "Добивание", desc: "Сказать «Добиваю» + Пафосный отыгрыш. Жертва идет на мастерку." },
          { name: "Посмертие", desc: "Написать эссе «Как я избежал смерти» для возрождения. Лучше эссе — быстрее респаун." }
        ]
      },
      captivity: {
        title: "Правила по плену",
        intro: "Пленить на игре можно кого угодно следующими способами:",
        ways: [
          "По взаимному согласию сторон для повышения замеса.",
          "Можно пленить побежденного после победы над ним в бою. Важно! Если в бою был побежден герой, его напарник либо может продолжать бой, либо отправиться в плен вместе с героем, либо бежать рассказывать о том, что случилось."
        ],
        inPrison: {
          title: "В плену",
          desc: "В случае, если вы оставили своего пленника наедине и не играете с ним более десяти минут, он достает бумагу и начинает писать сочинение на тему \"Как я чудом спасся из плена\".",
          prevent: "Препятствовать написанию сочинения можно только одним способом — вашим вниманием к пленнику. Пока вы его занимаете разговором или демонстрацией орудий пыток, он не может продумывать план побега и поэтому не сбежит.",
          escape: "Когда сочинение будет написано, игрок волен покинуть свою темницу.",
          noChase: "Преследовать такого персонажа нельзя.",
          exception: "Но сбежавший игрок неуязвим только для пленившего его злодея."
        }
      },
      mercy: {
        title: "Правила по пощаде",
        intro: "Одержав победу над персонажем в бою, можно произнести сакраментальную фразу «Я пощажу тебя!»",
        noFinish: "После этой фразы добить побежденного уже нельзя, его можно только отпустить.",
        reward: "Взамен побежденный обязан правдиво ответить на 1 вопрос победителя или оказать ему 1 услугу (эта услуга не может затрагивать игромеханику — нельзя просить побежденного поделиться опытом или отдать имеющиеся у него предметы)."
      }
    },
    timeline: {
      title: "Тайминговые мероприятия",
      desc: "В нашей игре есть довольно четкий тайм-лайн и много заранее запланированных событий. Игра начинается с того, что все герои заканчивает свое обучение. В академии рыцарства учат теории и практике подвигов, в пансионе благородных девиц – куртуазности, в Злой лиге зла – злодеяниям, в СМАКе – боевой кулинарии.\n\nВслед за учебой идет выпускной экзамен. Только после выпуска герои приступают к выполению квестов.\n\nДалее в течение игры в каждой локации проходит одно крупное мероприятие. Победитель получает славу.",
      events: [
        { time: "21:30", event: "Старт игры" },
        { time: "22:00-01:00", event: "Учебные занятия на локациях." },
        { time: "01:00", event: "Отбой" },
        { time: "09:00", event: "Подъем, завтрак, моцион, подготовка к экзаменам" },
        { time: "11:00", event: "Экзамены." },
        { time: "12:00", event: "Начало свободной жизни. Квесты, интриги." },
        { time: "15:00", event: "Турнир (Рыцари) и Оргия (Злодеи, 6+)" },
        { time: "16:00", event: "Обед (повсеместно)." },
        { time: "17:00", event: "Бал (Принцессы) и Кулинарный конкурс (СМАК)." },
        { time: "18:00", event: "Продолжение свободной жизни" },
        { time: "24:00", event: "Окончание игры и подведение итогов." }
      ]
    },
    logistics: {
      title: "Быт и прочее",
      fee: {
        title: "Взнос для участия",
        desc: "Мы пока не знаем, но от 20 до 40 евро планируем."
      },
      accommodation: {
        title: "Проживание",
        desc: "Во избежание неигровых \"пересечений\" мы рекомендуем ставить палатки поблизости от своей локации. Поэтому не берите одну палатку на двоих, если едете в разные локации."
      },
      food: {
        title: "Питание",
        desc: "Мы обеспечим централизованное питание (ужин в пятницу, завтрак и обед в субботу, постигровой ужин). Во время игры питание будет организовано по локациям (фракциям) и является частью игрового процесса. Мы также организуем питание заехавших заранее игроков, готовых помочь мастерской группе."
      },
      alcohol: {
        title: "Алкоголь",
        desc: "Мы не запрещаем употребление алкоголя, но призываем к умеренности. На полигоне будет игровой бар, в котором вы сможете выпить чего-нибудь за очки опыта. Правило \"опыт не пропьешь\" на игре не действует!"
      },
      ecology: {
        title: "Экология",
        desc: "Нельзя рубить \"зеленку\", мусорить и разводить открытый огонь вне специально оборудованных мест. На полигоне будет организован раздельный сбор мусора. Полигон после игры должен быть только лучше, чем до игры."
      },
      transport: {
        title: "Транспорт",
        desc: "Место стоянки будет указано. Во время игры, пожалуйста, не используйте транспорт без необходимости. Мы не организуем доставку на полигон, но вы можете договориться с другими водителями."
      },
      medicine: {
        title: "Медицина",
        desc: "У нас будет аптечка для простых случаев, но особые лекарства берите сами. На экстренный случай у нас будет мастерский транспорт для эвакуации."
      }
    },
    oracle: {
      title: "Спроси Королевского Оракула",
      poweredBy: "На базе Gemini AI",
      placeholder: "Спроси Оракула...",
      btn: "Спросить",
      initial: "Внемли, храбрая душа! Я — Королевский Оракул. Спрашивай меня об опасностях грядущих, тайнах классов или легендах Эндоррии.",
      loading: "Туман времени сгущается..."
    },
    footer: {
      disclaimer: "\"Возвращение Легенды\" — это фанатский трибьют и концепт.",
      rights: "© 2025 Katauri Interactive / 1C Company Tribute",
      links: ["Конфиденциальность", "Условия", "Мастерам"]
    },
    mastersArea: {
      title: "Тайное Святилище Мастеров",
      loginTitle: "Доступ Ограничен",
      loginSubtitle: "Введите секретное слово, чтобы открыть скрытые знания",
      passwordPlaceholder: "Введите слово...",
      loginBtn: "Открыть Тайны",
      error: "Неверное слово, путник. Тайны остаются сокрытыми.",
      content: {
        cheatsheet: {
          title: "Шпаргалка для техов по раздаче экспы",
          table: {
            headers: ["Квест", "Слава", "Экспа"],
            rows: [
              ["Простой", "1", "10"],
              ["Сложный (Данж)", "2", "20"],
              ["Финальный (4-й)", "3", "30"],
              ["Фракционный", "4 / 1", "40 / 10"]
            ]
          },
          sections: [
            {
              title: "Простой квест",
              desc: "Из конверта Игрока или выданный вами. Награда: 1 слава, по 10 экспы на игрока. Делается парой или 1 чудовищем. Время: ~30 мин. Все квесты не через данж — простые. Если игрок тупит — впарьте ему простой квест."
            },
            {
              title: "Сложный квест (Данж)",
              desc: "Награда: 2 славы, по 20 экспы на игрока. Делается вчетвером (чудовище за двоих, но экспа за одного). Сложный квест может взять игрок, имеющий не менее 4 славы. Дэнж-квесты респавнятся. "
            },
            {
              title: "Финальный квест персонажа",
              desc: "Четвертый по счету из конверта. Награда: 3 славы, по 30 экспы на игрока. Делается парой и 1 чудовищем."
            },
            {
              title: "Фракционный квест",
              desc: "Берется персонажем, имеющим не менее 10 славы, делается толпой. За выполнение игрок, взявший квест, получает 4 славы и по 40 экспы на игрока (на себя и напарника), все примкнувшие - по 1 славе и по 10 экспы на игрока.\n\nФракционный квест – это перетягивание одеяла или capture the flag. В каждом блоке есть символ власти – корона короля, веер королевы, жезл темного властелина, поварешка Сфинкса. Суть квеста – игротех просит принести символ власти вражеской локации (рыцари-злодеи, принцессы-чудовища). Должно быть много движухи и файта. Игротехи сражаются, карточки дадим. Если из локации унесли символ власти, игротехи не дают своим игрокам других квестов, кроме как вернуть его. Вернуть символ власти – это тоже фракционный квест, его можно дать тому, у кого 10 славы или за неимением таковых – тому, у кого ее больше всего."
            }
          ]
        },
        xpCosts: {
          title: "Стоимость в экспе",
          table: {
            headers: ["", "Атака", "Защита", "Иммунитет"],
            rows: [
              ["1 уровень (свой класс)", "10", "5", "10"],
              ["1 уровень (чужой класс)", "20", "10", "20"],
              ["2 уровень", "30", "15", "30"],
              ["3 уровень", "50", "25", "50"]
            ]
          },
          startingEquip: [
            { class: "Воин", equipment: "физическая атака, физическая защита." },
            { class: "Волшебник", equipment: "магическая атака, магическая защита." },
            { class: "Вор", equipment: "физическая атака, магическая защита." },
            { class: "Чудовище", equipment: "магическая атака, физическая защита." }
          ],
          items: {
            title: "Предметы",
            rows: [
              ["Зелье лечения", "10"],
              ["Стенка-встанька", "10"],
              ["Зелье дружбы", "10"],
              ["Станнер", "10"],
              ["Зелье стрелочника", "10"],
              ["Зеркало битвы", "15"],
              ["Свиток 1 уровня", "5"],
              ["Свиток 2 уровня", "8"],
              ["Свиток 3 уровня", "15"]
            ]
          },
          abilitiesNote: "Абилки — 1 на старте бесплатно. Приобретение в процессе — 20."
        },
        envelopeQuests: {
          title: "Квесты из конвертов",
          subtitle: "Персональные цели из стартовых конвертов игроков",
          characters: [
            {
              name: "Ланселот",
              quests: [
                "Вызвать самого пафосного злодея на поединок и победить.",
                "Произнести торжественную речь и сорвать аплодисменты.",
                "Заслужить любовь королевы и пригласить ее на прогулку в лес смотреть, как цветет вереск.",
                "Стать предводителем всех рыцарей и получить от короля официальный титул «Первый рыцарь королевства»."
              ]
            },
            {
              name: "Дон Кихот",
              quests: [
                "Принять принцессу за ужасное чудовище и победить ее в бою.",
                "Опять перепутать и получить от чудовища знак благосклонности, после чего посвятить ему подвиг.",
                "Раскрыть и предотвратить коварный замысел злодея.",
                "Обнаружить в мире ужасную несправедливость, сообщить о ней большому количеству людей, а затем исправить."
              ]
            },
            {
              name: "Шрек",
              quests: [
                "Напугать кого угодно до крика.",
                "Заменить рыцаря в подвиге (совершить подвиг вместо него).",
                "Победить чудовище, захватившее принцессу, и освободить ее.",
                "Устроить свадьбу принцессы с рыцарем, но перед самой свадьбой вызвать рыцаря на поединок, победить его и забрать принцессу себе."
              ]
            },
            {
              name: "Принцесса в доспехах",
              quests: [
                "Победить в поединке того, кто отпустит сексистскую шуточку.",
                "Спасти рыцаря из плена или от верной гибели.",
                "Победить победителя рыцарского турнира.",
                "Стать предводителем всех рыцарей и получить от короля официальный титул «Первый рыцарь королевства»."
              ]
            },
            {
              name: "Аладдин",
              quests: [
                "Подарить принцессе Жасмин животное (с бантиком).",
                "Обмануть злодея с выгодой для себя.",
                "Проникнуть в Темную цитадель под видом злодея.",
                "Организовать торговлю между фракциями."
              ]
            },
            {
              name: "Робин Гуд",
              quests: [
                "Раздать весь полученный за один подвиг опыт самым бесславным рыцарям.",
                "Пленить злодея, привести его в Светлый замок, накормить и отпустить в обмен на опыт или предметы.",
                "Ограбить караван.",
                "Собрать Шервудское братство не менее чем из 5 персонажей, установить общую символику и совместно принять Устав Шервудского братства. После этого совершить совместный рейд в Темную цитадель, чтобы спасти кого-то от верной и ужасной смерти."
              ]
            },
            {
              name: "Ведьмак",
              quests: [
                "Подружиться с чудовищем и распить с ним в таверне.",
                "Поцеловать 5 принцесс.",
                "Получить опыт за победу над чудовищем.",
                "Составить книгу ведьмачьих знаний: узнать и записать кулинарные предпочтения всех чудовищ на полигоне, после чего прочитать публичную лекцию."
              ]
            },
            {
              name: "Галахад",
              quests: [
                "Выбрать Погибельное сиденье и сесть на него, чему должно быть свидетелем большое количество рыцарей.",
                "Подвергнуть себя искушению, которое могло бы лишить Галахада чистоты, и преодолеть его.",
                "Спасти честь девственницы.",
                "Принести Грааль королю (чаша где-то в Темной цитадели)."
              ]
            },
            {
              name: "Конан-варвар",
              quests: [
                "Украсть принцессу по своему вкусу и утащить к себе.",
                "Довести любую принцессу до обморока своим некуртуазным поведением.",
                "Победить темного мага в поединке.",
                "Победить троих противников подряд, не возвращаясь в свою локацию и не делая рокировок."
              ]
            },
            {
              name: "Мальвина",
              quests: [
                "Выбрать самого неопрятного и невоспитанного рыцаря и научить его мыть руки перед едой.",
                "Пленить кого-нибудь, кто плохо знает арифметику, и запереть в чулане в воспитательных целях.",
                "Сделать гадость невоспитанной принцессе Брунгильде.",
                "Добыть золотой ключик (где-то в Очень темном лесу у монстров)."
              ]
            },
            {
              name: "Барби",
              quests: [
                "Устроить поединок двух мужчин на почве ревности к принцессе Барби.",
                "Опозорить Белоснежку прилюдно.",
                "Стать королевой любви и красоты на рыцарском турнире.",
                "Распространить свой стиль на 2/3 принцесс на полигоне: они должны носить определенный символ (цветок вереска в петлице, ленточку в волосах и т.д.)."
              ]
            },
            {
              name: "Белоснежка",
              quests: [
                "Добиться, чтобы рыцарь прилюдно объявил, что Белоснежка прекраснее самой королевы.",
                "Помочь снять заклятие или проклятие с кого-либо.",
                "Опозорить принцессу Барби прилюдно.",
                "Победить зло любовью."
              ]
            },
            {
              name: "Золушка",
              quests: [
                "Навести порядок и чистоту в пансионе благородных девиц.",
                "Помочь двум принцессам подготовиться к балу так, чтобы Золушку поблагодарили.",
                "Сделать пакость бременской принцессе.",
                "Потерять туфельку (или другой предмет одежды), чтобы ее нашел прекрасный рыцарь или злодей. Выйти замуж за нашедшего."
              ]
            },
            {
              name: "Принцесса из Бремена",
              quests: [
                "Найти Осла, Кота и Пса и устроить представление.",
                "Спеть с кем-нибудь дуэтом «Луч солнца золотого».",
                "Сделать пакость Золушке.",
                "Сбежать из дома: добиться, чтобы ее приняли в любую другую фракцию на правах полноправного члена."
              ]
            },
            {
              name: "Жасмин",
              quests: [
                "Сделать пакость Василисе.",
                "Попасть на аудиенцию к Темному Властелину и получить от него квест.",
                "Заманить одну из принцесс в плен к злому Лигу.",
                "Обнаружить коварный план одного из злодеев и помочь Аладдину его расстроить."
              ]
            },
            {
              name: "Эльза",
              quests: [
                "Случайно нанести вред одной из принцесс.",
                "Исправить последствия вреда, нанесенного принцессе.",
                "Помочь двум любящим сердцам соединиться.",
                "Бросить вызов Снежной королеве и либо убедить ее перейти на сторону добра, либо вскрыть все ее злодейские планы и не дать им осуществиться."
              ]
            }
          ]
        },
        simpleQuests: {
          title: "Примеры простых квестов",
          subtitle: "Квесты, которые могут выдать квестодатели",
          blocks: [
            {
              title: "Светлый блок (Рыцари)",
              quests: [
                "Подслушать злодейскую тайну",
                "Собрать букет и подарить королеве",
                "Сделать таран для штурма темной цитадели",
                "Вызвать злодея на поединок и победить его",
                "Заиметь символ благосклонности прекрасной дамы",
                "Собрать доказательства существования Лох-Несского чудовища",
                "Привести пленного злодея для допроса в Академию рыцарства",
                "Научить Змея Горыныча петь хором",
                "Передать письмо от короля темному властелину",
                "Поставить злодея прилюдно в неловкую ситуацию",
                "Сложить стихотворение о своих подвигах и прочитать прилюдно в замке"
              ]
            },
            {
              title: "Розовый блок (Принцессы)",
              quests: [
                "Убедить рыцаря посвятить принцессе следующий подвиг",
                "Попасть в плен и быть спасенной",
                "Спровоцировать поединок рыцаря со злодеем",
                "Украсить пансион благородных девиц",
                "Вдохновить рыцаря на победу над чудовищем",
                "Выяснить, почему у Синей Бороды синяя борода",
                "Выяснить, так ли страшен Невыразимый ужас и стоит ли его бояться",
                "Провести урок этикета в Темной цитадели",
                "Провести тест и определить самого куртуазного рыцаря",
                "Сделать из ничего трагедию"
              ]
            },
            {
              title: "Темный блок (Злодеи)",
              quests: [
                "Поссорить двух рыцарей",
                "Подслушать светлую тайну",
                "Написать на стене светлого замка «Темный властелин – молодец»",
                "Украсть принцессу и склонить ее на темную сторону",
                "Победить в поединке рыцаря",
                "Приручить чудовище",
                "Построить запасной выход из Темной цитадели",
                "Уговорить трех принцесс прийти на оргию",
                "Усыпить Белоснежку разговорами",
                "Ограбить караван"
              ]
            },
            {
              title: "Чудовища (СМАК)",
              quests: [
                "Приготовить тушенку из рыцаря в доспехе",
                "Замариновать принцессу разговорами до полной невменяемости",
                "Сварить холодец из костей какой-нибудь нежити",
                "Приготовить канапе из гномов",
                "Приготовить шаверму из собаки, кота или еще какой зверушки",
                "Организовать хорошее место для засады в Очень темном лесу",
                "Провести разъяснительную беседу с Принцессой в доспехах и решить, стоит ли ее есть?",
                "Изобрести манок на принцесс",
                "Выяснить кулинарные предпочтения Темного властелина"
              ]
            }
          ]
        },
        polygraphy: {
          title: "Полиграфия",
          subtitle: "Материалы для печати и игровые ассеты",
          items: [
            { title: "Экспа 1", url: "https://docs.google.com/document/d/1JaFK1h5nD5CedblB6upcFMYKY9Nj4Z0h/edit" },
            { title: "Экспа 5", url: "https://docs.google.com/document/d/1dnbg49N1hXdk7H5Ml1w-dOrsSil3-G32/edit" },
            { title: "Экспа 10", url: "https://docs.google.com/document/d/1jdcXHv-fkpIIJW64VB2WNjaHR4PUKOBG/edit" },
            { title: "Экспа 20", url: "https://docs.google.com/document/d/1Pyb0pKNcV4Mb65ByZKIuKhNNwhMESSA7/edit" }
          ]
        },
        characterCard: {
          title: "Шаблон карточки персонажа",
          subtitle: "Официальный игровой лист персонажа для игроков",
          attacks: "Атаки",
          defense: "Защита и иммунитеты",
          classLabel: "Класс персонажа",
          ability1: "Способность 1",
          ability2: "Способность 2",
          slot: "Слот",
          types: {
            physical: ["Колющий", "Режущий", "Рубящий", "Дробящий"],
            magical: ["Огонь", "Лёд", "Кислота", "Молния"],
            tier2: ["Свет", "Тьма", "Тень", "Астрал"],
            ultimate: "Сокрушительный"
          }
        },
        factionDungeons: {
          knights: {
            title: "Данж-квесты для Рыцарей",
            quests: [
              {
                title: "Полые холмы",
                objective: "Король отправляет отряд к Сидам за советом: как положить меч между ним и королевой – эфесом вверх или эфесом вниз. Ответ должен быть таким, какой игротехники сочтут самым забавным.",
                execution: "Сиды приглашают персонажей по одному и загадывают загадки (игротехники должны придумать их заранее!), предлагая при этом угощение. Тот, кто «съест» загадки, не уйдет без дополнительного выкупа (спеть, сплясать, прочитать стихи с табуретки – мучить персонажа на свое усмотрение).",
                victory: "2 загадки из 4 – квест выполнен, получен совет. 3 или 4 – ответ и лут.",
                stuff: "Тарелка с ништяками",
                loot: "Шлем 2 уровня с двумя защитами"
              },
              {
                title: "Башня Некроманта",
                objective: "Король посылает отряд убить Некроманта и принести его корону.",
                execution: "Боевка: четверо персонажей против трех игротехников. Нежить нужно жечь огнем или светом.",
                victory: "Принести корону некроманта королю.",
                stuff: "Корона, три карточки персонажей (некромант, зомби, скелет)",
                loot: "Одноразовый предмет, выпадает вместе с короной"
              },
              {
                title: "Демон",
                objective: "Король просит изгнать демона, поселившегося на границе королевских владений.",
                execution: "Вариант 1: Просто зарезать демона. Вариант 2 (предпочтительный): Поговорить с демоном. Демон в полном раздрае. Он просит побить парня, который клеится к его возлюбленной — княжне Тамаре. Он не знает, кто этот парень, но знает, что Тамара живет в пансионе благородных девиц. Отряд идет в розовый блок и начинает наводить справки. Выясняется (у королевы), что королева и есть княжна Тамара. Цель игроков: убедить королеву навестить демона. Скриптовая сцена: «Где ты был 20 лет назад?» — спрашивает королева. Демон в тоске улетает, оставляя амулет.",
                victory: "Сообщить королю, что демон так или иначе исчез.",
                stuff: "Карточка персонажа демона",
                loot: "Амулет с двумя защитами второго уровня (только если демон улетел, с трупа не падает)"
              },
              {
                title: "Цыганский табор",
                objective: "Цыгане украли лучшего коня из королевской конюшни. Нужно его вернуть.",
                execution: "Обыграть цыган в «шишки-камни». У каждого персонажа по одному ходу. Каждая сторона что-то ставит на кон. Цыгане ставят коня (если конь уже выигран — свитки), игроки — предметы или опыт.",
                victory: "Принести коня королю.",
                stuff: "Игра, кокосы",
                loot: "Свитки (сколько выиграли, столько и получили)"
              },
              {
                title: "Скупой рыцарь",
                objective: "Король посылает рыцарей к старому рыцарю, который задолжал взносы в Академию рыцарства за тридцать четыре года, чтобы выбить долг.",
                execution: "Приходят в замок, там Скупой рыцарь читает над сундуком монолог из «Маленьких трагедий». Взносы, естественно, не платит. Героев отводит в сторону сын Скупого рыцаря, говорит, что отец зажилил наследство, и предлагает его убить. Если помочь сыну убить Скупого рыцаря — деньги забрать можно, но квест считается проваленным — это не по-рыцарски (минус слава). Если отказаться и рассказать Скупому рыцарю о сыне — тот умрет от горя, а из сундука можно будет забрать деньги — вино.",
                victory: "Принести королю золото, не убивая Скупого рыцаря.",
                stuff: "Сундук, золото, карточка Скупого рыцаря для боя",
                loot: "Одноразовый предмет из сундука"
              }
            ]
          },
          princesses: {
            title: "Данж-квесты для Принцесс",
            quests: [
              {
                title: "Молодильные яблоки",
                objective: "Принести королеве молодильные яблоки из волшебного сада.",
                execution: "Яблоки развешены на дереве на довольно большой высоте. До яблока нужно дотянуться физически, забравшись друг другу на плечи или иным способом — не важно.",
                victory: "Принести яблоко королеве",
                stuff: "Яблоки, веревка",
                loot: "-"
              },
              {
                title: "Волшебный лес",
                objective: "Королева посылает принцесс в лес за подснежниками.",
                execution: "В лесу их встречает леший. Лешего нужно заставить выдать, где подснежники. Для этого его нужно поймать. Девочкам завязывают глаза, и они должны взяться за руки и сомкнуть цепь вокруг лешего — на время. Хватать лешего за одежду запрещено. Если поймают — он выдаст подснежники.",
                victory: "Принести подснежники королеве",
                stuff: "Подснежники, повязки на глаза",
                loot: "Одноразовый предмет, выпадает с Лешего, если принцессы ему понравились"
              },
              {
                title: "Замок Великана",
                objective: "Королева посылает Принцессу с условием завлечь рыцаря, чтобы узнать судьбу принцессы Х, похищенной Великаном.",
                execution: "Приходят к замку Великана, нападает Великан, они побеждают Великана, выбегает Принцесса, говорит, что они испортили ей личную жизнь и никуда она с ними не пойдет. Пишет королеве письмо, как ей там было хорошо.",
                victory: "Принести Королеве письмо.",
                stuff: "Карточка Великана, бумажка, ручка",
                loot: "Одноразовый предмет с Великана"
              },
              {
                title: "Зеркало Уленшпигеля",
                objective: "Королева посылает Принцесс за волшебным зеркалом (кто на свете всех милее?).",
                execution: "Приходят в данж, там Уленшпигель в раме, жестоко всех стебет. Такое зеркало королеве отдавать нельзя (на что мастера должны тонко намекнуть) — его нужно научить хорошим манерам. Перевоспитанное зеркало в виде какого-нибудь абстрактного зеркала несут королеве — это победа. Если Уленшпигеля не перевоспитали, а принесли королеве так — Уленшпигель нагрубит ей, королева рассердится, опыт пропадет.",
                victory: "Принести зеркало, которое даст Уленшпигель королеве.",
                stuff: "Рамка для Уленшпигеля, маленькое зеркало",
                loot: "Одноразовый предмет — Зеркало Битвы (только если Уленшпигель перевоспитан)"
              },
              {
                title: "Куртуазная любовь",
                objective: "Один рыцарь при дворе королевы публично усомнился в великой силе любви, заявив, что телесная любовь важнее духовной. Его нужно смирить.",
                execution: "Вызвать рыцаря на состязание и победить в куртуазном споре. Спорят две принцессы, при этом их фрейлины сидят в сторонке и шепчут советы. Кто победил — решают игротехники.",
                victory: "Отчитаться королеве, что победили в споре с рыцарем.",
                stuff: "-",
                loot: "Зелье дружбы"
              }
            ]
          },
          villains: {
            title: "Данж-квесты для Злодеев",
            quests: [
              {
                title: "Пополь-Вух",
                objective: "Темный Властелин сообщает, что команда Короля недавно обыграла Владык Подземелий в мяч. ЗЛЗ нужно сделать то же самое.",
                execution: "Владыки Подземелий играют в пионербол против игроков. Три на три, один игрок назначается судьей. Во время игры говорится, что победившая команда, как наиболее достойная, будет принесена в жертву.",
                victory: "Выиграть нечестно, чтобы выжить и завершить квест. Выиграть честно: завершить квест через Землю Мертвецов. Проиграть: квест не выполнен.",
                stuff: "Сетка, мяч",
                loot: "Одноразовый предмет (дается только в случае нечестной победы)"
              },
              {
                title: "Седьмая печать",
                objective: "Темный Властелин отправляет отряд в заброшенный дом с привидениями, чтобы вернуть древнюю реликвию.",
                execution: "В доме обитают призрак рыцаря, возвращающегося домой из Святой Земли с какой-то реликвией, и Смерть. По дороге рыцарь играл в шахматы со Смертью и должен был умереть красиво и вовремя, но его конь споткнулся, он упал и тупо сломал шею. Партия осталась незаконченной (на доске шахматная задача). Ее нужно доиграть за любую из сторон. Если доиграть за Смерть — рыцарь умирает, реликвию можно забрать с трупа. Если доиграть за рыцаря — он отдаст реликвию в благодарность, но потом расскажет королю, что благородные злодеи спасли его от Смерти, и Темный Властелин заберет славу себе.",
                victory: "Принести реликвию Темному Властелину",
                stuff: "Шахматная доска, задача, реликвия",
                loot: "Одноразовый предмет (только с мертвого рыцаря)"
              },
              {
                title: "Кольцо Всевластия",
                objective: "Темный Властелин посылает героев найти симпатичное колечко для своей новой пассии.",
                execution: "Герои приходят и находят валяющееся кольцо. Забирают его, вылетают три назгула. Происходит бой. Герои приносят кольцо Темному Властелину, тот говорит: «Это не то кольцо, про которое я читал в той сказке. Переплавьте его от греха подальше». Герои ищут где переплавить; кольцо плавится в котле Сфинкса.",
                victory: "Переплавить кольцо в котле Сфинкса и отчитаться Властелину.",
                stuff: "Кольцо, три карточки назгулов",
                loot: "Одноразовый предмет с назгулов"
              },
              {
                title: "Феи-крестные",
                objective: "Темный Властелин посылает злодеев испортить крестины принцессы Авроры. Для этого нужно, чтобы на крестинах ей пожелали чего-нибудь нехорошего.",
                execution: "Три игровые феи собираются писать стихи с пожеланиями (говорят, что пожелания должны быть в стихах). Нужно отвлечь фей и самим написать стихи, сделав пожелания максимально мерзкими. Феи зачитывают их и приходят в ярость.",
                victory: "Написать гадости в стихах и отчитаться властелину.",
                stuff: "Блокнот и ручка",
                loot: "-"
              },
              {
                title: "Фауст",
                objective: "Темный Властелин просит помочь неопытному демону купить душу — у него что-то не получается.",
                execution: "В данже находятся Мефистофель и Фауст. Фауст говорит, что продаст душу только за новоприобретенные радости жизни, а именно: поцелуй прекрасной девы и вкусную еду. Задача 1: найти принцессу, уговорить ее прийти в данж и поцеловать Фауста. Принцесса не получает славы и опыта, но получает амулет от Фауста. Задача 2: хитростью выманить у Сфинкса немного еды. Фауст продает душу, партия получает славу.",
                victory: "Отчитаться Властелину, что душа куплена.",
                stuff: "Ручка, бумага",
                loot: "Амулет с двумя защитами 2 уровня (для принцессы)"
              }
            ]
          },
          monsters: {
            title: "Данж-квесты для Монстров",
            quests: [
              {
                title: "Поэтический мед",
                objective: "Сфинкс отправляет монстров к великанам за поэтическим медом для нового соуса.",
                execution: "Великаны предлагают игрокам пройти испытания. Бег в мешках – у игротехника мешок с дыркой для ног. Съесть кашу быстрее – у игрока каша жутко пересолена. Запятнать няню – оба с завязанными глазами, у игротехника повязка с дырками для глаз. Затем им говорят: нельзя обогнать мысль, нельзя переесть огонь, нельзя преодолеть старость. И дают мед.",
                victory: "Принести Сфинксу мед.",
                stuff: "Два холщовых мешка, две тарелки с едой, соль, две повязки на глаза, банка с медом",
                loot: "Одноразовый предмет (дается, если игроки хорошо играли и не лезли на рожон)"
              },
              {
                title: "Логово паука",
                objective: "Сфинкс отправляет героев за мясом редкой птицы, попавшей в паутину.",
                execution: "Натянута паутина из веревок. Через нее нужно пролезть, не задев. Пролезают по очереди, кто задел – остается на месте. Если застряли все – приходит паук и одного съедает (рандом, идет в мертвятник), квест провален.",
                victory: "Принести Сфинксу мясо.",
                stuff: "Банка тушенки, веревка для паутины",
                loot: "Броня, оставшаяся от предыдущего искателя (броня с двумя магическими иммунитетами)"
              },
              {
                title: "Радуга с лепреконами",
                objective: "Сфинкс отправляет монстров за золотом, которое хранят лепреконы, потому что в золоте удобнее всего спать. Убивать лепреконов нельзя – они вымирающий вид.",
                execution: "Лепреконы жадные, но трусливые. Нужно выяснить у лепреконов, чего они боятся больше всего. Самый большой страх лепреконов – протрезветь. Нужно сходить на полигон, найти кефир/рассол/что-нибудь, принести и напугать лепреконов. Тогда они отдадут золото.",
                victory: "Принести золото Сфинксу.",
                stuff: "Золото",
                loot: "-"
              },
              {
                title: "Лагерь браконьеров",
                objective: "Браконьеры поймали редкую зверушку и держат ее в мешке. Сфинкс отправляет монстров разобраться с браконьерами.",
                execution: "Браконьеров нужно убить. В мешке у них сидит неведомая хрень, она отказывается выходить и требует сыра. Если найти на полигоне сыр и сунуть в мешок, зверушка выдаст взамен какой-нибудь пожеванный древний артефакт.",
                victory: "Отчитаться Сфинксу об убийстве браконьеров.",
                stuff: "Большой мешок, 2 карточки браконьеров",
                loot: "Щит с двумя магическими иммунитетами (дает сытая зверушка)"
              },
              {
                title: "Маринад",
                objective: "Сфинкс отправляет монстров на практику – помочь дружественному монстру замариновать принцессу.",
                execution: "Принцесса маринуется в слезах, для этого ее нужно расстроить настолько, чтобы она разрыдалась. Отряд пытается тронуть сердце принцессы в сжатые сроки, так как через 15 минут ей исполняется 18 лет и она станет слишком старой для этого блюда.",
                victory: "Отчитаться Сфинксу, что принцесса замариновалась.",
                stuff: "-",
                loot: "Одноразовый предмет в подарок от монстра"
              }
            ]
          }
        }
      }
    }
  }
};