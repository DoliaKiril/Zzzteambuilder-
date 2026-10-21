// ZZZ Phaethon OS — База 5★ Агентів
window.DB_AGENTS = [
  {
    "id": "Miyabi",
    "name": "Хошими Мияби (Hoshimi Miyabi)",
    "shortName": "Мияби",
    "role": "Anomaly",
    "roleRu": "Аномалия (Крит-Гибрид)",
    "element": "Frost",
    "elementRu": "Мороз (Лёд)",
    "faction": "Секция 6 (H.S.O.S. 6)",
    "tier": "S+",
    "version": "1.4",
    "color": "#00e5ff",
    "icon": "🦊",
    "sigWeapon": "hailstorm_shrine",
    "bestDiscs": [
      "branch_and_blade",
      "polar_metal",
      "woodpecker_electro"
    ],
    "dnaTags": [
      "frost",
      "ice",
      "crit",
      "anomaly_crit",
      "miyabi_sig",
      "basic",
      "disorder",
      "chain_ult"
    ],
    "needs": [
      "disorder_partner",
      "support_role",
      "faction_s6",
      "quick_assist"
    ],
    "provides": [
      "frostburn_shatter",
      "anomaly_buildup_buff",
      "massive_aoe_burst"
    ],
    "addAbilityRule": {
      "types": [
        "role:Support",
        "faction:Секция 6 (H.S.O.S. 6)"
      ],
      "desc": "В отряде есть агент «Поддержки» ИЛИ агент из фракции «Секция 6»"
    },
    "baseStats60": {
      "hp": 7673,
      "atk": 880,
      "def": 606,
      "critRate": 5,
      "critDmg": 50,
      "ap": 238,
      "am": 116
    },
    "combatTargets": {
      "critRate": {
        "val": 80,
        "unit": "%",
        "label": "Крит. шанс (КШ)",
        "note": "СТРОГИЙ КАП ПАССИВКИ: 80% КШ в бою дают максимум (80%) ускорения накопления Мороза! Выше 80–100% не нужно."
      },
      "critDmg": {
        "val": 180,
        "unit": "%",
        "label": "Крит. урон (КУ)",
        "note": "В бою с учётом сета «Песнь ветви и клинка» (+46% КУ) и сигны (+50% КУ) стремись к 170–210% КУ."
      },
      "atk": {
        "val": 3800,
        "unit": "",
        "label": "Атака",
        "note": "В бою под баффами саппортов (Астра / Юдзуха / Цезарь / Ремиэль) 3600–4200 Атаки."
      },
      "ap": {
        "val": 250,
        "unit": "",
        "label": "Знание аномалии (AP)",
        "note": "Достаточно базовых 238–260 AP: главный урон Мияби идёт от зажатой ЛКМ (4280% от Атаки и Критов!)."
      },
      "am": {
        "val": 116,
        "unit": "",
        "label": "Контроль аномалии (AM)",
        "note": "Базовых 116 хватает, чтобы включить 4 куска сета «Песнь ветви и клинка» (требует ≥115 AM)."
      },
      "penRatio": {
        "val": 24,
        "unit": "%",
        "label": "Пробивание (PEN%)",
        "note": "Отлично смотрится на 5-м диске (или с Риной), если в пачке много баффов урона."
      },
      "er": {
        "val": 1.2,
        "unit": "/с",
        "label": "Восст. энергии",
        "note": "Не требуется (0 роллов) — Мияби играет от стаков Падшего мороза через Хаос."
      }
    },
    "preCombatBase": {
      "atk": 2950,
      "critRate": 80,
      "critDmg": 145,
      "ap": 250,
      "am": 116,
      "penRatio": 0,
      "er": 1.2
    },
    "mindscapeBonuses": {
      "1": {
        "defIgnore": 36,
        "note": "М1: Зарядка на 6 стаках игнорирует 36% Защиты врага."
      },
      "2": {
        "critRateCombat": 15,
        "note": "М2: Даёт +15% Крит. шанса ПРЯМО В БОЮ (значит в меню нужно на 15% меньше КШ!)."
      }
    },
    "teamBuffs": {
      "anomalyBuildupBonus": 20
    },
    "discMainStats": {
      "slot4": "Крит. шанс% (до капа 80% в бою) или Крит. урон%",
      "slot5": "Урон Льда% / Пробивание (PEN%) / Атака% (только если нет бафферов Атаки)",
      "slot6": "Атака%"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Базовая атака (ЛКМ) ⭐⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐",
      "Уклонение / Помощь ⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Обычные нажатия ЛКМ бьют слабо (первые 2 удара — физ, дальше Мороз). ВСЯ СИЛА МИЯБИ — в ЗАЖАТИИ ЛКМ: когда под полоской ХП горят 6 синих точек (Падший мороз), зажми ЛКМ — Мияби встанет в стойку и разрежет весь экран в неуязвимости с множителем как у Ульты!",
      "special": "Усиленная Е-шка (с энергией) делает быстрый рывок вперёд, наносит огромный урон Морозом и сразу даёт +2 синие точки (стака) для зажатой ЛКМ. Жми всегда, когда не хватает 2 точек до 6!",
      "ult": "Ульта заливает сразу +3 синие точки, даёт +30% урона и наносит гигантский АоЕ-взрыв. Сдавай перед зажатой ЛКМ или под стан босса.",
      "passive": "Уникальная пассивка: переводит твой Крит. шанс (вплоть до 80% КШ!) в скорость накопления аномалии Мороза. Чтобы быстро получать синие точки, нужен второй Аномалист (Янаги, Бёрнис, Вивиан, Ремиэль) для взрыва Хаоса (+2 точки за каждый Хаос) + Саппорт (Астра Яо, Юдзуха) для включения Доп. способности!"
    },
    "rotation": [
      "1. Выходишь на бой с 3 синими точками → жмёшь Усиленную Е-шку (+2 точки) и пару ударов = 6 точек.",
      "2. ЗАЖИМАЕШЬ ЛКМ → Мияби режет весь экран на 6 стаках и вешает Морозный пролом.",
      "3. Переключаешься на второго Аномалиста (Янаги / Вивиан / Бёрнис / Ремиэль), вызываешь Хаос (Disorder) → Мияби мгновенно получает новые точки.",
      "4. Возвращаешься на Мияби через Быструю помощь саппорта и снова зажимаешь ЛКМ на 6 точках!"
    ],
    "wikiName": "Hoshimi_Miyabi",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Hoshimi_Miyabi_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Hoshimi_Miyabi_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Hoshimi_Miyabi_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_miyabi.png",
    "scalingAxis": "crit_anomaly_hybrid",
    "fieldStyle": "main_driver",
    "anomalyStyle": "frost_crit_disorder_consumer",
    "teamConstraint": "wants_disorder_and_support",
    "vortexSynergy": 6,
    "stunWindowReliance": 5,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/da/Agent_Hoshimi_Miyabi_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/da/Agent_Hoshimi_Miyabi_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/94/Agent_Hoshimi_Miyabi_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/94/Agent_Hoshimi_Miyabi_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/8/88/Agent_Hoshimi_Miyabi_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/fa/Agent_Hoshimi_Miyabi_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Yixuan",
    "name": "Исюань (Yixuan)",
    "shortName": "Исюань",
    "role": "Rupture",
    "roleRu": "Разрыв (Сквозной урон)",
    "element": "Auric Ink",
    "elementRu": "Золотые чернила (Эфир)",
    "faction": "Вершина Юнькуй (Yunkui Summit)",
    "tier": "S+",
    "version": "2.0",
    "color": "#ffd700",
    "icon": "☯️",
    "sigWeapon": "qingming_birdcage",
    "bestDiscs": [
      "yunkui_tales",
      "branch_and_blade",
      "woodpecker_electro"
    ],
    "dnaTags": [
      "rupture_role",
      "sheer_dmg",
      "hp_scaling",
      "crit",
      "ex_special",
      "chain_ult"
    ],
    "needs": [
      "rupture_buffer_lucia",
      "stun_role",
      "support_role"
    ],
    "provides": [
      "sheer_true_dmg",
      "parry_counter",
      "double_ult"
    ],
    "addAbilityRule": {
      "types": [
        "role:Support",
        "role:Stun",
        "role:Defense"
      ],
      "desc": "В отряде есть агент «Поддержки», «Устрашения» или «Обороны»"
    },
    "baseStats60": {
      "hp": 8373,
      "atk": 872,
      "def": 612,
      "critRate": 19.4,
      "critDmg": 50,
      "ap": 92,
      "am": 90
    },
    "combatTargets": {
      "critRate": {
        "val": 95,
        "unit": "%",
        "label": "Крит. шанс (КШ)",
        "note": "В бою стремись к 90–100% КШ (сет «Сказания Юнькуй» даёт +12% КШ в бою, сигна даёт ещё +20% КШ в бою!)."
      },
      "critDmg": {
        "val": 185,
        "unit": "%",
        "label": "Крит. урон (КУ)",
        "note": "В бою под Люсией (+30% КУ) и сетом станнера «Король вершины» (+30% КУ) выходит 180–220% КУ."
      },
      "hp": {
        "val": 18500,
        "unit": "",
        "label": "Макс. ХП (Главный стат!)",
        "note": "Исюань переводит своё ХП напрямую в Сквозную силу (Sheer Force)! ХП% ценнее Атаки%."
      },
      "atk": {
        "val": 2400,
        "unit": "",
        "label": "Атака (Вторично)",
        "note": "Даёт лишь малую часть Сквозной силы (30% конверсии). Не гонись за высокой Атакой!"
      },
      "penRatio": {
        "val": 0,
        "unit": "%",
        "label": "Пробивание (PEN% — НЕ НУЖНО)",
        "note": "0%! Сквозной урон Разрыва и так 100% игнорирует защиту босса — стат PEN бесполезен!"
      },
      "ap": {
        "val": 0,
        "unit": "",
        "label": "Знание аномалии (НЕ НУЖНО)",
        "note": "0 — Исюань играет от чистого критового Сквозного урона."
      },
      "er": {
        "val": 0,
        "unit": "/с",
        "label": "Восст. энергии (НЕ НУЖНО)",
        "note": "0 — у Исюань вместо обычной энергии шкала Адреналина (Восст. энергии на неё не работает!)."
      }
    },
    "preCombatBase": {
      "hp": 17500,
      "critRate": 68,
      "critDmg": 145,
      "atk": 2100,
      "penRatio": 0,
      "ap": 0,
      "er": 0
    },
    "mindscapeBonuses": {
      "1": {
        "critRateCombat": 10,
        "note": "М1: Быстрее копит Талисманы и даёт +10% КШ в бою."
      },
      "2": {
        "critDmgCombat": 30,
        "note": "М2: Игнор 15% эфирного резиста и +30% Крит. урона."
      }
    },
    "teamBuffs": {},
    "discMainStats": {
      "slot4": "Крит. урон% или Крит. шанс%",
      "slot5": "Урон Эфира% или ХП%",
      "slot6": "ХП% (Никакого Восст. энергии!)"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐⭐",
      "Базовая атака (ЛКМ) ⭐⭐⭐⭐",
      "Уклонение ⭐⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Зажатие ЛКМ расходует Адреналин на вращающийся купол Чернил, который стягивает врагов и заливает очки Талисмана для бесплатной второй Ульты.",
      "special": "Е-шка — это ИДЕАЛЬНЫЙ БЛОК крылом! Если нажать Е-шку прямо в момент удара босса, Исюань парирует атаку с нулевым уроном по себе, восстанавливает Адреналин и запускает мощнейший контрудар.",
      "ult": "У Исюань ДВЕ Ульты! Первая Ульта тратит очки Талисмана (заработанные от траты Адреналина), а вторая — обычные 3000 децибел. В окно стана босса она сдаёт обе Ульты подряд!",
      "passive": "Весь урон Исюань — Сквозной (Sheer DMG), он полностью плюёт на броню врага и скейлится от ХП. Лучший напарник в игре — Люсия (заливает 900 Сквозной силы и 30% КУ) + станнер Диалин / Рокси / Цзюй Фуфу!"
    },
    "rotation": [
      "1. Активируй Сон и Эфирную завесу на Люсии → переключись на Исюань.",
      "2. Парируй удары босса нажатием Е-шки и зажимай ЛКМ, чтобы накопить полную шкалу Талисмана.",
      "3. Оглуши босса через Диалин / Цзюй Фуфу / Рокси.",
      "4. В окно стана сдай Ульту за Талисманы → зажатую Е-шку → обычную Ульту за децибелы!"
    ],
    "wikiName": "Yixuan",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Yixuan_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Yixuan_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Yixuan_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_yixuan.png",
    "scalingAxis": "crit_hp_sheer",
    "fieldStyle": "main_onfield",
    "anomalyStyle": "none",
    "teamConstraint": "rupture_hypercarry",
    "vortexSynergy": 0,
    "stunWindowReliance": 8,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/8/89/Agent_Yixuan_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/8/89/Agent_Yixuan_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/f7/Agent_Yixuan_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/f7/Agent_Yixuan_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/65/Agent_Yixuan_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/3c/Agent_Yixuan_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Claret",
    "name": "Кларет Флинт (Claret Flint)",
    "shortName": "Кларет",
    "role": "Armorer",
    "roleRu": "Броненосец (Урон от DEF)",
    "element": "Electric",
    "elementRu": "Электро",
    "faction": "Мастерская Флинт (Flint Workshop)",
    "tier": "S+",
    "version": "3.2",
    "color": "#e11d48",
    "icon": "🛡️",
    "sigWeapon": "crimson_thirst",
    "bestDiscs": [
      "thorned_rose",
      "puffer_electro",
      "soul_rock"
    ],
    "dnaTags": [
      "armorer_role",
      "def_scaling",
      "crit",
      "pen",
      "electric"
    ],
    "needs": [
      "stun_role",
      "roxy_laceration",
      "def_pen_rina"
    ],
    "provides": [
      "maim_laceration",
      "multicrit_burst"
    ],
    "addAbilityRule": {
      "types": [
        "role:Stun",
        "role:Armorer",
        "element:Electric"
      ],
      "desc": "В отряде есть агент «Устрашения», «Броненосец» или агент стихии «Электро»"
    },
    "baseStats60": {
      "hp": 8120,
      "atk": 610,
      "def": 885,
      "critRate": 19.4,
      "critDmg": 50,
      "ap": 90,
      "am": 90
    },
    "combatTargets": {
      "def": {
        "val": 2600,
        "unit": "",
        "label": "Защита (DEF — ГЛАВНЫЙ СТАТ!)",
        "note": "Кларет — единственный герой, чьи навыки бьют от ЗАЩИТЫ! При ≥1800 DEF до боя сет «Шипастая роза» даёт +16% КШ."
      },
      "critRate": {
        "val": 115,
        "unit": "%",
        "label": "Крит. шанс (Мульти-Крит >100%!)",
        "note": "Любой КШ выше 100% НЕ пропадает, а превращается в двойной крит (Multi-CRIT)! Собирай 100–130% КШ в бою."
      },
      "penRatio": {
        "val": 32,
        "unit": "%",
        "label": "Процент пробивания (PEN%)",
        "note": "Лучший стат на 5-м диске (24% + 8% от 2pc Фугу-электро + бафф Рины)."
      },
      "critDmg": {
        "val": 0,
        "unit": "%",
        "label": "Крит. урон (КУ — НЕ РАБОТАЕТ!)",
        "note": "0%! Её главный урон Рассечения (Laceration) имеет ФИКСИРОВАННЫЙ крит 150% и не растёт от КУ вообще!"
      },
      "atk": {
        "val": 0,
        "unit": "",
        "label": "Атака (НЕ РАБОТАЕТ!)",
        "note": "0! Множители Кларет зависят только от Защиты (DEF). Бафферы Атаки ей ничего не дают!"
      },
      "ap": {
        "val": 0,
        "unit": "",
        "label": "Знание аномалии (НЕ НУЖНО)",
        "note": "0 — играет от Увечья (Maim) и Рассечения."
      }
    },
    "preCombatBase": {
      "def": 2350,
      "critRate": 80,
      "penRatio": 32,
      "critDmg": 50,
      "atk": 0,
      "ap": 0
    },
    "mindscapeBonuses": {
      "1": {
        "critRateCombat": 15,
        "note": "М1: +15% КШ под Мульти-Крит и ускоренный набор Остроты."
      },
      "2": {
        "defIgnore": 20,
        "note": "М2: Увечье (Maim) игнорирует 20% Защиты врага."
      }
    },
    "teamBuffs": {},
    "discMainStats": {
      "slot4": "Крит. шанс% (Всегда! КУ не работает!)",
      "slot5": "Процент пробивания (PEN%) или Урон Электро%",
      "slot6": "Защита% (DEF%)"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐⭐",
      "Базовая атака (ЛКМ) ⭐⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Помощь ⭐⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Тяжёлые удары копиiyan шкалу Остроты (Sharpness) вместо энергии и накладывают на врага Порез (Gash). Когда шкала Пореза заполняется — срабатывает взрыв Увечья (Maim)!",
      "special": "Тратит Остроту на мощный пропил щитом-пилой, мгновенно вызывая Увечье (Maim) и переводя Кларет в стойку Остаточного лезвия (+25% урона Рассечения на 40 сек.).",
      "ult": "Благодаря Доп. способности получает +300 децибел при каждом Заражении/Контаминации от союзников и выдаёт гигантский мульти-критовый удар Рассечения.",
      "passive": "Забудь про Атаку и Крит. урон — они ей НЕ НУЖНЫ! Собирай Защиту (DEF > 2200 до боя), Процент пробивания (PEN%) и Крит. шанс свыше 100% (каждый процент выше 100% даёт второй крит!). Лучшие напарники: Рокси (единственный станнер с прямым баффом Рассечения!), Норма и Рина (заливает PEN% и Защиту)!"
    },
    "rotation": [
      "1. Наложи Заражение / Оглушение через Рокси (или Норму) и бафф Пробивания от Рины.",
      "2. Выйди на Кларет по Цепочке атак → сразу включается стойка Остаточного лезвия (+25% Laceration).",
      "3. Прожми Е-шку за Остроту для взрыва Увечья (Maim) и сдай Ульту под Мульти-Критами!"
    ],
    "wikiName": "Claret_Flint",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Claret_Flint_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Claret_Flint_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Claret_Flint_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_claret.png",
    "scalingAxis": "crit_def_maim",
    "fieldStyle": "main_onfield",
    "anomalyStyle": "none",
    "teamConstraint": "armorer_def_laceration",
    "vortexSynergy": 0,
    "stunWindowReliance": 9,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/7/7c/Agent_Claret_Flint_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/7/7c/Agent_Claret_Flint_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/b3/Agent_Claret_Flint_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/b3/Agent_Claret_Flint_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/1/1b/Agent_Claret_Flint_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/9a/Agent_Claret_Flint_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Ye Shunguang",
    "name": "Е Шуньгуан (Ye Shunguang)",
    "shortName": "Е Шуньгуан",
    "role": "Attack",
    "roleRu": "Нападение",
    "element": "Honed Edge",
    "elementRu": "Острое лезвие (Физ)",
    "faction": "Вершина Юнькуй (Yunkui Summit)",
    "tier": "S+",
    "version": "2.5",
    "color": "#f43f5e",
    "icon": "⚔️",
    "sigWeapon": "cloudcleave_radiance",
    "bestDiscs": [
      "white_water_ballad",
      "dawns_bloom",
      "woodpecker_electro"
    ],
    "dnaTags": [
      "honed_edge",
      "physical",
      "attack_role",
      "crit",
      "basic",
      "ether_veil",
      "chain_ult"
    ],
    "needs": [
      "stun_dialyn",
      "ether_veil",
      "support_role"
    ],
    "provides": [
      "hyper_carry_dps",
      "veil_extension"
    ],
    "addAbilityRule": {
      "types": [
        "role:Stun",
        "role:Support"
      ],
      "desc": "В отряде есть агент «Устрашения» или «Поддержки»"
    },
    "baseStats60": {
      "hp": 7590,
      "atk": 925,
      "def": 600,
      "critRate": 19.4,
      "critDmg": 50,
      "ap": 94,
      "am": 92
    },
    "combatTargets": {
      "critRate": {
        "val": 100,
        "unit": "%",
        "label": "Крит. шанс (КШ)",
        "note": "Сет «Баллада белой воды» даёт +20% КШ в бою! Значит ДО БОЯ в меню нужно собирать НЕ БОЛЬШЕ 80% КШ!"
      },
      "critDmg": {
        "val": 200,
        "unit": "%",
        "label": "Крит. урон (КУ)",
        "note": "В бою под Диалин и сигной легко переваливает за 200–230% КУ."
      },
      "atk": {
        "val": 3900,
        "unit": "",
        "label": "Атака",
        "note": "В бою ~3800–4300. Если в пачке Сунна / Астра Яо / Чжао, не перебирай Атаку в меню!"
      },
      "penRatio": {
        "val": 24,
        "unit": "%",
        "label": "Пробивание (PEN%)",
        "note": "Отличный вариант на 5-м диске при двух бафферах."
      },
      "ap": {
        "val": 0,
        "unit": "",
        "label": "Знание аномалии (НЕ НУЖНО)",
        "note": "0 — чистый критовой гиперкерри."
      }
    },
    "preCombatBase": {
      "atk": 3000,
      "critRate": 78,
      "critDmg": 155,
      "penRatio": 0,
      "ap": 0
    },
    "mindscapeBonuses": {
      "1": {
        "critDmgCombat": 25,
        "note": "М1: +25% Крит. урона и мгновенные стаки Несущего."
      },
      "2": {
        "defIgnore": 25,
        "note": "М2: Игнорирует 25% Защиты врага в стойке Меча."
      }
    },
    "teamBuffs": {},
    "discMainStats": {
      "slot4": "Крит. урон% (или КШ% до 80% в меню)",
      "slot5": "Урон Физический% / PEN%",
      "slot6": "Атака%"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Базовая атака (ЛКМ) ⭐⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐",
      "Уклонение ⭐⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Летает по арене на бешеной скорости, чередуя обычные и воздушные комбо мечей и расходуя стаки Несущего (Bearer).",
      "special": "Усиленная Е-шка активирует/продлевает Эфирную завесу (включая +20% КШ и +10% Атаки от сета «Баллада белой воды») и мгновенно заряжает комбо-стойку.",
      "ult": "В паре с Диалин (которая конвертирует свою Цепочку в дополнительный прок Ульты) Е Шуньгуан выдаёт двойной ультимативный разрез по оглушённому боссу.",
      "passive": "Один из сильнейших критовых дамагеров игры (Охотник Каверн). Лучшая команда: Е Шуньгуан + Диалин (топ-1 станнер под неё) + Сунна / Чжао / Астра Яо."
    },
    "rotation": [
      "1. Включи Эфирную завесу и баффы на Сунне / Астре и набей стан через Диалин.",
      "2. Выйди на Е Шуньгуан → прожми Е-шку для активации 20% КШ от сета.",
      "3. Разряди серию воздушных ЛКМ и двойную Ульту под конверсией Диалин!"
    ],
    "wikiName": "Ye_Shunguang",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Ye_Shunguang_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Ye_Shunguang_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Ye_Shunguang_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_ye_shunguang.png",
    "scalingAxis": "crit_atk",
    "fieldStyle": "main_onfield",
    "anomalyStyle": "none",
    "teamConstraint": "crit_veil_hypercarry",
    "vortexSynergy": 0,
    "stunWindowReliance": 9,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/bb/Agent_Ye_Shunguang_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/bb/Agent_Ye_Shunguang_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/94/Agent_Ye_Shunguang_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/94/Agent_Ye_Shunguang_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/2/2e/Agent_Ye_Shunguang_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/f9/Agent_Ye_Shunguang_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Aria",
    "name": "Ария (Aria)",
    "shortName": "Ария",
    "role": "Anomaly",
    "roleRu": "Аномалия",
    "element": "Ether",
    "elementRu": "Эфир",
    "faction": "Ангелы Наваждения (Angels of Delusion)",
    "tier": "S+",
    "version": "2.6",
    "color": "#e879f9",
    "icon": "🎤",
    "sigWeapon": "angel_in_the_shell",
    "bestDiscs": [
      "shining_aria",
      "phaethons_melody",
      "feathered_fate"
    ],
    "dnaTags": [
      "ether",
      "anomaly_role",
      "disorder",
      "ap_buff",
      "basic",
      "stun_burst"
    ],
    "needs": [
      "stun_nangong",
      "support_sunna",
      "disorder_partner"
    ],
    "provides": [
      "ether_corruption_detonation",
      "stun_anomaly_burst"
    ],
    "addAbilityRule": {
      "types": [
        "role:Stun",
        "role:Support",
        "faction:Ангелы Наваждения (Angels of Delusion)"
      ],
      "desc": "В отряде есть агент «Устрашения», «Поддержки» или из фракции «Ангелы Наваждения»"
    },
    "baseStats60": {
      "hp": 7450,
      "atk": 865,
      "def": 600,
      "critRate": 5,
      "critDmg": 50,
      "ap": 318,
      "am": 152
    },
    "combatTargets": {
      "ap": {
        "val": 450,
        "unit": "",
        "label": "Знание аномалии (AP — ГЛАВНОЕ!)",
        "note": "В бою с сетом «Сияющая ария» (+36 AP) и баффами целишься в 420–480 AP."
      },
      "atk": {
        "val": 3600,
        "unit": "",
        "label": "Атака",
        "note": "В бою под Сунной / Ремиэль / Юдзухой 3500–4000 Атаки."
      },
      "am": {
        "val": 190,
        "unit": "",
        "label": "Контроль аномалии (AM)",
        "note": "С 6-м диском на AM% мгновенно вешает Заражение."
      },
      "critRate": {
        "val": 0,
        "unit": "%",
        "label": "Крит. шанс (НЕ НУЖЕН!)",
        "note": "0% — Ария чистый Аномалист, криты ей не нужны вообще!"
      },
      "critDmg": {
        "val": 0,
        "unit": "%",
        "label": "Крит. урон (НЕ НУЖЕН!)",
        "note": "0% — не работает на эфирные взрывы Арии."
      }
    },
    "preCombatBase": {
      "ap": 400,
      "atk": 2850,
      "am": 190,
      "critRate": 0,
      "critDmg": 0
    },
    "mindscapeBonuses": {
      "1": {
        "apCombat": 60,
        "note": "М1: +60 Знания аномалии в бою и игнор 15% эфирного резиста."
      },
      "2": {
        "dmgPct": 30,
        "note": "М2: Взрывы Хаоса и Заражения бьют на 30% сильнее."
      }
    },
    "teamBuffs": {},
    "discMainStats": {
      "slot4": "Знание аномалии (AP)",
      "slot5": "Урон Эфира% или PEN%",
      "slot6": "Контроль аномалии (AM%) или Атака%"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Базовая атака (ЛКМ) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Уклонение ⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Ритмичные удары микрофоном/крыльями накладывают Заражение и сразу активируют +36 AP от сета «Сияющая ария».",
      "special": "Усиленная Е-шка мгновенно детонирует Эфирную аномалию на враге (как мини-Хаос) без снятия самого статуса!",
      "ult": "Перегружает звуковую сцену, накладывая огромный эфирный взрыв по всем целям в стане.",
      "passive": "Обожает играть либо в родной тройке «Ангелов Наваждения» (Ария + Наньгун Юй + Сунна), где Наньгун Юй станит врага и включает +25% урона от сета «Сияющая ария», либо в 3-Аномалиях с Ремиэль!"
    },
    "rotation": [
      "1. Повесь Кошачий взгляд и баффы на Сунне → оглуши врага через Наньгун Юй.",
      "2. Выйди на Арию, дай серию ЛКМ для баффа сета и наложения Заражения.",
      "3. Прожми Усиленную Е-шку и Ульту прямо в окно стана (+25% урона от сета)!"
    ],
    "wikiName": "Aria",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Aria_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Aria_Human_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Aria_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_aria.png",
    "scalingAxis": "pure_anomaly_ap",
    "fieldStyle": "main_driver",
    "anomalyStyle": "abloom_stun_anomaly_driver",
    "teamConstraint": "anomaly_stun_or_triple_anomaly",
    "vortexSynergy": 10,
    "stunWindowReliance": 9,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/ff/Agent_Aria_Human_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/ff/Agent_Aria_Human_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/2/2d/Agent_Aria_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/2/2d/Agent_Aria_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/e/e9/Agent_Aria_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/ce/Agent_Aria_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Astra Yao",
    "name": "Астра Яо (Astra Yao)",
    "shortName": "Астра Яо",
    "role": "Support",
    "roleRu": "Поддержка (Баффер Атаки/КУ)",
    "element": "Ether",
    "elementRu": "Эфир",
    "faction": "Созвездие Лиры (Stars of Lyra)",
    "tier": "S+",
    "version": "1.5",
    "color": "#ec4899",
    "icon": "🎶",
    "sigWeapon": "elegant_vanity",
    "bestDiscs": [
      "astral_voice",
      "moonlight_lullaby",
      "hormone_punk"
    ],
    "dnaTags": [
      "support_role",
      "atk_scaling",
      "quick_assist",
      "team_dmg",
      "ether",
      "energy"
    ],
    "needs": [
      "attack_or_anomaly_ally"
    ],
    "provides": [
      "atk_buff_1200",
      "crit_dmg_buff_25",
      "dmg_buff_20",
      "quick_assist_spam",
      "team_heal_ult"
    ],
    "addAbilityRule": {
      "types": [
        "role:Attack",
        "role:Anomaly"
      ],
      "desc": "В отряде есть агент «Нападения» или «Аномалии»"
    },
    "baseStats60": {
      "hp": 8609,
      "atk": 715,
      "def": 600,
      "critRate": 5,
      "critDmg": 50,
      "ap": 93,
      "am": 90
    },
    "combatTargets": {
      "atk": {
        "val": 3429,
        "unit": "",
        "label": "Атака ДО БОЯ (СТРОГИЙ КАП!)",
        "note": "РОВНО 3429 Атаки в меню дают максимальный бафф +1200 Атаки для отряда! Выше 3429 собирать не нужно."
      },
      "er": {
        "val": 2.8,
        "unit": "/с",
        "label": "Восст. энергии",
        "note": "6-й диск на Восст. энергии% (или Атаку%, если с сигной хватает до 3429) для спама Быстрой помощи."
      },
      "critRate": {
        "val": 0,
        "unit": "%",
        "label": "Крит. шанс (НЕ НУЖЕН)",
        "note": "0% — Астра поёт на сцене, ей важна только Атака до 3429 и Энергия."
      },
      "critDmg": {
        "val": 0,
        "unit": "%",
        "label": "Крит. урон (НЕ НУЖЕН)",
        "note": "0% — не влияет на её баффы."
      }
    },
    "preCombatBase": {
      "atk": 3429,
      "er": 2.8,
      "critRate": 0,
      "critDmg": 0,
      "ap": 0
    },
    "mindscapeBonuses": {
      "1": {
        "resShred": 18,
        "note": "М1: Срезает 18% ВСЕХ сопротивлений врага и даёт щит неуязвимости."
      },
      "2": {
        "teamAtkBuffExtra": 400,
        "note": "М2: Повышает потолок баффа Атаки до +1600 Атаки (при ~2963 Атаки Астры)!"
      }
    },
    "teamBuffs": {
      "flatAtk": 1200,
      "critDmg": 25,
      "dmgPct": 20
    },
    "discMainStats": {
      "slot4": "Атака% (Обязательно!)",
      "slot5": "Атака% (Обязательно!)",
      "slot6": "Восст. энергии% или Атака% (чтобы добить 3429 Атаки в меню)"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐⭐",
      "Базовая атака ⭐⭐",
      "Уклонение ⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Почти никогда не жмётся: нажал Е-шку в начале боя — и Астра остаётся петь на сцене в полной неуязвимости весь бой!",
      "special": "Нажал Е-шку → Астра встала в режим Идиллии Каденции. Теперь каждый раз, когда у неё есть 25 энергии (нота), тебе загорается синяя кнопка Быстрой помощи: жмёшь смену героя — и твой дамагер вылетает с баффом +1200 Атаки, +25% КУ и +20% урона!",
      "ult": "Ульта Астры ЛЕЧИТ весь отряд и превращает следующие два нажатия смены персонажа в полноценные Цепочки атак даже БЕЗ оглушения босса (обожает Эвелин)!",
      "passive": "Заливает 35% своей начальной Атаки (максимум +1200 Атаки при 3429 Атаки Астры в меню!). Если Астра стоит в твоём отряде, твоим дамагерам нужно собирать в меню намного меньше Атаки!"
    },
    "rotation": [
      "1. В первую секунду боя нажми Е-шку на Астре → она начинает петь.",
      "2. Больше на Астру переключаться НЕ НАДО — просто меняй двух других героев по синей вспышке Быстрой помощи (держи 3 стака сета «Астральный голос»).",
      "3. Когда у Астры накопилась Ульта — переключись, сдай Ульту для хила и двух бесплатных Цепочек атак!"
    ],
    "wikiName": "Astra_Yao",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Astra_Yao_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Astra_Yao_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Astra_Yao_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_astra_yao.png",
    "scalingAxis": "support_atk_crit",
    "fieldStyle": "zero_offfield_buffer",
    "anomalyStyle": "none",
    "teamConstraint": "universal_crit_atk_support",
    "vortexSynergy": 0,
    "stunWindowReliance": 5,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/44/Agent_Astra_Yao_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/44/Agent_Astra_Yao_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/b8/Agent_Astra_Yao_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/b8/Agent_Astra_Yao_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/4f/Agent_Astra_Yao_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/5f/Agent_Astra_Yao_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Lucia",
    "name": "Люсия Эловен (Lucia Elowen)",
    "shortName": "Люсия",
    "role": "Support",
    "roleRu": "Поддержка (Разрыв / ХП / КУ)",
    "element": "Ether",
    "elementRu": "Эфир",
    "faction": "Хижина Страшилок (Spook Shack)",
    "tier": "S+",
    "version": "2.3",
    "color": "#c084fc",
    "icon": "🐐",
    "sigWeapon": "dreamlit_hearth",
    "bestDiscs": [
      "moonlight_lullaby",
      "yunkui_tales",
      "swing_jazz"
    ],
    "dnaTags": [
      "support_role",
      "hp_scaling",
      "ether_veil",
      "team_dmg",
      "aftershock",
      "energy"
    ],
    "needs": [
      "rupture_or_stun_ally"
    ],
    "provides": [
      "sheer_force_900",
      "crit_dmg_buff_30",
      "dmg_buff_20",
      "ether_veil_hp",
      "team_heal_ult"
    ],
    "addAbilityRule": {
      "types": [
        "role:Rupture",
        "role:Stun"
      ],
      "desc": "В отряде есть агент «Разрыва» или «Устрашения»"
    },
    "baseStats60": {
      "hp": 8477,
      "atk": 683,
      "def": 594,
      "critRate": 5,
      "critDmg": 50,
      "ap": 90,
      "am": 90
    },
    "combatTargets": {
      "hp": {
        "val": 24000,
        "unit": "",
        "label": "Макс. ХП ДО БОЯ (СТРОГИЙ КАП!)",
        "note": "РОВНО 24 000 ХП в меню дают максимальный бафф +900 Сквозной силы (как +3000 Атаки для Разрыва)!"
      },
      "er": {
        "val": 2.4,
        "unit": "/с",
        "label": "Восст. энергии",
        "note": "20% от сета «Лунная колыбельная» + пассивка сигны."
      },
      "critRate": {
        "val": 0,
        "unit": "%",
        "label": "Крит. шанс (НЕ НУЖЕН)",
        "note": "0% — все роллы в дисках 1–3 только в ХП% (нужно около 9 роллов ХП% с сигной)."
      },
      "critDmg": {
        "val": 0,
        "unit": "%",
        "label": "Крит. урон (НЕ НУЖЕН)",
        "note": "0% — сама раздаёт +30% КУ отряду без сборки критов."
      }
    },
    "preCombatBase": {
      "hp": 24000,
      "er": 2.4,
      "critRate": 0,
      "critDmg": 0,
      "atk": 1600
    },
    "mindscapeBonuses": {
      "1": {
        "resShred": 18,
        "note": "М1: Игнор 18% всех резистов и авто-продление Колыбельной."
      },
      "2": {
        "sheerDmgPct": 15,
        "note": "М2: +15% Сквозного урона всему отряду внутри Эфирной завесы."
      }
    },
    "teamBuffs": {
      "sheerForce": 900,
      "critDmg": 30,
      "dmgPct": 20,
      "hpPct": 5
    },
    "discMainStats": {
      "slot4": "ХП% (Обязательно!)",
      "slot5": "ХП% (Обязательно!)",
      "slot6": "ХП% (Обязательно для капа 24 000 ХП!)"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Базовая атака ⭐⭐",
      "Помощь ⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Набирает недостающие очки Сна (в бой входит уже с 60 из 100).",
      "special": "Нажал Усиленную Е-шку → набрал 100 очков Сна → Люсия открывает Эфирную завесу (+5% Макс. ХП), вызывает Быструю помощь и вешает на всю пачку статус Darkbreaker: +900 Сквозной силы (при 24 000 ХП Люсии) и +30% Крит. урона!",
      "ult": "Продлевает Эфирную завесу на 32 секунды и оставляет на земле поле лечения, которое хилит твоего активного героя каждую секунду.",
      "passive": "Незаменимый Бог-саппорт для всех героев Разрыва (Исюань, Идхари, Баньюэ, Звёздный Билли). Пока она в Сне, раз в 8 секунд сама бьёт из кармана Афтершоком (Гармонией) и обновляет всем +20% урона!"
    },
    "rotation": [
      "1. Выйди на Люсию → нажми Е-шку, чтобы добрать 100 очков Сна и раскрыть Эфирную завесу.",
      "2. Нажми загоревшуюся Быструю помощь для выхода дамагера Разрыва (Исюань / Идхари / Баньюэ).",
      "3. Раз в 20–25 секунд на секунду возвращайся на Люсию нажать Е-шку или Ульту для продления Завесы."
    ],
    "wikiName": "Lucia_Elowen",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Lucia_Elowen_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Lucia_Elowen_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Lucia_Elowen_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_lucia.png",
    "scalingAxis": "support_hp_sheer",
    "fieldStyle": "zero_offfield_buffer",
    "anomalyStyle": "none",
    "teamConstraint": "rupture_dedicated_support",
    "vortexSynergy": 0,
    "stunWindowReliance": 7,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/49/Agent_Lucia_Elowen_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/49/Agent_Lucia_Elowen_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/ff/Agent_Lucia_Elowen_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/ff/Agent_Lucia_Elowen_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/2/2c/Agent_Lucia_Elowen_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/7/77/Agent_Lucia_Elowen_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Remielle",
    "name": "Ремиэль Дан (Remielle Dan)",
    "shortName": "Ремиэль",
    "role": "Anomaly",
    "roleRu": "Аномалия (Люмифлюкс Баффер-Керри)",
    "element": "Lumiflux",
    "elementRu": "Люмифлюкс (Адаптивная)",
    "faction": "Завет Даят (Covenant of Dayat)",
    "tier": "S+",
    "version": "3.1",
    "color": "#f472b6",
    "icon": "🪽",
    "sigWeapon": "ode_of_resurrected_wings",
    "bestDiscs": [
      "feathered_fate",
      "phaethons_melody",
      "freedom_blues"
    ],
    "dnaTags": [
      "lumiflux",
      "anomaly_role",
      "ap_buff",
      "off_field_anomaly",
      "team_dmg",
      "atk_scaling"
    ],
    "needs": [
      "two_anomaly_allies"
    ],
    "provides": [
      "atk_buff_1600_3anom",
      "refringe_anomaly_boost",
      "stun_extend_3s"
    ],
    "addAbilityRule": {
      "types": [
        "role:Anomaly",
        "faction:Завет Даят (Covenant of Dayat)"
      ],
      "desc": "В отряде есть ещё Аномалист (при 3 Аномалистах в пачке даёт +40% своей Атаки = до +1600 Атаки всем!)"
    },
    "baseStats60": {
      "hp": 7482,
      "atk": 748,
      "def": 600,
      "critRate": 5,
      "critDmg": 50,
      "ap": 324,
      "am": 148
    },
    "combatTargets": {
      "ap": {
        "val": 480,
        "unit": "",
        "label": "Знание аномалии (AP — ГЛАВНЫЙ СТАТ!)",
        "note": "Каждая единица AP разгоняет коэффициент Преломления (Refringe), усиливая аномалии всей команды!"
      },
      "atk": {
        "val": 3200,
        "unit": "",
        "label": "Атака ДО БОЯ (под бафф отряда)",
        "note": "В команде из 3 Аномалистов Ремиэль раздаёт всем 40% от своей НАЧАЛЬНОЙ Атаки (кап +1600 при 4000 Атаки, а при ~2600–3200 даёт +1050–1280 Атаки всем!)."
      },
      "am": {
        "val": 190,
        "unit": "",
        "label": "Контроль аномалии (AM)",
        "note": "6-й диск на Контроль аномалии% усиливает её множители."
      },
      "critRate": {
        "val": 0,
        "unit": "%",
        "label": "Крит. шанс (НЕ НУЖЕН!)",
        "note": "0% — у Ремиэль нет критовых скейлов, криты в 0!"
      },
      "critDmg": {
        "val": 0,
        "unit": "%",
        "label": "Крит. урон (НЕ НУЖЕН!)",
        "note": "0% — бесполезен."
      }
    },
    "preCombatBase": {
      "ap": 420,
      "atk": 2850,
      "am": 190,
      "critRate": 0,
      "critDmg": 0
    },
    "mindscapeBonuses": {
      "1": {
        "teamDmgPct": 10,
        "note": "М1: Игнор 50% резистов на Люминайзе и +10% урона аномалий отряду."
      },
      "2": {
        "defShred": 15,
        "note": "М2: +20% к Преломлению и 15% игнора защиты для всех Аномалистов отряда!"
      }
    },
    "teamBuffs": {
      "flatAtk": 1200,
      "dmgPct": 30,
      "anomalyAmplify": 25
    },
    "discMainStats": {
      "slot4": "Знание аномалии (AP)",
      "slot5": "Атака% (или Урон стихии соседа справа!)",
      "slot6": "Контроль аномалии (AM%)"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐⭐",
      "Базовая атака (ЛКМ) ⭐⭐⭐⭐⭐",
      "Помощь ⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐"
    ],
    "skillsRazer": {
      "basic": "4 удара ЛКМ и финишер копят 120 Сияния → Ремиэль взлетает в автономный режим Phase Flow (сама летает и вешает метки с неба, пока ты играешь другими героями!). ВАЖНО: перед комбо ЛКМ всегда сдай Цепочку атак или Помощь, чтобы финишер усилился в 3 раза!",
      "special": "Используется для быстрого набора Сияния и взрыва накопленных сфер Voidflare.",
      "ult": "Сдавай Цепочку атак и Ульту первыми: они вешают метки Люмифлюкса, благодаря которым следующая аномалия твоего напарника ПРЕЛОМЛЯЕТСЯ (Refringe) и бьёт в разы сильнее!",
      "passive": "ГЛАВНОЕ ПРАВИЛО РЕМИЭЛЬ: 1) Она копирует стихию того героя, кто стоит СРАЗУ ПОСЛЕ НЕЁ в списке отряда! 2) Ставь её в команду из ТРЁХ АНОМАЛИСТОВ (например, Ремиэль + Мияби/Джейн/Алиса + Вивиан/Велина/Янаги) — тогда её бафф Атаки прыгает с 12% сразу до 40% (заливая всей пачке 1100–1600 Атаки!), так что твоим аномалистам больше не нужно перебирать Атаку в меню!"
    },
    "rotation": [
      "1. Поставь в отряд 3 Аномалистов (на 2-й слот сразу за Ремиэль поставь того, чью стихию хочешь скопировать).",
      "2. Начни через Помощь / Цепочку атак Ремиэль → дай усиленный финишер ЛКМ → она улетает в автономный Phase Flow.",
      "3. Играй двумя другими Аномалистами, взрывая Преломлённые аномалии и Хаос под +1200–1600 Атаки от Ремиэль!"
    ],
    "wikiName": "Remielle_Dan",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Remielle_Dan_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Remielle_Dan_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Remielle_Dan_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_remielle.png",
    "scalingAxis": "pure_anomaly_ap",
    "fieldStyle": "swap_burst_offfield_flow",
    "anomalyStyle": "lumiflux_refringe_amplifier",
    "teamConstraint": "strictly_3_anomaly",
    "vortexSynergy": 10,
    "stunWindowReliance": 6,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/b1/Agent_Remielle_Dan_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/b1/Agent_Remielle_Dan_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/ce/Agent_Remielle_Dan_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/ce/Agent_Remielle_Dan_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/8/8d/Agent_Remielle_Dan_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/8/8a/Agent_Remielle_Dan_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Yuzuha",
    "name": "Укинами Юдзуха (Ukinami Yuzuha)",
    "shortName": "Юдзуха",
    "role": "Support",
    "roleRu": "Поддержка (Топ Баффер Аномалий)",
    "element": "Physical",
    "elementRu": "Физический",
    "faction": "Хижина Страшилок (Spook Shack)",
    "tier": "S+",
    "version": "2.1",
    "color": "#f59e0b",
    "icon": "🦝",
    "sigWeapon": "metanukimorphosis",
    "bestDiscs": [
      "astral_voice",
      "moonlight_lullaby",
      "phaethons_melody"
    ],
    "dnaTags": [
      "support_role",
      "physical",
      "quick_assist",
      "team_ap",
      "team_dmg",
      "energy"
    ],
    "needs": [
      "anomaly_ally"
    ],
    "provides": [
      "atk_buff_1000",
      "ap_buff_60",
      "disorder_dmg_buff",
      "quick_assist"
    ],
    "addAbilityRule": {
      "types": [
        "role:Anomaly",
        "faction:Хижина Страшилок (Spook Shack)"
      ],
      "desc": "В отряде есть агент «Аномалии» или из фракции «Хижина Страшилок»"
    },
    "baseStats60": {
      "hp": 8350,
      "atk": 710,
      "def": 605,
      "critRate": 5,
      "critDmg": 50,
      "ap": 118,
      "am": 145
    },
    "combatTargets": {
      "am": {
        "val": 200,
        "unit": "",
        "label": "Контроль аномалии (КАП 200 AM!)",
        "note": "При 200 AM в бою Юдзуха раздаёт максимум бонуса к накоплению аномалий и урону Хаоса!"
      },
      "atk": {
        "val": 3000,
        "unit": "",
        "label": "Атака ДО БОЯ (КАП 3000!)",
        "note": "3000 Атаки в меню дают максимальный бафф +1000 Атаки для отряда."
      },
      "er": {
        "val": 2.6,
        "unit": "/с",
        "label": "Восст. энергии",
        "note": "С пушкой на Восст. энергии спамит Е-шку по откату."
      },
      "critRate": {
        "val": 0,
        "unit": "%",
        "label": "Крит. шанс (НЕ НУЖЕН)",
        "note": "0% — саппорт под аномалистов."
      },
      "critDmg": {
        "val": 0,
        "unit": "%",
        "label": "Крит. урон (НЕ НУЖЕН)",
        "note": "0%."
      }
    },
    "preCombatBase": {
      "atk": 3000,
      "am": 175,
      "er": 2.6,
      "critRate": 0,
      "critDmg": 0
    },
    "mindscapeBonuses": {
      "1": {
        "teamAp": 50,
        "note": "М1: Заливает ещё +50 Знания аномалии всему отряду."
      },
      "2": {
        "resShred": 20,
        "note": "М2: Срезает 20% сопротивления ко всем аномалиям."
      }
    },
    "teamBuffs": {
      "flatAtk": 1000,
      "ap": 60,
      "dmgPct": 25
    },
    "discMainStats": {
      "slot4": "Атака%",
      "slot5": "Атака%",
      "slot6": "Контроль аномалии (AM%) (обязательно для капа 200 AM!)"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Помощь ⭐⭐⭐",
      "Базовая атака ⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Почти не используется — Юдзуха выходит только сдать Е-шку/Ульту и вызвать Быструю помощь.",
      "special": "Кидает тануки-бомбу, запускает Быструю помощь и заливает отряду до +1000 Атаки, ускорение накопления кружков аномалии и бонус к урону Хаоса!",
      "ult": "Восстанавливает энергию команде и обновляет все баффы тануки.",
      "passive": "Лучший классический саппорт под связки из 2 Аномалистов (Алиса + Вивиан, Джейн + Бёрнис, Мияби + Янаги). Собери ей 3000 Атаки и 6-й диск на Контроль аномалии (плюс 2 куска «Мелодии Фаэтона»)."
    },
    "rotation": [
      "1. Нажми Усиленную Е-шку на Юдзухе → переключись по Быстрой помощи на главного Аномалиста.",
      "2. Чередуй двух Аномалистов для взрыва Хаоса под баффом +1000 Атаки и ускоренным накоплением кружков."
    ],
    "wikiName": "Ukinami_Yuzuha",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Ukinami_Yuzuha_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Ukinami_Yuzuha_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Ukinami_Yuzuha_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_yuzuha.png",
    "scalingAxis": "support_anomaly_ap",
    "fieldStyle": "zero_offfield_buffer",
    "anomalyStyle": "anomaly_buildup_amp",
    "teamConstraint": "anomaly_dedicated_support",
    "vortexSynergy": 4,
    "stunWindowReliance": 4,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6d/Agent_Ukinami_Yuzuha_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6d/Agent_Ukinami_Yuzuha_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/fc/Agent_Ukinami_Yuzuha_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/fc/Agent_Ukinami_Yuzuha_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/a/ab/Agent_Ukinami_Yuzuha_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/8/85/Agent_Ukinami_Yuzuha_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Sunna",
    "name": "Сунна (Sunna)",
    "shortName": "Сунна",
    "role": "Support",
    "roleRu": "Поддержка (Эфирная завеса / Метка)",
    "element": "Physical",
    "elementRu": "Физический",
    "faction": "Ангелы Наваждения (Angels of Delusion)",
    "tier": "S+",
    "version": "2.6",
    "color": "#fb7185",
    "icon": "🐱",
    "sigWeapon": "thoughtbop",
    "bestDiscs": [
      "astral_voice",
      "moonlight_lullaby",
      "swing_jazz"
    ],
    "dnaTags": [
      "support_role",
      "physical",
      "ether_veil",
      "quick_assist",
      "atk_scaling",
      "team_dmg"
    ],
    "needs": [
      "attack_or_anomaly_ally"
    ],
    "provides": [
      "atk_buff_950",
      "ether_veil_field",
      "cats_gaze_detonation"
    ],
    "addAbilityRule": {
      "types": [
        "role:Attack",
        "role:Anomaly",
        "faction:Ангелы Наваждения (Angels of Delusion)"
      ],
      "desc": "В отряде есть агент «Нападения», «Аномалии» или из «Ангелов Наваждения»"
    },
    "baseStats60": {
      "hp": 8290,
      "atk": 722,
      "def": 600,
      "critRate": 5,
      "critDmg": 50,
      "ap": 95,
      "am": 92
    },
    "combatTargets": {
      "atk": {
        "val": 3200,
        "unit": "",
        "label": "Атака ДО БОЯ (КАП 3200!)",
        "note": "При 3200 Атаки в меню даёт максимальный бафф Атаки и урона от Кошачьего взгляда."
      },
      "er": {
        "val": 2.7,
        "unit": "/с",
        "label": "Восст. энергии",
        "note": "6-й диск на Восст. энергии% для постоянного поддержания Эфирной завесы."
      },
      "critRate": {
        "val": 0,
        "unit": "%",
        "label": "Крит. шанс (НЕ НУЖЕН)",
        "note": "0% — урон метки Кошачьего взгляда скейлится от статов того дамагера, который её взрывает!"
      },
      "critDmg": {
        "val": 0,
        "unit": "%",
        "label": "Крит. урон (НЕ НУЖЕН)",
        "note": "0%."
      }
    },
    "preCombatBase": {
      "atk": 3200,
      "er": 2.7,
      "critRate": 0,
      "critDmg": 0,
      "ap": 0
    },
    "mindscapeBonuses": {
      "1": {
        "teamDmgPct": 18,
        "note": "М1: +18% урона внутри Эфирной завесы и лишние стаки когтей."
      },
      "2": {
        "defShred": 18,
        "note": "М2: Враги под Кошачьим взглядом теряют 18% Защиты."
      }
    },
    "teamBuffs": {
      "flatAtk": 950,
      "dmgPct": 22,
      "critDmg": 20
    },
    "discMainStats": {
      "slot4": "Атака%",
      "slot5": "Атака%",
      "slot6": "Восст. энергии% или Атака%"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Базовая атака ⭐⭐",
      "Уклонение ⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Накапливает стаки Точилки когтей для питомца Бабблгам.",
      "special": "Нажатие Усиленной Е-шки раскрывает Эфирную завесу (включает сет Е Шуньгуан «Баллада белой воды»!), баффает команду и вешает на босса метку «Кошачий взгляд» (Cat's Gaze).",
      "ult": "Обновляет максимум стаков Бабблгам и продлевает Эфирную завесу.",
      "passive": "Когда твой Атакер или Аномалист бьёт врага под «Кошачьим взглядом», метка взрывается, используя статы и криты ТВОЕГО ДАМАГЕРА, а питомец Сунны из кармана сам вешает метку заново! Шикарный саппорт под Е Шуньгуан, Арию и любых Атакеров."
    },
    "rotation": [
      "1. Прожми Е-шку на Сунне → открой Эфирную завесу и повесь Кошачий взгляд.",
      "2. Переключись по Быстрой помощи на Е Шуньгуан / Арию и бей босса — Бабблгам сам будет перевешивать метку из кармана!"
    ],
    "wikiName": "Sunna",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Sunna_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Sunna_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Sunna_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_sunna.png",
    "scalingAxis": "support_veil_atk",
    "fieldStyle": "zero_offfield_buffer",
    "anomalyStyle": "cats_gaze_detonator",
    "teamConstraint": "veil_and_angels_support",
    "vortexSynergy": 5,
    "stunWindowReliance": 7,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/39/Agent_Sunna_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/39/Agent_Sunna_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/0/0f/Agent_Sunna_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/0/0f/Agent_Sunna_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/31/Agent_Sunna_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/99/Agent_Sunna_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Dialyn",
    "name": "Диалин (Dialyn)",
    "shortName": "Диалин",
    "role": "Stun",
    "roleRu": "Устрашение (Топ-1 Станнер)",
    "element": "Physical",
    "elementRu": "Физический",
    "faction": "Надзор Крампуса (Krampus Compliance Authority)",
    "tier": "S+",
    "version": "2.4",
    "color": "#f59e0b",
    "icon": "⚖️",
    "sigWeapon": "yesterday_calls",
    "bestDiscs": [
      "king_of_the_summit",
      "shockstar_disco",
      "swing_jazz"
    ],
    "dnaTags": [
      "stun_role",
      "physical",
      "impact",
      "daze",
      "team_crit_dmg"
    ],
    "needs": [
      "attack_or_rupture_ally"
    ],
    "provides": [
      "fastest_daze",
      "ult_conversion_buff",
      "crit_dmg_buff_35",
      "stun_multiplier"
    ],
    "addAbilityRule": {
      "types": [
        "role:Attack",
        "role:Rupture"
      ],
      "desc": "В отряде есть агент «Нападения» или «Разрыва»"
    },
    "baseStats60": {
      "hp": 7980,
      "atk": 765,
      "def": 620,
      "critRate": 14.4,
      "critDmg": 50,
      "impact": 142
    },
    "combatTargets": {
      "impact": {
        "val": 195,
        "unit": "",
        "label": "Импульс (Impact — ГЛАВНЫЙ СТАТ)",
        "note": "6-й диск на Импульс% + сигна/пушка на Импульс дают молниеносный стан босса."
      },
      "critRate": {
        "val": 55,
        "unit": "%",
        "label": "Крит. шанс (КАП ≥ 50%!)",
        "note": "Обязательно собери ≥50% КШ в меню, чтобы сет «Король вершины» раздавал отряду полные +30% Крит. урона!"
      },
      "critDmg": {
        "val": 110,
        "unit": "%",
        "label": "Крит. урон (КУ)",
        "note": "Приятный бонус в сабстатах после 50% КШ."
      },
      "ap": {
        "val": 0,
        "unit": "",
        "label": "Знание аномалии (НЕ НУЖНО)",
        "note": "0."
      }
    },
    "preCombatBase": {
      "impact": 195,
      "critRate": 55,
      "critDmg": 100,
      "atk": 2200,
      "ap": 0
    },
    "mindscapeBonuses": {
      "1": {
        "teamCritDmg": 20,
        "note": "М1: +20% Крит. урона по оглушённым врагам и +15% скорости Оглушения."
      },
      "2": {
        "resShred": 20,
        "note": "М2: Срезает 20% сопротивления всем стихиям в стане."
      }
    },
    "teamBuffs": {
      "critDmg": 35,
      "dmgPct": 25
    },
    "discMainStats": {
      "slot4": "Крит. шанс% (чтобы легко взять ≥50% КШ под сет «Король вершины»!)",
      "slot5": "Урон Физический% или Атака%",
      "slot6": "Импульс% (Impact%)"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Базовая атака (ЛКМ) ⭐⭐⭐⭐",
      "Помощь ⭐⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Быстрые удары молотом/цепями с высоким множителем Оглушения.",
      "special": "Усиленная Е-шка моментально сносит огромный кусок жёлтой полоски босса и активирует +30% Крит. урона от сета «Король вершины».",
      "ult": "Уникальная механика Диалин: её Цепочка атак и Ульта дают главному дамагеру (особенно Е Шуньгуан и Исюань) конверсию Ульты и повышенный множитель уязвимости в стане!",
      "passive": "Сильнейший универсальный станнер для всех критовых Атакеров и агентов Разрыва (Е Шуньгуан, Исюань, Баньюэ, Сигрид, Хьюго, Эвелин). Главное — сделай ей ≥50% КШ под сет «Король вершины»!"
    },
    "rotation": [
      "1. Отбивай золотые вспышки босса через Помощь в защите на Диалин и жми Усиленную Е-шку.",
      "2. Вгони босса в стан → проведи Цепочку атак Диалин для активации её баффа и +30% КУ от сета.",
      "3. Переключись на главного ДД и разряди весь бурст в окно стана!"
    ],
    "wikiName": "Dialyn",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Dialyn_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Dialyn_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Dialyn_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_dialyn.png",
    "scalingAxis": "stun_crit_ult_amp",
    "fieldStyle": "quickswap_stun",
    "anomalyStyle": "none",
    "teamConstraint": "crit_or_rupture_stunner",
    "vortexSynergy": 0,
    "stunWindowReliance": 10,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/9f/Agent_Dialyn_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/9f/Agent_Dialyn_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/2/25/Agent_Dialyn_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/2/25/Agent_Dialyn_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/61/Agent_Dialyn_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/e/e0/Agent_Dialyn_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Nangong Yu",
    "name": "Наньгун Юй (Nangong Yu)",
    "shortName": "Наньгун Юй",
    "role": "Stun",
    "roleRu": "Устрашение (Эфир / Аномалия-Станнер)",
    "element": "Ether",
    "elementRu": "Эфир",
    "faction": "Ангелы Наваждения (Angels of Delusion)",
    "tier": "S+",
    "version": "2.7",
    "color": "#a855f7",
    "icon": "🎆",
    "sigWeapon": "neon_fantasies",
    "bestDiscs": [
      "king_of_the_summit",
      "shockstar_disco",
      "freedom_blues"
    ],
    "dnaTags": [
      "stun_role",
      "ether",
      "impact",
      "daze",
      "team_dmg",
      "disorder"
    ],
    "needs": [
      "anomaly_or_angels_ally"
    ],
    "provides": [
      "ether_stun",
      "anomaly_stun_amplify",
      "stun_multiplier"
    ],
    "addAbilityRule": {
      "types": [
        "role:Anomaly",
        "faction:Ангелы Наваждения (Angels of Delusion)"
      ],
      "desc": "В отряде есть агент «Аномалии» или из фракции «Ангелы Наваждения»"
    },
    "baseStats60": {
      "hp": 7850,
      "atk": 755,
      "def": 612,
      "critRate": 14.4,
      "critDmg": 50,
      "impact": 140
    },
    "combatTargets": {
      "impact": {
        "val": 192,
        "unit": "",
        "label": "Импульс (Impact)",
        "note": "6-й диск на Импульс% для быстрой пробивки стана."
      },
      "critRate": {
        "val": 52,
        "unit": "%",
        "label": "Крит. шанс (≥50% под Короля вершины)",
        "note": "Если носишь сет «Король вершины», держи ≥50% КШ в меню."
      },
      "ap": {
        "val": 200,
        "unit": "",
        "label": "Знание аномалии (Вторично)",
        "note": "Помогает не размывать урон Эфирной аномалии при игре с Арией."
      }
    },
    "preCombatBase": {
      "impact": 192,
      "critRate": 52,
      "critDmg": 95,
      "atk": 2100,
      "ap": 180
    },
    "mindscapeBonuses": {
      "1": {
        "teamDmgPct": 20,
        "note": "М1: +20% урона Аномалий и Критов по оглушённым врагам."
      },
      "2": {
        "resShred": 20,
        "note": "М2: Срезает 20% сопротивления Эфиру и продлевает стан на 2 сек."
      }
    },
    "teamBuffs": {
      "dmgPct": 30,
      "critDmg": 30
    },
    "discMainStats": {
      "slot4": "Крит. шанс% (под Короля вершины) или Знание аномалии",
      "slot5": "Урон Эфира% или Атака%",
      "slot6": "Импульс%"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Базовая атака ⭐⭐⭐⭐",
      "Помощь ⭐⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Быстрые эфирные атаки с высоким накоплением Оглушения.",
      "special": "Усиленная Е-шка вбивает врага в стан и вешает дебафф, увеличивающий входящий урон как от Критов, так и от Аномалий!",
      "ult": "Мощный эфирный взрыв с огромным Оглушением по площади.",
      "passive": "Уникальный станнер двойного назначения: сама закрывает условие «нужен Станнер» для 16 героев, а её собственная пассивка включается от любого Аномалиста! Идеальная пара для Арии, Велины, Мияби и Чжу Юань."
    },
    "rotation": [
      "1. Выходи через Помощь в защите и сдавай Усиленную Е-шку для мгновенного Оглушения.",
      "2. На Арии ее стан включает +25% урона от сета «Сияющая ария»!"
    ],
    "wikiName": "Nangong_Yu",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Nangong_Yu_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Nangong_Yu_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Nangong_Yu_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_nangong_yu.png",
    "scalingAxis": "stun_anomaly_ether_amp",
    "fieldStyle": "quickswap_stun",
    "anomalyStyle": "stun_anomaly_enabler",
    "teamConstraint": "anomaly_or_ether_stunner",
    "vortexSynergy": 7,
    "stunWindowReliance": 10,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/2/27/Agent_Nangong_Yu_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/2/27/Agent_Nangong_Yu_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/a/a3/Agent_Nangong_Yu_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/a/a3/Agent_Nangong_Yu_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/e/e3/Agent_Nangong_Yu_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/7/7c/Agent_Nangong_Yu_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Norma",
    "name": "Норма Холлоуэлл (Norma Hollowell)",
    "shortName": "Норма",
    "role": "Stun",
    "roleRu": "Устрашение (Огонь / Цепочки)",
    "element": "Fire",
    "elementRu": "Огонь",
    "faction": "Отдел внешней стратегии (External Strategy Department)",
    "tier": "S+",
    "version": "3.0",
    "color": "#ef4444",
    "icon": "🚨",
    "sigWeapon": "chief_sidekick",
    "bestDiscs": [
      "king_of_the_summit",
      "shockstar_disco",
      "swing_jazz"
    ],
    "dnaTags": [
      "stun_role",
      "fire",
      "impact",
      "daze",
      "chain_ult",
      "team_crit_dmg"
    ],
    "needs": [
      "attack_anomaly_or_armorer"
    ],
    "provides": [
      "fast_fire_stun",
      "chain_extension",
      "team_dmg_buff"
    ],
    "addAbilityRule": {
      "types": [
        "role:Attack",
        "role:Anomaly",
        "role:Armorer",
        "faction:Отдел внешней стратегии (External Strategy Department)"
      ],
      "desc": "В отряде есть агент «Нападения», «Аномалии», «Броненосец» или из «Отдела внешней стратегии»"
    },
    "baseStats60": {
      "hp": 7920,
      "atk": 760,
      "def": 618,
      "critRate": 14.4,
      "critDmg": 50,
      "impact": 141
    },
    "combatTargets": {
      "impact": {
        "val": 194,
        "unit": "",
        "label": "Импульс (Impact)",
        "note": "Главный стат для скорости оглушения."
      },
      "critRate": {
        "val": 54,
        "unit": "%",
        "label": "Крит. шанс (≥50% под сет)",
        "note": "Для работы 4 кусков «Короля вершины» (+30% КУ отряду)."
      },
      "ap": {
        "val": 0,
        "unit": "",
        "label": "Знание аномалии (НЕ НУЖНО)",
        "note": "0."
      }
    },
    "preCombatBase": {
      "impact": 194,
      "critRate": 54,
      "critDmg": 100,
      "atk": 2150,
      "ap": 0
    },
    "mindscapeBonuses": {
      "1": {
        "teamDmgPct": 18,
        "note": "М1: +18% урона отряду после Цепочки атак."
      },
      "2": {
        "teamCritDmg": 25,
        "note": "М2: +25% КУ и мгновенный заряд стана."
      }
    },
    "teamBuffs": {
      "critDmg": 30,
      "dmgPct": 25
    },
    "discMainStats": {
      "slot4": "Крит. шанс%",
      "slot5": "Урон Огня% или Атака%",
      "slot6": "Импульс%"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Базовая атака ⭐⭐⭐",
      "Помощь ⭐⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Серия ударов с накоплением тактического заряда.",
      "special": "Мощный огненный пробой жёлтой полоски босса с активацией командных баффов.",
      "ult": "Цепочка атак и Ульта Нормы продлевают особые стойки союзников (включая Багровую метку Кларет и бурст-окна Эвелин / Велины)!",
      "passive": "Универсальный S+ станнер 3.0: работает и с критовиками (Эвелин, Сигрид), и с Велиной (одна фракция), и с Кларет!"
    },
    "rotation": [
      "1. Сбивай жёлтую шкалу через Помощь в защите и Усиленную Е-шку Нормы.",
      "2. Обязательно проведи Цепочку атак Нормы перед выходом главного дамагера."
    ],
    "wikiName": "Norma_Hollowell",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Norma_Hollowell_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Norma_Hollowell_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Norma_Hollowell_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_norma.png",
    "scalingAxis": "stun_chain_state_extender",
    "fieldStyle": "quickswap_stun",
    "anomalyStyle": "none",
    "teamConstraint": "chain_and_state_stunner",
    "vortexSynergy": 4,
    "stunWindowReliance": 9,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/1/10/Agent_Norma_Hollowell_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/1/10/Agent_Norma_Hollowell_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/1/18/Agent_Norma_Hollowell_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/1/18/Agent_Norma_Hollowell_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/fd/Agent_Norma_Hollowell_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6a/Agent_Norma_Hollowell_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Velina",
    "name": "Велина Эйргид (Velina Airgid)",
    "shortName": "Велина",
    "role": "Anomaly",
    "roleRu": "Аномалия (Карманный Ветер / Хаос)",
    "element": "Wind",
    "elementRu": "Ветер",
    "faction": "Отдел внешней стратегии (External Strategy Department)",
    "tier": "S+",
    "version": "3.0",
    "color": "#34d399",
    "icon": "🌪️",
    "sigWeapon": "joyau_dore",
    "bestDiscs": [
      "wuthering_salon",
      "feathered_fate",
      "phaethons_melody"
    ],
    "dnaTags": [
      "wind",
      "anomaly_role",
      "off_field_anomaly",
      "disorder",
      "ap_buff"
    ],
    "needs": [
      "anomaly_or_stun_ally"
    ],
    "provides": [
      "off_field_wind_anomaly",
      "disorder_trigger",
      "winds_vulnerability"
    ],
    "addAbilityRule": {
      "types": [
        "role:Anomaly",
        "role:Support",
        "role:Stun"
      ],
      "desc": "В отряде есть агент «Аномалии», «Поддержки» или «Устрашения»"
    },
    "baseStats60": {
      "hp": 7520,
      "atk": 870,
      "def": 602,
      "critRate": 5,
      "critDmg": 50,
      "ap": 320,
      "am": 150
    },
    "combatTargets": {
      "ap": {
        "val": 460,
        "unit": "",
        "label": "Знание аномалии (AP — ГЛАВНОЕ)",
        "note": "Сет «Грозовой салон» даёт +50 AP в бою на 40 секунд! До боя стремись к 380–410 AP."
      },
      "atk": {
        "val": 3500,
        "unit": "",
        "label": "Атака",
        "note": "В бою под Ремиэль / Юдзухой ~3500–3900."
      },
      "am": {
        "val": 192,
        "unit": "",
        "label": "Контроль аномалии (AM)",
        "note": "6-й диск на AM% для мгновенного закрытия ветряного кружка."
      },
      "critRate": {
        "val": 0,
        "unit": "%",
        "label": "Крит. шанс (НЕ НУЖЕН!)",
        "note": "0% — аномалист Ветра, криты не работают!"
      },
      "critDmg": {
        "val": 0,
        "unit": "%",
        "label": "Крит. урон (НЕ НУЖЕН!)",
        "note": "0%."
      }
    },
    "preCombatBase": {
      "ap": 400,
      "atk": 2800,
      "am": 192,
      "critRate": 0,
      "critDmg": 0
    },
    "mindscapeBonuses": {
      "1": {
        "apCombat": 50,
        "note": "М1: +50 AP и +20% скорости накопления Ветра из кармана."
      },
      "2": {
        "disorderDmgPct": 25,
        "note": "М2: +25% урона Хаоса всему отряду."
      }
    },
    "teamBuffs": {
      "dmgPct": 18
    },
    "discMainStats": {
      "slot4": "Знание аномалии (AP)",
      "slot5": "Урон Ветра% или PEN%",
      "slot6": "Контроль аномалии (AM%)"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Базовая атака ⭐⭐⭐",
      "Помощь ⭐⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Быстрые ветряные порезы для подзарядки вихря.",
      "special": "Нажала дважды Усиленную Е-шку → получила +50 AP на 40 секунд от сета «Грозовой салон» и оставила на поле ветряной вихрь, который сам копит аномалию Ветра из кармана!",
      "ult": "Мгновенно закрывает кружок Ветра и стягивает всех врагов в одну точку.",
      "passive": "Лучший карманный напарник для Джейн Доу, Алисы, Мияби, Арии и Ремиэль! Поскольку Ветер — редкая стихия, она никогда не мешает чужому кружку и по КД взрывает Хаос (Disorder)."
    },
    "rotation": [
      "1. Выйди на Велину, нажми Усиленную Е-шку (запусти вихрь и бафф сета на 40 сек.).",
      "2. Переключись на мейн-Аномалиста (Джейн / Алису / Мияби) или Ремиэль и взрывай Хаос!"
    ],
    "wikiName": "Velina_Airgid",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Velina_Airgid_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Velina_Airgid_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Velina_Airgid_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_velina.png",
    "scalingAxis": "pure_anomaly_ap",
    "fieldStyle": "offfield_sub_dps",
    "anomalyStyle": "offfield_wind_vortex_res_shred",
    "teamConstraint": "premier_anomaly_sub_dps",
    "vortexSynergy": 10,
    "stunWindowReliance": 5,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/cf/Agent_Velina_Airgid_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/cf/Agent_Velina_Airgid_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/fb/Agent_Velina_Airgid_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/fb/Agent_Velina_Airgid_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6f/Agent_Velina_Airgid_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/34/Agent_Velina_Airgid_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Sigrid",
    "name": "Сигрид де Л'Азур (Sigrid de L'Azur)",
    "shortName": "Сигрид",
    "role": "Attack",
    "roleRu": "Нападение (Крио Гиперкерри)",
    "element": "Ice",
    "elementRu": "Лёд",
    "faction": "Воздушный патруль (Airspace Patrol Department)",
    "tier": "S+",
    "version": "3.1",
    "color": "#38bdf8",
    "icon": "❄️",
    "sigWeapon": "knights_extolment",
    "bestDiscs": [
      "dawns_bloom",
      "polar_metal",
      "branch_and_blade"
    ],
    "dnaTags": [
      "ice",
      "attack_role",
      "crit",
      "basic",
      "stun_burst"
    ],
    "needs": [
      "stun_role",
      "support_role"
    ],
    "provides": [
      "massive_ice_dps"
    ],
    "addAbilityRule": {
      "types": [
        "role:Stun",
        "role:Support"
      ],
      "desc": "В отряде есть агент «Устрашения» или «Поддержки»"
    },
    "baseStats60": {
      "hp": 7620,
      "atk": 930,
      "def": 605,
      "critRate": 19.4,
      "critDmg": 50,
      "ap": 92,
      "am": 90
    },
    "combatTargets": {
      "critRate": {
        "val": 95,
        "unit": "%",
        "label": "Крит. шанс (КШ)",
        "note": "С сигной (+20% КШ в бою) собирай в меню около 75–80% КШ."
      },
      "critDmg": {
        "val": 210,
        "unit": "%",
        "label": "Крит. урон (КУ)",
        "note": "В бою под станом и баффами 200–240% КУ."
      },
      "atk": {
        "val": 3900,
        "unit": "",
        "label": "Атака",
        "note": "Под Астрой / Сунной / Чжао 3800–4300 Атаки в бою."
      },
      "ap": {
        "val": 0,
        "unit": "%",
        "label": "Знание аномалии (НЕ НУЖНО)",
        "note": "0."
      }
    },
    "preCombatBase": {
      "atk": 3000,
      "critRate": 78,
      "critDmg": 160,
      "penRatio": 0,
      "ap": 0
    },
    "mindscapeBonuses": {
      "1": {
        "critRateCombat": 12,
        "note": "М1: +12% КШ в бою и игнор 15% крио-резиста."
      },
      "2": {
        "critDmgCombat": 35,
        "note": "М2: +35% Крит. урона на рыцарских ударах ЛКМ."
      }
    },
    "teamBuffs": {},
    "discMainStats": {
      "slot4": "Крит. шанс% или Крит. урон%",
      "slot5": "Урон Льда% или PEN%",
      "slot6": "Атака%"
    },
    "talentPriority": [
      "Базовая атака (ЛКМ) ⭐⭐⭐⭐⭐",
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐",
      "Уклонение ⭐⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Рыцарское копьё Сигрид наносит сокрушительные серии ударов с руки (обожает сет «Цветение рассвета» на +55% урона ЛКМ!).",
      "special": "Нажатие Усиленной Е-шки заряжает ледяной герб и активирует полный бонус сета «Цветение рассвета» на 25 секунд.",
      "ult": "Колоссальный бурст-удар с небес по оглушённому боссу.",
      "passive": "Сильнейший чистый ледяной Атакер 3.1: раскрывается на 200% в пачке со Станнером (Диалин / Норма / Лайтер / Ликаон) и Саппортом (Астра Яо / Сунна / Чжао)."
    },
    "rotation": [
      "1. Забаффай отряд через Астру Яо / Сунну и оглуши босса через Диалин / Лайтера.",
      "2. Выйди на Сигрид, нажми Е-шку для баффа сета и выдай полное комбо ЛКМ + Ульту в стан!"
    ],
    "wikiName": "Sigrid_de_L'Azur",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Sigrid_de_L%27Azur_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Sigrid_de_L%27Azur_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Sigrid_de_L%27Azur_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_sigrid.png",
    "scalingAxis": "crit_atk",
    "fieldStyle": "main_onfield",
    "anomalyStyle": "none",
    "teamConstraint": "crit_hypercarry",
    "vortexSynergy": 0,
    "stunWindowReliance": 9,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d4/Agent_Sigrid_de_L%27Azur_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d4/Agent_Sigrid_de_L%27Azur_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/e/ef/Agent_Sigrid_de_L%27Azur_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/e/ef/Agent_Sigrid_de_L%27Azur_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/65/Agent_Sigrid_de_L%27Azur_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d4/Agent_Sigrid_de_L%27Azur_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Alice",
    "name": "Алиса Таймфилд (Alice Thymefield)",
    "shortName": "Алиса",
    "role": "Anomaly",
    "roleRu": "Аномалия (Поляризованный Натиск)",
    "element": "Physical",
    "elementRu": "Физический",
    "faction": "Хижина Страшилок (Spook Shack)",
    "tier": "S",
    "version": "2.1",
    "color": "#fbbf24",
    "icon": "🤺",
    "sigWeapon": "practiced_perfection",
    "bestDiscs": [
      "fanged_metal",
      "feathered_fate",
      "phaethons_melody"
    ],
    "dnaTags": [
      "physical",
      "anomaly_role",
      "assault",
      "disorder",
      "ap_buff",
      "basic"
    ],
    "needs": [
      "support_yuzuha",
      "anomaly_ally"
    ],
    "provides": [
      "polarized_assault_instant_disorder",
      "phys_dot"
    ],
    "addAbilityRule": {
      "types": [
        "role:Anomaly",
        "role:Support"
      ],
      "desc": "В отряде есть агент «Аномалии» или «Поддержки»"
    },
    "baseStats60": {
      "hp": 7490,
      "atk": 878,
      "def": 604,
      "critRate": 5,
      "critDmg": 50,
      "ap": 322,
      "am": 150
    },
    "combatTargets": {
      "ap": {
        "val": 440,
        "unit": "",
        "label": "Знание аномалии (AP — ГЛАВНОЕ!)",
        "note": "Урон как обычного, так и Поляризованного Натиска напрямую растёт от AP!"
      },
      "atk": {
        "val": 3600,
        "unit": "",
        "label": "Атака",
        "note": "В бою с Юдзухой (+1000 ATK) или Ремиэль (+1200–1600 ATK) выходит 3600–4100."
      },
      "am": {
        "val": 195,
        "unit": "",
        "label": "Контроль аномалии (AM)",
        "note": "Помогает быстрее копить шкалу Этикета клинка (Blade Etiquette)."
      },
      "critRate": {
        "val": 0,
        "unit": "%",
        "label": "Крит. шанс (НЕ НУЖЕН!)",
        "note": "0% — в отличие от Джейн, Натиск Алисы не требует КШ, но ей вообще не нужны криты из дисков!"
      },
      "critDmg": {
        "val": 0,
        "unit": "%",
        "label": "Крит. урон (НЕ НУЖЕН!)",
        "note": "0%."
      }
    },
    "preCombatBase": {
      "ap": 400,
      "atk": 2850,
      "am": 192,
      "critRate": 0,
      "critDmg": 0
    },
    "mindscapeBonuses": {
      "1": {
        "apCombat": 60,
        "note": "М1: +60 AP и мгновенный набор Этикета клинка."
      },
      "2": {
        "defIgnore": 20,
        "note": "М2: Поляризованный Натиск игнорирует 20% Защиты."
      }
    },
    "teamBuffs": {},
    "discMainStats": {
      "slot4": "Знание аномалии (AP)",
      "slot5": "Урон Физический% или PEN%",
      "slot6": "Контроль аномалии (AM%) или Атака%"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Базовая атака (ЛКМ) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Уклонение ⭐⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Копит шкалу «Этикет клинка» (до 300, загорается золотым). Когда шкала полная — ЗАЖМИ ЛКМ до 3-го уровня заряда (Starshine Waltz): Алиса в неуязвимости наносит «Поляризованный Натиск», который взрывает Хаос (Disorder) ДАЖЕ БЕЗ ЗАПОЛНЕНИЯ КРУЖКА АНОМАЛИИ!",
      "special": "Усиленная Е-шка заливает много очков Этикета клинка и быстро закрывает обычный физ-кружок.",
      "ult": "Полностью заливает золотую шкалу Этикета и вешает кровотечение.",
      "passive": "«Физическая Мияби»: за счёт Поляризованного Натиска с зажатой ЛКМ может взрывать Хаос поверх Вивиан / Бёрнис / Велины / Ремиэль в одно касание!"
    },
    "rotation": [
      "1. Повесь бафф Юдзухи (или Ремиэль) и карманную аномалию Вивиан / Бёрнис / Велины.",
      "2. Выйди на Алису, набери 300 очков золотой шкалы через Е-шку и ЛКМ.",
      "3. Зажми ЛКМ до 3-го заряда → мгновенный Поляризованный Натиск и взрыв Хаоса!"
    ],
    "wikiName": "Alice_Thymefield",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Alice_Thymefield_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Alice_Thymefield_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Alice_Thymefield_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_alice.png",
    "scalingAxis": "pure_anomaly_ap",
    "fieldStyle": "greedy_onfield_charge",
    "anomalyStyle": "synthetic_polarized_assault",
    "teamConstraint": "wants_offfield_anomaly_and_yuzuha",
    "vortexSynergy": 3,
    "stunWindowReliance": 4,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/2/2d/Agent_Alice_Thymefield_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/2/2d/Agent_Alice_Thymefield_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/7/7e/Agent_Alice_Thymefield_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/7/7e/Agent_Alice_Thymefield_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/e/e4/Agent_Alice_Thymefield_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/46/Agent_Alice_Thymefield_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Vivian",
    "name": "Вивиан Банши (Vivian Banshee)",
    "shortName": "Вивиан",
    "role": "Anomaly",
    "roleRu": "Аномалия (Карманный Эфир / Abloom)",
    "element": "Ether",
    "elementRu": "Эфир",
    "faction": "Пересмешник (Mockingbird)",
    "tier": "S",
    "version": "1.7",
    "color": "#c084fc",
    "icon": "☂️",
    "sigWeapon": "flight_of_fancy",
    "bestDiscs": [
      "phaethons_melody",
      "feathered_fate",
      "chaos_jazz"
    ],
    "dnaTags": [
      "ether",
      "anomaly_role",
      "off_field_anomaly",
      "disorder",
      "ap_buff",
      "am_buff"
    ],
    "needs": [
      "anomaly_ally"
    ],
    "provides": [
      "off_field_ether_anomaly",
      "abloom_extra_disorder",
      "corruption_dmg_amp"
    ],
    "addAbilityRule": {
      "types": [
        "role:Anomaly",
        "element:Ether"
      ],
      "desc": "В отряде есть ещё один агент «Аномалии» или агент стихии «Эфир»"
    },
    "baseStats60": {
      "hp": 7410,
      "atk": 860,
      "def": 600,
      "critRate": 5,
      "critDmg": 50,
      "ap": 320,
      "am": 154
    },
    "combatTargets": {
      "ap": {
        "val": 470,
        "unit": "",
        "label": "Знание аномалии (AP — ГЛАВНЫЙ СТАТ!)",
        "note": "Урон её карманных Перьев (Abloom) зависит напрямую от её Знания аномалии!"
      },
      "am": {
        "val": 195,
        "unit": "",
        "label": "Контроль аномалии (AM)",
        "note": "С 6-м диском на AM% и сетом «Мелодия Фаэтона» закрывает кружок Эфира из кармана за пару секунд."
      },
      "atk": {
        "val": 3300,
        "unit": "",
        "label": "Атака",
        "note": "В бою с баффами Юдзухи / Астры / Ремиэль 3200–3700."
      },
      "critRate": {
        "val": 0,
        "unit": "%",
        "label": "Крит. шанс (НЕ НУЖЕН!)",
        "note": "0% — чистый карманный аномалист."
      },
      "critDmg": {
        "val": 0,
        "unit": "%",
        "label": "Крит. урон (НЕ НУЖЕН!)",
        "note": "0%."
      }
    },
    "preCombatBase": {
      "ap": 410,
      "atk": 2700,
      "am": 195,
      "critRate": 0,
      "critDmg": 0
    },
    "mindscapeBonuses": {
      "1": {
        "apCombat": 50,
        "note": "М1: Больше Перьев и +20% урона Abloom."
      },
      "2": {
        "resShred": 18,
        "note": "М2: Игнор 18% резистов для всех аномалий отряда."
      }
    },
    "teamBuffs": {
      "dmgPct": 15
    },
    "discMainStats": {
      "slot4": "Знание аномалии (AP)",
      "slot5": "Урон Эфира% или Атака%",
      "slot6": "Контроль аномалии (AM%)"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Базовая атака (ЛКМ) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Помощь ⭐⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Парит на зонтике и копит до 5 Перьев (Feathers) под иконкой персонажа.",
      "special": "Усиленная Е-шка мгновенно заливает Перья и взлетает в парение.",
      "ult": "Даёт сразу 5 Перьев и накладывает мощное Эфирное Заражение.",
      "passive": "Королева карманной аномалии: набрала Перья и ушла в запас! Теперь каждый раз, когда твой основной герой (Алиса, Джейн, Мияби, Янаги) жмёт Е-шку или вызывает аномалию, Вивиан из кармана тратит Перо и наносит дополнительный взрыв ТОЙ ЖЕ аномалии (Abloom), умноженный на Знание аномалии Вивиан!"
    },
    "rotation": [
      "1. Выйди на Вивиан, нажми Е-шку / Ульту, чтобы зарядить 5 Перьев, и переключись на мейн-Аномалиста.",
      "2. Нажимай Е-шки основным героем — Вивиан из кармана сама будет взрывать Перья, активировать сет «Мелодия Фаэтона» (+45 AP и +25% Эфира) и закрывать кружок Заражения под Хаос!"
    ],
    "wikiName": "Vivian_Banshee",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Vivian_Banshee_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Vivian_Banshee_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Vivian_Banshee_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_vivian.png",
    "scalingAxis": "pure_anomaly_ap",
    "fieldStyle": "offfield_sub_dps",
    "anomalyStyle": "offfield_ether_abloom",
    "teamConstraint": "offfield_disorder_sub_dps",
    "vortexSynergy": 7,
    "stunWindowReliance": 4,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/f5/Agent_Vivian_Banshee_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/f5/Agent_Vivian_Banshee_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d5/Agent_Vivian_Banshee_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d5/Agent_Vivian_Banshee_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/e/e5/Agent_Vivian_Banshee_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/f6/Agent_Vivian_Banshee_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Jane Doe",
    "name": "Джейн Доу (Jane Doe)",
    "shortName": "Джейн Доу",
    "role": "Anomaly",
    "roleRu": "Аномалия (Критующий Натиск)",
    "element": "Physical",
    "elementRu": "Физический",
    "faction": "Особая группа угрозыска (C.I.S.R.T.)",
    "tier": "S",
    "version": "1.1",
    "color": "#f97316",
    "icon": "🐀",
    "sigWeapon": "sharpened_stinger",
    "bestDiscs": [
      "fanged_metal",
      "phaethons_melody",
      "freedom_blues"
    ],
    "dnaTags": [
      "physical",
      "anomaly_role",
      "assault",
      "disorder",
      "ap_buff",
      "dodge_counter"
    ],
    "needs": [
      "anomaly_ally",
      "support_yuzuha_or_remielle"
    ],
    "provides": [
      "assault_crit_enabler",
      "hyper_dodge_dps"
    ],
    "addAbilityRule": {
      "types": [
        "role:Anomaly",
        "faction:Особая группа угрозыска (C.I.S.R.T.)"
      ],
      "desc": "В отряде есть ещё один агент «Аномалии» или из фракции «Угрозыск»"
    },
    "baseStats60": {
      "hp": 7789,
      "atk": 880,
      "def": 607,
      "critRate": 5,
      "critDmg": 50,
      "ap": 324,
      "am": 150
    },
    "combatTargets": {
      "ap": {
        "val": 420,
        "unit": "",
        "label": "Знание аномалии (СТРОГИЙ КАП 420 AP!)",
        "note": "При 375–420 AP в бою шанс крита её Натиска достигает 100%, и она получает максимум (+600) бонусной Атаки от пассивки!"
      },
      "atk": {
        "val": 3600,
        "unit": "",
        "label": "Атака (в бою с +600 от пассивки)",
        "note": "Пассивка самой Джейн уже даёт ей +600 Атаки в бою! Если в пачке есть ещё Юдзуха или Ремиэль, в меню достаточно 2400–2600 Атаки."
      },
      "am": {
        "val": 192,
        "unit": "",
        "label": "Контроль аномалии (AM)",
        "note": "6-й диск на Контроль аномалии% обязателен."
      },
      "critRate": {
        "val": 0,
        "unit": "%",
        "label": "Крит. шанс (0% — НЕ СОБИРАТЬ!)",
        "note": "0%! Крит Натиска Джейн зависит ТОЛЬКО от её Знания аномалии (AP), обычный КШ из дисков на него НЕ РАБОТАЕТ!"
      },
      "critDmg": {
        "val": 0,
        "unit": "%",
        "label": "Крит. урон (0% — НЕ СОБИРАТЬ!)",
        "note": "0%! Крит. урон Натиска фиксирован пассивкой (150% на М0, 200% на М2) и НЕ РАСТЁТ от стата КУ в дисках!"
      }
    },
    "preCombatBase": {
      "ap": 420,
      "atk": 2550,
      "am": 192,
      "critRate": 0,
      "critDmg": 0
    },
    "mindscapeBonuses": {
      "1": {
        "dmgPct": 30,
        "note": "М1: Два заряда крутки Сальхова и до +30% урона аномалии."
      },
      "2": {
        "defIgnore": 15,
        "note": "М2: Натиск игнорирует 15% Защиты, а его крит. урон вырастает на +50%!"
      }
    },
    "teamBuffs": {},
    "discMainStats": {
      "slot4": "Знание аномалии (AP — Строго обязательно!)",
      "slot5": "Урон Физический% или PEN%",
      "slot6": "Контроль аномалии (AM%)"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Базовая атака и Уклонение ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Помощь ⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Уклоняйся в упор от ударов босса (у Джейн двойной рывок!) и бей с руки, чтобы заполнить красную полоску «Прилив страсти» (Passion Stream). В состоянии Страсти зажми ЛКМ для вертушки Сальхова!",
      "special": "Усиленная Е-шка делает акробатический прыжок с мгновенным взрывом Натиска.",
      "ult": "Огромный физ-прокаст по площади + мгновенный вход в состояние Страсти.",
      "passive": "ГЛАВНАЯ ЛОВУШКА НОВИЧКОВ: когда люди видят в пассивке Джейн слова «Натиск может критовать», они начинают собирать ей КШ и КУ в дисках. НЕ ДЕЛАЙ ЭТОГО! Её крит зависит ТОЛЬКО от Знания аномалии (нужно 375–420 AP для 100% крита Натиска и +600 собственной боевой Атаки). Обычные КШ и КУ в дисках дают ей НОЛЬ!"
    },
    "rotation": [
      "1. Включи карманного аномалиста (Вивиан / Бёрнис / Велину / Ремиэль) и бафф Юдзухи.",
      "2. Выйди на Джейн, сделай идеальное уклонение для мгновенного входа в Страсть.",
      "3. Взрывай Натиск на 500к–1млн+ каждые пару секунд!"
    ],
    "wikiName": "Jane_Doe",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Jane_Doe_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Jane_Doe_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Jane_Doe_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_jane_doe.png",
    "scalingAxis": "pure_anomaly_ap",
    "fieldStyle": "main_driver",
    "anomalyStyle": "rapid_physical_assault_driver",
    "teamConstraint": "disorder_or_vortex_driver",
    "vortexSynergy": 8,
    "stunWindowReliance": 4,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/1/11/Agent_Jane_Doe_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/1/11/Agent_Jane_Doe_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/e/e7/Agent_Jane_Doe_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/e/e7/Agent_Jane_Doe_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/57/Agent_Jane_Doe_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/7/75/Agent_Jane_Doe_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Roxy",
    "name": "Рокси Ифрита Прайс (Roxy Ifrita Pryce)",
    "shortName": "Рокси",
    "role": "Stun",
    "roleRu": "Устрашение (Ветер / Баффер Броненосцев и КУ)",
    "element": "Wind",
    "elementRu": "Ветер",
    "faction": "Мастерская Флинт (Flint Workshop)",
    "tier": "S",
    "version": "3.2",
    "color": "#34d399",
    "icon": "🌪️",
    "sigWeapon": "crimson_moon_casket",
    "bestDiscs": [
      "king_of_the_summit",
      "shockstar_disco",
      "wuthering_salon"
    ],
    "dnaTags": [
      "stun_role",
      "wind",
      "impact",
      "daze",
      "team_crit_dmg",
      "team_dmg",
      "roxy_laceration"
    ],
    "needs": [
      "armorer_attack_or_rupture_ally"
    ],
    "provides": [
      "laceration_dmg_buff",
      "crit_dmg_buff_35",
      "contamination_trigger",
      "wind_stun"
    ],
    "addAbilityRule": {
      "types": [
        "role:Armorer",
        "role:Attack",
        "role:Rupture",
        "faction:Мастерская Флинт (Flint Workshop)"
      ],
      "desc": "В отряде есть «Броненосец», «Нападение», «Разрыв» или агент из «Мастерской Флинт»"
    },
    "baseStats60": {
      "hp": 7950,
      "atk": 758,
      "def": 615,
      "critRate": 14.4,
      "critDmg": 50,
      "impact": 141
    },
    "combatTargets": {
      "impact": {
        "val": 194,
        "unit": "",
        "label": "Импульс (Impact)",
        "note": "6-й диск на Импульс%."
      },
      "critRate": {
        "val": 52,
        "unit": "%",
        "label": "Крит. шанс (≥50% для Короля вершины)",
        "note": "Если играет с критовиком (Исюань/Сигрид), нужно ≥50% КШ под сет. Если с Кларет — ставь Шокстар-диско!"
      },
      "ap": {
        "val": 0,
        "unit": "",
        "label": "Знание аномалии (НЕ НУЖНО)",
        "note": "0."
      }
    },
    "preCombatBase": {
      "impact": 194,
      "critRate": 52,
      "critDmg": 100,
      "atk": 2150,
      "ap": 0
    },
    "mindscapeBonuses": {
      "1": {
        "teamDmgPct": 20,
        "note": "М1: +20% к Рассечению и Крит. урону отряда."
      },
      "2": {
        "defShred": 18,
        "note": "М2: Враги под Контаминацией теряют 18% Защиты."
      }
    },
    "teamBuffs": {
      "critDmg": 35,
      "dmgPct": 30
    },
    "discMainStats": {
      "slot4": "Крит. шанс% или Атака%",
      "slot5": "Урон Ветра% или Атака%",
      "slot6": "Импульс%"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Базовая атака ⭐⭐⭐",
      "Помощь ⭐⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Размашистые удары с ветряными вихрями и наложением Контаминации.",
      "special": "Усиленная Е-шка мгновенно вносит тонну Оглушения и включает бафф отряда: +Крит. урон для обычных ДД ИЛИ +урон Рассечения (Laceration) специально для Кларет!",
      "ult": "Ветряной шторм, вызывающий Контаминацию (которая сразу заливает Кларет +300 децибел!).",
      "passive": "Первый ветряной станнер в игре и родная напарница Кларет Флинт по «Мастерской Флинт»! Так как Кларет не нужен Крит. урон обычных станнеров, Рокси создана специально, чтобы баффать её Рассечение (а также отлично работает с Исюань и Велиной)."
    },
    "rotation": [
      "1. Выйди через Помощь в защите на Рокси → сдай Усиленную Е-шку для наложения Контаминации и стана.",
      "2. Переключись на Кларет (или Исюань) и разряди прокаст под баффом Рокси!"
    ],
    "wikiName": "Roxy_Ifrita_Pryce",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Roxy_Ifrita_Pryce_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Roxy_Ifrita_Pryce_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Roxy_Ifrita_Pryce_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_roxy.png",
    "scalingAxis": "stun_laceration_crit_amp",
    "fieldStyle": "quickswap_stun",
    "anomalyStyle": "wind_contamination_trigger",
    "teamConstraint": "armorer_and_rupture_stunner",
    "vortexSynergy": 3,
    "stunWindowReliance": 10,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/e/e8/Agent_Roxy_Ifrita_Pryce_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/e/e8/Agent_Roxy_Ifrita_Pryce_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/db/Agent_Roxy_Ifrita_Pryce_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/db/Agent_Roxy_Ifrita_Pryce_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d5/Agent_Roxy_Ifrita_Pryce_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/7/79/Agent_Roxy_Ifrita_Pryce_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Evelyn",
    "name": "Эвелин Шевалье (Evelyn Chevalier)",
    "shortName": "Эвелин",
    "role": "Attack",
    "roleRu": "Нападение (Мастер Цепочек атак)",
    "element": "Fire",
    "elementRu": "Огонь",
    "faction": "Созвездие Лиры (Stars of Lyra)",
    "tier": "S",
    "version": "1.5",
    "color": "#ef4444",
    "icon": "🕸️",
    "sigWeapon": "heartstring_nocturne",
    "bestDiscs": [
      "woodpecker_electro",
      "hormone_punk",
      "inferno_metal"
    ],
    "dnaTags": [
      "fire",
      "attack_role",
      "crit",
      "chain_ult",
      "stun_burst"
    ],
    "needs": [
      "stun_lighter_or_dialyn",
      "support_astra"
    ],
    "provides": [
      "triple_chain_attack_burst"
    ],
    "addAbilityRule": {
      "types": [
        "role:Stun",
        "role:Support"
      ],
      "desc": "В отряде есть агент «Устрашения» или «Поддержки»"
    },
    "baseStats60": {
      "hp": 7788,
      "atk": 929,
      "def": 612,
      "critRate": 19.4,
      "critDmg": 50,
      "ap": 93,
      "am": 90
    },
    "combatTargets": {
      "critRate": {
        "val": 100,
        "unit": "%",
        "label": "Крит. шанс (СТРОГИЙ КАП ДО БОЯ: 75% КШ!)",
        "note": "Пассивка нити самой Эвелин даёт +25% КШ В БОЮ! Поэтому В МЕНЮ ДО БОЯ собирай от 55% (минимум для включения Доп. способности на 80% в бою) до МАКСИМУМ 75% КШ!"
      },
      "critDmg": {
        "val": 210,
        "unit": "%",
        "label": "Крит. урон (КУ)",
        "note": "С сигной (+50% КУ), Астрой (+25% КУ) и Лайтером/Королём вершины (+30–60% КУ) в бою выходит 210–250% КУ!"
      },
      "atk": {
        "val": 4000,
        "unit": "",
        "label": "Атака",
        "note": "С Астрой Яо (+1200 ATK) в меню достаточно 2800–3000 Атаки."
      },
      "penRatio": {
        "val": 24,
        "unit": "%",
        "label": "Пробивание (PEN%)",
        "note": "На 5-м диске PEN% выигрывает у Огня%, если в отряде Лайтер (он уже заливает +75% урона Огня!)."
      },
      "ap": {
        "val": 0,
        "unit": "",
        "label": "Знание аномалии (НЕ НУЖНО)",
        "note": "0."
      }
    },
    "preCombatBase": {
      "atk": 2950,
      "critRate": 75,
      "critDmg": 155,
      "penRatio": 24,
      "ap": 0
    },
    "mindscapeBonuses": {
      "1": {
        "defIgnore": 12,
        "note": "М1: 1500 децибел на старте и игнор 12% Защиты."
      },
      "2": {
        "atkPctCombat": 15,
        "note": "М2: +15% Атаки и возврат стаков Углей."
      }
    },
    "teamBuffs": {},
    "discMainStats": {
      "slot4": "Крит. урон% (так как +25% КШ даёт пассивка и +24% сигна!)",
      "slot5": "Пробивание (PEN%) (если с Лайтером) или Урон Огня%",
      "slot6": "Атака%"
    },
    "talentPriority": [
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐⭐",
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Базовая атака (ЛКМ) ⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐",
      "Уклонение ⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Опутывает босса струной (сразу получая +25% КШ в бою!). Когда накопила 3 деления красной шкалы (Угли) — зажми ЛКМ дважды, чтобы накопить 3 золотые точки. На 3 точках следующее зажатие ЛКМ запускает ПРЯМУЮ ЦЕПОЧКУ АТАК даже без стана!",
      "special": "Е-шка мгновенно привязывает струну к врагу, стягивает толпу и быстро заливает красную шкалу.",
      "ult": "После первой Ульты в бою Эвелин скидывает пиджак: теперь каждое нажатие Ульты даёт ей 1 золотую точку бесплатно, позволяя в окно стана сдать до 4–5 Цепочек атак подряд!",
      "passive": "Чтобы её Цепочки атак получили +125% множителя урона, у Эвелин должно быть ≥80% КШ В БОЮ. Так как её струна сама даёт +25% КШ в бою, в меню до боя нужно минимум 55% КШ и максимум 75% КШ (выше 75% в меню — перекап!)."
    },
    "rotation": [
      "1. До стана босса набери на Эвелин 3 золотые точки и полную красную шкалу (плюс Ульту Астры Яо).",
      "2. Оглуши босса Лайтером / Диалин → сдай 2 Цепочки атак от стана → зажми ЛКМ на 3 точках (3-я Цепочка) → Ульта Эвелин → зажми ЛКМ (4-я Цепочка) → Ульта Астры (5-я и 6-я Цепочки)!"
    ],
    "wikiName": "Evelyn_Chevalier",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Evelyn_Chevalier_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Evelyn_Chevalier_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Evelyn_Chevalier_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_evelyn.png",
    "scalingAxis": "crit_atk",
    "fieldStyle": "main_onfield",
    "anomalyStyle": "none",
    "teamConstraint": "chain_attack_hypercarry",
    "vortexSynergy": 0,
    "stunWindowReliance": 9,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d2/Agent_Evelyn_Chevalier_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d2/Agent_Evelyn_Chevalier_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/1/17/Agent_Evelyn_Chevalier_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/1/17/Agent_Evelyn_Chevalier_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/7/70/Agent_Evelyn_Chevalier_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/dc/Agent_Evelyn_Chevalier_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Soldier 0 - Anby",
    "name": "Солдат 0 — Энби (Soldier 0 - Anby)",
    "shortName": "С0 Энби",
    "role": "Attack",
    "roleRu": "Нападение (Командир Афтершоков)",
    "element": "Electric",
    "elementRu": "Электро",
    "faction": "Серебряный отряд (Silver Squad)",
    "tier": "S",
    "version": "1.6",
    "color": "#38bdf8",
    "icon": "⚡",
    "sigWeapon": "severed_innocence",
    "bestDiscs": [
      "shadow_harmony",
      "woodpecker_electro",
      "branch_and_blade"
    ],
    "dnaTags": [
      "electric",
      "attack_role",
      "crit",
      "aftershock",
      "dash"
    ],
    "needs": [
      "stun_trigger",
      "support_astra_or_rina"
    ],
    "provides": [
      "aftershock_crit_dmg_buff",
      "rapid_dash_slashes"
    ],
    "addAbilityRule": {
      "types": [
        "role:Stun",
        "role:Support"
      ],
      "desc": "В отряде есть агент «Устрашения» или «Поддержки»"
    },
    "baseStats60": {
      "hp": 7650,
      "atk": 928,
      "def": 612,
      "critRate": 19.4,
      "critDmg": 50,
      "ap": 92,
      "am": 90
    },
    "combatTargets": {
      "critRate": {
        "val": 100,
        "unit": "%",
        "label": "Крит. шанс (В меню до 78% КШ!)",
        "note": "Пассивка С0 Энби даёт +10% КШ в бою, а сет «Гармония теней» даёт ещё +12% КШ в бою (итого +22% КШ в бою)! Значит в меню до боя собирай максимум 78% КШ!"
      },
      "critDmg": {
        "val": 230,
        "unit": "%",
        "label": "Крит. урон (ГЛАВНЫЙ СТАТ!)",
        "note": "Солдат 0 Энби передаёт 30% своего Крит. урона всем Афтершокам отряда (включая Триггер и Орфи)! С сигной в бою 220–260% КУ."
      },
      "atk": {
        "val": 3800,
        "unit": "",
        "label": "Атака",
        "note": "Под баффом Астры Яо / Цезарь в бою ~3800–4200."
      },
      "ap": {
        "val": 0,
        "unit": "",
        "label": "Знание аномалии (НЕ НУЖНО)",
        "note": "0."
      }
    },
    "preCombatBase": {
      "atk": 2950,
      "critRate": 76,
      "critDmg": 185,
      "penRatio": 0,
      "ap": 0
    },
    "mindscapeBonuses": {
      "1": {
        "dmgPct": 25,
        "note": "М1: Е-шка даёт 3 бесплатных прорыва Белого грома подряд."
      },
      "2": {
        "critRateCombat": 12,
        "note": "М2: +12% КШ в бою (тогда в меню нужно всего 66% КШ!) и заряды от Ульты."
      }
    },
    "teamBuffs": {
      "aftershockCritDmg": 65,
      "dmgPct": 25
    },
    "discMainStats": {
      "slot4": "Крит. урон% или Крит. шанс% (до 78% в меню)",
      "slot5": "Урон Электро% или PEN%",
      "slot6": "Атака%"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐⭐",
      "Базовая атака и Рывок ⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Помощь ⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Бей с руки и уворачивайся, чтобы заполнить 3 деления круговой метки «Серебряная звезда» прямо на тушке босса.",
      "special": "Как только на враге загорелись все 3 деления метки — БЫСТРО ЖМИ Е-ШКУ 3 РАЗА ПОДРЯД (даже без энергии!): Энби прошьёт врага тремя молниеносными рывками и вызовет взрыв Афтершока (Белого грома)!",
      "ult": "Наносит огромный урон и мгновенно рисует на всех врагах полную 3-уровневую метку (после Ульты сразу жми Е-Е-Е!).",
      "passive": "Помечает врага: по помеченной цели все Афтершоки отряда (самой Энби, Триггер, Орфи) получают +25% урона и +30% от Крит. урона самой Энби! Идеальная связка: С0 Энби + Триггер + Астра Яо / Орфи."
    },
    "rotation": [
      "1. Заряди снайперскую шкалу Триггер и включи песню Астры Яо.",
      "2. На С0 Энби набивай 3 деления метки на враге (через ЛКМ / идеальное уклонение / Усиленную Е-шку / Ульту) → сразу прожимай обычную Е-шку 3 раза подряд (Е-Е-Е)!"
    ],
    "wikiName": "Soldier_0_-_Anby",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Soldier_0_-_Anby_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Soldier_0_-_Anby_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Soldier_0_-_Anby_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_soldier_0_anby.png",
    "scalingAxis": "crit_atk",
    "fieldStyle": "main_onfield",
    "anomalyStyle": "none",
    "teamConstraint": "aftershock_commander",
    "vortexSynergy": 0,
    "stunWindowReliance": 7,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/90/Agent_Soldier_0_-_Anby_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/90/Agent_Soldier_0_-_Anby_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/95/Agent_Soldier_0_-_Anby_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/95/Agent_Soldier_0_-_Anby_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/a/a7/Agent_Soldier_0_-_Anby_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/2/2c/Agent_Soldier_0_-_Anby_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Trigger",
    "name": "Триггер (Trigger)",
    "shortName": "Триггер",
    "role": "Stun",
    "roleRu": "Устрашение (Карманный Снайпер-Афтершок)",
    "element": "Electric",
    "elementRu": "Электро",
    "faction": "Отряд Обол (Obol Squad)",
    "tier": "S",
    "version": "1.6",
    "color": "#eab308",
    "icon": "🎯",
    "sigWeapon": "spectral_gaze",
    "bestDiscs": [
      "king_of_the_summit",
      "shadow_harmony",
      "shockstar_disco"
    ],
    "dnaTags": [
      "stun_role",
      "electric",
      "crit",
      "aftershock",
      "daze",
      "def_shred"
    ],
    "needs": [
      "attack_ally"
    ],
    "provides": [
      "perm_35_vuln_multiplier",
      "off_field_aftershock_daze",
      "def_shred_25_sig"
    ],
    "addAbilityRule": {
      "types": [
        "role:Attack",
        "element:Electric"
      ],
      "desc": "В отряде есть агент «Нападения» или агент стихии «Электро»"
    },
    "baseStats60": {
      "hp": 7755,
      "atk": 750,
      "def": 600,
      "critRate": 5,
      "critDmg": 50,
      "impact": 136
    },
    "combatTargets": {
      "critRate": {
        "val": 90,
        "unit": "%",
        "label": "Крит. шанс (СТРОГИЙ КАП 90% КШ!)",
        "note": "За каждый 1% КШ сверх 40% (вплоть до 90% КШ!) её Афтершоки получают +1.5% Оглушения (до +75% Оглушения)!"
      },
      "impact": {
        "val": 185,
        "unit": "",
        "label": "Импульс (Impact)",
        "note": "6-й диск на Импульс%."
      },
      "critDmg": {
        "val": 120,
        "unit": "%",
        "label": "Крит. урон (КУ)",
        "note": "Вторично после взятия 80–90% КШ."
      },
      "ap": {
        "val": 0,
        "unit": "",
        "label": "Знание аномалии (НЕ НУЖНО)",
        "note": "0."
      }
    },
    "preCombatBase": {
      "critRate": 78,
      "impact": 185,
      "critDmg": 110,
      "atk": 2100,
      "ap": 0
    },
    "mindscapeBonuses": {
      "1": {
        "dmgPct": 20,
        "note": "М1: Множитель уязвимости возрастает с +35% до +55% постоянно!"
      },
      "2": {
        "teamCritDmg": 24,
        "note": "М2: +24% Крит. урона всему отряду."
      }
    },
    "teamBuffs": {
      "dmgPct": 35,
      "defShred": 25,
      "critDmg": 30
    },
    "discMainStats": {
      "slot4": "Крит. шанс% (Обязательно для капа 90% КШ!)",
      "slot5": "Урон Электро% или Атака%",
      "slot6": "Импульс%"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Базовая атака (Снайперка) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Помощь ⭐⭐"
    ],
    "skillsRazer": {
      "basic": "В начале боя ЗАЖМИ ЛКМ на 3 секунды: Триггер садится в снайперскую позу, делает 4 выстрела и полностью заполняет свою синюю шкалу Purge (100 очков). После этого уходи в карман!",
      "special": "Усиленная Е-шка включает золотой режим Координированного огня, где Триггер стреляет из кармана вообще без траты шкалы Purge.",
      "ult": "То же самое: мгновенно включает бесплатный обстрел из кармана и активирует Быструю помощь.",
      "passive": "Две супер-фишки: 1) В отличие от других станнеров, её бафф (+35% множителя уязвимости!) работает ДАЖЕ КОГДА БОСС НЕ ОГЛУШЁН! 2) Чтобы она быстро станила из кармана, собери ей до 90% Крит. шанса (при сете «Гармония теней» в меню достаточно 78% КШ)."
    },
    "rotation": [
      "1. На старте боя зажми ЛКМ на Триггер (4 выстрела до полной шкалы) → нажми Быструю помощь.",
      "2. Играй основным ДД (С0 Энби / Сид / Орфи / Янаги / Харумаса), а Триггер сама расстреливает босса из кармана, режет 25% брони (с сигной) и раздаёт +35% урона + 30% КУ от Короля вершины!"
    ],
    "wikiName": "Trigger",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Trigger_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Trigger_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Trigger_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_trigger.png",
    "scalingAxis": "stun_aftershock_def_shred",
    "fieldStyle": "offfield_stun",
    "anomalyStyle": "none",
    "teamConstraint": "aftershock_and_electric_stunner",
    "vortexSynergy": 0,
    "stunWindowReliance": 7,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/a/a4/Agent_Trigger_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/a/a4/Agent_Trigger_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/df/Agent_Trigger_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/df/Agent_Trigger_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/46/Agent_Trigger_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/e/e3/Agent_Trigger_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Lighter",
    "name": "Лайтер (Lighter)",
    "shortName": "Лайтер",
    "role": "Stun",
    "roleRu": "Устрашение (Чемпион Огня и Льда)",
    "element": "Fire",
    "elementRu": "Огонь",
    "faction": "Сыны Калидона (Sons of Calydon)",
    "tier": "S",
    "version": "1.3",
    "color": "#f97316",
    "icon": "🥊",
    "sigWeapon": "blazing_laurel",
    "bestDiscs": [
      "king_of_the_summit",
      "shockstar_disco",
      "swing_jazz"
    ],
    "dnaTags": [
      "stun_role",
      "fire",
      "ice",
      "impact",
      "daze",
      "team_crit_dmg",
      "team_dmg"
    ],
    "needs": [
      "fire_or_ice_dps"
    ],
    "provides": [
      "fire_ice_dmg_buff_75",
      "fire_ice_res_shred_15",
      "stun_extend_3s"
    ],
    "addAbilityRule": {
      "types": [
        "role:Attack",
        "faction:Сыны Калидона (Sons of Calydon)"
      ],
      "desc": "В отряде есть агент «Нападения» или из фракции «Сыны Калидона»"
    },
    "baseStats60": {
      "hp": 8253,
      "atk": 797,
      "def": 612,
      "critRate": 5,
      "critDmg": 50,
      "impact": 137
    },
    "combatTargets": {
      "impact": {
        "val": 225,
        "unit": "",
        "label": "Импульс В БОЮ (КАП 220–270 Impact!)",
        "note": "При 220–270 Импульса в бою Лайтер даёт максимальный бафф +75% урона Огня и Льда всему отряду!"
      },
      "critRate": {
        "val": 52,
        "unit": "%",
        "label": "Крит. шанс (≥50% под Короля вершины)",
        "note": "4-й диск на КШ%, чтобы включить +30% КУ от сета «Король вершины»."
      },
      "ap": {
        "val": 0,
        "unit": "",
        "label": "Знание аномалии (НЕ НУЖНО)",
        "note": "0."
      }
    },
    "preCombatBase": {
      "impact": 195,
      "critRate": 52,
      "critDmg": 95,
      "atk": 2200,
      "ap": 0
    },
    "mindscapeBonuses": {
      "1": {
        "resShred": 10,
        "note": "М1: Продлевает стан ещё на +5 сек. и режет ещё +10% резиста Огня/Льда."
      },
      "2": {
        "dmgPct": 25,
        "note": "М2: Повышает потолок баффа Огня/Льда вплоть до +90%!"
      }
    },
    "teamBuffs": {
      "dmgPct": 75,
      "resShred": 15,
      "critDmg": 30
    },
    "discMainStats": {
      "slot4": "Крит. шанс% (под сет Король вершины)",
      "slot5": "Урон Огня% или Атака%",
      "slot6": "Импульс% (Обязательно!)"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Базовая атака (Ора-Ора) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Помощь ⭐⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Когда фиолетовая шкала Морали заполнена — выйди по Быстрой помощи или нажми ЛКМ: Лайтер встаёт в боксёрскую стойку и бьёт серией пулемётных апперкотов («Ора-Ора»), мгновенно срезая врагу 15% сопротивления Огню и Льду и заливая вашей пачке ДО +75% УРОНА ОГНЯ И ЛЬДА!",
      "special": "Усиленная Е-шка позволяет мгновенно перейти к финальному апперкоту и увернуться от атаки босса.",
      "ult": "Вбивает врага в землю и продлевает время Оглушения босса на целых +3 секунды.",
      "passive": "Безумный баффер для ЛЮБОГО дамагера Огня и Льда (Эвелин, Хьюго, Сигрид, Мияби, Эллен, Солдат 11, Орфи, Баньюэ, Идхари). Так как он даёт +75% бонуса урона стихии, твоему ДД на 5-м диске выгоднее ставить Пробивание (PEN%) или Атаку%!"
    },
    "rotation": [
      "1. Пока твой основной герой тратит энергию, у Лайтера в кармане сама копится шкала Морали.",
      "2. Когда шкала загорелась — выйди на Лайтера, зажми серию боксёрских ударов до финального хука (+75% баффа Огня/Льда и -15% резистов + продление стана на 3 сек.)!"
    ],
    "wikiName": "Lighter",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Lighter_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Lighter_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Lighter_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_lighter.png",
    "scalingAxis": "stun_fire_ice_amp",
    "fieldStyle": "quickswap_stun",
    "anomalyStyle": "none",
    "teamConstraint": "fire_ice_dedicated_stunner",
    "vortexSynergy": 0,
    "stunWindowReliance": 10,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/dd/Agent_Lighter_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/dd/Agent_Lighter_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/b5/Agent_Lighter_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/b5/Agent_Lighter_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/dc/Agent_Lighter_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/8/88/Agent_Lighter_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Burnice",
    "name": "Бёрнис Уайт (Burnice White)",
    "shortName": "Бёрнис",
    "role": "Anomaly",
    "roleRu": "Аномалия (Карманный Огнемёт)",
    "element": "Fire",
    "elementRu": "Огонь",
    "faction": "Сыны Калидона (Sons of Calydon)",
    "tier": "S",
    "version": "1.2",
    "color": "#f97316",
    "icon": "🍹",
    "sigWeapon": "flamemaker_shaker",
    "bestDiscs": [
      "chaos_jazz",
      "feathered_fate",
      "phaethons_melody"
    ],
    "dnaTags": [
      "fire",
      "anomaly_role",
      "off_field_anomaly",
      "disorder",
      "ap_buff"
    ],
    "needs": [
      "anomaly_ally"
    ],
    "provides": [
      "off_field_burn_afterburn",
      "disorder_enabler"
    ],
    "addAbilityRule": {
      "types": [
        "role:Anomaly",
        "faction:Сыны Калидона (Sons of Calydon)"
      ],
      "desc": "В отряде есть ещё один агент «Аномалии» или из фракции «Сыны Калидона»"
    },
    "baseStats60": {
      "hp": 7368,
      "atk": 863,
      "def": 600,
      "critRate": 5,
      "critDmg": 50,
      "ap": 320,
      "am": 148
    },
    "combatTargets": {
      "ap": {
        "val": 420,
        "unit": "",
        "label": "Знание аномалии (AP — ГЛАВНЫЙ СТАТ)",
        "note": "Собери минимум 300 AP до боя (чтобы включить кап пассивки), в идеале 380–430 AP."
      },
      "atk": {
        "val": 3400,
        "unit": "",
        "label": "Атака",
        "note": "В бою ~3300–3800 с баффами."
      },
      "am": {
        "val": 190,
        "unit": "",
        "label": "Контроль аномалии (AM)",
        "note": "6-й диск на Контроль аномалии% или Восст. энергии% (если без сигны не хватает энергии)."
      },
      "critRate": {
        "val": 0,
        "unit": "%",
        "label": "Крит. шанс (НЕ НУЖЕН!)",
        "note": "0% — Горение и Хаос не критуют."
      },
      "critDmg": {
        "val": 0,
        "unit": "%",
        "label": "Крит. урон (НЕ НУЖЕН!)",
        "note": "0%."
      }
    },
    "preCombatBase": {
      "ap": 390,
      "atk": 2800,
      "am": 190,
      "critRate": 0,
      "critDmg": 0
    },
    "mindscapeBonuses": {
      "1": {
        "apCombat": 40,
        "note": "М1: Больше топлива (до 140) и +25% к накоплению Огня."
      },
      "2": {
        "penRatioCombat": 20,
        "note": "М2: Даёт +20% Пробивания брони (PEN%) для ВСЕГО отряда!"
      }
    },
    "teamBuffs": {},
    "discMainStats": {
      "slot4": "Знание аномалии (AP)",
      "slot5": "Урон Огня% или PEN%",
      "slot6": "Контроль аномалии (AM%) или Восст. энергии%"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Базовая атака ⭐⭐⭐",
      "Помощь ⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Зажми ЛКМ, чтобы покрутиться с двумя огнемётами и потратить немного топлива на наложение метки Scorched.",
      "special": "Зажми Усиленную Е-шку (сразу двумя руками!): Бёрнис за 2 секунды заливает полную оранжевую шкалу топлива (Nitro-Fuel) и сжигает врага. После этого сразу уходи в карман!",
      "ult": "Прыгает сверху с огненным взрывом, восстанавливает 50 топлива и вызывает Быструю помощь для выхода твоего мейн-аномалиста!",
      "passive": "Пока у Бёрнис есть топливо в оранжевой полоске и она сидит в кармане, каждый удар твоего активного героя поджигает врага из запаса (Afterburn), автоматически закрывая кружок Огня под Хаос для Джейн, Янаги, Мияби или Алисы!"
    },
    "rotation": [
      "1. Выйди на Бёрнис → зажми двойную Усиленную Е-шку до полной шкалы топлива → дай 1 крутку ЛКМ для метки.",
      "2. Уйди на основного Аномалиста (Джейн / Янаги / Мияби / Алису) и взрывай Хаос по КД!"
    ],
    "wikiName": "Burnice_White",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Burnice_White_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Burnice_White_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Burnice_White_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_burnice.png",
    "scalingAxis": "pure_anomaly_ap",
    "fieldStyle": "offfield_sub_dps",
    "anomalyStyle": "offfield_fire_afterburn",
    "teamConstraint": "offfield_disorder_sub_dps",
    "vortexSynergy": 8,
    "stunWindowReliance": 4,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d1/Agent_Burnice_White_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d1/Agent_Burnice_White_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/f9/Agent_Burnice_White_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/f9/Agent_Burnice_White_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/bd/Agent_Burnice_White_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/44/Agent_Burnice_White_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Ju Fufu",
    "name": "Цзюй Фуфу (Ju Fufu)",
    "shortName": "Цзюй Фуфу",
    "role": "Stun",
    "roleRu": "Устрашение (Карманный Тигр / Баффер Ульт и КУ)",
    "element": "Fire",
    "elementRu": "Огонь",
    "faction": "Вершина Юнькуй (Yunkui Summit)",
    "tier": "S",
    "version": "2.0",
    "color": "#f59e0b",
    "icon": "🐯",
    "sigWeapon": "roaring_furnace",
    "bestDiscs": [
      "king_of_the_summit",
      "shockstar_disco",
      "astral_voice"
    ],
    "dnaTags": [
      "stun_role",
      "fire",
      "aftershock",
      "daze",
      "team_crit_dmg",
      "chain_ult"
    ],
    "needs": [
      "attack_or_rupture_ally"
    ],
    "provides": [
      "crit_dmg_buff_50",
      "ult_chain_dmg_buff_40",
      "decibel_cap_plus_1000",
      "off_field_daze"
    ],
    "addAbilityRule": {
      "types": [
        "role:Attack",
        "role:Rupture"
      ],
      "desc": "В отряде есть агент «Нападения» или «Разрыва»"
    },
    "baseStats60": {
      "hp": 7900,
      "atk": 780,
      "def": 610,
      "critRate": 14.4,
      "critDmg": 50,
      "impact": 138
    },
    "combatTargets": {
      "atk": {
        "val": 3400,
        "unit": "",
        "label": "Атака ДО БОЯ (КАП 3400 Атаки!)",
        "note": "Пассивка Цзюй Фуфу конвертирует её Атаку (вплоть до 3400 Атаки!) в дополнительный Крит. урон для всего отряда (до +50% КУ вместе с базой)!"
      },
      "critRate": {
        "val": 52,
        "unit": "%",
        "label": "Крит. шанс (≥50% под Короля вершины!)",
        "note": "Собери ≥50% КШ, чтобы сет «Король вершины» давал ещё +30% КУ сверху (итого +80% КУ отряду!)."
      },
      "impact": {
        "val": 175,
        "unit": "",
        "label": "Импульс (Impact)",
        "note": "На 6-м диске ставь Импульс% или Атаку% (чтобы добить кап 3400 Атаки)."
      },
      "ap": {
        "val": 0,
        "unit": "",
        "label": "Знание аномалии (НЕ НУЖНО)",
        "note": "0."
      }
    },
    "preCombatBase": {
      "atk": 3400,
      "critRate": 52,
      "impact": 175,
      "critDmg": 100,
      "ap": 0
    },
    "mindscapeBonuses": {
      "1": {
        "critRateCombat": 12,
        "note": "М1: +12% КШ и +35% оглушения с Цепочки."
      },
      "2": {
        "teamCritDmg": 25,
        "note": "М2: Ещё +25% КУ отряду и бесплатные заряды Ху Вэй."
      }
    },
    "teamBuffs": {
      "critDmg": 80,
      "dmgPct": 30
    },
    "discMainStats": {
      "slot4": "Крит. шанс% (до 50%) или Атака%",
      "slot5": "Атака% (для капа 3400!)",
      "slot6": "Импульс% или Атака%"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Базовая атака ⭐⭐⭐",
      "Помощь ⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Почти не сидит на поле: её механический котелок-тигр «Ху Вэй» сам крутится по арене и бьёт врагов Афтершоками из кармана!",
      "special": "Вышла на 1 секунду, нажала Усиленную Е-шку → зарядила Ху Вэй и включила сет «Король вершины».",
      "ult": "Заливает очки Мощи для Ху Вэй и возвращает 300 децибел союзникам при нажатии ими Ульты!",
      "passive": "Идеальный карманный станнер для Исюань, Баньюэ, Эвелин и Хьюго! Повышает лимит децибел всей команды с 3000 до 4000, возвращает 300 децибел за каждую Ульту и раздаёт до +50% Крит. урона (при 3400 Атаки Фуфу) + +30% КУ от сета «Король вершины» + +40% урона Ультам!"
    },
    "rotation": [
      "1. Выйди на Цзюй Фуфу на 1 секунду → прожми Е-шку / Цепочку атак.",
      "2. Всё остальное время играй на Исюань / Баньюэ / Эвелин, пока тигр Ху Вэй сам станит босса из кармана и держит +80% КУ на пачке!"
    ],
    "wikiName": "Ju_Fufu",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Ju_Fufu_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Ju_Fufu_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Ju_Fufu_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_ju_fufu.png",
    "scalingAxis": "stun_ult_crit_amp",
    "fieldStyle": "offfield_stun",
    "anomalyStyle": "none",
    "teamConstraint": "ult_and_rupture_offfield_stunner",
    "vortexSynergy": 0,
    "stunWindowReliance": 9,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/2/2a/Agent_Ju_Fufu_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/2/2a/Agent_Ju_Fufu_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/4a/Agent_Ju_Fufu_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/4a/Agent_Ju_Fufu_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/63/Agent_Ju_Fufu_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/a/a6/Agent_Ju_Fufu_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Yidhari",
    "name": "Идхари Мёрфи (Yidhari Murphy)",
    "shortName": "Идхари",
    "role": "Rupture",
    "roleRu": "Разрыв (Ледяной Сквозной Урон)",
    "element": "Ice",
    "elementRu": "Лёд",
    "faction": "Хижина Страшилок (Spook Shack)",
    "tier": "S",
    "version": "2.3",
    "color": "#38bdf8",
    "icon": "🐙",
    "sigWeapon": "krakens_cradle",
    "bestDiscs": [
      "yunkui_tales",
      "branch_and_blade",
      "polar_metal"
    ],
    "dnaTags": [
      "rupture_role",
      "ice",
      "sheer_dmg",
      "hp_scaling",
      "crit"
    ],
    "needs": [
      "rupture_buffer_lucia",
      "stun_role"
    ],
    "provides": [
      "ice_sheer_dps"
    ],
    "addAbilityRule": {
      "types": [
        "role:Support",
        "role:Stun",
        "faction:Хижина Страшилок (Spook Shack)"
      ],
      "desc": "В отряде есть агент «Поддержки», «Устрашения» или из «Хижины Страшилок»"
    },
    "baseStats60": {
      "hp": 8250,
      "atk": 875,
      "def": 608,
      "critRate": 19.4,
      "critDmg": 50,
      "ap": 92,
      "am": 90
    },
    "combatTargets": {
      "critRate": {
        "val": 95,
        "unit": "%",
        "label": "Крит. шанс (КШ)",
        "note": "С сетом «Сказания Юнькуй» (+12% КШ в бою) собирай в меню около 80–85% КШ."
      },
      "critDmg": {
        "val": 190,
        "unit": "%",
        "label": "Крит. урон (КУ)",
        "note": "В бою под Люсией и станнером 190–230% КУ."
      },
      "hp": {
        "val": 17500,
        "unit": "",
        "label": "Макс. ХП",
        "note": "Масштабирует её Сквозную силу (Sheer Force)."
      },
      "penRatio": {
        "val": 0,
        "unit": "%",
        "label": "Пробивание (PEN% — НЕ НУЖНО!)",
        "note": "0% — Сквозной урон уже игнорирует 100% брони врага!"
      },
      "ap": {
        "val": 0,
        "unit": "",
        "label": "Знание аномалии (НЕ НУЖНО)",
        "note": "0."
      }
    },
    "preCombatBase": {
      "hp": 16500,
      "critRate": 82,
      "critDmg": 150,
      "atk": 2200,
      "penRatio": 0,
      "ap": 0
    },
    "mindscapeBonuses": {
      "1": {
        "critDmgCombat": 25,
        "note": "М1: +25% КУ и ускоренный набор Щупалец."
      },
      "2": {
        "sheerDmgPct": 20,
        "note": "М2: +20% Сквозного урона и игнор 15% крио-резиста."
      }
    },
    "teamBuffs": {},
    "discMainStats": {
      "slot4": "Крит. урон% или Крит. шанс%",
      "slot5": "Урон Льда% или ХП%",
      "slot6": "ХП% или Атака%"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Базовая атака (ЛКМ) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Уклонение ⭐⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Мощные ледяные удары щупальцами/молотом, которые расходуют и восстанавливают ХП, нанося Сквозной урон сквозь любую броню.",
      "special": "Усиленная Е-шка включает берсерк-стойку Кракена и активирует стаки «Сказаний Юнькуй».",
      "ult": "Гигантский ледяной водоворот Сквозного урона по области.",
      "passive": "Родная напарница Люсии по «Хижине Страшилок»: Люсия заливает ей +900 Сквозной силы, +30% КУ и хилит её трату ХП, а Лайтер или Диалин дают окно стана!"
    },
    "rotation": [
      "1. Запусти Сон Люсии (+900 Сквозной силы) и стан Лайтера (+75% урона Льда!).",
      "2. На Идхари жми Е-шку и вливай заряженные ЛКМ и Ульту!"
    ],
    "wikiName": "Yidhari_Murphy",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Yidhari_Murphy_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Yidhari_Murphy_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Yidhari_Murphy_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_yidhari.png",
    "scalingAxis": "crit_hp_sheer",
    "fieldStyle": "main_onfield",
    "anomalyStyle": "none",
    "teamConstraint": "rupture_hypercarry",
    "vortexSynergy": 0,
    "stunWindowReliance": 8,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/0/03/Agent_Yidhari_Murphy_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/0/03/Agent_Yidhari_Murphy_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6f/Agent_Yidhari_Murphy_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6f/Agent_Yidhari_Murphy_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/0/0f/Agent_Yidhari_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6d/Agent_Yidhari_Murphy_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Banyue",
    "name": "Баньюэ (Banyue)",
    "shortName": "Баньюэ",
    "role": "Rupture",
    "roleRu": "Разрыв (Огненный Сквозной Урон)",
    "element": "Fire",
    "elementRu": "Огонь",
    "faction": "Надзор Крампуса (Krampus Compliance Authority)",
    "tier": "S",
    "version": "2.4",
    "color": "#ef4444",
    "icon": "🔱",
    "sigWeapon": "wrathful_vajra",
    "bestDiscs": [
      "yunkui_tales",
      "inferno_metal",
      "branch_and_blade"
    ],
    "dnaTags": [
      "rupture_role",
      "fire",
      "sheer_dmg",
      "hp_scaling",
      "crit"
    ],
    "needs": [
      "rupture_buffer_lucia",
      "stun_dialyn_or_lighter"
    ],
    "provides": [
      "fire_sheer_dps"
    ],
    "addAbilityRule": {
      "types": [
        "role:Stun",
        "role:Support",
        "faction:Надзор Крампуса (Krampus Compliance Authority)"
      ],
      "desc": "В отряде есть агент «Устрашения», «Поддержки» или из «Надзора Крампуса»"
    },
    "baseStats60": {
      "hp": 8300,
      "atk": 880,
      "def": 610,
      "critRate": 19.4,
      "critDmg": 50,
      "ap": 90,
      "am": 90
    },
    "combatTargets": {
      "critRate": {
        "val": 95,
        "unit": "%",
        "label": "Крит. шанс (КШ)",
        "note": "С сетом «Сказания Юнькуй» (+12% КШ) и сигной (+16% КШ) в меню нужно всего ~67–72% КШ!"
      },
      "critDmg": {
        "val": 200,
        "unit": "%",
        "label": "Крит. урон (КУ)",
        "note": "В бою ~200–240% КУ."
      },
      "hp": {
        "val": 17500,
        "unit": "",
        "label": "Макс. ХП",
        "note": "Конвертируется в Сквозную силу."
      },
      "penRatio": {
        "val": 0,
        "unit": "%",
        "label": "Пробивание (PEN% — НЕ НУЖНО!)",
        "note": "0% — Сквозной урон игнорирует 100% защиты!"
      },
      "ap": {
        "val": 0,
        "unit": "",
        "label": "Знание аномалии (НЕ НУЖНО)",
        "note": "0."
      }
    },
    "preCombatBase": {
      "hp": 16500,
      "critRate": 70,
      "critDmg": 160,
      "atk": 2250,
      "penRatio": 0,
      "ap": 0
    },
    "mindscapeBonuses": {
      "1": {
        "critRateCombat": 12,
        "note": "М1: +12% КШ в бою."
      },
      "2": {
        "sheerDmgPct": 25,
        "note": "М2: +25% Сквозного урона Ваджры."
      }
    },
    "teamBuffs": {},
    "discMainStats": {
      "slot4": "Крит. шанс% или Крит. урон%",
      "slot5": "Урон Огня% или ХП%",
      "slot6": "ХП% или Атака%"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐⭐",
      "Базовая атака ⭐⭐⭐⭐",
      "Уклонение ⭐⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Огненные комбо Ваджры, прожигающие врагов чистым Сквозным уроном.",
      "special": "Усиленная Е-шка активирует стойку Гнева и даёт стаки «Сказаний Юнькуй».",
      "ult": "Сокрушительный огненный удар по площади.",
      "passive": "Отлично сочетается с Диалин (одна фракция Крампуса), Лайтером (+75% Огня), Цзюй Фуфу и Люсией (+900 Сквозной силы)."
    },
    "rotation": [
      "1. Получи бафф Сквозной силы от Люсии и стан от Диалин / Лайтера.",
      "2. Выйди на Баньюэ, прожми Е-шку и Ульту в окно стана!"
    ],
    "wikiName": "Banyue",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Banyue_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Banyue_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Banyue_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_banyue.png",
    "scalingAxis": "crit_hp_sheer",
    "fieldStyle": "main_onfield",
    "anomalyStyle": "none",
    "teamConstraint": "rupture_hypercarry",
    "vortexSynergy": 0,
    "stunWindowReliance": 8,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/43/Agent_Banyue_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/43/Agent_Banyue_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/7/70/Agent_Banyue_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/7/70/Agent_Banyue_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/7/79/Agent_Banyue_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/e/e8/Agent_Banyue_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Zhao",
    "name": "Чжао (Zhao)",
    "shortName": "Чжао",
    "role": "Defense",
    "roleRu": "Оборона (Баффер +40% Урона и +1000 Атаки + Хил)",
    "element": "Ice",
    "elementRu": "Лёд",
    "faction": "Надзор Крампуса (Krampus Compliance Authority)",
    "tier": "S",
    "version": "2.5",
    "color": "#60a5fa",
    "icon": "🐰",
    "sigWeapon": "half_sugar_bunny",
    "bestDiscs": [
      "bunny_in_wonderland",
      "yunkui_tales",
      "astral_voice"
    ],
    "dnaTags": [
      "defense_role",
      "ice",
      "hp_scaling",
      "team_dmg",
      "quick_assist"
    ],
    "needs": [
      "attack_anomaly_or_rupture_ally"
    ],
    "provides": [
      "atk_buff_1000",
      "dmg_buff_40_at_27k_hp",
      "team_heal",
      "quick_assist_entry"
    ],
    "addAbilityRule": {
      "types": [
        "role:Attack",
        "role:Anomaly",
        "role:Rupture",
        "role:Stun"
      ],
      "desc": "В отряде есть агент «Нападения», «Аномалии», «Разрыва» или «Устрашения»"
    },
    "baseStats60": {
      "hp": 9120,
      "atk": 680,
      "def": 740,
      "critRate": 5,
      "critDmg": 50,
      "ap": 90,
      "am": 90
    },
    "combatTargets": {
      "hp": {
        "val": 27000,
        "unit": "",
        "label": "Макс. ХП ДО БОЯ (СТРОГИЙ КАП 27 000 ХП!)",
        "note": "РОВНО 27 000 ХП в меню дают максимальный бафф +40% урона для всего отряда и +37.8% Крит. шанса самой Чжао!"
      },
      "critRate": {
        "val": 50,
        "unit": "%",
        "label": "Крит. шанс (В бою +37.8% от ХП!)",
        "note": "Пассивка сама даёт ей +37.8% КШ при 27 000 ХП."
      },
      "atk": {
        "val": 0,
        "unit": "",
        "label": "Атака (НЕ НУЖНА)",
        "note": "0 — Чжао собирается строго в ХП% на 4, 5 и 6 дисках!"
      }
    },
    "preCombatBase": {
      "hp": 27000,
      "critRate": 45,
      "critDmg": 90,
      "atk": 1500,
      "ap": 0
    },
    "mindscapeBonuses": {
      "1": {
        "teamDmgPct": 15,
        "note": "М1: +15% урона отряду и увеличенный хил."
      },
      "2": {
        "resShred": 15,
        "note": "М2: Срезает 15% сопротивления всем стихиям врага."
      }
    },
    "teamBuffs": {
      "flatAtk": 1000,
      "dmgPct": 40
    },
    "discMainStats": {
      "slot4": "ХП% (Обязательно!)",
      "slot5": "ХП% (Обязательно!)",
      "slot6": "ХП% (Обязательно для капа 27 000 ХП!)"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Помощь ⭐⭐⭐",
      "Базовая атака ⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Почти не требует времени на поле: выходит на секунду и сразу запускает Быструю помощь.",
      "special": "Нажала Усиленную Е-шку → похилила отряд, залила всем +1000 Атаки и до +40% чистого урона (плюс +18% урона от сета «Кролик в Стране чудес»!).",
      "ult": "Мощное исцеление всей пачки и обновление всех баффов.",
      "passive": "Бесплатный S-ранг ивента 2.5, который работает как полноценный топ-саппорт! Всё, что от тебя требуется — собрать ей 27 000 ХП в меню (4 куска «Кролика в Стране чудес» + 2 куска «Сказаний Юнькуй» + ХП% на дисках 4/5/6 + сигна или 4★ «Оригинальный трансформер» — и нужно всего 5 роллов ХП% в сабстатах!)."
    },
    "rotation": [
      "1. Нажми Е-шку на Чжао → переключись по Быстрой помощи на своего дамагера с баффом +1000 Атаки и +58% суммарного урона (пассивка + сет)!"
    ],
    "wikiName": "Zhao",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Zhao_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Zhao_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Zhao_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_zhao.png",
    "scalingAxis": "support_hp_universal_dmg",
    "fieldStyle": "zero_offfield_buffer",
    "anomalyStyle": "none",
    "teamConstraint": "universal_dmg_atk_defense_buffer",
    "vortexSynergy": 0,
    "stunWindowReliance": 6,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/a/a6/Agent_Zhao_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/a/a6/Agent_Zhao_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d4/Agent_Zhao_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d4/Agent_Zhao_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/5f/Agent_Zhao_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/ff/Agent_Zhao_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Starlight - Billy",
    "name": "Звёздный Рыцарь — Билли (Starlight - Billy Kid)",
    "shortName": "Звёздный Билли",
    "role": "Rupture",
    "roleRu": "Разрыв (Физ. Сквозной Урон на Байке)",
    "element": "Physical",
    "elementRu": "Физический",
    "faction": "Хитрые Зайцы (Cunning Hares)",
    "tier": "S",
    "version": "2.8",
    "color": "#f43f5e",
    "icon": "🏍️",
    "sigWeapon": "starlight_rider_faceplate",
    "bestDiscs": [
      "yunkui_tales",
      "branch_and_blade",
      "woodpecker_electro"
    ],
    "dnaTags": [
      "rupture_role",
      "physical",
      "sheer_dmg",
      "crit",
      "dodge_counter",
      "ex_special"
    ],
    "needs": [
      "rupture_buffer_lucia",
      "stun_dialyn"
    ],
    "provides": [
      "phys_sheer_dps"
    ],
    "addAbilityRule": {
      "types": [
        "role:Support",
        "role:Stun"
      ],
      "desc": "В отряде есть агент «Поддержки» или «Устрашения»"
    },
    "baseStats60": {
      "hp": 8150,
      "atk": 890,
      "def": 605,
      "critRate": 19.4,
      "critDmg": 50,
      "ap": 92,
      "am": 90
    },
    "combatTargets": {
      "critRate": {
        "val": 95,
        "unit": "%",
        "label": "Крит. шанс (КШ)",
        "note": "С сетом «Сказания Юнькуй» (+12% КШ в бою) в меню нужно ~80–85% КШ."
      },
      "critDmg": {
        "val": 195,
        "unit": "%",
        "label": "Крит. урон (КУ)",
        "note": "В бою ~190–230% КУ."
      },
      "hp": {
        "val": 16500,
        "unit": "",
        "label": "Макс. ХП",
        "note": "Конвертируется в Сквозную силу."
      },
      "penRatio": {
        "val": 0,
        "unit": "%",
        "label": "Пробивание (PEN% — НЕ НУЖНО!)",
        "note": "0% — Сквозной урон уже игнорирует 100% брони врага!"
      },
      "ap": {
        "val": 0,
        "unit": "",
        "label": "Знание аномалии (НЕ НУЖНО)",
        "note": "0."
      }
    },
    "preCombatBase": {
      "hp": 15800,
      "critRate": 82,
      "critDmg": 155,
      "atk": 2400,
      "penRatio": 0,
      "ap": 0
    },
    "mindscapeBonuses": {
      "1": {
        "critDmgCombat": 25,
        "note": "М1: +25% КУ на трюках байка."
      },
      "2": {
        "sheerDmgPct": 22,
        "note": "М2: +22% Сквозного урона."
      }
    },
    "teamBuffs": {},
    "discMainStats": {
      "slot4": "Крит. урон% или Крит. шанс%",
      "slot5": "Урон Физический% или ХП%",
      "slot6": "ХП% или Атака%"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐⭐",
      "Уклонение (Байк) ⭐⭐⭐⭐",
      "Базовая атака ⭐⭐⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Трансформируется в Токусацу-героя и рассекает врагов на мотоцикле Сквозным физическим уроном.",
      "special": "Идеальное уклонение на байке автоматически переходит в бесплатную Усиленную Е-шку «Крутое вилли» (Cool Wheelie) в полной неуязвимости!",
      "ult": "Финальный удар Звёздного Рыцаря с огромным Сквозным уроном по боссу.",
      "passive": "В отличие от обычного 4★ Билли, 5★ Звёздный Билли — это агент Разрыва (Rupture), поэтому его удары полностью игнорируют защиту врага (PEN% = 0!), а лучшие друзья — Люсия и Диалин!"
    },
    "rotation": [
      "1. Включи баффы Люсии и оглуши врага через Диалин.",
      "2. На Звёздном Билли лови идеальные уклонения для бесплатных Е-шек на байке и сдавай Ульту в стан!"
    ],
    "wikiName": "Starlight_-_Billy_Kid",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Starlight_-_Billy_Kid_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Starlight_-_Billy_Kid_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Starlight_-_Billy_Kid_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_starlight_billy.png",
    "scalingAxis": "crit_hp_sheer",
    "fieldStyle": "main_onfield",
    "anomalyStyle": "none",
    "teamConstraint": "rupture_hypercarry",
    "vortexSynergy": 0,
    "stunWindowReliance": 8,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/46/Agent_Starlight_-_Billy_Kid_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/46/Agent_Starlight_-_Billy_Kid_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/59/Agent_Starlight_-_Billy_Kid_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/59/Agent_Starlight_-_Billy_Kid_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/3a/Agent_Starlight_-_Billy_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/1/1f/Agent_Starlight_-_Billy_Kid_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Pyrois",
    "name": "Пироис (Pyrois — Фаэтон)",
    "shortName": "Пироис",
    "role": "Attack",
    "roleRu": "Нападение (4 Формы Ульты / I-Ранг 5★)",
    "element": "Ether",
    "elementRu": "Эфир",
    "faction": "Фаэтон (Phaethon)",
    "tier": "S",
    "version": "3.0",
    "color": "#a855f7",
    "icon": "☀️",
    "sigWeapon": "sol_exuvia",
    "bestDiscs": [
      "the_sky_ablaze",
      "woodpecker_electro",
      "branch_and_blade"
    ],
    "dnaTags": [
      "ether",
      "attack_role",
      "crit",
      "chain_ult",
      "ex_special"
    ],
    "needs": [
      "stun_role",
      "support_role"
    ],
    "provides": [
      "flexible_4_ult_modes",
      "ether_burst_dps"
    ],
    "addAbilityRule": {
      "types": [
        "role:Stun",
        "role:Support"
      ],
      "desc": "В отряде есть агент «Устрашения» или «Поддержки»"
    },
    "baseStats60": {
      "hp": 7700,
      "atk": 920,
      "def": 610,
      "critRate": 19.4,
      "critDmg": 50,
      "ap": 94,
      "am": 90
    },
    "combatTargets": {
      "critRate": {
        "val": 95,
        "unit": "%",
        "label": "Крит. шанс (КШ)",
        "note": "Стремись к 85–95% КШ в бою."
      },
      "critDmg": {
        "val": 215,
        "unit": "%",
        "label": "Крит. урон (КУ)",
        "note": "Сет «Пылающее небо» сам даёт +30% Крит. урона на эфирном герое!"
      },
      "atk": {
        "val": 3850,
        "unit": "",
        "label": "Атака",
        "note": "В бою под Астрой / Сунной ~3800–4200."
      },
      "ap": {
        "val": 0,
        "unit": "",
        "label": "Знание аномалии (НЕ НУЖНО)",
        "note": "0."
      }
    },
    "preCombatBase": {
      "atk": 2950,
      "critRate": 85,
      "critDmg": 155,
      "penRatio": 0,
      "ap": 0
    },
    "mindscapeBonuses": {
      "1": {
        "critRateCombat": 12,
        "note": "М1: +12% КШ и ускоренный набор децибел."
      },
      "2": {
        "defIgnore": 20,
        "note": "М2: Все 4 формы Ульты игнорируют 20% Защиты."
      }
    },
    "teamBuffs": {},
    "discMainStats": {
      "slot4": "Крит. шанс% или Крит. урон%",
      "slot5": "Урон Эфира% или PEN%",
      "slot6": "Атака%"
    },
    "talentPriority": [
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐⭐",
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐",
      "Базовая атака ⭐⭐⭐⭐",
      "Уклонение ⭐⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Комбинации ударов, переключающие тактические протоколы Фаэтона.",
      "special": "Усиленная Е-шка активирует +10% Атаки и +30% КУ от сета «Пылающее небо» и выбирает активный модуль Ульты.",
      "ult": "У Пироиса 4 РАЗНЫЕ УЛЬТЫ на выбор под ситуацию (одиночный бурст по боссу, стяжка волны, командный бафф или двойной прокаст с Диалин)!",
      "passive": "Уникальный 5★ (I-Rank) агент патча 3.0. В паре с Диалин и Астрой Яо / Сунной заливает арену ультимейтами."
    },
    "rotation": [
      "1. Забаффай отряд через Астру Яо / Сунну и оглуши врага через Диалин / Наньгун Юй.",
      "2. На Пироисе нажми Е-шку и выбери бурст-форму Ульты под окно стана!"
    ],
    "wikiName": "Pyrois",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Pyrois_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Pyrois_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Pyrois_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_pyrois.png",
    "scalingAxis": "crit_atk",
    "fieldStyle": "main_onfield",
    "anomalyStyle": "none",
    "teamConstraint": "ult_crit_hypercarry",
    "vortexSynergy": 0,
    "stunWindowReliance": 9,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/45/Agent_Pyrois_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/45/Agent_Pyrois_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/4b/Agent_Pyrois_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/4b/Agent_Pyrois_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/0/04/Agent_Pyrois_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/1/16/Agent_Pyrois_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Promeia",
    "name": "Промея (Silver Promeia)",
    "shortName": "Промея",
    "role": "Anomaly",
    "roleRu": "Аномалия (Многократный подрыв Льда)",
    "element": "Ice",
    "elementRu": "Лёд",
    "faction": "Надзор Крампуса (Krampus Compliance Authority)",
    "tier": "S",
    "version": "2.8",
    "color": "#38bdf8",
    "icon": "⛓️",
    "sigWeapon": "frostfall_sickle",
    "bestDiscs": [
      "notes_from_the_chained",
      "feathered_fate",
      "phaethons_melody"
    ],
    "dnaTags": [
      "ice",
      "anomaly_role",
      "disorder",
      "ap_buff"
    ],
    "needs": [
      "anomaly_or_support_ally"
    ],
    "provides": [
      "repeated_anomaly_detonation",
      "freeze_shatter_spam"
    ],
    "addAbilityRule": {
      "types": [
        "role:Anomaly",
        "role:Support"
      ],
      "desc": "В отряде есть агент «Аномалии» или «Поддержки»"
    },
    "baseStats60": {
      "hp": 7480,
      "atk": 872,
      "def": 602,
      "critRate": 5,
      "critDmg": 50,
      "ap": 320,
      "am": 150
    },
    "combatTargets": {
      "ap": {
        "val": 450,
        "unit": "",
        "label": "Знание аномалии (AP — ГЛАВНЫЙ СТАТ)",
        "note": "Сет «Записки скованного» даёт +48 AP в бою на 30 сек."
      },
      "atk": {
        "val": 3500,
        "unit": "",
        "label": "Атака",
        "note": "В бою под Ремиэль / Юдзухой 3400–3900."
      },
      "am": {
        "val": 192,
        "unit": "",
        "label": "Контроль аномалии (AM)",
        "note": "6-й диск на AM%."
      },
      "critRate": {
        "val": 0,
        "unit": "%",
        "label": "Крит. шанс (НЕ НУЖЕН!)",
        "note": "0% — чистый крио-аномалист."
      },
      "critDmg": {
        "val": 0,
        "unit": "%",
        "label": "Крит. урон (НЕ НУЖЕН!)",
        "note": "0%."
      }
    },
    "preCombatBase": {
      "ap": 400,
      "atk": 2800,
      "am": 192,
      "critRate": 0,
      "critDmg": 0
    },
    "mindscapeBonuses": {
      "1": {
        "apCombat": 50,
        "note": "М1: +50 AP и дополнительный тик детонации."
      },
      "2": {
        "disorderDmgPct": 25,
        "note": "М2: +25% урона Хаоса и Заморозки."
      }
    },
    "teamBuffs": {},
    "discMainStats": {
      "slot4": "Знание аномалии (AP)",
      "slot5": "Урон Льда% или PEN%",
      "slot6": "Контроль аномалии (AM%)"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐⭐",
      "Базовая атака ⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Уклонение ⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Атаки серпом накладывают Заморозку и крутят счётчик детонаций.",
      "special": "Усиленная Е-шка повторно взрывает уже висящую на враге аномалию!",
      "ult": "Замораживает всю комнату и активирует +16% урона всех Аномалий и Хаоса от сета «Записки скованного».",
      "passive": "Идеально играет с Вивиан (которая триггерит Abloom и включает +48 AP от сета Промеи), Ремиэль и Юдзухой."
    },
    "rotation": [
      "1. Запусти Перья Вивиан и бафф Юдзухи / Ремиэль.",
      "2. На Промее заморозь врага и спамь Е-шкой для повторного подрыва аномалий!"
    ],
    "wikiName": "Promeia",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Promeia_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Promeia_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Promeia_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_promeia.png",
    "scalingAxis": "pure_anomaly_ap",
    "fieldStyle": "main_driver",
    "anomalyStyle": "rapid_ice_abloom_detonator",
    "teamConstraint": "disorder_or_refringe_driver",
    "vortexSynergy": 9,
    "stunWindowReliance": 5,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/34/Agent_Promeia_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/34/Agent_Promeia_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/ce/Agent_Promeia_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/ce/Agent_Promeia_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/32/Agent_Promeia_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/0/07/Agent_Promeia_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Cissia",
    "name": "Сиссия (Cissia)",
    "shortName": "Сиссия",
    "role": "Attack",
    "roleRu": "Нападение (Электро Комбо-Керри)",
    "element": "Electric",
    "elementRu": "Электро",
    "faction": "Дивизион порядка (Metropolitan Order Division)",
    "tier": "S",
    "version": "2.7",
    "color": "#818cf8",
    "icon": "🐍",
    "sigWeapon": "serpentine_seeker",
    "bestDiscs": [
      "dawns_bloom",
      "thunder_metal",
      "woodpecker_electro"
    ],
    "dnaTags": [
      "electric",
      "attack_role",
      "crit",
      "basic",
      "ex_special"
    ],
    "needs": [
      "stun_role",
      "support_role"
    ],
    "provides": [
      "rapid_electric_combo_dps"
    ],
    "addAbilityRule": {
      "types": [
        "role:Stun",
        "role:Support"
      ],
      "desc": "В отряде есть агент «Устрашения» или «Поддержки»"
    },
    "baseStats60": {
      "hp": 7580,
      "atk": 924,
      "def": 604,
      "critRate": 19.4,
      "critDmg": 50,
      "ap": 92,
      "am": 90
    },
    "combatTargets": {
      "critRate": {
        "val": 90,
        "unit": "%",
        "label": "Крит. шанс (КШ)",
        "note": "85–95% КШ в бою."
      },
      "critDmg": {
        "val": 190,
        "unit": "%",
        "label": "Крит. урон (КУ)",
        "note": "180–220% КУ в бою."
      },
      "atk": {
        "val": 3800,
        "unit": "",
        "label": "Атака",
        "note": "В бою под саппортами 3700–4100 Атаки."
      },
      "ap": {
        "val": 0,
        "unit": "",
        "label": "Знание аномалии (НЕ НУЖНО)",
        "note": "0."
      }
    },
    "preCombatBase": {
      "atk": 2950,
      "critRate": 85,
      "critDmg": 155,
      "penRatio": 0,
      "ap": 0
    },
    "mindscapeBonuses": {
      "1": {
        "critRateCombat": 12,
        "note": "М1: +12% КШ в бою."
      },
      "2": {
        "defIgnore": 20,
        "note": "М2: Игнорирует 20% Защиты на змеиных ударах."
      }
    },
    "teamBuffs": {},
    "discMainStats": {
      "slot4": "Крит. урон% или Крит. шанс%",
      "slot5": "Урон Электро% или PEN%",
      "slot6": "Атака%"
    },
    "talentPriority": [
      "Базовая атака (ЛКМ) ⭐⭐⭐⭐⭐",
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Уклонение ⭐⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Быстрые хлыстообразные серии ЛКМ с огромным уроном под сетом «Цветение рассвета» (+55% урона ЛКМ).",
      "special": "Усиленная Е-шка включает змеиную стойку и активирует полный бонус сета.",
      "ult": "Мощный электрический разряд по площади.",
      "passive": "Отлично играет с Триггер / Диалин / Цинъи и Астрой Яо / Сунной / Риной."
    },
    "rotation": [
      "1. Включи баффы саппорта и карманный обстрел Триггер (или стан Диалин).",
      "2. На Сиссии нажми Е-шку и вливай серии ЛКМ!"
    ],
    "wikiName": "Cissia",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Cissia_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Cissia_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Cissia_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_cissia.png",
    "scalingAxis": "crit_atk",
    "fieldStyle": "main_onfield",
    "anomalyStyle": "none",
    "teamConstraint": "crit_hypercarry",
    "vortexSynergy": 0,
    "stunWindowReliance": 8,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/8/83/Agent_Cissia_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/8/83/Agent_Cissia_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/be/Agent_Cissia_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/be/Agent_Cissia_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/2/2a/Agent_Cissia_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/2/22/Agent_Cissia_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Seed",
    "name": "Сид (Seed)",
    "shortName": "Сид",
    "role": "Attack",
    "roleRu": "Нападение (Меха-Двойной Атакер)",
    "element": "Electric",
    "elementRu": "Электро",
    "faction": "Отряд Обол (Obol Squad)",
    "tier": "S",
    "version": "2.2",
    "color": "#38bdf8",
    "icon": "🤖",
    "sigWeapon": "cordis_germina",
    "bestDiscs": [
      "dawns_bloom",
      "woodpecker_electro",
      "thunder_metal"
    ],
    "dnaTags": [
      "electric",
      "attack_role",
      "crit",
      "basic",
      "dual_attack"
    ],
    "needs": [
      "second_attack_ally_orphie"
    ],
    "provides": [
      "dual_attack_team_buff",
      "heavy_mech_basic_dps"
    ],
    "addAbilityRule": {
      "types": [
        "role:Attack"
      ],
      "desc": "СТРОГОЕ УСЛОВИЕ: В отряде ОБЯЗАТЕЛЬНО должен быть ВТОРОЙ агент «Нападения» (например, Орфи и Магус или Солдат 0 Энби)!"
    },
    "baseStats60": {
      "hp": 8100,
      "atk": 922,
      "def": 630,
      "critRate": 19.4,
      "critDmg": 50,
      "ap": 90,
      "am": 90
    },
    "combatTargets": {
      "critRate": {
        "val": 95,
        "unit": "%",
        "label": "Крит. шанс (КШ)",
        "note": "С сигной (+15% КШ в бою) в меню достаточно 75–80% КШ."
      },
      "critDmg": {
        "val": 195,
        "unit": "%",
        "label": "Крит. урон (КУ)",
        "note": "185–220% КУ в бою."
      },
      "atk": {
        "val": 3800,
        "unit": "",
        "label": "Атака",
        "note": "3700–4100 в бою."
      },
      "ap": {
        "val": 0,
        "unit": "",
        "label": "Знание аномалии (НЕ НУЖНО)",
        "note": "0."
      }
    },
    "preCombatBase": {
      "atk": 2950,
      "critRate": 80,
      "critDmg": 155,
      "penRatio": 0,
      "ap": 0
    },
    "mindscapeBonuses": {
      "1": {
        "dmgPct": 22,
        "note": "М1: +22% урона Базовых атак обоих Атакеров."
      },
      "2": {
        "defIgnore": 20,
        "note": "М2: Игнор 20% Защиты врага."
      }
    },
    "teamBuffs": {
      "dmgPct": 25,
      "critDmg": 20
    },
    "discMainStats": {
      "slot4": "Крит. урон% или Крит. шанс%",
      "slot5": "Урон Электро% или PEN%",
      "slot6": "Атака%"
    },
    "talentPriority": [
      "Базовая атака (ЛКМ) ⭐⭐⭐⭐⭐",
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Помощь ⭐⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Тяжёлые залпы меха-робота с руки — именно под Сида выпустили сет «Цветение рассвета» (+55% урона ЛКМ)!",
      "special": "Перезаряжает орудия меха и включает бафф для второго Атакера в пачке.",
      "ult": "Ковровый обстрел всей арены.",
      "passive": "ВНИМАНИЕ: Сид — единственный агент в игре, чья Доп. способность включается ТОЛЬКО если в отряде стоит ВТОРОЙ АТАКЕР! Лучший напарник — Орфи и Магус (она бьёт из кармана и баффает Сида) + Триггер или Астра Яо!"
    },
    "rotation": [
      "1. Обязательно поставь к Сиду второго Атакера (Орфи и Магус / С0 Энби) + Триггер или Астру Яо.",
      "2. Нажми Е-шку на Сиде для активации сета «Цветение рассвета» и расстреливай босса с руки!"
    ],
    "wikiName": "Seed",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Seed_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Seed_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Seed_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_seed.png",
    "scalingAxis": "crit_atk",
    "fieldStyle": "main_onfield",
    "anomalyStyle": "none",
    "teamConstraint": "requires_second_attack",
    "vortexSynergy": 0,
    "stunWindowReliance": 7,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/68/Agent_Seed_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/68/Agent_Seed_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/fb/Agent_Seed_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/fb/Agent_Seed_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/0/09/Agent_Seed_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/b7/Agent_Seed_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Orphie & Magus",
    "name": "Орфи и Магус (Orphie Magnusson & Magus)",
    "shortName": "Орфи и Магус",
    "role": "Attack",
    "roleRu": "Нападение (Саб-ДД Афтершоков / Баффер)",
    "element": "Fire",
    "elementRu": "Огонь",
    "faction": "Отряд Обол (Obol Squad)",
    "tier": "S",
    "version": "2.2",
    "color": "#ef4444",
    "icon": "🐉",
    "sigWeapon": "bellicose_blaze",
    "bestDiscs": [
      "shadow_harmony",
      "inferno_metal",
      "woodpecker_electro"
    ],
    "dnaTags": [
      "fire",
      "attack_role",
      "crit",
      "aftershock",
      "dual_attack",
      "team_dmg"
    ],
    "needs": [
      "stun_or_support_or_seed"
    ],
    "provides": [
      "off_field_fire_aftershock",
      "team_atk_and_def_ignore_buff",
      "activates_seed"
    ],
    "addAbilityRule": {
      "types": [
        "role:Stun",
        "role:Support"
      ],
      "desc": "В отряде есть агент «Устрашения» или «Поддержки»"
    },
    "baseStats60": {
      "hp": 7620,
      "atk": 915,
      "def": 605,
      "critRate": 19.4,
      "critDmg": 50,
      "ap": 92,
      "am": 90
    },
    "combatTargets": {
      "critRate": {
        "val": 95,
        "unit": "%",
        "label": "Крит. шанс (В меню до 68–78% КШ!)",
        "note": "Сет «Гармония теней» даёт +12% КШ в бою, а сигна ещё +20% КШ в бою!"
      },
      "critDmg": {
        "val": 195,
        "unit": "%",
        "label": "Крит. урон (КУ)",
        "note": "В паре с С0 Энби получает ещё +60% КУ на свои Афтершоки!"
      },
      "atk": {
        "val": 3600,
        "unit": "",
        "label": "Атака",
        "note": "3500–3900 в бою."
      },
      "ap": {
        "val": 0,
        "unit": "",
        "label": "Знание аномалии (НЕ НУЖНО)",
        "note": "0."
      }
    },
    "preCombatBase": {
      "atk": 2850,
      "critRate": 72,
      "critDmg": 155,
      "penRatio": 0,
      "ap": 0
    },
    "mindscapeBonuses": {
      "1": {
        "defIgnore": 15,
        "note": "М1: Даёт +15% игнора защиты всему отряду."
      },
      "2": {
        "critDmgCombat": 30,
        "note": "М2: +30% КУ для всех Афтершоков."
      }
    },
    "teamBuffs": {
      "flatAtk": 600,
      "defIgnore": 15,
      "dmgPct": 20
    },
    "discMainStats": {
      "slot4": "Крит. урон% или Крит. шанс%",
      "slot5": "Урон Огня% или PEN%",
      "slot6": "Атака% или Восст. энергии%"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Базовая атака ⭐⭐⭐",
      "Помощь ⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Командует разумным хвостом-пушкой Магусом.",
      "special": "Нажала Усиленную Е-шку → залила всему отряду бафф Атаки и игнора защиты, а хвост Магус начинает сам стрелять огненными лазерами (Афтершоками) из кармана!",
      "ult": "Огромный огненный луч Магуса с перезарядкой карманного топлива.",
      "passive": "Идеальный карманный Атакер-баффер для Сида (активирует его капризную пассивку на второго Атакера!) и для Солдата 0 Энби + Триггер (вся тройка бьёт Афтершоками simultaneously!)."
    },
    "rotation": [
      "1. Выйди на Орфи, нажми Усиленную Е-шку для баффа команды и включения карманного обстрела Магуса.",
      "2. Переключись на Сида или С0 Энби — Магус будет сам жечь врагов из кармана!"
    ],
    "wikiName": "Orphie_Magnusson_&_Magus",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Orphie_Magnusson_%26_Magus_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Orphie_Magnusson_%26_Magus_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Orphie_Magnusson_%26_Magus_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_orphie.png",
    "scalingAxis": "crit_atk",
    "fieldStyle": "offfield_sub_dps",
    "anomalyStyle": "none",
    "teamConstraint": "aftershock_sub_dps_and_seed_partner",
    "vortexSynergy": 0,
    "stunWindowReliance": 6,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/cf/Agent_Orphie_Magnusson_%26_Magus_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/cf/Agent_Orphie_Magnusson_%26_Magus_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/63/Agent_Orphie_Magnusson_%26_Magus_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/63/Agent_Orphie_Magnusson_%26_Magus_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/c7/Agent_Orphie_Magnusson_%26_%22Magus%22_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/9f/Agent_Orphie_Magnusson_%26_Magus_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Rina",
    "name": "Александрина Себастиан — Рина (Rina)",
    "shortName": "Рина",
    "role": "Support",
    "roleRu": "Поддержка (Баффер Пробивания PEN% и DEF%)",
    "element": "Electric",
    "elementRu": "Электро",
    "faction": "Агентство «Виктория» (Victoria Housekeeping Co.)",
    "tier": "S",
    "version": "1.0",
    "color": "#818cf8",
    "icon": "👻",
    "sigWeapon": "weeping_cradle",
    "bestDiscs": [
      "moonlight_lullaby",
      "astral_voice",
      "puffer_electro"
    ],
    "dnaTags": [
      "support_role",
      "electric",
      "pen",
      "team_dmg",
      "energy"
    ],
    "needs": [
      "electric_or_armorer_or_pen_ally"
    ],
    "provides": [
      "pen_ratio_buff_30",
      "electric_dmg_buff_10",
      "def_buff_for_claret_p6",
      "shock_extend"
    ],
    "addAbilityRule": {
      "types": [
        "element:Electric",
        "faction:Агентство «Виктория» (Victoria Housekeeping Co.)"
      ],
      "desc": "В отряде есть агент стихии «Электро» или из «Агентства Виктория»"
    },
    "baseStats60": {
      "hp": 8609,
      "atk": 717,
      "def": 600,
      "critRate": 5,
      "critDmg": 50,
      "penRatio": 14.4
    },
    "combatTargets": {
      "penRatio": {
        "val": 70.4,
        "unit": "%",
        "label": "Процент пробивания ДО БОЯ (КАП 70.4% PEN%!)",
        "note": "Рина передаёт 25% своего PEN% + 6% (на М1 × 1.3 = до 38.5% PEN%!) всему отряду! Потолок баффа достигается при 70.4% PEN% на самой Рине."
      },
      "er": {
        "val": 2.5,
        "unit": "/с",
        "label": "Восст. энергии",
        "note": "6-й диск на Восст. энергии%."
      },
      "critRate": {
        "val": 0,
        "unit": "%",
        "label": "Крит. шанс (НЕ НУЖЕН)",
        "note": "0%."
      },
      "critDmg": {
        "val": 0,
        "unit": "%",
        "label": "Крит. урон (НЕ НУЖЕН)",
        "note": "0%."
      }
    },
    "preCombatBase": {
      "penRatio": 70.4,
      "er": 2.5,
      "atk": 2000,
      "critRate": 0,
      "critDmg": 0
    },
    "mindscapeBonuses": {
      "1": {
        "teamPenRatio": 38.5,
        "note": "М1 (КЛЮЧЕВАЯ КОНСТА!): Куклы висят на 5.5 сек. дольше, а бафф Пробивания вырастает на 30% (до +38.5% PEN% отряду)!"
      }
    },
    "teamBuffs": {
      "penRatio": 30,
      "dmgPct": 18,
      "defPct": 20
    },
    "discMainStats": {
      "slot4": "Атака% или ХП%",
      "slot5": "Процент пробивания (PEN% — СТРОГО ОБЯЗАТЕЛЬНО!)",
      "slot6": "Восст. энергии%"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Базовая атака ⭐⭐",
      "Уклонение ⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Любая кнопка Рины отправляет вперёд двух кукол (Друзиллу и Анастасию). Пока куклы летают на поле (6 сек. на М0, 11.5 сек. на М1), ВСЯ ТВОЯ КОМАНДА получает до +30–38.5% Процента пробивания брони (PEN Ratio)!",
      "special": "Нажала Е-шку → выпустила кукол, активировала сет «Лунная колыбельная» (+18% урона на 25 сек.) и Быструю помощь.",
      "ult": "Мощный электро-вихрь кукол с генерацией энергии всему отряду.",
      "passive": "В патче 3.2 получила второе дыхание благодаря Кларет Флинт! Рина — единственный саппорт в игре, который заливает одновременно и Процент пробивания (PEN%), и Защиту% (с открытым Потенциалом), а не бесполезную для Кларет Атаку! Также топ для Янаги, Сиссии и Грейс."
    },
    "rotation": [
      "1. Собери Рине 5-й диск на PEN% + 2 куска «Фугу-электро» (+8% PEN%) + пушку на PEN% («Плачущая колыбель» или 4★ «Ломтик времени»).",
      "2. Раз в 6–11 секунд выходи на Рину нажать Е-шку / удар, чтобы куклы всегда висели на арене!"
    ],
    "wikiName": "Alexandrina_Sebastiane",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Alexandrina_Sebastiane_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Alexandrina_Sebastiane_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Alexandrina_Sebastiane_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_rina.png",
    "scalingAxis": "support_pen_def",
    "fieldStyle": "zero_offfield_buffer",
    "anomalyStyle": "shock_extender",
    "teamConstraint": "pen_and_armorer_support",
    "vortexSynergy": 3,
    "stunWindowReliance": 5,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/40/Agent_Alexandrina_Sebastiane_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/40/Agent_Alexandrina_Sebastiane_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/a/a8/Agent_Alexandrina_Sebastiane_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/a/a8/Agent_Alexandrina_Sebastiane_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/8/8e/Agent_Alexandrina_Sebastiane_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/2/29/Agent_Alexandrina_Sebastiane_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Yanagi",
    "name": "Цукиширо Янаги (Tsukishiro Yanagi)",
    "shortName": "Янаги",
    "role": "Anomaly",
    "roleRu": "Аномалия (Полярный Хаос)",
    "element": "Electric",
    "elementRu": "Электро",
    "faction": "Секция 6 (H.S.O.S. 6)",
    "tier": "A",
    "version": "1.3",
    "color": "#818cf8",
    "icon": "⚡",
    "sigWeapon": "timeweaver",
    "bestDiscs": [
      "chaos_jazz",
      "feathered_fate",
      "thunder_metal"
    ],
    "dnaTags": [
      "electric",
      "anomaly_role",
      "disorder",
      "ap_buff",
      "pen"
    ],
    "needs": [
      "miyabi_or_anomaly_ally",
      "support_role"
    ],
    "provides": [
      "polarity_disorder_on_ex",
      "disorder_multiplier_buff",
      "faction_s6"
    ],
    "addAbilityRule": {
      "types": [
        "role:Anomaly",
        "element:Electric"
      ],
      "desc": "В отряде есть ещё один агент «Аномалии» или агент стихии «Электро»"
    },
    "baseStats60": {
      "hp": 7788,
      "atk": 872,
      "def": 612,
      "critRate": 5,
      "critDmg": 50,
      "ap": 314,
      "am": 148
    },
    "combatTargets": {
      "ap": {
        "val": 420,
        "unit": "",
        "label": "Знание аномалии (КАП ≥375 AP для сигны!)",
        "note": "Собери минимум 375 AP (в бою 400–450 AP), чтобы работала сигна и разрывал Полярный Хаос."
      },
      "atk": {
        "val": 3500,
        "unit": "",
        "label": "Атака",
        "note": "В бою под баффами ~3400–3900 Атаки."
      },
      "penRatio": {
        "val": 34,
        "unit": "%",
        "label": "Пробивание (Врождённые +10% PEN% в стойке!)",
        "note": "Смена стойки самой Янаги даёт ей +10% PEN%. С 5-м диском на PEN% и Риной игнорирует полброни босса!"
      },
      "am": {
        "val": 190,
        "unit": "",
        "label": "Контроль аномалии (AM)",
        "note": "6-й диск на Контроль аномалии% или Атаку%."
      },
      "critRate": {
        "val": 0,
        "unit": "%",
        "label": "Крит. шанс (НЕ НУЖЕН!)",
        "note": "0% — чистый Аномалист."
      },
      "critDmg": {
        "val": 0,
        "unit": "%",
        "label": "Крит. урон (НЕ НУЖЕН!)",
        "note": "0%."
      }
    },
    "preCombatBase": {
      "ap": 385,
      "atk": 2850,
      "am": 190,
      "penRatio": 24,
      "critRate": 0,
      "critDmg": 0
    },
    "mindscapeBonuses": {
      "1": {
        "apCombat": 80,
        "note": "М1: Даёт +80 Знания аномалии в бою и неуязвимость."
      },
      "2": {
        "disorderDmgPct": 40,
        "note": "М2: Полярный Хаос бьёт кратно сильнее за лишние выпады."
      }
    },
    "teamBuffs": {
      "disorderDmgPct": 25
    },
    "discMainStats": {
      "slot4": "Знание аномалии (AP)",
      "slot5": "Пробивание (PEN%) или Урон Электро%",
      "slot6": "Контроль аномалии (AM%) или Атака%"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐⭐",
      "Базовая атака ⭐⭐⭐⭐",
      "Уклонение ⭐⭐"
    ],
    "skillsRazer": {
      "basic": "У Янаги две стойки (синяя и оранжевая), которые переключаются нажатием Е-шки. Сделав 3-й удар ЛКМ, нажми Е-шку → она мгновенно продолжит сразу с 3-го удара другой стойки, получая и +10% Электро урона, и +10% Пробивания брони одновременно!",
      "special": "ЗАЖАТИЕ Усиленной Е-шки (с энергией): Янаги взмывает вверх и бьёт молнией, вызывая «Полярный Хаос» (Polarity Disorder) — это полноценный взрыв Хаоса по ЛЮБОЙ висящей на враге аномалии (даже по её собственному Шоку!), который НЕ СНИМАЕТ статус с врага и сразу даёт Мияби +2 синие точки!",
      "ult": "Тоже вызывает мгновенный Полярный Хаос с огромным множителем!",
      "passive": "Лучшая напарница Мияби из «Секции 6» (заряжает ей 6 точек за секунды) и отличный самостоятельный гиперкерри через Шок + Полярный Хаос!"
    },
    "rotation": [
      "1. Наложи Шок (или Мороз от Мияби) → зажми Усиленную Е-шку на Янаги = мгновенный Полярный Хаос (+2 точки для Мияби)!",
      "2. Если есть Ульта — сдай Ульту для ВТОРОГО Полярного Хаоса подряд!"
    ],
    "wikiName": "Tsukishiro_Yanagi",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Tsukishiro_Yanagi_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Tsukishiro_Yanagi_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Tsukishiro_Yanagi_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_yanagi.png",
    "scalingAxis": "pure_anomaly_ap",
    "fieldStyle": "quickswap_driver",
    "anomalyStyle": "synthetic_polarity_disorder",
    "teamConstraint": "miyabi_partner_or_shock_carry",
    "vortexSynergy": 2,
    "stunWindowReliance": 5,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/cb/Agent_Tsukishiro_Yanagi_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/cb/Agent_Tsukishiro_Yanagi_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/8/8c/Agent_Tsukishiro_Yanagi_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/8/8c/Agent_Tsukishiro_Yanagi_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/2/23/Agent_Tsukishiro_Yanagi_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/97/Agent_Tsukishiro_Yanagi_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Hugo",
    "name": "Хьюго Влад (Hugo Vlad)",
    "shortName": "Хьюго",
    "role": "Attack",
    "roleRu": "Нападение (Казнь стана — Totalize)",
    "element": "Ice",
    "elementRu": "Лёд",
    "faction": "Пересмешник (Mockingbird)",
    "tier": "A",
    "version": "1.7",
    "color": "#38bdf8",
    "icon": "🦇",
    "sigWeapon": "myriad_eclipse",
    "bestDiscs": [
      "hormone_punk",
      "branch_and_blade",
      "puffer_electro"
    ],
    "dnaTags": [
      "ice",
      "attack_role",
      "crit",
      "stun_burst",
      "chain_ult",
      "ex_special"
    ],
    "needs": [
      "two_stun_allies_lighter_lycaon"
    ],
    "provides": [
      "totalize_one_shot_burst",
      "daze_refund_25"
    ],
    "addAbilityRule": {
      "types": [
        "role:Stun"
      ],
      "desc": "В отряде есть агент «Устрашения» (при ДВУХ станнерах в пачке Хьюго получает +900 Атаки в бою!)"
    },
    "baseStats60": {
      "hp": 7650,
      "atk": 932,
      "def": 605,
      "critRate": 19.4,
      "critDmg": 50,
      "ap": 92,
      "am": 90
    },
    "combatTargets": {
      "critRate": {
        "val": 100,
        "unit": "%",
        "label": "Крит. шанс (СТРОГО 100% В БОЮ! Passивка даёт +12% КШ!)",
        "note": "Весь урон Хьюго — это ОДИН гигантский удар косой (Totalize)! Если он не кританёт — ты потерял весь урон! Так как его пассивка даёт +12% КШ в бою, в меню до боя собери РОВНО 88% КШ!"
      },
      "critDmg": {
        "val": 220,
        "unit": "%",
        "label": "Крит. урон (КУ)",
        "note": "Пассивка даёт +25% КУ в бою + сигна +45% КУ + сет Король вершины +30% КУ!"
      },
      "atk": {
        "val": 4200,
        "unit": "",
        "label": "Атака (Пассивка при 2 Станнерах даёт +900 Атаки в бою!)",
        "note": "При игре с ДВУМЯ станнерами (Лайтер + Ликаон / Диалин) Хьюго сам получает +900 Атаки в бою, поэтому в меню достаточно 2900–3100 Атаки!"
      },
      "ap": {
        "val": 0,
        "unit": "",
        "label": "Знание аномалии (НЕ НУЖНО)",
        "note": "0."
      }
    },
    "preCombatBase": {
      "atk": 3000,
      "critRate": 88,
      "critDmg": 155,
      "penRatio": 0,
      "ap": 0
    },
    "mindscapeBonuses": {
      "1": {
        "critRateCombat": 12,
        "note": "М1: Даёт ещё +12% КШ и +30% КУ на Totalize (тогда в меню нужно всего 76% КШ!)."
      },
      "2": {
        "defIgnore": 15,
        "note": "М2: Ульта НЕ завершает стан босса, позволяя сдать Ульту + Е-шку (ДВА удара Totalize за один стан!)."
      }
    },
    "teamBuffs": {},
    "discMainStats": {
      "slot4": "Крит. шанс% (чтобы гарантировать 88% КШ в меню = 100% КШ в бою!)",
      "slot5": "Урон Льда% или PEN%",
      "slot6": "Атака%"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐⭐",
      "Базовая атака ⭐⭐⭐",
      "Помощь ⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Почти не бьёт вне стана: на поле работают два твоих Станнера!",
      "special": "ГЛАВНАЯ КНОПКА ХЬЮГО: когда босс ТОЛЬКО ЧТО упал в стан, выйди по Цепочке атак на Хьюго и сразу нажми Усиленную Е-шку (или Ульту). Хьюго делает взмах косой «Финальный расчёт» (Totalize), который МГНОВЕННО ЗАКРЫВАЕТ оставшееся время стана босса и превращает каждую неиспользованную секунду стана в гигантский множитель урона (до +3400%!), а затем возвращает боссу 25% новой жёлтой полоски стана!",
      "ult": "Тоже вызывает взрыв Totalize! На М0 выбирай в начале стана что-то одно (либо Ульту, либо Усиленную Е-шку), чтобы поглотить максимум оставшихся секунд стана.",
      "passive": "Создан специально под команду с ДВУМЯ СТАННЕРАМИ (Хьюго + Лайтер + Ликаон / Диалин / Цзюй Фуфу): за 2 станнеров в отряде получает +900 Атаки в бою, а Лайтер продлевает стан на +3 сек., увеличивая множитель Totalize до небес!"
    },
    "rotation": [
      "1. Поставь в отряд Хьюго + Лайтера + Ликаона (или Диалин / Цзюй Фуфу). Вне стана дерись только станнерами!",
      "2. Как только босс упал в стан → сдай Цепочку Хьюго → в первую же секунду стана нажми Усиленную Е-шку (или Ульту) для ваншота Totalize → босс сразу встаёт с 25% новой шкалы стана!"
    ],
    "wikiName": "Hugo_Vlad",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Hugo_Vlad_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Hugo_Vlad_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Hugo_Vlad_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_hugo.png",
    "scalingAxis": "crit_atk",
    "fieldStyle": "swap_burst_totalize",
    "anomalyStyle": "none",
    "teamConstraint": "prefers_double_stun",
    "vortexSynergy": 0,
    "stunWindowReliance": 10,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/5e/Agent_Hugo_Vlad_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/5e/Agent_Hugo_Vlad_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/99/Agent_Hugo_Vlad_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/99/Agent_Hugo_Vlad_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/7/7f/Agent_Hugo_Vlad_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/46/Agent_Hugo_Vlad_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Ellen",
    "name": "Эллен Джо (Ellen Joe)",
    "shortName": "Эллен",
    "role": "Attack",
    "roleRu": "Нападение (Ледяная Акула)",
    "element": "Ice",
    "elementRu": "Лёд",
    "faction": "Агентство «Виктория» (Victoria Housekeeping Co.)",
    "tier": "A",
    "version": "1.0",
    "color": "#38bdf8",
    "icon": "🦈",
    "sigWeapon": "deep_sea_visitor",
    "bestDiscs": [
      "polar_metal",
      "woodpecker_electro",
      "dawns_bloom"
    ],
    "dnaTags": [
      "ice",
      "attack_role",
      "crit",
      "basic",
      "dash"
    ],
    "needs": [
      "stun_lycaon_or_lighter",
      "support_astra_or_rina"
    ],
    "provides": [
      "ice_crit_dps"
    ],
    "addAbilityRule": {
      "types": [
        "element:Ice",
        "faction:Агентство «Виктория» (Victoria Housekeeping Co.)",
        "role:Stun"
      ],
      "desc": "В отряде есть агент стихии «Лёд», из «Агентства Виктория» или «Устрашение» (после баффа потенциала)"
    },
    "baseStats60": {
      "hp": 7673,
      "atk": 938,
      "def": 606,
      "critRate": 19.4,
      "critDmg": 50,
      "ap": 93,
      "am": 90
    },
    "combatTargets": {
      "critRate": {
        "val": 95,
        "unit": "%",
        "label": "Крит. шанс (С сигной в меню до 75–80% КШ!)",
        "note": "Сигнатурка Эллен даёт +20% КШ в бою! На М1 ещё +12% КШ в бою."
      },
      "critDmg": {
        "val": 200,
        "unit": "%",
        "label": "Крит. урон (КУ)",
        "note": "Пассивка Эллен сама даёт +100% Крит. урона на ударах с зарядами Льда!"
      },
      "atk": {
        "val": 3700,
        "unit": "",
        "label": "Атака",
        "note": "В бою под Астрой / Цезарь ~3700–4100."
      },
      "penRatio": {
        "val": 24,
        "unit": "%",
        "label": "Пробивание (PEN%)",
        "note": "Лучший 5-й диск, если в пачке Лайтер или Рина!"
      },
      "ap": {
        "val": 0,
        "unit": "",
        "label": "Знание аномалии (НЕ НУЖНО)",
        "note": "0."
      }
    },
    "preCombatBase": {
      "atk": 2950,
      "critRate": 76,
      "critDmg": 150,
      "penRatio": 24,
      "ap": 0
    },
    "mindscapeBonuses": {
      "1": {
        "critRateCombat": 12,
        "note": "М1: Заряженный рывок даёт сразу 6 зарядов Льда и +12% КШ в бою!"
      },
      "2": {
        "critDmgCombat": 60,
        "note": "М2: Третий удар ЛКМ сразу переходит в Е-шку, +60% КУ."
      }
    },
    "teamBuffs": {},
    "discMainStats": {
      "slot4": "Крит. урон% или Крит. шанс%",
      "slot5": "Пробивание (PEN%) или Урон Льда%",
      "slot6": "Атака%"
    },
    "talentPriority": [
      "Базовая атака (ЛКМ) ⭐⭐⭐⭐⭐",
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐",
      "Уклонение (Рывок) ⭐⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Вся суть Эллен — синие точки (Заряды мгновенной заморозки) под иконкой. Когда есть точки — 3-й удар ЛКМ и Ледяное лезвие бьют льдом с +100% Крит. урона от пассивки!",
      "special": "Усиленная Е-шка (Взмах хвостом) сразу даёт +1 точку льда и позволяет мгновенно перейти к самому сильному 3-му удару ЛКМ (без первых двух!).",
      "ult": "Огромный ледяной прыжок ножницами по площади.",
      "passive": "Зажать кнопку рывка (бега) + зажать ЛКМ = укус ножницами (+3 синие точки льда). После апгрейда потенциала у неё появилась широкая ледяная волна в конце комбо!"
    },
    "rotation": [
      "1. Зажми Рывок → зажми ЛКМ (+3 заряда льда).",
      "2. Спамь 3-й удар ЛКМ (или Е-шку → 3-й удар ЛКМ) под баффами Ликаона / Лайтера и Астры Яо!"
    ],
    "wikiName": "Ellen_Joe",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Ellen_Joe_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Ellen_Joe_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Ellen_Joe_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_ellen.png",
    "scalingAxis": "crit_atk",
    "fieldStyle": "main_onfield",
    "anomalyStyle": "none",
    "teamConstraint": "crit_hypercarry",
    "vortexSynergy": 0,
    "stunWindowReliance": 8,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/e/e3/Agent_Ellen_Joe_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/e/e3/Agent_Ellen_Joe_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/e/ed/Agent_Ellen_Joe_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/e/ed/Agent_Ellen_Joe_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/c9/Agent_Ellen_Joe_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/8/86/Agent_Ellen_Joe_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Harumasa",
    "name": "Асаба Харумаса (Asaba Harumasa)",
    "shortName": "Харумаса",
    "role": "Attack",
    "roleRu": "Нападение (Электро Рывки с Катанами)",
    "element": "Electric",
    "elementRu": "Электро",
    "faction": "Секция 6 (H.S.O.S. 6)",
    "tier": "A",
    "version": "1.4",
    "color": "#38bdf8",
    "icon": "🏹",
    "sigWeapon": "zanshin_herb_case",
    "bestDiscs": [
      "shadow_harmony",
      "thunder_metal",
      "woodpecker_electro"
    ],
    "dnaTags": [
      "electric",
      "attack_role",
      "crit",
      "dash",
      "stun_burst"
    ],
    "needs": [
      "stun_qingyi_or_trigger",
      "anomaly_or_support"
    ],
    "provides": [
      "rapid_dash_slashes_in_stun"
    ],
    "addAbilityRule": {
      "types": [
        "role:Stun",
        "role:Anomaly"
      ],
      "desc": "В отряде есть агент «Устрашения» или «Аномалии»"
    },
    "baseStats60": {
      "hp": 7405,
      "atk": 915,
      "def": 600,
      "critRate": 19.4,
      "critDmg": 50,
      "ap": 95,
      "am": 90
    },
    "combatTargets": {
      "critRate": {
        "val": 100,
        "unit": "%",
        "label": "Крит. шанс (Пассивка сама даёт +25% КШ на рывках!)",
        "note": "Пассивка Харумасы даёт +25% КШ его главным ударам из рывка! Если сверху есть сигна (+20% КШ) и сет «Гармония теней» (+12% КШ), в меню нужно всего 43–55% КШ! Без сигны собирай в меню до 63–75% КШ!"
      },
      "critDmg": {
        "val": 220,
        "unit": "%",
        "label": "Крит. урон (Пассивка даёт ещё +72% КУ!)",
        "note": "Его пассивка заливает +72% КУ на рывках, поэтому в меню также очень ценна Атака%!"
      },
      "atk": {
        "val": 3800,
        "unit": "",
        "label": "Атака",
        "note": "Очень любит высокую Атаку (3200+ до боя без бафферов или 2700+ с Астрой)."
      },
      "ap": {
        "val": 0,
        "unit": "",
        "label": "Знание аномалии (НЕ НУЖНО)",
        "note": "0."
      }
    },
    "preCombatBase": {
      "atk": 3100,
      "critRate": 62,
      "critDmg": 165,
      "penRatio": 0,
      "ap": 0
    },
    "mindscapeBonuses": {
      "1": {
        "dmgPct": 25,
        "note": "М1: Максимум до 14 колчанов = в 2 раза больше рывков подряд!"
      },
      "2": {
        "dmgPct": 35,
        "note": "М2: Цепочка/Ульта усиливает следующие 7 рывков на +50% урона."
      }
    },
    "teamBuffs": {},
    "discMainStats": {
      "slot4": "Крит. урон% или Атака% (НЕ перекапай КШ!)",
      "slot5": "Урон Электро% или Атака%",
      "slot6": "Атака%"
    },
    "talentPriority": [
      "Уклонение (Атака в рывке!) ⭐⭐⭐⭐⭐",
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐",
      "Базовая атака ⭐⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Выпускает на землю до 6 электро-ловушек (Колчанов). Если зажать ЛКМ (выстрел из лука по ловушкам) — враг помечается крестом (X-Mark)!",
      "special": "Усиленная Е-шка И любая Цепочка атак мгновенно кидают 6 ловушек и сразу вешают крест!",
      "ult": "Огромный залп из лука в окно стана.",
      "passive": "Пока на враге горит крест — жми Рывок + ЛКМ: Харумаса телепортируется сквозь босса с двумя катанами 3 раза подряд (с врождёнными +25% КШ и +72% КУ от пассивки!). А каждое наложение стана или аномалии автоматически рождает новые 6 ловушек!"
    },
    "rotation": [
      "1. Оглуши босса через Цинъи / Триггер / Диалин → проведи Цепочку атак Харумасы (появилось 6 ловушек и крест).",
      "2. Сделай 3 рывка с катанами → зажми Е-шку (ещё 6 ловушек) → ещё 3 рывка с катанами → Ульта!"
    ],
    "wikiName": "Asaba_Harumasa",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Asaba_Harumasa_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Asaba_Harumasa_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Asaba_Harumasa_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_harumasa.png",
    "scalingAxis": "crit_atk",
    "fieldStyle": "swap_burst_stun",
    "anomalyStyle": "none",
    "teamConstraint": "stun_burst_dash_carry",
    "vortexSynergy": 0,
    "stunWindowReliance": 10,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/f6/Agent_Asaba_Harumasa_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/f6/Agent_Asaba_Harumasa_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/fe/Agent_Asaba_Harumasa_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/fe/Agent_Asaba_Harumasa_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/de/Agent_Asaba_Harumasa_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/45/Agent_Asaba_Harumasa_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Qingyi",
    "name": "Цинъи (Qingyi)",
    "shortName": "Цинъи",
    "role": "Stun",
    "roleRu": "Устрашение (+80% Множителя Уязвимости)",
    "element": "Electric",
    "elementRu": "Электро",
    "faction": "Особая группа угрозыска (C.I.S.R.T.)",
    "tier": "A",
    "version": "1.1",
    "color": "#38bdf8",
    "icon": "🫖",
    "sigWeapon": "ice_jade_teapot",
    "bestDiscs": [
      "king_of_the_summit",
      "shockstar_disco",
      "swing_jazz"
    ],
    "dnaTags": [
      "stun_role",
      "electric",
      "impact",
      "daze",
      "basic",
      "team_crit_dmg"
    ],
    "needs": [
      "attack_ally"
    ],
    "provides": [
      "stun_vuln_multiplier_plus_80",
      "fast_aoe_daze"
    ],
    "addAbilityRule": {
      "types": [
        "role:Attack",
        "faction:Особая группа угрозыска (C.I.S.R.T.)"
      ],
      "desc": "В отряде есть агент «Нападения» или из фракции «Угрозыск»"
    },
    "baseStats60": {
      "hp": 8250,
      "atk": 758,
      "def": 612,
      "critRate": 5,
      "critDmg": 50,
      "impact": 136
    },
    "combatTargets": {
      "impact": {
        "val": 200,
        "unit": "",
        "label": "Импульс (КАП: каждый 1 Импульса > 120 даёт +6 Атаки!)",
        "note": "При ~195–220 Импульса в бою Цинъи получает максимум (+600 Атаки) от пассивки и мгновенно станит босса."
      },
      "critRate": {
        "val": 52,
        "unit": "%",
        "label": "Крит. шанс (≥50% под Короля вершины)",
        "note": "Для раздачи +30% КУ отряду."
      },
      "ap": {
        "val": 0,
        "unit": "",
        "label": "Знание аномалии (НЕ НУЖНО)",
        "note": "0."
      }
    },
    "preCombatBase": {
      "impact": 192,
      "critRate": 52,
      "critDmg": 95,
      "atk": 2200,
      "ap": 0
    },
    "mindscapeBonuses": {
      "1": {
        "defShred": 15,
        "note": "М1: Зажатая ЛКМ режет 15% Защиты босса и даёт +20% КШ самой Цинъи!"
      },
      "2": {
        "dmgPct": 28,
        "note": "М2: Множитель уязвимости в стане вырастает с +80% до +108%!"
      }
    },
    "teamBuffs": {
      "dmgPct": 80,
      "critDmg": 30
    },
    "discMainStats": {
      "slot4": "Крит. шанс%",
      "slot5": "Урон Электро% или Атака%",
      "slot6": "Импульс%"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Базовая атака (ЛКМ) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Уклонение ⭐⭐⭐"
    ],
    "skillsRazer": {
      "basic": "ДОЛБИ ЛКМ (3-й удар — бесконечная электро-долбёжка об пол!), чтобы заполнить шкалу Напряжения до >75% (горит оранжевым). Когда оранжевая — ЗАЖМИ ЛКМ: Цинъи делает 5 рывков вперёд и вешает на босса до +80% Множителя уязвимости в стане!",
      "special": "Усиленная Е-шка подбрасывает в воздух и позволяет сразу перейти к 3-му удару (электро-долбёжке).",
      "ult": "Вбивает всех врагов в стан и заливает 80% шкалы Напряжения.",
      "passive": "Превращает стандартный стан босса (150%) в 230% получаемого урона! Идеальна для Харумасы, Чжу Юань и любых бурст-атакеров."
    },
    "rotation": [
      "1. Жми Е-шку → спамь 3-й удар ЛКМ до оранжевой шкалы (75%+).",
      "2. Зажми ЛКМ на 5 ударов (отпусти кнопку на финальном 5-м выпаде для идеального уклонения) → босс получает +80% уязвимости и падает в стан!"
    ],
    "wikiName": "Qingyi",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Qingyi_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Qingyi_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Qingyi_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_qingyi.png",
    "scalingAxis": "stun_vuln_multiplier",
    "fieldStyle": "onfield_stun",
    "anomalyStyle": "none",
    "teamConstraint": "burst_crit_stunner",
    "vortexSynergy": 0,
    "stunWindowReliance": 10,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d3/Agent_Qingyi_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d3/Agent_Qingyi_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/39/Agent_Qingyi_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/39/Agent_Qingyi_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/c6/Agent_Qingyi_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/41/Agent_Qingyi_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Grace",
    "name": "Грейс Ховард (Grace Howard)",
    "shortName": "Грейс",
    "role": "Anomaly",
    "roleRu": "Аномалия (Быстрый Шок)",
    "element": "Electric",
    "elementRu": "Электро",
    "faction": "Комбинат «Белобог» (Belobog Heavy Industries)",
    "tier": "A",
    "version": "1.0",
    "color": "#818cf8",
    "icon": "🔧",
    "sigWeapon": "fusion_compiler",
    "bestDiscs": [
      "freedom_blues",
      "chaos_jazz",
      "thunder_metal"
    ],
    "dnaTags": [
      "electric",
      "anomaly_role",
      "ap_buff",
      "pen",
      "ex_special"
    ],
    "needs": [
      "electric_or_anomaly_ally"
    ],
    "provides": [
      "fast_shock_buildup",
      "shock_dmg_amplify_36"
    ],
    "addAbilityRule": {
      "types": [
        "element:Electric",
        "faction:Комбинат «Белобог» (Belobog Heavy Industries)"
      ],
      "desc": "В отряде есть агент стихии «Электро» или из «Комбината Белобог»"
    },
    "baseStats60": {
      "hp": 7482,
      "atk": 825,
      "def": 600,
      "critRate": 5,
      "critDmg": 50,
      "ap": 324,
      "am": 152
    },
    "combatTargets": {
      "ap": {
        "val": 420,
        "unit": "",
        "label": "Знание аномалии (AP — ГЛАВНЫЙ СТАТ)",
        "note": "Стремись к 380–440 AP."
      },
      "atk": {
        "val": 3300,
        "unit": "",
        "label": "Атака",
        "note": "3200–3600 в бою."
      },
      "penRatio": {
        "val": 32,
        "unit": "%",
        "label": "Пробивание (PEN%)",
        "note": "С сигной (+24% PEN%) и Риной (+30% PEN%) пробивает броню боссов навылет."
      },
      "critRate": {
        "val": 0,
        "unit": "%",
        "label": "Крит. шанс (НЕ НУЖЕН!)",
        "note": "0%."
      },
      "critDmg": {
        "val": 0,
        "unit": "%",
        "label": "Крит. урон (НЕ НУЖЕН!)",
        "note": "0%."
      }
    },
    "preCombatBase": {
      "ap": 390,
      "atk": 2750,
      "am": 190,
      "penRatio": 24,
      "critRate": 0,
      "critDmg": 0
    },
    "mindscapeBonuses": {
      "1": {
        "erPctPre": 15,
        "note": "М1: 4-й удар ЛКМ заливает энергию всему отряду!"
      },
      "2": {
        "resShred": 8.5,
        "note": "М2: Гранаты режут сопротивление Электро и накоплению Шока."
      }
    },
    "teamBuffs": {},
    "discMainStats": {
      "slot4": "Знание аномалии (AP)",
      "slot5": "Пробивание (PEN%) или Урон Электро%",
      "slot6": "Контроль аномалии (AM%) или Атака%"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐",
      "Базовая атака ⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐",
      "Уклонение ⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Стреляет из гвоздемёта на бегу (не прерывая серию при уклонении!), набирая 8 синих делений Заряда.",
      "special": "Когда все 8 делений Заряда полные — нажми Е-шку (даже обычную без энергии!): Грейс кинет усиленную электро-гранату с +130% накопления Шока и +36% к урону тиков Шока!",
      "ult": "Гигантская связка гранат для мгновенного закрытия кружка Электро.",
      "passive": "Быстрый аппликатор Шока для Хаос-команд или связки с Риной и Харумасой."
    },
    "rotation": [
      "1. Сделай 3–4 выстрела с руки до 8 зарядов → кинь гранату (Е) → ещё 3–4 выстрела → Усиленная граната (EX Е) = враг в Шоке!"
    ],
    "wikiName": "Grace_Howard",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Grace_Howard_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Grace_Howard_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Grace_Howard_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_grace.png",
    "scalingAxis": "pure_anomaly_ap",
    "fieldStyle": "quickswap_driver",
    "anomalyStyle": "rapid_electric_shock_bar",
    "teamConstraint": "fast_shock_applier",
    "vortexSynergy": 7,
    "stunWindowReliance": 3,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/9a/Agent_Grace_Howard_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/9a/Agent_Grace_Howard_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/e/e6/Agent_Grace_Howard_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/e/e6/Agent_Grace_Howard_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/7/71/Agent_Grace_Howard_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/fe/Agent_Grace_Howard_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Koleda",
    "name": "Коляда Белобог (Koleda Belobog)",
    "shortName": "Коляда",
    "role": "Stun",
    "roleRu": "Устрашение (Взрывной Молот + Бафф Цепочек/Увечья)",
    "element": "Fire",
    "elementRu": "Огонь",
    "faction": "Комбинат «Белобог» (Belobog Heavy Industries)",
    "tier": "A",
    "version": "1.0",
    "color": "#ef4444",
    "icon": "🔨",
    "sigWeapon": "hellfire_gears",
    "bestDiscs": [
      "king_of_the_summit",
      "shockstar_disco",
      "swing_jazz"
    ],
    "dnaTags": [
      "stun_role",
      "fire",
      "impact",
      "daze",
      "chain_ult",
      "ex_special"
    ],
    "needs": [
      "fire_or_armorer_or_attack_ally"
    ],
    "provides": [
      "chain_dmg_buff_70",
      "instant_ex_daze",
      "laceration_buff_v32"
    ],
    "addAbilityRule": {
      "types": [
        "element:Fire",
        "faction:Комбинат «Белобог» (Belobog Heavy Industries)",
        "role:Attack",
        "role:Armorer"
      ],
      "desc": "В отряде есть агент стихии «Огонь», из «Белобога» или (с баффом 3.2) «Нападение» / «Броненосец»"
    },
    "baseStats60": {
      "hp": 8127,
      "atk": 736,
      "def": 594,
      "critRate": 5,
      "critDmg": 50,
      "impact": 134
    },
    "combatTargets": {
      "impact": {
        "val": 192,
        "unit": "",
        "label": "Импульс (Impact)",
        "note": "6-й диск на Импульс%."
      },
      "critRate": {
        "val": 52,
        "unit": "%",
        "label": "Крит. шанс (≥50% под Короля вершины)",
        "note": "Для раздачи +30% КУ отряду."
      },
      "ap": {
        "val": 0,
        "unit": "",
        "label": "Знание аномалии (НЕ НУЖНО)",
        "note": "0."
      }
    },
    "preCombatBase": {
      "impact": 192,
      "critRate": 52,
      "critDmg": 90,
      "atk": 2050,
      "ap": 0
    },
    "mindscapeBonuses": {
      "1": {
        "dazePct": 15,
        "note": "М1: Усиленная Е-шка после 2-го/4-го удара ЛКМ наносит +15% Оглушения."
      },
      "2": {
        "erPctPre": 20,
        "note": "М2: Попадание Усиленной Е-шкой возвращает 60 энергии раз в 45 сек.!"
      }
    },
    "teamBuffs": {
      "dmgPct": 35,
      "critDmg": 30
    },
    "discMainStats": {
      "slot4": "Крит. шанс%",
      "slot5": "Урон Огня% или Атака%",
      "slot6": "Импульс%"
    },
    "talentPriority": [
      "Особая атака (Е) ⭐⭐⭐⭐⭐",
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Помощь ⭐⭐⭐⭐",
      "Базовая атака ⭐⭐⭐"
    ],
    "skillsRazer": {
      "basic": "После взрыва Е-шки или уклонения молот Коляды раскаляется (Печной жар): 3-й и 4-й удары ЛКМ бьют с огненным взрывом и неуязвимостью.",
      "special": "Один из самых быстрых бурст-станов игры: нажала Усиленную Е-шку → снесла сразу треть жёлтой полоски босса и повесила дебафф (в стане все Цепочки атак отряда бьют до +70% больнее, что обожает Эвелин!).",
      "ult": "Гигантский взрыв молота по земле с огромным Оглушением.",
      "passive": "В патче 3.2 получила официальный бафф потенциала (теперь умеет баффать и Рассечение Броненосцев для Кларет, если у тебя нет Рокси, а также отлично работает с Эвелин и Солдатом 11!)."
    },
    "rotation": [
      "1. Выйди через Помощь в защите на Коляду → сдай Усиленную Е-шку (моментальный пробой стана + бафф Цепочек и Короля вершины)!"
    ],
    "wikiName": "Koleda_Belobog",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Koleda_Belobog_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Koleda_Belobog_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Koleda_Belobog_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_koleda.png",
    "scalingAxis": "stun_chain_laceration_amp",
    "fieldStyle": "quickswap_stun",
    "anomalyStyle": "none",
    "teamConstraint": "chain_and_armorer_stunner",
    "vortexSynergy": 0,
    "stunWindowReliance": 9,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d6/Agent_Koleda_Belobog_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d6/Agent_Koleda_Belobog_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/a/a8/Agent_Koleda_Belobog_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/a/a8/Agent_Koleda_Belobog_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/e/e5/Agent_Koleda_Belobog_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/90/Agent_Koleda_Belobog_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Lycaon",
    "name": "Фон Ликаон (Von Lycaon)",
    "shortName": "Ликаон",
    "role": "Stun",
    "roleRu": "Устрашение (-25% Резиста Льда +35% Стана)",
    "element": "Ice",
    "elementRu": "Лёд",
    "faction": "Агентство «Виктория» (Victoria Housekeeping Co.)",
    "tier": "A",
    "version": "1.0",
    "color": "#38bdf8",
    "icon": "🐺",
    "sigWeapon": "the_restrained",
    "bestDiscs": [
      "king_of_the_summit",
      "shockstar_disco",
      "swing_jazz"
    ],
    "dnaTags": [
      "stun_role",
      "ice",
      "impact",
      "daze",
      "basic",
      "team_crit_dmg"
    ],
    "needs": [
      "ice_dps_miyabi_hugo_ellen_sigrid"
    ],
    "provides": [
      "ice_res_shred_25",
      "stun_multiplier_plus_35"
    ],
    "addAbilityRule": {
      "types": [
        "element:Ice",
        "element:Frost",
        "faction:Агентство «Виктория» (Victoria Housekeeping Co.)"
      ],
      "desc": "В отряде есть агент стихии «Лёд» / «Мороз» или из «Агентства Виктория»"
    },
    "baseStats60": {
      "hp": 8416,
      "atk": 728,
      "def": 606,
      "critRate": 5,
      "critDmg": 50,
      "impact": 137
    },
    "combatTargets": {
      "impact": {
        "val": 194,
        "unit": "",
        "label": "Импульс (Impact)",
        "note": "6-й диск на Импульс%."
      },
      "critRate": {
        "val": 52,
        "unit": "%",
        "label": "Крит. шанс (≥50% под Короля вершины)",
        "note": "Раздаёт +30% Крит. урона всей команде."
      },
      "ap": {
        "val": 0,
        "unit": "",
        "label": "Знание аномалии (НЕ НУЖНО)",
        "note": "0."
      }
    },
    "preCombatBase": {
      "impact": 194,
      "critRate": 52,
      "critDmg": 95,
      "atk": 2100,
      "ap": 0
    },
    "mindscapeBonuses": {
      "1": {
        "dazePct": 26,
        "note": "М1: Заряженная Е-шка вносит на 26% больше Оглушения."
      },
      "2": {
        "erPctPre": 20,
        "note": "М2: Заливает энергию за каждый стан и заморозку."
      }
    },
    "teamBuffs": {
      "resShred": 25,
      "dmgPct": 35,
      "critDmg": 30
    },
    "discMainStats": {
      "slot4": "Крит. шанс%",
      "slot5": "Урон Льда% или Атака%",
      "slot6": "Импульс%"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Базовая атака (Зажатая!) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Помощь ⭐⭐⭐"
    ],
    "skillsRazer": {
      "basic": "ВСЕГДА ЗАЖИМАЙ каждый удар ЛКМ и Е-шки: его ноги покрываются льдом и вносят на 80% больше Оглушения!",
      "special": "Зажатая Усиленная Е-шка моментально срезает врагу 25% сопротивления Льду на 30 секунд (даже вне стана!) и даёт полную неуязвимость.",
      "ult": "Мощная серия ледяных пинков по области.",
      "passive": "Как только Ликаон касается оглушённого врага любой атакой — множитель уязвимости в стане вырастает ещё на +35% (до 185%)! Лучший бесплатный станнер для Хьюго (в паре с Лайтером), Эллен, Сигрид и Мияби."
    },
    "rotation": [
      "1. Нажми Усиленную Е-шку Ликаона, чтобы сразу срезать 25% крио-резиста врага.",
      "2. Когда враг упал в стан — ударь его Ликаоном/проведи его Цепочку для активации +35% множителя стана и +30% КУ от сета!"
    ],
    "wikiName": "Von_Lycaon",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Von_Lycaon_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Von_Lycaon_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Von_Lycaon_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_lycaon.png",
    "scalingAxis": "stun_ice_res_shred",
    "fieldStyle": "quickswap_stun",
    "anomalyStyle": "none",
    "teamConstraint": "ice_dedicated_stunner",
    "vortexSynergy": 0,
    "stunWindowReliance": 10,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/5f/Agent_Von_Lycaon_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/5f/Agent_Von_Lycaon_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/2/2f/Agent_Von_Lycaon_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/2/2f/Agent_Von_Lycaon_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/e/e7/Agent_Von_Lycaon_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/c1/Agent_Von_Lycaon_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Soldier 11",
    "name": "Солдат 11 (Soldier 11)",
    "shortName": "Солдат 11",
    "role": "Attack",
    "roleRu": "Нападение (Огненный Ритм ЛКМ)",
    "element": "Fire",
    "elementRu": "Огонь",
    "faction": "Отряд Обол (Obol Squad)",
    "tier": "A",
    "version": "1.0",
    "color": "#ef4444",
    "icon": "🗡️",
    "sigWeapon": "the_brimstone",
    "bestDiscs": [
      "dawns_bloom",
      "inferno_metal",
      "woodpecker_electro"
    ],
    "dnaTags": [
      "fire",
      "attack_role",
      "crit",
      "basic"
    ],
    "needs": [
      "stun_lighter_or_ju_fufu",
      "support_astra_or_caesar"
    ],
    "provides": [
      "sustained_fire_basic_dps"
    ],
    "addAbilityRule": {
      "types": [
        "element:Fire",
        "faction:Отряд Обол (Obol Squad)"
      ],
      "desc": "В отряде есть агент стихии «Огонь» или из фракции «Отряд Обол»"
    },
    "baseStats60": {
      "hp": 7673,
      "atk": 888,
      "def": 612,
      "critRate": 19.4,
      "critDmg": 50,
      "ap": 93,
      "am": 90
    },
    "combatTargets": {
      "critRate": {
        "val": 90,
        "unit": "%",
        "label": "Крит. шанс (С Инферно-металлом до 72% в меню!)",
        "note": "Если носишь 4 куска «Инферно-металла» (+28% КШ по горящему врагу), в меню собирай максимум 72% КШ. С «Цветением рассвета» — 80–90% КШ."
      },
      "critDmg": {
        "val": 190,
        "unit": "%",
        "label": "Крит. урон (КУ)",
        "note": "180–210% КУ в бою."
      },
      "atk": {
        "val": 3800,
        "unit": "",
        "label": "Атака",
        "note": "С пушкой «Сера» и Астрой / Цезарь в бою легко пробивает 4000+ Атаки."
      },
      "penRatio": {
        "val": 24,
        "unit": "%",
        "label": "Пробивание (PEN%)",
        "note": "Лучший 5-й диск, так как пассивка самой Солдат 11 уже даёт ей +102.5% урона Огня в стане!"
      },
      "ap": {
        "val": 0,
        "unit": "",
        "label": "Знание аномалии (НЕ НУЖНО)",
        "note": "0."
      }
    },
    "preCombatBase": {
      "atk": 3000,
      "critRate": 75,
      "critDmg": 155,
      "penRatio": 24,
      "ap": 0
    },
    "mindscapeBonuses": {
      "1": {
        "erPctPre": 20,
        "note": "М1: Сразу 40 энергии при выходе в бой."
      },
      "2": {
        "dmgPct": 36,
        "note": "М2: До +36% урона Огненного подавления!"
      }
    },
    "teamBuffs": {},
    "discMainStats": {
      "slot4": "Крит. урон% или Крит. шанс%",
      "slot5": "Пробивание (PEN%) (Обязательно при игре с Лайтером!)",
      "slot6": "Атака%"
    },
    "talentPriority": [
      "Базовая атака (ЛКМ) ⭐⭐⭐⭐⭐",
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Уклонение ⭐⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Не долби ЛКМ бездумно! Жми кнопку удара РОВНО В ТАКТ (с паузой 0.3 сек. после взмаха меча) — тогда меч вспыхивает пламенем (Огненное подавление) и бьёт в 2 раза сильнее!",
      "special": "Нажатие Усиленной Е-шки даёт тебе 15 секунд (или 8 ударов) АВТОМАТИЧЕСКОГО огненного меча БЕЗ необходимости ловить тайминги!",
      "ult": "И Ульта, и Цепочка атак тоже включают автоматический огненный меч на 8 ударов подряд!",
      "passive": "С выходом сета «Цветение рассвета» (+55% урона ЛКМ) и станнеров Лайтера / Триггер / Орфи (Отряд Обол) Солдат 11 выдаёт отличный стабильный урон."
    },
    "rotation": [
      "1. Оглуши врага через Лайтера / Триггер / Цзюй Фуфу → выйди по Цепочке атак на Солдат 11.",
      "2. Жми Е-шку и просто закликивай ЛКМ (16 гарантированных огненных ударов после Цепочки + Е-шки + Ульты)!"
    ],
    "wikiName": "Soldier_11",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Soldier_11_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Soldier_11_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Soldier_11_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_soldier_11.png",
    "scalingAxis": "crit_atk",
    "fieldStyle": "main_onfield",
    "anomalyStyle": "none",
    "teamConstraint": "crit_hypercarry",
    "vortexSynergy": 0,
    "stunWindowReliance": 8,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/36/Agent_Soldier_11_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/36/Agent_Soldier_11_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/62/Agent_Soldier_11_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/62/Agent_Soldier_11_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/b4/Agent_Soldier_11_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/35/Agent_Soldier_11_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Nekomata",
    "name": "Некомата (Nekomiya Mana)",
    "shortName": "Некомата",
    "role": "Attack",
    "roleRu": "Нападение (Физ. Кошка / Удары в спину)",
    "element": "Physical",
    "elementRu": "Физический",
    "faction": "Хитрые Зайцы (Cunning Hares)",
    "tier": "A",
    "version": "1.0",
    "color": "#fbbf24",
    "icon": "🐾",
    "sigWeapon": "steel_cushion",
    "bestDiscs": [
      "fanged_metal",
      "woodpecker_electro",
      "white_water_ballad"
    ],
    "dnaTags": [
      "physical",
      "attack_role",
      "crit",
      "dodge_counter",
      "ex_special",
      "assault"
    ],
    "needs": [
      "stun_dialyn_or_support_astra"
    ],
    "provides": [
      "fast_phys_burst"
    ],
    "addAbilityRule": {
      "types": [
        "element:Physical",
        "faction:Хитрые Зайцы (Cunning Hares)"
      ],
      "desc": "В отряде есть агент стихии «Физический» или из фракции «Хитрые Зайцы»"
    },
    "baseStats60": {
      "hp": 7560,
      "atk": 910,
      "def": 587,
      "critRate": 19.4,
      "critDmg": 50,
      "ap": 96,
      "am": 90
    },
    "combatTargets": {
      "critRate": {
        "val": 95,
        "unit": "%",
        "label": "Крит. шанс (КШ)",
        "note": "С сигной (+24% КШ) легко собирает 85–95% КШ."
      },
      "critDmg": {
        "val": 195,
        "unit": "%",
        "label": "Крит. урон (КУ)",
        "note": "180–210% КУ в бою."
      },
      "atk": {
        "val": 3700,
        "unit": "",
        "label": "Атака",
        "note": "3600–4000 в бою."
      },
      "ap": {
        "val": 0,
        "unit": "",
        "label": "Знание аномалии (НЕ НУЖНО)",
        "note": "0."
      }
    },
    "preCombatBase": {
      "atk": 2900,
      "critRate": 85,
      "critDmg": 155,
      "penRatio": 0,
      "ap": 0
    },
    "mindscapeBonuses": {
      "1": {
        "resShred": 16,
        "note": "М1: В стане ВСЕ удары Некоматы считаются ударами в спину и игнорируют 16% физ-резиста!"
      },
      "2": {
        "erPctPre": 25,
        "note": "М2: +25% энергии против одиночного босса."
      }
    },
    "teamBuffs": {},
    "discMainStats": {
      "slot4": "Крит. урон%",
      "slot5": "Урон Физический% или PEN%",
      "slot6": "Атака%"
    },
    "talentPriority": [
      "Особая атака (Е) ⭐⭐⭐⭐⭐",
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Базовая атака и Уклонение ⭐⭐⭐⭐",
      "Помощь ⭐⭐"
    ],
    "skillsRazer": {
      "basic": "ЗАЖМИ ЛКМ на первом ударе, чтобы Некомата проскользнула сквозь босса ему ЗА СПИНУ (активируя +25% урона от сигны «Стальная лапа»!).",
      "special": "После каждого уклонения или Быстрой помощи пассивка даёт ей +60% ко всему урону на 6 сек., а срабатывание Натиска усиливает следующую Усиленную Е-шку до +70%!",
      "ult": "Огромный кошачий разрез по площади.",
      "passive": "В паре с Диалин (физ. станнер) + Сунна / Астра Яо / Юдзуха закрывает свою Доп. способность и реализует сет «Клыкастый металл»."
    },
    "rotation": [
      "1. Выйди на Некомату через Быструю помощь (+60% урона от пассивки!).",
      "2. После срабатывания Натиска и стана босса прожми Усиленную Е-шку и Ульту в спину!"
    ],
    "wikiName": "Nekomiya_Mana",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Nekomiya_Mana_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Nekomiya_Mana_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Nekomiya_Mana_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_nekomata.png",
    "scalingAxis": "crit_atk",
    "fieldStyle": "main_onfield",
    "anomalyStyle": "none",
    "teamConstraint": "crit_hypercarry",
    "vortexSynergy": 0,
    "stunWindowReliance": 8,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/bc/Agent_Nekomiya_Mana_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/bc/Agent_Nekomiya_Mana_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d0/Agent_Nekomiya_Mana_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d0/Agent_Nekomiya_Mana_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/a/af/Agent_Nekomiya_Mana_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/60/Agent_Nekomiya_Mana_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Zhu Yuan",
    "name": "Чжу Юань (Zhu Yuan)",
    "shortName": "Чжу Юань",
    "role": "Attack",
    "roleRu": "Нападение (Эфирный Дробовик в Стан)",
    "element": "Ether",
    "elementRu": "Эфир",
    "faction": "Особая группа угрозыска (C.I.S.R.T.)",
    "tier": "B",
    "version": "1.0",
    "color": "#a855f7",
    "icon": "🔫",
    "sigWeapon": "riot_suppressor_mk6",
    "bestDiscs": [
      "the_sky_ablaze",
      "chaotic_metal",
      "hormone_punk"
    ],
    "dnaTags": [
      "ether",
      "attack_role",
      "crit",
      "basic",
      "stun_burst"
    ],
    "needs": [
      "stun_qingyi_or_nangong",
      "support_astra_or_lucia"
    ],
    "provides": [
      "ether_shotgun_stun_burst"
    ],
    "addAbilityRule": {
      "types": [
        "role:Support",
        "faction:Особая группа угрозыска (C.I.S.R.T.)"
      ],
      "desc": "В отряде есть агент «Поддержки» или из фракции «Угрозыск»"
    },
    "baseStats60": {
      "hp": 7482,
      "atk": 919,
      "def": 600,
      "critRate": 5,
      "critDmg": 78.8,
      "ap": 92,
      "am": 90
    },
    "combatTargets": {
      "critRate": {
        "val": 100,
        "unit": "%",
        "label": "Крит. шанс (Пассивка сама даёт +30% КШ в бою! С сигной +45% КШ!)",
        "note": "ВНИМАНИЕ: Пассивка Чжу Юань даёт +30% КШ в бою! А с её сигной (+15% КШ в бою) она получает +45% КШ прямо в бою! Значит В МЕНЮ ДО БОЯ собирай максимум 55% КШ (с сигной) или 70% КШ (без сигны)!"
      },
      "critDmg": {
        "val": 230,
        "unit": "%",
        "label": "Крит. урон (КУ)",
        "note": "У неё врождённый КУ в возвышении + 48% на сигне + 30% от сета «Пылающее небо» = легко 220–260% КУ!"
      },
      "atk": {
        "val": 4000,
        "unit": "",
        "label": "Атака",
        "note": "Обожает 4-й или 5-й диск на Атаку% (если без 2 бафферов Атаки), так как пассивка уже даёт +80% урона в стане!"
      },
      "ap": {
        "val": 0,
        "unit": "",
        "label": "Знание аномалии (НЕ НУЖНО)",
        "note": "0."
      }
    },
    "preCombatBase": {
      "atk": 3150,
      "critRate": 55,
      "critDmg": 195,
      "penRatio": 0,
      "ap": 0
    },
    "mindscapeBonuses": {
      "1": {
        "dmgPct": 30,
        "note": "М1 (КЛЮЧЕВАЯ!): Цепочка и Ульта мгновенно перезаряжают 6–9 патронов без паузы!"
      },
      "2": {
        "dmgPct": 50,
        "note": "М2: Ещё +50% урона эфирной картечью."
      }
    },
    "teamBuffs": {},
    "discMainStats": {
      "slot4": "Крит. урон% или Атака% (НЕ ставь КШ%, если уже 55–70% КШ в меню!)",
      "slot5": "Урон Эфира% или Атака%",
      "slot6": "Атака%"
    },
    "talentPriority": [
      "Базовая атака (Картечь!) ⭐⭐⭐⭐⭐",
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐⭐",
      "Особая атака (Е) ⭐⭐⭐",
      "Помощь ⭐⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Копи до 9 фиолетовых патронов картечи (через Е-шку, Цепочку, Ульту и Быструю помощь). Когда босс упал в стан — ЗАЖМИ ЛКМ и отстреливай все патроны с перекатами в сторону (каждый патрон в стане бьёт на +80% сильнее от пассивки!).",
      "special": "Усиленная Е-шка мгновенно заряжает 3 патрона и включает +30% Крит. шанса в бою на 10 секунд!",
      "ult": "Заливает ещё 3 патрона, включает +30% КШ и наносит мощный залп из ракетомёта.",
      "passive": "Чистый бурст-дамагер в окно Оглушения. Помни про +30% КШ от её собственной пассивки (и ещё +15% от сигны), чтобы не собрать лишний Крит. шанс в меню!"
    },
    "rotation": [
      "1. Оглуши босса через Цинъи / Наньгун Юй / Диалин под песней Астры Яо.",
      "2. Выйди по Цепочке на Чжу Юань → зажми ЛКМ (отстреляй 9 патронов) → Е-шка + Ульта (+6 новых патронов) → снова зажми ЛКМ!"
    ],
    "wikiName": "Zhu_Yuan",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Zhu_Yuan_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Zhu_Yuan_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Zhu_Yuan_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_zhu_yuan.png",
    "scalingAxis": "crit_atk",
    "fieldStyle": "swap_burst_stun",
    "anomalyStyle": "none",
    "teamConstraint": "stun_burst_hypercarry",
    "vortexSynergy": 0,
    "stunWindowReliance": 10,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/0/07/Agent_Zhu_Yuan_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/0/07/Agent_Zhu_Yuan_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/fb/Agent_Zhu_Yuan_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/fb/Agent_Zhu_Yuan_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/8/8d/Agent_Zhu_Yuan_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/33/Agent_Zhu_Yuan_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  },
  {
    "id": "Caesar",
    "name": "Цезарь Кинг (Caesar King)",
    "shortName": "Цезарь",
    "role": "Defense",
    "roleRu": "Оборона (Щит Анти-Стаггера + 1000 Атаки)",
    "element": "Physical",
    "elementRu": "Физический",
    "faction": "Сыны Калидона (Sons of Calydon)",
    "tier": "B",
    "version": "1.2",
    "color": "#a3e635",
    "icon": "🛡️",
    "sigWeapon": "tusks_of_fury",
    "bestDiscs": [
      "proto_punk",
      "bunny_in_wonderland",
      "shockstar_disco"
    ],
    "dnaTags": [
      "defense_role",
      "physical",
      "impact",
      "shield",
      "team_dmg",
      "atk_scaling"
    ],
    "needs": [
      "defensive_assist_ally"
    ],
    "provides": [
      "atk_buff_1000",
      "dmg_taken_debuff_25",
      "super_armor_shield",
      "fast_parry_daze"
    ],
    "addAbilityRule": {
      "types": [
        "role:Attack",
        "role:Anomaly",
        "role:Stun",
        "role:Rupture",
        "role:Armorer",
        "faction:Сыны Калидона (Sons of Calydon)"
      ],
      "desc": "В отряде есть любой герой с Помощью в защите (золотым блоком) или из «Сынов Калидона»"
    },
    "baseStats60": {
      "hp": 9526,
      "atk": 711,
      "def": 753,
      "critRate": 5,
      "critDmg": 50,
      "impact": 123
    },
    "combatTargets": {
      "impact": {
        "val": 185,
        "unit": "",
        "label": "Импульс (ГЛАВНЫЙ СТАТ ЩИТА!)",
        "note": "Прочность щита Цезарь зависит НЕ от Защиты и НЕ от ХП, а от её ИМПУЛЬСА (Impact)! Ставь 6-й диск и пушку на Импульс%!"
      },
      "critRate": {
        "val": 0,
        "unit": "%",
        "label": "Крит. шанс (НЕ НУЖЕН)",
        "note": "0%."
      },
      "critDmg": {
        "val": 0,
        "unit": "%",
        "label": "Крит. урон (НЕ НУЖЕН)",
        "note": "0%."
      }
    },
    "preCombatBase": {
      "impact": 185,
      "hp": 13500,
      "def": 1200,
      "atk": 1800,
      "critRate": 0,
      "critDmg": 0
    },
    "mindscapeBonuses": {
      "1": {
        "resShred": 15,
        "note": "М1: Щит даётся сразу со старта боя и режет 15% ВСЕХ резистов врагов вокруг!"
      },
      "2": {
        "teamAtkBuffExtra": 500,
        "note": "М2: Бафф Атаки от щита вырастает с +1000 до +1500 Атаки!"
      }
    },
    "teamBuffs": {
      "flatAtk": 1000,
      "dmgPct": 25
    },
    "discMainStats": {
      "slot4": "ХП% или Атака%",
      "slot5": "Физический урон% или ХП%",
      "slot6": "Импульс% (Impact% — СТРОГО ОБЯЗАТЕЛЬНО!)"
    },
    "talentPriority": [
      "Задатки (Пассивка) ⭐⭐⭐⭐⭐",
      "Особая атака (Е — Парирование!) ⭐⭐⭐⭐⭐",
      "Помощь в защите ⭐⭐⭐⭐",
      "Цепочка и Ульта (Q) ⭐⭐⭐",
      "Базовая атака ⭐⭐"
    ],
    "skillsRazer": {
      "basic": "Зажми ЛКМ, чтобы Цезарь кинула щит вокруг себя и стянула всех мелких мобов в одну точку, повесив на них дебафф +25% получаемого урона на 30 секунд!",
      "special": "Нажми Е-шку прямо в момент удара босса (Идеальный блок) или сразу после Помощи в защите: Цезарь вешает на отряд неубиваемый щит Эгиды, который даёт +1000 Атаки активному герою и 100% иммунитет к прерыванию атак!",
      "ult": "Мощный бросок щита с обновлением Эгиды.",
      "passive": "Заливает +1000 Атаки и +25% урона (+15% от сета «Прото-панк»). ВАЖНО: если у тебя в отряде стоят Цезарь (+1000 Атаки) + Астра Яо (+1200 Атаки), твой дамагер получает +2200 Атаки в бою — поэтому в меню дамагера нужно собирать минимум Атаки, а все диски кидать в Криты и Урон стихии / Пробивание!"
    },
    "rotation": [
      "1. Отбей удар босса по золотой вспышке через Цезарь + нажми Е-шку → щит (+1000 Атаки и +40% урона с сетом) висит 60 секунд!",
      "2. Переключись на главного ДД и спокойно бей сквозь любые удары босса!"
    ],
    "wikiName": "Caesar_King",
    "iconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Caesar_King_Icon.png",
    "portraitUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Caesar_King_Portrait.png",
    "circleIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Agent_Caesar_King_Circle_Icon.png",
    "cdnFallbackUrl": "https://sunderarmor.com/ZZZ/Character/thumb_caesar.png",
    "scalingAxis": "support_shield_atk_daze",
    "fieldStyle": "quickswap_defense",
    "anomalyStyle": "none",
    "teamConstraint": "universal_shield_atk_buffer",
    "vortexSynergy": 0,
    "stunWindowReliance": 7,
    "directPortraitUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/b8/Agent_Caesar_King_Portrait.png/revision/latest/scale-to-width-down/300",
    "directPortraitRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/b8/Agent_Caesar_King_Portrait.png/revision/latest",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/a/af/Agent_Caesar_King_Icon.png/revision/latest/scale-to-width-down/220",
    "directIconRawUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/a/af/Agent_Caesar_King_Icon.png/revision/latest",
    "directRecordUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/60/Agent_Caesar_King_Agent_Record.png/revision/latest/scale-to-width-down/260",
    "directCircleUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/3a/Agent_Caesar_King_Circle_Icon.png/revision/latest/scale-to-width-down/200"
  }
];
