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
      links: ["Privacy", "Terms", "Contacts"]
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
      links: ["Конфиденциальность", "Условия", "Контакты"]
    }
  }
};