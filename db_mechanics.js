// ZZZ Phaethon OS — База механік гри
window.DB_MECHANICS = [
  {
    "id": "pre_vs_combat_stats",
    "title": "Статы «ДО БОЯ» (в меню) vs Статы «В БОЮ» — Главная ловушка игры",
    "category": "База расчётов",
    "icon": "📊",
    "badge": "КРИТИЧЕСКИ ВАЖНО",
    "summary": "Почему нельзя бездумно собирать 4000 Атаки в меню, если в отряде стоят бафферы.",
    "razerExplain": "В ZZZ есть два совершенно разных экрана характеристик. Первый — «До боя» (то, что ты видишь в меню агента). Второй — «В бою» (то, что получается, когда сработали пассивки оружия, 4 куска дисков и баффы твоих саппортов). Главная ошибка — собирать условные 3500–4000 Атаки в меню, когда в отряде уже стоят Астра Яо (+1200 Атаки), Цезарь (+1000 Атаки) или Ремиэль (+40% от своей Атаки, до +1600). Когда в бою у тебя становится 5000+ Атаки, каждые новые +10% Атаки дают копейки прироста урона (эффект размытия статов). Вместо лишней Атаки намного выгоднее поставить 5-й диск на Урон стихии% или Процент пробивания (PEN%), а в сабстатах ловить Крит. урон или Знание аномалии!",
    "formulaNote": "Итоговая Атака в бою = [Базовая Атака × (1 + %Атаки из меню) + Плоская Атака из меню] × (1 + Бонусы %Атаки в бою от сетов/пушек) + Плоские баффы саппортов (Астра, Цезарь, Люсия, Сокаку, Ремиэль).",
    "agentsExamples": [
      "Astra Yao",
      "Caesar",
      "Remielle",
      "Yuzuha",
      "Sunna"
    ],
    "color": "#ff6b00",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/db/Icon_Stat_ATK.png/revision/latest/scale-to-width-down/180",
    "directRawIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/db/Icon_Stat_ATK.png/revision/latest",
    "fallbackIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/1/14/Drive_Disc_Hormone_Punk_Icon.png/revision/latest/scale-to-width-down/180",
    "fallbackRawIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/1/14/Drive_Disc_Hormone_Punk_Icon.png/revision/latest",
    "wikiIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Icon_Stat_ATK.png",
    "subIcons": [
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/db/Icon_Stat_ATK.png/revision/latest/scale-to-width-down/96",
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/7/72/Icon_Stat_CRIT_Rate.png/revision/latest/scale-to-width-down/96",
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6c/Icon_Stat_CRIT_DMG.png/revision/latest/scale-to-width-down/96",
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/59/Icon_Stat_PEN_Ratio.png/revision/latest/scale-to-width-down/96"
    ]
  },
  {
    "id": "anomaly_ap_vs_am",
    "title": "Знание аномалии (AP) vs Контроль аномалии (AM)",
    "category": "Аномалия и Хаос",
    "icon": "☣️",
    "badge": "АНОМАЛИЯ",
    "summary": "Контроль (AM) — как БЫСТРО копится кружок. Знание (AP) — как БОЛЬНО он взрывается.",
    "razerExplain": "Представь кружок стихии рядом с полоской ХП босса как ведро воды. Контроль аномалии (Anomaly Mastery, 6-й диск) — это напор крана: чем он выше, тем быстрее заполняется кружок. Знание аномалии (Anomaly Proficiency, 4-й диск и сабстаты) — это температура кипятка: каждые 100 единиц Знания увеличивают урон самой аномалии на +100% от базы. Крит. шанс и Крит. урон на обычные аномалии НЕ РАБОТАЮТ вообще (исключения: пассивка Джейн Доу на Натиск и особый скейл Мияби).",
    "formulaNote": "Обычным аномалистам (Янаги, Бёрнис, Вивиан, Алиса, Ария, Велина, Ремиэль, Промея, Грейс) КШ и КУ ставим в 0%. Все роллы — в Знание аномалии (AP) и Атаку%.",
    "agentsExamples": [
      "Jane Doe",
      "Yanagi",
      "Burnice",
      "Vivian",
      "Alice",
      "Aria",
      "Velina",
      "Remielle"
    ],
    "color": "#c084fc",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6e/Icon_Stat_Anomaly_Proficiency.png/revision/latest/scale-to-width-down/180",
    "directRawIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6e/Icon_Stat_Anomaly_Proficiency.png/revision/latest",
    "fallbackIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d2/Icon_Anomaly.png/revision/latest/scale-to-width-down/180",
    "fallbackRawIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d2/Icon_Anomaly.png/revision/latest",
    "wikiIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Icon_Stat_Anomaly_Proficiency.png",
    "subIcons": [
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6e/Icon_Stat_Anomaly_Proficiency.png/revision/latest/scale-to-width-down/96",
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/7/7b/Icon_Stat_Anomaly_Mastery.png/revision/latest/scale-to-width-down/96",
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d2/Icon_Anomaly.png/revision/latest/scale-to-width-down/96"
    ],
    "tutorialGifUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/3a/Tutorial_Attribute_Anomaly_-_Ice_1.gif/revision/latest"
  },
  {
    "id": "disorder",
    "title": "Хаос (Disorder) — Взрыв двух стихий",
    "category": "Аномалия и Хаос",
    "icon": "💥",
    "badge": "МЕТА-МЕХАНИКА",
    "summary": "Наложил одну аномалию → поверх неё закрыл кружок ДРУГОЙ стихии → мгновенный мега-взрыв.",
    "razerExplain": "Когда ты заполняешь кружок одной стихии (например, Огонь от Бёрнис → враг горит 10 секунд), а затем сразу же другим героем закрываешь кружок ДРУГОЙ стихии (например, Физ от Джейн или Алисы, либо Мороз от Мияби), старая стихия срывается и весь её оставшийся урон мгновенно взрывается одной гигантской цифрой + добавляет оглушение врагу. Это и есть Хаос (Disorder). Чем быстрее ты чередуешь две разные стихии, тем чаще взрывается Хаос.",
    "formulaNote": "Урон Хаоса зависит от уровня, Атаки, Знания аномалии ТОГО, кто наложил ПЕРВЫЙ статус, и от того, сколько секунд этого статуса оставалось висеть.",
    "agentsExamples": [
      "Miyabi",
      "Yanagi",
      "Burnice",
      "Vivian",
      "Alice",
      "Aria",
      "Promeia"
    ],
    "color": "#f97316",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d2/Icon_Anomaly.png/revision/latest/scale-to-width-down/180",
    "directRawIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d2/Icon_Anomaly.png/revision/latest",
    "fallbackIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/2/2e/Drive_Disc_Chaos_Jazz_Icon.png/revision/latest/scale-to-width-down/180",
    "fallbackRawIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/2/2e/Drive_Disc_Chaos_Jazz_Icon.png/revision/latest",
    "wikiIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Icon_Anomaly.png",
    "subIcons": [
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d2/Icon_Anomaly.png/revision/latest/scale-to-width-down/96",
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/0/0a/Icon_Fire.png/revision/latest/scale-to-width-down/96",
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/1/1c/Icon_Electric.png/revision/latest/scale-to-width-down/96",
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/8/88/Icon_Frost.png/revision/latest/scale-to-width-down/96"
    ],
    "tutorialGifUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/b5/Tutorial_Attribute_Anomaly_-_Disorder_1.gif/revision/latest"
  },
  {
    "id": "lumiflux_refringe",
    "title": "Люмифлюкс и Преломление (Refringe)",
    "category": "Новые механики 3.x",
    "icon": "🌈",
    "badge": "ПАТЧ 3.1+",
    "summary": "Уникальная стихия Ремиэль: копирует стихию соседа справа и многократно усиливает чужие аномалии.",
    "razerExplain": "Люмифлюкс сам по себе не копит обычный кружок аномалии ударами. Вместо этого: 1) При входе в бой агент Люмифлюкса (Ремиэль) автоматически принимает стихию того агента, который стоит СРАЗУ ПОСЛЕ НЕЁ в отряде. 2) Навыками она вешает метку Люмифлюкса. Когда напарник заполняет кружок своей аномалии по этой метке, происходит Преломление (Refringe) — аномалия напарника вырастает в уроне пропорционально Знанию аномалии (AP) Ремиэль! А если в отряде ровно 3 Аномалиста, Ремиэль дополнительно заливает всей команде до +1600 Атаки.",
    "formulaNote": "Коэффициент Преломления = 0.02% × Знание аномалии Ремиэль (+10% бонуса при 3 Аномалистах в отряде, +20% на М2).",
    "agentsExamples": [
      "Remielle",
      "Miyabi",
      "Yanagi",
      "Alice",
      "Velina"
    ],
    "color": "#f472b6",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/9d/Icon_Lumiflux.png/revision/latest/scale-to-width-down/180",
    "directRawIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/9d/Icon_Lumiflux.png/revision/latest",
    "fallbackIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/9d/Drive_Disc_Feathered_Fate_Icon.png/revision/latest/scale-to-width-down/180",
    "fallbackRawIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/9d/Drive_Disc_Feathered_Fate_Icon.png/revision/latest",
    "wikiIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Icon_Lumiflux.png",
    "subIcons": [
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/9d/Icon_Lumiflux.png/revision/latest/scale-to-width-down/96",
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/9d/Drive_Disc_Feathered_Fate_Icon.png/revision/latest/scale-to-width-down/96",
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/5e/W-Engine_Ode_of_Resurrected_Wings.png/revision/latest/scale-to-width-down/96"
    ]
  },
  {
    "id": "rupture_sheer_force",
    "title": "Разрыв (Rupture) и Сквозная сила (Sheer Force / Sheer DMG)",
    "category": "Новые механики 2.x–3.x",
    "icon": "⚔️",
    "badge": "СПЕЦИАЛЬНОСТЬ РАЗРЫВ",
    "summary": "Особый тип урона (Исюань, Идхари, Баньюэ, Звёздный Билли), который полностью игнорирует защиту врага!",
    "razerExplain": "Агенты специальности «Разрыв» (Rupture) бьют Сквозным уроном (Sheer DMG). Главная фишка: Сквозной урон сам по себе 100% игнорирует Защиту (DEF) монстров! Поэтому таким героям АБСОЛЮТНО БЕСПОЛЕЗНЫ Процент пробивания (PEN Ratio), плоское Пробивание (PEN) и дебаффы на срез защиты (например, от Николь). Их урон скейлится от характеристики «Сквозная сила» (Sheer Force), которая собирается из их ХП / Атаки и баффается специальными саппортами вроде Люсии (до +900 Сквозной силы при 24 000 ХП).",
    "formulaNote": "На агентах Разрыва статы PEN и PEN% всегда имеют ценность 0%. Главные статы — КШ, КУ, ХП%/Атака% (по скейлу героя) и Урон стихии%.",
    "agentsExamples": [
      "Yixuan",
      "Yidhari",
      "Banyue",
      "Starlight - Billy",
      "Lucia"
    ],
    "color": "#ffd700",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/e/ef/Icon_Rupture.png/revision/latest/scale-to-width-down/180",
    "directRawIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/e/ef/Icon_Rupture.png/revision/latest",
    "fallbackIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/c7/Drive_Disc_Yunkui_Tales_Icon.png/revision/latest/scale-to-width-down/180",
    "fallbackRawIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/c7/Drive_Disc_Yunkui_Tales_Icon.png/revision/latest",
    "wikiIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Icon_Rupture.png",
    "subIcons": [
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/e/ef/Icon_Rupture.png/revision/latest/scale-to-width-down/96",
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/31/Icon_Auric_Ink.png/revision/latest/scale-to-width-down/96",
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/b5/Icon_Stat_HP.png/revision/latest/scale-to-width-down/96",
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/c7/Drive_Disc_Yunkui_Tales_Icon.png/revision/latest/scale-to-width-down/96"
    ]
  },
  {
    "id": "armorer_maim_multicrit",
    "title": "Броненосец (Armorer), Увечье (Maim) и Мульти-Крит",
    "category": "Новые механики 3.x",
    "icon": "🛡️",
    "badge": "ПАТЧ 3.2+",
    "summary": "Механика Кларет Флинт: урон от Защиты (DEF), КШ выше 100% даёт двойной крит, а Крит. урон не нужен!",
    "razerExplain": "Специальность «Броненосец» (введена в 3.2 с Кларет) переворачивает правила сборки: 1) Все кнопки считают урон от ЗАЩИТЫ (DEF), а не от Атаки. Атака ей даёт 0! 2) Вместо энергии у неё Острота (Sharpness), а на врагах она копит Порез (Gash) и вызывает Увечье (Maim). 3) Её главный урон (Laceration / Рассечение) имеет ФИКСИРОВАННЫЙ крит-множитель 150% и вообще не растёт от Крит. урона (КУ)! Зато любой Крит. шанс (КШ) свыше 100% превращается в Мульти-Крит (шанс нанести повторный критический удар). Поэтому ей собирают Защиту%, КШ (100%+) и Пробивание (PEN%), а Рокси — её лучший станнер.",
    "formulaNote": "Диск 4: Крит. шанс% | Диск 5: Процент пробивания (PEN%) или Электро урон% | Диск 6: Защита% (DEF%). Атака и КУ = 0 приоритета.",
    "agentsExamples": [
      "Claret",
      "Roxy",
      "Rina",
      "Norma"
    ],
    "color": "#e11d48",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/ba/Icon_Armorer.png/revision/latest/scale-to-width-down/180",
    "directRawIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/ba/Icon_Armorer.png/revision/latest",
    "fallbackIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/0/08/Drive_Disc_Thorned_Rose_Icon.png/revision/latest/scale-to-width-down/180",
    "fallbackRawIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/0/08/Drive_Disc_Thorned_Rose_Icon.png/revision/latest",
    "wikiIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Icon_Armorer.png",
    "subIcons": [
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/ba/Icon_Armorer.png/revision/latest/scale-to-width-down/96",
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6e/Icon_Stat_DEF.png/revision/latest/scale-to-width-down/96",
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/7/72/Icon_Stat_CRIT_Rate.png/revision/latest/scale-to-width-down/96",
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/0/08/Drive_Disc_Thorned_Rose_Icon.png/revision/latest/scale-to-width-down/96"
    ]
  },
  {
    "id": "aftershock",
    "title": "Афтершок (Aftershock) — Авто-удары из кармана",
    "category": "Боевые механики",
    "icon": "⚡",
    "badge": "КАРМАННЫЙ УРОН",
    "summary": "Когда твой активный герой бьёт врага, напарник из запаса сам выпрыгивает и наносит дополнительный удар.",
    "razerExplain": "Афтершок — это атака, которую агент проводит НЕ находясь под твоим прямым управлением (или как автоматическое добивание после метки). Например, Триггер стреляет из снайперки из кармана, когда бьёт твой мейн-ДД; Солдат 0 Энби и Орфи взрывают метки афтершоками; Люсия в состоянии Сна кидает Гармонии из кармана. Под эту механику создан сет дисков «Гармония теней» (Shadow Harmony), который даёт +15% урона афтершокам и атакам в рывке + настакивает Атаку и КШ.",
    "formulaNote": "Афтершоки считаются полноценными атаками: они могут критовать, накладывать оглушение (Триггер, Цзюй Фуфу) и активировать пассивки сетов.",
    "agentsExamples": [
      "Soldier 0 - Anby",
      "Trigger",
      "Orphie & Magus",
      "Ju Fufu",
      "Lucia"
    ],
    "color": "#a855f7",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/5e/Drive_Disc_Shadow_Harmony_Icon.png/revision/latest/scale-to-width-down/180",
    "directRawIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/5e/Drive_Disc_Shadow_Harmony_Icon.png/revision/latest",
    "fallbackIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/1/1c/Icon_Electric.png/revision/latest/scale-to-width-down/180",
    "fallbackRawIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/1/1c/Icon_Electric.png/revision/latest",
    "wikiIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Drive_Disc_Shadow_Harmony_Icon.png",
    "subIcons": [
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/5e/Drive_Disc_Shadow_Harmony_Icon.png/revision/latest/scale-to-width-down/96",
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/32/W-Engine_Severed_Innocence.png/revision/latest/scale-to-width-down/96",
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/56/W-Engine_Spectral_Gaze.png/revision/latest/scale-to-width-down/96"
    ]
  },
  {
    "id": "ether_veil",
    "title": "Эфирная завеса (Ether Veil)",
    "category": "Новые механики 2.x–3.x",
    "icon": "🌌",
    "badge": "ПОЛЕ БАФФОВ",
    "summary": "Особая зона на поле боя (Люсия, Сунна, Е Шуньгуан), которая усиливает ХП, КШ или урон всей пачки.",
    "razerExplain": "Некоторые саппорты и дамагеры (например, Люсия и Сунна) своими Е-шками или Быстрой помощью раскрывают на арене «Эфирную завесу». Пока завеса висит, вся команда получает мощные бонусы (например, +5% Макс. ХП от Люсии или активацию сета «Баллада белой воды», который даёт +20% КШ и +10% Атаки физ-дамагерам внутри завесы).",
    "formulaNote": "Длительность Эфирной завесы продлевается усиленными Е-шками и Ультами (вплоть до 300 секунд).",
    "agentsExamples": [
      "Lucia",
      "Sunna",
      "Ye Shunguang"
    ],
    "color": "#6366f1",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/61/Drive_Disc_White_Water_Ballad_Icon.png/revision/latest/scale-to-width-down/180",
    "directRawIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/61/Drive_Disc_White_Water_Ballad_Icon.png/revision/latest",
    "fallbackIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d2/Icon_Ether.png/revision/latest/scale-to-width-down/180",
    "fallbackRawIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d2/Icon_Ether.png/revision/latest",
    "wikiIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Drive_Disc_White_Water_Ballad_Icon.png",
    "subIcons": [
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/61/Drive_Disc_White_Water_Ballad_Icon.png/revision/latest/scale-to-width-down/96",
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d2/Icon_Ether.png/revision/latest/scale-to-width-down/96",
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/3e/Icon_Honed_Edge.png/revision/latest/scale-to-width-down/96",
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/c2/W-Engine_Dreamlit_Hearth.png/revision/latest/scale-to-width-down/96"
    ]
  },
  {
    "id": "daze_and_stun",
    "title": "Импульс (Impact), Оглушение (Daze) и Множитель уязвимости",
    "category": "Устрашение и Стан",
    "icon": "🔨",
    "badge": "УСТРАШЕНИЕ",
    "summary": "Жёлтая полоска под ХП босса: заполнил до 100% → босс лежит и получает в 1.5–2.3 раза больше урона.",
    "razerExplain": "Под полоской здоровья каждого врага есть жёлтая шкала Оглушения (Daze). Импульс (Impact, 6-й диск у станнеров) — это базовый стат, от которого зависит, сколько процентов жёлтой шкалы ты сносишь каждым ударом. Когда шкала доходит до 100%, враг падает в стан и по нему включается Множитель уязвимости (базово 150% урона, а с Цинъи, Ликаоном, Лайтером, Диалин, Наньгун Юй или Рокси — ещё намного выше!). Именно в это окно 10–15 секунд бурст-дамагеры (Чжу Юань, Хьюго, Эвелин, Исюань, Сигрид) сливают все свои ресурсы и Ульту.",
    "formulaNote": "Сет «Король вершины» (King of the Summit) на любом станнере с 50%+ КШ раздаёт всей команде +30% Крит. урона просто за нажатие Е-шки или Цепочки атак!",
    "agentsExamples": [
      "Dialyn",
      "Nangong Yu",
      "Norma",
      "Roxy",
      "Qingyi",
      "Lighter",
      "Trigger",
      "Ju Fufu",
      "Lycaon",
      "Koleda"
    ],
    "color": "#facc15",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/53/Icon_Stun.png/revision/latest/scale-to-width-down/180",
    "directRawIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/53/Icon_Stun.png/revision/latest",
    "fallbackIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/be/Drive_Disc_King_of_the_Summit_Icon.png/revision/latest/scale-to-width-down/180",
    "fallbackRawIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/be/Drive_Disc_King_of_the_Summit_Icon.png/revision/latest",
    "wikiIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Icon_Stun.png",
    "subIcons": [
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/53/Icon_Stun.png/revision/latest/scale-to-width-down/96",
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/98/Icon_Stat_Impact.png/revision/latest/scale-to-width-down/96",
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/be/Drive_Disc_King_of_the_Summit_Icon.png/revision/latest/scale-to-width-down/96",
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/8/81/Drive_Disc_Shockstar_Disco_Icon.png/revision/latest/scale-to-width-down/96"
    ]
  },
  {
    "id": "pen_ratio_vs_flat",
    "title": "Процент пробивания (PEN Ratio%) vs Пробивание (Flat PEN)",
    "category": "База расчётов",
    "icon": "🎯",
    "badge": "ПРОБИВАНИЕ БРОНИ",
    "summary": "PEN% срезает долю брони босса (чем толще босс, тем сильнее). Не работает на агентов Разрыва!",
    "razerExplain": "Процент пробивания (PEN Ratio%, 5-й диск и бафф Рины) позволяет твоим ударам игнорировать кусок брони врага в процентах (например, 24% на 5-м диске + 30% от Рины = игнор больше половины брони босса!). Чем больше ты собираешь PEN% вместе, тем сильнее становится каждый следующий процент. Но помни два правила: 1) Если в пачке есть мощный срез защиты (DEF Shred), ценность PEN% чуть падает. 2) На агентах Разрыва (Исюань, Идхари, Баньюэ) PEN% НЕ РАБОТАЕТ вообще, так как они и так игнорируют 100% брони.",
    "formulaNote": "Идеально ставить 5-й диск на PEN%, когда у героя уже много своего Бонуса урона% и в пачке есть Рина или два баффера Атаки.",
    "agentsExamples": [
      "Rina",
      "Claret",
      "Yanagi",
      "Miyabi",
      "Ellen",
      "Soldier 0 - Anby"
    ],
    "color": "#06b6d4",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/59/Icon_Stat_PEN_Ratio.png/revision/latest/scale-to-width-down/180",
    "directRawIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/59/Icon_Stat_PEN_Ratio.png/revision/latest",
    "fallbackIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d6/Drive_Disc_Puffer_Electro_Icon.png/revision/latest/scale-to-width-down/180",
    "fallbackRawIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d6/Drive_Disc_Puffer_Electro_Icon.png/revision/latest",
    "wikiIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Icon_Stat_PEN_Ratio.png",
    "subIcons": [
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/59/Icon_Stat_PEN_Ratio.png/revision/latest/scale-to-width-down/96",
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d6/Drive_Disc_Puffer_Electro_Icon.png/revision/latest/scale-to-width-down/96",
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/31/W-Engine_Weeping_Cradle.png/revision/latest/scale-to-width-down/96"
    ]
  },
  {
    "id": "assists_quick_def_evasive",
    "title": "Быстрая помощь (Quick Assist) vs Помощь в защите / уклонении",
    "category": "Боевые механики",
    "icon": "🔄",
    "badge": "РОТАЦИЯ",
    "summary": "Золотая вспышка = блок плечом (жёлтая), Красная вспышка = уклонение с замедлением, Синяя кнопка = Быстрая помощь.",
    "razerExplain": "В ZZZ три вида смены героя по вспышке: 1) Помощь в защите (Defensive Assist — ЗОЛОТАЯ вспышка врага): твой герой вылетает и отбивает удар с лязгом металла, внося кучу Оглушения (обожает Цезарь). 2) Помощь в уклонении (Evasive Assist — КРАСНАЯ вспышка врага): стрелки и некоторые саппорты (Чжу Юань, Грейс, Рина, Триггер) вместо блока замедляют время. 3) Быстрая помощь (Quick Assist — когда кнопка смены загорается после Е-шки саппорта или с песнями Астры Яо): мгновенный выход соседа с бесплатным ударом и активацией сета «Астральный голос» (+24% урона)!",
    "formulaNote": "С патча 3.2 золотая вспышка ВСЕГДА вызывает Помощь в защите, а красная — Помощь в уклонении.",
    "agentsExamples": [
      "Astra Yao",
      "Caesar",
      "Lucia",
      "Yuzuha",
      "Sunna",
      "Zhao"
    ],
    "color": "#a3e635",
    "directIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/56/Icon_Assist_Attack.png/revision/latest/scale-to-width-down/180",
    "directRawIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/56/Icon_Assist_Attack.png/revision/latest",
    "fallbackIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/cf/Drive_Disc_Astral_Voice_Icon.png/revision/latest/scale-to-width-down/180",
    "fallbackRawIconUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/cf/Drive_Disc_Astral_Voice_Icon.png/revision/latest",
    "wikiIconUrl": "https://zenless-zone-zero.fandom.com/wiki/Special:FilePath/Icon_Assist_Attack.png",
    "subIcons": [
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/56/Icon_Assist_Attack.png/revision/latest/scale-to-width-down/96",
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/cf/Drive_Disc_Astral_Voice_Icon.png/revision/latest/scale-to-width-down/96",
      "https://static.wikia.nocookie.net/zenless-zone-zero/images/a/a0/Drive_Disc_Proto_Punk_Icon.png/revision/latest/scale-to-width-down/96"
    ],
    "tutorialGifUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6d/Tutorial_Perfect_Assists_and_Assist_Follow-Ups_2.gif/revision/latest"
  }
];
