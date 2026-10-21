// ZZZ Phaethon OS — База босів Каверн та Нульової Каверни
window.DB_BOSSES = [
  {
    "id": "overlord_pompey",
    "name": "Оверлорд Помпей (Overlord Pompey)",
    "category": "Титульний Бос / Обол та Калідон",
    "elementWeaknesses": ["Ice", "Frost", "Ether"],
    "elementResistances": ["Fire"],
    "weaknessRu": "Лід / Мороз, Ефір",
    "resistanceRu": "Вогонь (високий супротив)",
    "color": "#ef4444",
    "icon": "🏍️",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/30/Overlord_Pompey.png/revision/latest/scale-to-width-down/340",
    "rawImg": "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/30/Overlord_Pompey.png/revision/latest",
    "fallbackImg": "https://static.wikia.nocookie.net/zenless-zone-zero/images/0/0a/Icon_Fire.png/revision/latest/scale-to-width-down/180",
    "summary": "Надшвидкий бос на палаючому байці. Атакує серіями вогняних таранних ударів, залишає лавові сліди і переходить у люту другу фазу з круговими лезами.",
    "tactics": [
      "1. Фаза байку: коли Помпей кружляє навколо арени, не намагайся бігти за ним — стій у центрі і чекай ЗОЛОТОЇ спалаху таранного випаду для Допомоги в захисті.",
      "2. Парирування перериває ланцюжок: успішний блок по золотому спалаху збиває його дрифт і заливає 25% шкали Оглушення.",
      "3. Уникай вогняних калюж: лавові сліди після дрифту тикають сильним періодичним вогнем, виводь боса на чисту зону.",
      "4. Вікно Оглушення — максимальний бурст: коли бос падає в стан, зливай Ульту та повні комбо Льоду/Ефіру (під супротив Вогню брати вогняних дамагерів суворо не рекомендується!)."
    ],
    "keyAttacks": [
      {
        "name": "Таранний дрифт на байку",
        "desc": "Бос розганяється по дузі і таранить персонажа переднім колесом. За пів секунди до удару з'являється ЗОЛОТИЙ спалах.",
        "parryType": "gold",
        "parryDesc": "Парирування блоком (Золотий спалах) — Допомога в захисті (Defensive Assist)",
        "gifUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6d/Tutorial_Perfect_Assists_and_Assist_Follow-Ups_2.gif/revision/latest"
      },
      {
        "name": "Вогняний бернаут і хвиля лави",
        "desc": "Помпей піднімає байк на диби, прокручує колесо на місці і пускає три розбіжні хвилі вогню по землі.",
        "parryType": "red",
        "parryDesc": "Ухилення ривком (Червоний спалах / АоЕ) — Потрійний ривок убік",
        "gifUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/b5/Tutorial_Attribute_Anomaly_-_Disorder_1.gif/revision/latest"
      },
      {
        "name": "Каскадне обертання лез (Фаза 2)",
        "desc": "У другій фазі після втрати 50% ХП вихоплює подвійні палаючі клинки і крутиться дзиґою з 4 ударів поспіль.",
        "parryType": "gold",
        "parryDesc": "Перший удар — блок плечем (Золотий), далі відскок або почергові парирування напарниками",
        "gifUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/3a/Tutorial_Attribute_Anomaly_-_Ice_1.gif/revision/latest"
      }
    ],
    "counterPicks": [
      {
        "name": "Топ-1 Контр-пік: Кріо-Морозний Гіперкеррі",
        "squad": ["Miyabi", "Yanagi", "Astra Yao"],
        "desc": "Повна вразливість до Морозу/Льоду! Миябі розрізає боса зажатою ЛКМ, Янаги провокує Полярний Хаос, Астра заливає +1200 Атаки і безпечний вихід по Швидкій допомозі."
      },
      {
        "name": "Контр-пік 2: Ефірний Сквозний Розрив",
        "squad": ["Yixuan", "Lucia", "Dialyn"],
        "desc": "Ефірна вразливість + 100% ігнор броні Сквозним уроном. Ісюань парирує таранні удари байку Є-шкою, а Діалін моментально заганяє боса в стан."
      },
      {
        "name": "Контр-пік 3: Класичний Кріо-Бурст",
        "squad": ["Ellen", "Lycaon", "Astra Yao"],
        "desc": "Ликаон зрізає 25% крио-резисту, парирує байк по золотому спалаху і вганяє боса в стан, де Еллен видає фул комбо ножиць."
      }
    ]
  },
  {
    "id": "nineveh",
    "name": "Ніневія (Nineveh / Harvester)",
    "category": "Фінальний Рейд-Бос / Нульова Каверна",
    "elementWeaknesses": ["Ether", "Electric"],
    "elementResistances": ["Physical", "Ice"],
    "weaknessRu": "Ефір, Електро",
    "resistanceRu": "Фізичний (висока броня), Лід",
    "color": "#a855f7",
    "icon": "🌸",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/2/29/Nineveh.png/revision/latest/scale-to-width-down/340",
    "rawImg": "https://static.wikia.nocookie.net/zenless-zone-zero/images/2/29/Nineveh.png/revision/latest",
    "fallbackImg": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d2/Icon_Ether.png/revision/latest/scale-to-width-down/180",
    "summary": "Гігантська квіткоподібна королева ефірних істот у серці Каверни. Викликає рої бджіл-камікадзе, лазерні бомбардування всієї арени та захисні кокони.",
    "tactics": [
      "1. Бджолиний рій — пріоритет #1: коли Ніневія злітає в кокон, негайно знищуй дрібних літаючих шершнів. Кожен вибух шершня біля тебе знімає до 40% ХП і накладає Ефірне Зараження.",
      "2. Орбітальний ефірний лазер: при білих колах на підлозі біжи по зовнішньому радіусу арени без зупинок — лазер веде за тобою прицільну доріжку.",
      "3. Щупальцеві удари зверху: золоті спалахи під час падіння щупалець дають найлегший спосіб набити 100% шкали Оглушення через Допомогу в захисті.",
      "4. Вразливість до Ефіру та Електро: найкраще розкриваються Чжу Юань, Пироис, Арія, Янаги та С0 Энби."
    ],
    "keyAttacks": [
      {
        "name": "Роздавлювання батогами щупалець",
        "desc": "Два гігантські щупальця піднімаються над ареною і по черзі з гуркотом падають на персонажа.",
        "parryType": "gold",
        "parryDesc": "Парирування блоком (Золотий спалах) — двічі поспіль на кожне щупальце",
        "gifUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6d/Tutorial_Perfect_Assists_and_Assist_Follow-Ups_2.gif/revision/latest"
      },
      {
        "name": "Килимове лазерне випалювання арени",
        "desc": "Ніневія відкриває бутон і заливає центр арени безперервним обертовим променем темного ефіру.",
        "parryType": "red",
        "parryDesc": "Тільки ухилення (Червоний спалах) — біг по краю арени проти годинникової стрілки",
        "gifUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/b5/Tutorial_Attribute_Anomaly_-_Disorder_1.gif/revision/latest"
      },
      {
        "name": "Ефірні міни та вибух пилку",
        "desc": "Розкидає навколо себе десятки фіолетових насінин, що детонують через 3 секунди.",
        "parryType": "red",
        "parryDesc": "Відскок назад у безпечну зону або зміна героя з невразливістю на Ульті",
        "gifUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/3a/Tutorial_Attribute_Anomaly_-_Ice_1.gif/revision/latest"
      }
    ],
    "counterPicks": [
      {
        "name": "Топ-1 Контр-пік: Ефірний Сквозний Розрив",
        "squad": ["Yixuan", "Lucia", "Dialyn"],
        "desc": "Ісюань повністю ігнорує товсту броню Ніневії Сквозним уроном і парирує щупальця крилом, а Люсія лікує і дає поле Завіси від лазерів."
      },
      {
        "name": "Контр-пік 2: Електро-Афтершок ядро",
        "squad": ["Soldier 0 - Anby", "Trigger", "Astra Yao"],
        "desc": "Вразливість до Електро! Триггер розстрілює бджіл та боса зі снайперки з безпечної дистанції, а С0 Энби нарізає тушу ривками Белого грома."
      },
      {
        "name": "Контр-пік 3: Ефірний Бурст Дробовика",
        "squad": ["Zhu Yuan", "Qingyi", "Astra Yao"],
        "desc": "Цинъи набиває +80% множника уразливості, а Чжу Юань у стан боса вистрілює всю картеч під максимальну слабкість Ніневії до Ефіру."
      }
    ]
  },
  {
    "id": "twin_marionettes",
    "name": "Близнюки-Маріонетки (Twin Marionettes — Dullahan & Thanatos)",
    "category": "Парний Бос / Нерозлучні ляльки",
    "elementWeaknesses": ["Fire", "Electric"],
    "elementResistances": ["Physical", "Ether"],
    "weaknessRu": "Вогонь, Електро",
    "resistanceRu": "Фізичний, Ефір",
    "color": "#fbbf24",
    "icon": "🎭",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/e/ef/Twin_Marionettes.png/revision/latest/scale-to-width-down/340",
    "rawImg": "https://static.wikia.nocookie.net/zenless-zone-zero/images/e/ef/Twin_Marionettes.png/revision/latest",
    "fallbackImg": "https://static.wikia.nocookie.net/zenless-zone-zero/images/1/1c/Icon_Electric.png/revision/latest/scale-to-width-down/180",
    "summary": "Дві синхронізовані балерини-маріонетки (чорна і біла). Мають механіку ВОСКРЕСІННЯ: якщо вбити одну, друга почне 15-секундний танець воскресіння панівної ляльки!",
    "tactics": [
      "1. ГОЛОВНЕ ПРАВИЛО — ЗНИЩУВАТИ ОДНОЧАСНО: опускай ХП обох ляльок рівномірно (до 10-15%). Якщо вбити одну занадто рано, у тебе буде лише 15 секунд, щоб добити другу, інакше вбита воскресне з 50% здоров'я!",
      "2. Синхронний спалах: коли обидві маріонетки змикають руки і летять у танці — тримай палець на зміні героя, там подвійний золотий спалах.",
      "3. Розривай дистанцію при невидимості: коли чорна маріонетка зникає в диму, вона телепортується за спину з червоним спалахом удару косою — готуй ривок ухилення.",
      "4. Вразливість до Вогню та Електро робить Огненні пачки (Евелин, Солдат 11, Бёрнис) та Електро-пачки абсолютним контр-піком."
    ],
    "keyAttacks": [
      {
        "name": "Синхронний парний вальс лез",
        "desc": "Обидві балерини кружляють у центрі, стягуючи персонажа нитками і б'ючи подвійним розрізом.",
        "parryType": "gold",
        "parryDesc": "Парирування блоком (Золотий спалах) — збиває танець обох ляльок одразу",
        "gifUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6d/Tutorial_Perfect_Assists_and_Assist_Follow-Ups_2.gif/revision/latest"
      },
      {
        "name": "Телепорт-розріз зі спини зі схованки",
        "desc": "Чорна маріонетка зникає у тінях і раптово вискакує з-за спини персонажа з горизонтальним ударом коси.",
        "parryType": "red",
        "parryDesc": "Ухилення за червоним спалахом із миттєвою Контратакою ухилення",
        "gifUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/b5/Tutorial_Attribute_Anomaly_-_Disorder_1.gif/revision/latest"
      },
      {
        "name": "Танець воскресіння (Resurrection Waltz)",
        "desc": "Коли одна лялька гине, друга стає в центр у захисну сферу і починає 15-секундний каст воскресіння.",
        "parryType": "none",
        "parryDesc": "Миттєвий бурст ультами й оглушенням! Потрібно розбити бар'єр і добити другу ляльку до кінця таймера",
        "gifUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/3a/Tutorial_Attribute_Anomaly_-_Ice_1.gif/revision/latest"
      }
    ],
    "counterPicks": [
      {
        "name": "Топ-1 Контр-пік: Вогняний Бурст Ланцюжків",
        "squad": ["Evelyn", "Lighter", "Astra Yao"],
        "desc": "Подвійна слабкість до Вогню! Лайтер дає +75% шкоди Вогню і стягує обох ляльок у купу, а Евелін ланцюжками атак б'є одразу по обох цілях."
      },
      {
        "name": "Контр-пік 2: Електро-Афтершок каскад",
        "squad": ["Soldier 0 - Anby", "Trigger", "Astra Yao"],
        "desc": "Електро вразливість. Триггер розстрілює обох ляльок з карману, а С0 Энби прошиває їх ривками наскрізь, гарантуючи однакове знесення ХП."
      },
      {
        "name": "Контр-пік 3: Вогняний АоЕ-Хаос",
        "squad": ["Burnice", "Jane Doe", "Yuzuha"],
        "desc": "Бёрнис із карману постійно підпалює обох маріонеток разом, а Джейн миттєво підриває Хаос по кожній з них."
      }
    ]
  },
  {
    "id": "dead_end_butcher",
    "name": "М'ясник Тупика (Dead End Butcher)",
    "category": "Класичний Бос / Ефірний Мутант",
    "elementWeaknesses": ["Ice", "Frost", "Ether"],
    "elementResistances": ["Physical"],
    "weaknessRu": "Лід / Мороз, Ефір",
    "resistanceRu": "Фізичний (броньована туша)",
    "color": "#38bdf8",
    "icon": "🪓",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/90/Dead_End_Butcher.png/revision/latest/scale-to-width-down/340",
    "rawImg": "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/90/Dead_End_Butcher.png/revision/latest",
    "fallbackImg": "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/52/Icon_Ice.png/revision/latest/scale-to-width-down/180",
    "summary": "Величезний лютий мутант із тесаками замість рук. Має дві фази: у першій повільний, у другій відрощує крила з лез і б'є серіями з 4 небезпечних розмахів.",
    "tactics": [
      "1. Ідеальний манекен для тренування блоків: усі його важкі удари супроводжуються довгим і дуже помітним ЗОЛОТИМ спалахом.",
      "2. Стрибок зверху (Фаза 2): коли М'ясник стрибає високо вгору і зникає з камери, дивись на червоне коло тіні на підлозі — роби подвійний ривок у момент приземлення.",
      "3. Не бий фізикою в лоб: у боса товста природна броня, тому звичайні физ-атаки наносять на 30% менше шкоди (крім Сквозного урону Разриву, який броню ігнорує).",
      "4. Вразливість до Заморозки: під статусом Заморозки бос стоїть нерухомо вдвічі довше, даючи повне вікно для безкарного нарізання."
    ],
    "keyAttacks": [
      {
        "name": "Подвійний рубаючий замах тесаками",
        "desc": "М'ясник заносить лівий тесак, б'є по землі, а потім відразу робить широкий правий хук.",
        "parryType": "gold",
        "parryDesc": "Парирування блоком (Золотий спалах) першого удару з переходом у контратаку",
        "gifUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6d/Tutorial_Perfect_Assists_and_Assist_Follow-Ups_2.gif/revision/latest"
      },
      {
        "name": "Сейсмічний стрибок-прес (Фаза 2)",
        "desc": "Підстрибує високо в повітря і падає всім тілом у центр червоного кола з вибуховою хвилею.",
        "parryType": "red",
        "parryDesc": "Ухилення ривком за червоним спалахом під час падіння",
        "gifUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/b5/Tutorial_Attribute_Anomaly_-_Disorder_1.gif/revision/latest"
      },
      {
        "name": "Нестямна серія з 4 ударів косовиці",
        "desc": "Бос гарчить і швидко робить 4 послідовні горизонтальні замахи, наступаючи на гравця.",
        "parryType": "gold",
        "parryDesc": "Почергові парирування зміною персонажів або відхід за спину ривком",
        "gifUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/3a/Tutorial_Attribute_Anomaly_-_Ice_1.gif/revision/latest"
      }
    ],
    "counterPicks": [
      {
        "name": "Топ-1 Контр-пік: Морозна Заморозка Мияби",
        "squad": ["Miyabi", "Yanagi", "Astra Yao"],
        "desc": "Мияби миттєво заморожує М'ясника завдяки слабкості до Морозу, а розріз на 6 стаках зносить босу цілу смужку ХП за секунди."
      },
      {
        "name": "Контр-пік 2: Ефірний Сквозний Розрив",
        "squad": ["Yixuan", "Lucia", "Dialyn"],
        "desc": "Сквозний урон Ісюань плює на міцну броню М'ясника, а парирування крилом зводить нанівець усі його замахи."
      },
      {
        "name": "Контр-пік 3: Класичний Кріо-Стан",
        "squad": ["Ellen", "Lycaon", "Astra Yao"],
        "desc": "Ликаон зрізає 25% крио-резисту і блокує тесаки по золотому спалаху, вганяючи М'ясника у вічний лід."
      }
    ]
  },
  {
    "id": "unknown_corruption_complex",
    "name": "Невідомий Комплекс Скверни (Unknown Corruption Complex)",
    "category": "Ефірний Механічний Колос / Бур",
    "elementWeaknesses": ["Ice", "Electric"],
    "elementResistances": ["Ether"],
    "weaknessRu": "Лід, Електро",
    "resistanceRu": "Ефір (імунітет до Зараження)",
    "color": "#00e5ff",
    "icon": "🏗️",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/7/7b/Unknown_Corruption_Complex.png/revision/latest/scale-to-width-down/340",
    "rawImg": "https://static.wikia.nocookie.net/zenless-zone-zero/images/7/7b/Unknown_Corruption_Complex.png/revision/latest",
    "fallbackImg": "https://static.wikia.nocookie.net/zenless-zone-zero/images/1/1c/Icon_Electric.png/revision/latest/scale-to-width-down/180",
    "summary": "Багатоногий індустріальний ефірний бур. Обертає бур по землі, запускає ракети та переходить у режим щита, де відбиває атаки, якщо не збити його шкалу стана.",
    "tactics": [
      "1. Буріння землі: коли бос зариває передній бур у землю і пускає кругову хвилю каміння, підстрибуй або роби Допомогу в захисті.",
      "2. Ракетний залп: ракети летять дугою — не біжи назад, а роби ривок вперед-вправо під корпус боса, де сліпа зона.",
      "3. Руйнування лап: зосереджуй удари по задніх суглобах — їх пошкодження моментально зносить 35% шкали Оглушення.",
      "4. Вразливість до Електро та Льда: Електро викликає Шок і перериває обертання бура, а Лід заморожує механізм."
    ],
    "keyAttacks": [
      {
        "name": "Фронтальне свердління з розгоном",
        "desc": "Комплекс розкручує гігантський бур і на високій швидкості їде по прямій на гравця.",
        "parryType": "gold",
        "parryDesc": "Парирування блоком (Золотий спалах) — зупиняє розгін махіни на місці",
        "gifUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6d/Tutorial_Perfect_Assists_and_Assist_Follow-Ups_2.gif/revision/latest"
      },
      {
        "name": "Круговий сплеск скверни 360°",
        "desc": "Присідає на лапах і викидає чорну хвилю скверни по всьому колу радіусом 12 метрів.",
        "parryType": "red",
        "parryDesc": "Ухилення ривком через хвилю або стрибок зі зміною героя",
        "gifUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/b5/Tutorial_Attribute_Anomaly_-_Disorder_1.gif/revision/latest"
      }
    ],
    "counterPicks": [
      {
        "name": "Топ-1 Контр-пік: Електро-Афтершок ядро",
        "squad": ["Soldier 0 - Anby", "Trigger", "Astra Yao"],
        "desc": "Слабкість до Електро! Триггер розстрілює бур з безпечної відстані, а С0 Энби ламає лапи комплексу швидкими ривками."
      },
      {
        "name": "Контр-пік 2: Морозна Заморозка Мияби",
        "squad": ["Miyabi", "Yanagi", "Astra Yao"],
        "desc": "Слабкість до Льда та Електро одночасно! Янаги вішає Шок на метал, а Мияби накладає Мороз і підриває Хаос."
      },
      {
        "name": "Контр-пік 3: Кріо-Стан Ликаона",
        "squad": ["Ellen", "Lycaon", "Astra Yao"],
        "desc": "Ликаон важкими ледяними ударами ламає бур і за секунди переводить махіну в стан оглушення."
      }
    ]
  },
  {
    "id": "shadow_jane",
    "name": "Тіньова Джейн (Shadow Jane / Doppelganger)",
    "shortName": "Тінь Джейн",
    "category": "Дуельний Бос / Дзеркальний Ассасин",
    "elementWeaknesses": ["Physical", "Ether"],
    "elementResistances": ["Fire"],
    "weaknessRu": "Фізичний, Ефір",
    "resistanceRu": "Вогонь",
    "color": "#f97316",
    "icon": "🐀",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/1/11/Agent_Jane_Doe_Portrait.png/revision/latest/scale-to-width-down/340",
    "rawImg": "https://static.wikia.nocookie.net/zenless-zone-zero/images/1/11/Agent_Jane_Doe_Portrait.png/revision/latest",
    "fallbackImg": "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/ce/Icon_Physical.png/revision/latest/scale-to-width-down/180",
    "summary": "Темний двійник Джейн Доу. Володіє надшвидким подвійним ухиленням, фазою Страсті, обертаннями Сальхова та миттєвими випадами ножами з невидимості.",
    "tactics": [
      "1. Не атакуй у лоб під час її стійки ухилення: якщо Джейн стоїть на місці і крутить ножі — будь-який твій удар вона сконтрить сальхов-вертушкою.",
      "2. Лови на золотих спалахах: її довгі комбо завжди завершуються фінішним ударом хвоста із ЗОЛОТИМ спалахом — саме тут потрібно кликати Допомогу в захисті.",
      "3. Щит проти анти-стаггеру: Цезар або Чжао нейтралізують її швидкі порізи, не даючи збити твої серії атак.",
      "4. Вразливість до Фізики та Ефіру: ідеально підходять Е Шуньгуан, Ісюань, Некомата та Чжу Юань."
    ],
    "keyAttacks": [
      {
        "name": "Вертушка Сальхова в фазі Страсті",
        "desc": "Джейн розкручується дзиґою, летить уперед і завдає 5 блискавичних порізів ножами.",
        "parryType": "gold",
        "parryDesc": "Фінальний 5-й удар дає Золотий спалах для контратаки",
        "gifUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6d/Tutorial_Perfect_Assists_and_Assist_Follow-Ups_2.gif/revision/latest"
      },
      {
        "name": "Тіньовий подвійний ривок з ударом хвоста",
        "desc": "Здійснює два миттєві телепорти навколо персонажа і б'є металевим лезом хвоста знизу вгору.",
        "parryType": "red",
        "parryDesc": "Ухилення на другому ривку за червоним спалахом",
        "gifUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/b5/Tutorial_Attribute_Anomaly_-_Disorder_1.gif/revision/latest"
      }
    ],
    "counterPicks": [
      {
        "name": "Топ-1 Контр-пік: Сквозний Розрив Ісюань",
        "squad": ["Yixuan", "Lucia", "Dialyn"],
        "desc": "Слабкість до Ефіру! Ісюань парирує швидкі випади Тіні Джейн крилом без втрати ХП, а Діалін моментально збиває її з ніг."
      },
      {
        "name": "Контр-пік 2: Остро лезо Е Шуньгуан",
        "squad": ["Ye Shunguang", "Dialyn", "Sunna"],
        "desc": "Слабкість до Фізики! Е Шуньгуан на повітряних ривках переганяє Тінь за швидкістю і стирає її під Завісою Сунни."
      },
      {
        "name": "Контр-пік 3: Броненосець Кларет + Роксі",
        "squad": ["Claret", "Roxy", "Rina"],
        "desc": "Кларет завдяки броні плює на дрібні порізи Тіні Джейн, а Мульти-Крити розсікають її стійку ухилення."
      }
    ]
  },
  {
    "id": "typhon_slugger",
    "name": "Тайфун Слаггер (Typhon Slugger)",
    "category": "Важкий Механічний Бос / Електро-Боксер",
    "elementWeaknesses": ["Fire", "Physical"],
    "elementResistances": ["Electric"],
    "weaknessRu": "Вогонь, Фізичний",
    "resistanceRu": "Електро (заземлена броня)",
    "color": "#eab308",
    "icon": "🥊",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/8/88/Typhon_Slugger.png/revision/latest/scale-to-width-down/340",
    "rawImg": "https://static.wikia.nocookie.net/zenless-zone-zero/images/8/88/Typhon_Slugger.png/revision/latest",
    "fallbackImg": "https://static.wikia.nocookie.net/zenless-zone-zero/images/0/0a/Icon_Fire.png/revision/latest/scale-to-width-down/180",
    "summary": "Гігантський екзоскелет-боксер з паровими кулаками. Заряджає реактивні аперкоти, вмикає електричний захисний щит і вимагає постійного парирування важких ударів.",
    "tactics": [
      "1. Парові аперкоти: коли руки Слаггера шиплять парою — готуйся до подвійного удару з золотим спалахом.",
      "2. Зняття щита Вогнем: вогняні атаки (Евелін, Солдат 11, Бёрнис) перегрівають генератор щита і вводять боса в короткий перегрів.",
      "3. Не бий Електро: бос має заземлення і майже не накопичує статус Шоку.",
      "4. Використовуй важких станнерів: Лайтер або Коляда збивають його стійку вдвічі швидше за інших."
    ],
    "keyAttacks": [
      {
        "name": "Реактивний паровий прямий хук",
        "desc": "Слаггер робить замах кулаком розміром з авто і на реактивній тязі б'є вперед.",
        "parryType": "gold",
        "parryDesc": "Парирування блоком (Золотий спалах) — збиває інерцію і розвертає боса",
        "gifUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6d/Tutorial_Perfect_Assists_and_Assist_Follow-Ups_2.gif/revision/latest"
      },
      {
        "name": "Електричний громовий слем двома руками",
        "desc": "Підстрибує і обома кулаками вбиває землю, створюючи електричну зону на 6 секунд.",
        "parryType": "red",
        "parryDesc": "Ухилення назад із зони ураження за червоним спалахом",
        "gifUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/b5/Tutorial_Attribute_Anomaly_-_Disorder_1.gif/revision/latest"
      }
    ],
    "counterPicks": [
      {
        "name": "Топ-1 Контр-пік: Вогняний Бурст Евелін",
        "squad": ["Evelyn", "Lighter", "Astra Yao"],
        "desc": "Подвійний перегрів Вогнем! Лайтер вступає в боксерську дуель і дає +75% шкоди Вогню, а Евелін ланцюжками зносить корпус."
      },
      {
        "name": "Контр-пік 2: Фізичний Гіперкеррі Е Шуньгуан",
        "squad": ["Ye Shunguang", "Dialyn", "Sunna"],
        "desc": "Слабкість до Фізики! Діалін миттєво станить важкого боксера, а Е Шуньгуан нарізає його мечами під Завісою."
      },
      {
        "name": "Контр-пік 3: Огненний Ритм Солдата 11",
        "squad": ["Soldier 11", "Koleda", "Caesar"],
        "desc": "Цезар тримає щит від важких хуків, Коляда розбиває стійку молотом, а Солдат 11 палить перегрітий корпус."
      }
    ]
  },
  {
    "id": "defiler_hatii",
    "name": "Осквернитель Хаті (Miasma Defiler / Hatii)",
    "category": "Міазмовий Вовк / Швидкісний Хижак",
    "elementWeaknesses": ["Fire", "Ether"],
    "elementResistances": ["Ice", "Wind"],
    "weaknessRu": "Вогонь, Ефір",
    "resistanceRu": "Лід, Ветер",
    "color": "#ef4444",
    "icon": "🐺",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d4/Hatii.png/revision/latest/scale-to-width-down/340",
    "rawImg": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d4/Hatii.png/revision/latest",
    "fallbackImg": "https://static.wikia.nocookie.net/zenless-zone-zero/images/0/0a/Icon_Fire.png/revision/latest/scale-to-width-down/180",
    "summary": "Гігантський міазмовий вовк Каверни. Стрибає по стінах, атакує зграйними тінями, накладає туман міазмів і вимагає постійної зміни кута огляду.",
    "tactics": [
      "1. Стрибки по колонах: коли вовк вилазить на стіни або колони — тримай дистанцію і дивись на вектор падіння.",
      "2. Очищення Вогнем: вогонь розсіює міазмовий туман і змушує вовка вити, відкриваючи вікно для атак.",
      "3. Потрійний укус: серія з 3 швидких укусів супроводжується золотим спалахом на кожному з них.",
      "4. Слабкість до Ефіру та Вогню: спалюй його Бёрнис, Евелін, Пироисом або Ісюань."
    ],
    "keyAttacks": [
      {
        "name": "Стрибок хижака з колони зверху",
        "desc": "Відштовхується від колони Каверни і на величезній швидкості падає лапами на персонажа.",
        "parryType": "gold",
        "parryDesc": "Парирування блоком (Золотий спалах) у момент торкання землі",
        "gifUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6d/Tutorial_Perfect_Assists_and_Assist_Follow-Ups_2.gif/revision/latest"
      },
      {
        "name": "Міазмове дихання скверни конусом",
        "desc": "Вовк видихає широкий потік чорно-фіолетових міазмів на 180 градусів перед собою.",
        "parryType": "red",
        "parryDesc": "Ривок за спину вовка під час початку вдиху",
        "gifUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/b5/Tutorial_Attribute_Anomaly_-_Disorder_1.gif/revision/latest"
      }
    ],
    "counterPicks": [
      {
        "name": "Топ-1 Контр-пік: Ефірний Сквозний Розрив",
        "squad": ["Yixuan", "Lucia", "Dialyn"],
        "desc": "Слабкість до Ефіру! Ісюань зустрічає стрибки вовка блоком крила, а Люсія розкриває Завісу, зводячи шкоду міазмів нанівець."
      },
      {
        "name": "Контр-пік 2: Вогняний Бурст Евелін",
        "squad": ["Evelyn", "Lighter", "Astra Yao"],
        "desc": "Слабкість до Вогню! Лайтер збиває стрибки вовка хуками, а Евелін спалює міазми нескінченними ланцюжками атак."
      },
      {
        "name": "Контр-пік 3: Карманний Огнемьот Бёрнис",
        "squad": ["Burnice", "Jane Doe", "Yuzuha"],
        "desc": "Бёрнис із карману підпалює швидкого хижака на бігу, не даючи йому сховатися в тумані."
      }
    ]
  },
  {
    "id": "brute_enforcer",
    "name": "Брут-Силовик (Brute Enforcer / Dullahan Shield)",
    "category": "Елітний Бос / Важкий Щитоносець",
    "elementWeaknesses": ["Ether", "Ice"],
    "elementResistances": ["Physical"],
    "weaknessRu": "Ефір, Лід",
    "resistanceRu": "Фізичний (непробивний щит)",
    "color": "#a855f7",
    "icon": "🛡️",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/8/8e/Dullahan.png/revision/latest/scale-to-width-down/340",
    "rawImg": "https://static.wikia.nocookie.net/zenless-zone-zero/images/8/8e/Dullahan.png/revision/latest",
    "fallbackImg": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d2/Icon_Ether.png/revision/latest/scale-to-width-down/180",
    "summary": "Важкоброньований лицар з ростовим щитом та лазерним мечем. Блокує всі лобові атаки, вимагає ударів у спину або пробиття Сквозним уроном Розриву.",
    "tactics": [
      "1. Не бий у щит: лобові удари відскакують із мінімальною шкодою. Заходь за спину через ривки або використовуй Афтершоки.",
      "2. Сквозний урон Розриву ігнорує щит: Ісюань, Ідхарі та Баньюе б'ють крізь щит на повну силу!",
      "3. Заморозка збиває захисну стійку: Лід вимикає енергетичний бар'єр щита на час статусу Заморозки.",
      "4. Золотий спалах таранного удару щитом — найкращий момент для зламу балансу."
    ],
    "keyAttacks": [
      {
        "name": "Таранний удар ростовим щитом",
        "desc": "Силовик виставляє щит перед собою і на повній швидкості таранить персонажа.",
        "parryType": "gold",
        "parryDesc": "Парирування блоком (Золотий спалах) — розвертає лицаря спиною до команди",
        "gifUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6d/Tutorial_Perfect_Assists_and_Assist_Follow-Ups_2.gif/revision/latest"
      },
      {
        "name": "Лазерне розсікання мечем на 180°",
        "desc": "Заряджає клинок блакитною енергією і робить широкий горизонтальний розмах.",
        "parryType": "red",
        "parryDesc": "Ухилення ривком за червоним спалахом під руку з мечем",
        "gifUrl": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/b5/Tutorial_Attribute_Anomaly_-_Disorder_1.gif/revision/latest"
      }
    ],
    "counterPicks": [
      {
        "name": "Топ-1 Контр-пік: Ефірний Сквозний Розрив",
        "squad": ["Yixuan", "Lucia", "Dialyn"],
        "desc": "Ісюань повністю ігнорує ростовий щит завдяки Сквозному урону (Sheer DMG) і слабкості до Ефіру!"
      },
      {
        "name": "Контр-пік 2: Морозна Заморозка Мияби",
        "squad": ["Miyabi", "Yanagi", "Astra Yao"],
        "desc": "Мияби заморожує лицаря крізь бар'єр, вимикаючи блок щита, і нарізає спину на 6 стаках."
      },
      {
        "name": "Контр-пік 3: Кріо-Казнь Хьюго Влада",
        "squad": ["Hugo", "Lighter", "Lycaon"],
        "desc": "Ликаон і Лайтер збивають щит подвійним станом, а Хьюго ваншотить боса косою Totalize."
      }
    ]
  }
];
