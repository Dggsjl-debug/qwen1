// === ВНЕШНИЙ URL ДЛЯ РЕДИРЕКТА ===
const REDIRECT_URL = "https://www.trafficox.com"; // ← ЗАМЕНИТЕ НА СВОЙ!

// === ОПРЕДЕЛЕНИЕ ЯЗЫКА ===
const userLang = (navigator.language || navigator.userLanguage || 'en').substring(0, 2).toLowerCase();
const supportedLangs = [
  'uk', 'ca', 'us', 'tw', 'de', 'be', 'se', 'nl', 'lu', 'fi', 'au', 'no', 'ie', 'si', 'dk', 'hr', 'ch', 'jp', 'it', 'fr',
  'nz', 'cz', 'at', 'il', 'pl', 'sa', 'za', 'pt', 'hu', 'kz', 'my', 'ro', 'gr', 'sk', 'sg', 'lt', 'es', 'bg', 'vn', 'mv', 'ge'
];
const lang = supportedLangs.includes(userLang) ? userLang : 'en';

// === ПЕРЕВОДЫ ДЛЯ ВСЕХ ЯЗЫКОВ ===
const translations = {
  en: {
    ageTitle: "Confirm you are 18+",
    ageBtn: "Yes, I'm 18 or older",
    goalTitle: "What is your dating goal?",
    goals: {
      relationship: "Relationship",
      casual: "Casual sex",
      friendship: "Friendship",
      chat: "Just chat",
      other: "Other"
    }
  },
  ru: {
    ageTitle: "Подтвердите, что вам есть 18 лет",
    ageBtn: "Да, мне есть 18 лет",
    goalTitle: "Какова ваша цель знакомства?",
    goals: {
      relationship: "Отношения",
      casual: "Случайный секс",
      friendship: "Дружба",
      chat: "Просто пообщаться",
      other: "Другое"
    }
  },
  uk: {
    ageTitle: "Підтвердіть, що вам виповнилося 18 років",
    ageBtn: "Так, мені виповнилося 18",
    goalTitle: "Яка ваша мета знайомства?",
    goals: {
      relationship: "Стосунки",
      casual: "Випадковий секс",
      friendship: "Дружба",
      chat: "Просто поговорити",
      other: "Інше"
    }
  },
  ca: {
    ageTitle: "Confirma que tens 18 anys o més",
    ageBtn: "Sí, tinc 18 anys o més",
    goalTitle: "Quin és el teu objectiu?",
    goals: {
      relationship: "Relació",
      casual: "Sexe ocasional",
      friendship: "Amistat",
      chat: "Només xerrar",
      other: "Altre"
    }
  },
  us: { // Английский США — как en
    ageTitle: "Confirm you are 18+",
    ageBtn: "Yes, I'm 18 or older",
    goalTitle: "What is your dating goal?",
    goals: {
      relationship: "Relationship",
      casual: "Casual sex",
      friendship: "Friendship",
      chat: "Just chat",
      other: "Other"
    }
  },
  tw: {
    ageTitle: "請確認您已年滿18歲",
    ageBtn: "是的，我年滿18歲",
    goalTitle: "您的交友目的是什麼？",
    goals: {
      relationship: "戀愛",
      casual: "隨意約會",
      friendship: "友情",
      chat: "只是聊天",
      other: "其他"
    }
  },
  de: {
    ageTitle: "Bestätigen Sie, dass Sie mindestens 18 Jahre alt sind",
    ageBtn: "Ja, ich bin 18 oder älter",
    goalTitle: "Was ist Ihr Ziel?",
    goals: {
      relationship: "Beziehung",
      casual: "Gelegentlicher Sex",
      friendship: "Freundschaft",
      chat: "Einfach nur chatten",
      other: "Sonstiges"
    }
  },
  be: {
    ageTitle: "Падтвердзіце, што вам ёсць 18 гадоў",
    ageBtn: "Так, мне ёсць 18 гадоў",
    goalTitle: "Якая ваша мэта знаёмства?",
    goals: {
      relationship: "Сувязі",
      casual: "Выпадковы секс",
      friendship: "Сяброўства",
      chat: "Проста пагаворыць",
      other: "Іншае"
    }
  },
  se: {
    ageTitle: "Bekräfta att du är 18+",
    ageBtn: "Ja, jag är 18 eller äldre",
    goalTitle: "Vad är ditt syfte med att träffas?",
    goals: {
      relationship: "Relation",
      casual: "Tillfällig sex",
      friendship: "Vänskap",
      chat: "Bara chatta",
      other: "Annat"
    }
  },
  nl: {
    ageTitle: "Bevestig dat je 18+ bent",
    ageBtn: "Ja, ik ben 18 of ouder",
    goalTitle: "Wat is jouw doel?",
    goals: {
      relationship: "Relatie",
      casual: "Casuele seks",
      friendship: "Vriendschap",
      chat: "Gewoon chatten",
      other: "Anders"
    }
  },
  lu: {
    ageTitle: "Bestätegt, datt Dir 18 Joer oder méi sidd",
    ageBtn: "Jo, ech sinn 18 oder méi",
    goalTitle: "Wéi ass euer Zil?",
    goals: {
      relationship: "Beziehong",
      casual: "Gelegentlechen Sex",
      friendship: "Fruendschaft",
      chat: "Nëmmen chatten",
      other: "Aneres"
    }
  },
  fi: {
    ageTitle: "Vahvista, että sinulla on vähintään 18 vuotta",
    ageBtn: "Kyllä, olen 18 tai vanhempi",
    goalTitle: "Mikä on tarkoituksesi?",
    goals: {
      relationship: "Suhteet",
      casual: "Satunnainen seksi",
      friendship: "Ystävyys",
      chat: "Vain jutella",
      other: "Muu"
    }
  },
  au: { // Австралийский английский — как en
    ageTitle: "Confirm you are 18+",
    ageBtn: "Yes, I'm 18 or older",
    goalTitle: "What is your dating goal?",
    goals: {
      relationship: "Relationship",
      casual: "Casual sex",
      friendship: "Friendship",
      chat: "Just chat",
      other: "Other"
    }
  },
  no: {
    ageTitle: "Bekreft at du er 18+",
    ageBtn: "Ja, jeg er 18 eller eldre",
    goalTitle: "Hva er målet ditt?",
    goals: {
      relationship: "Forhold",
      casual: "Tilfeldig sex",
      friendship: "Vennskap",
      chat: "Bare chatte",
      other: "Annet"
    }
  },
  ie: { // Ирландский английский — как en
    ageTitle: "Confirm you are 18+",
    ageBtn: "Yes, I'm 18 or older",
    goalTitle: "What is your dating goal?",
    goals: {
      relationship: "Relationship",
      casual: "Casual sex",
      friendship: "Friendship",
      chat: "Just chat",
      other: "Other"
    }
  },
  si: {
    ageTitle: "Potrdite, da ste starejši od 18 let",
    ageBtn: "Da, star sem 18 ali več",
    goalTitle: "Kakšen je vaš cilj?",
    goals: {
      relationship: "Zveza",
      casual: "Naključni spol",
      friendship: "Prijateljstvo",
      chat: "Le pogovor",
      other: "Drugo"
    }
  },
  dk: {
    ageTitle: "Bekræft, at du er 18+",
    ageBtn: "Ja, jeg er 18 eller ældre",
    goalTitle: "Hvad er dit formål?",
    goals: {
      relationship: "Forhold",
      casual: "Tilfældig sex",
      friendship: "Venskab",
      chat: "Kun chatte",
      other: "Andet"
    }
  },
  hr: {
    ageTitle: "Potvrdite da imate barem 18 godina",
    ageBtn: "Da, imam 18 ili više",
    goalTitle: "Koji je vaš cilj?",
    goals: {
      relationship: "Veza",
      casual: "Slučajni seks",
      friendship: "Prijateljstvo",
      chat: "Samo čavrljanje",
      other: "Ostalo"
    }
  },
  ch: {
    ageTitle: "Bestätigen Sie, dass Sie 18+ sind",
    ageBtn: "Ja, ich bin 18 oder älter",
    goalTitle: "Was ist Ihr Ziel?",
    goals: {
      relationship: "Beziehung",
      casual: "Gelegentlicher Sex",
      friendship: "Freundschaft",
      chat: "Einfach nur chatten",
      other: "Sonstiges"
    }
  },
  jp: {
    ageTitle: "18歳以上であることを確認してください",
    ageBtn: "はい、18歳以上です",
    goalTitle: "お相手との目的は何ですか？",
    goals: {
      relationship: "恋愛",
      casual: "カジュアルセックス",
      friendship: "友達",
      chat: "ただのチャット",
      other: "その他"
    }
  },
  it: {
    ageTitle: "Conferma di avere almeno 18 anni",
    ageBtn: "Sì, ho 18 anni o più",
    goalTitle: "Qual è il tuo obiettivo?",
    goals: {
      relationship: "Relazione",
      casual: "Sesso occasionale",
      friendship: "Amicizia",
      chat: "Solo chattare",
      other: "Altro"
    }
  },
  fr: {
    ageTitle: "Confirmez que vous avez 18 ans ou plus",
    ageBtn: "Oui, j'ai 18 ans ou plus",
    goalTitle: "Quel est votre objectif ?",
    goals: {
      relationship: "Relation",
      casual: "Sexe occasionnel",
      friendship: "Amitié",
      chat: "Juste discuter",
      other: "Autre"
    }
  },
  nz: { // Новозеландский английский — как en
    ageTitle: "Confirm you are 18+",
    ageBtn: "Yes, I'm 18 or older",
    goalTitle: "What is your dating goal?",
    goals: {
      relationship: "Relationship",
      casual: "Casual sex",
      friendship: "Friendship",
      chat: "Just chat",
      other: "Other"
    }
  },
  cz: {
    ageTitle: "Potvrďte, že máte nejméně 18 let",
    ageBtn: "Ano, mám 18 nebo více",
    goalTitle: "Jaký je váš cíl?",
    goals: {
      relationship: "Vztah",
      casual: "Náhodný sex",
      friendship: "Přátelství",
      chat: "Jen povídat",
      other: "Jiné"
    }
  },
  at: { // Австрийский немецкий — как de
    ageTitle: "Bestätigen Sie, dass Sie mindestens 18 Jahre alt sind",
    ageBtn: "Ja, ich bin 18 oder älter",
    goalTitle: "Was ist Ihr Ziel?",
    goals: {
      relationship: "Beziehung",
      casual: "Gelegentlicher Sex",
      friendship: "Freundschaft",
      chat: "Einfach nur chatten",
      other: "Sonstiges"
    }
  },
  il: {
    ageTitle: "אשروا שאתם בני 18 ומעלה",
    ageBtn: "כן, אני בן 18 או יותר",
    goalTitle: "מה המטרה שלך?",
    goals: {
      relationship: "יחסים",
      casual: "סקס מקרי",
      friendship: "ידידות",
      chat: "רק לשלוח הודעות",
      other: "אחר"
    }
  },
  pl: {
    ageTitle: "Potwierdź, że masz co najmniej 18 lat",
    ageBtn: "Tak, mam 18 lub więcej",
    goalTitle: "Jaki jest Twój cel?",
    goals: {
      relationship: "Związek",
      casual: "Casual sex",
      friendship: "Przyjaźń",
      chat: "Po prostu porozmawiać",
      other: "Inne"
    }
  },
  sa: {
    ageTitle: "أكد أنك تبلغ من العمر 18 عامًا أو أكثر",
    ageBtn: "نعم، عمري 18 سنة أو أكثر",
    goalTitle: "ما هدفك؟",
    goals: {
      relationship: "علاقة",
      casual: " الجنس العفوي",
      friendship: "صداقة",
      chat: "فقط الدردشة",
      other: "أخرى"
    }
  },
  za: { // ЮАР — английский
    ageTitle: "Confirm you are 18+",
    ageBtn: "Yes, I'm 18 or older",
    goalTitle: "What is your dating goal?",
    goals: {
      relationship: "Relationship",
      casual: "Casual sex",
      friendship: "Friendship",
      chat: "Just chat",
      other: "Other"
    }
  },
  pt: {
    ageTitle: "Confirme que tem 18 anos ou mais",
    ageBtn: "Sim, tenho 18 anos ou mais",
    goalTitle: "Qual é o seu objetivo?",
    goals: {
      relationship: "Relacionamento",
      casual: "Sexo casual",
      friendship: "Amizade",
      chat: "Apenas conversar",
      other: "Outro"
    }
  },
  hu: {
    ageTitle: "Erősítse meg, hogy 18 éves vagy idősebb",
    ageBtn: "Igen, 18 éves vagyok vagy idősebb",
    goalTitle: "Mi a célja?",
    goals: {
      relationship: "Kapcsolat",
      casual: "Véletlenszerű szex",
      friendship: "Barátság",
      chat: "Csak beszélgetni",
      other: "Más"
    }
  },
  kz: {
    ageTitle: "Сізге 18 жас толғанын растаңыз",
    ageBtn: "Иә, маған 18 жас толды",
    goalTitle: "Сіздің мақсатыңыз қандай?",
    goals: {
      relationship: "Қарым-қатынас",
      casual: "Кездейсоқ секс",
      friendship: "Достық",
      chat: "Тек сөйлесу",
      other: "Басқа"
    }
  },
  my: {
    ageTitle: "Sahkan bahawa anda berumur 18 tahun atau lebih",
    ageBtn: "Ya, saya berumur 18 tahun atau lebih",
    goalTitle: "Apakah matlamat anda?",
    goals: {
      relationship: "Hubungan",
      casual: "Seks kasual",
      friendship: "Persahabatan",
      chat: "Hanya berbual",
      other: "Lain-lain"
    }
  },
  ro: {
    ageTitle: "Confirmați că aveți peste 18 ani",
    ageBtn: "Da, am 18 ani sau mai mult",
    goalTitle: "Care este scopul dumneavoastră?",
    goals: {
      relationship: "Relație",
      casual: "Sex casual",
      friendship: "Prietenie",
      chat: "Doar să vorbim",
      other: "Altele"
    }
  },
  gr: {
    ageTitle: "Επιβεβαιώστε ότι είστε 18+",
    ageBtn: "Ναι, είμαι 18 ή περισσότερο",
    goalTitle: "Ποιος είναι ο στόχος σας;",
    goals: {
      relationship: "Σχέση",
      casual: "Καθημερινός σεξ",
      friendship: "Φιλία",
      chat: "Απλά συνομιλία",
      other: "Άλλο"
    }
  },
  sk: {
    ageTitle: "Potvrďte, že máte aspoň 18 rokov",
    ageBtn: "Áno, mám 18 alebo viac",
    goalTitle: "Aký je váš cieľ?",
    goals: {
      relationship: "Vzťah",
      casual: "Náhodný sex",
      friendship: "Priateľstvo",
      chat: "Len rozprávať",
      other: "Iné"
    }
  },
  sg: {
    ageTitle: "Confirm you are 18+",
    ageBtn: "Yes, I'm 18 or older",
    goalTitle: "What is your dating goal?",
    goals: {
      relationship: "Relationship",
      casual: "Casual sex",
      friendship: "Friendship",
      chat: "Just chat",
      other: "Other"
    }
  },
  lt: {
    ageTitle: "Patvirtinkite, kad jums yra 18 metų ar daugiau",
    ageBtn: "Taip, man yra 18 metų ar daugiau",
    goalTitle: "Koks jūsų tikslas?",
    goals: {
      relationship: "Santykis",
      casual: "Atsitiktinis seksas",
      friendship: "Draugystė",
      chat: "Tiesiog pasikalbėti",
      other: "Kita"
    }
  },
  es: {
    ageTitle: "Confirma que tienes 18 años o más",
    ageBtn: "Sí, tengo 18 años o más",
    goalTitle: "¿Cuál es tu objetivo?",
    goals: {
      relationship: "Relación",
      casual: "Sexo ocasional",
      friendship: "Amistad",
      chat: "Solo charlar",
      other: "Otro"
    }
  },
  bg: {
    ageTitle: "Потвърдете, че сте на 18 години или повече",
    ageBtn: "Да, на 18 съм или повече",
    goalTitle: "Каква е целта ви?",
    goals: {
      relationship: "Връзка",
      casual: "Случаен секс",
      friendship: "Приятелство",
      chat: "Просто да си поговорим",
      other: "Друго"
    }
  },
  vn: {
    ageTitle: "Xác nhận bạn đã đủ 18 tuổi",
    ageBtn: "Có, tôi đã 18 tuổi trở lên",
    goalTitle: "Mục đích của bạn là gì?",
    goals: {
      relationship: "Mối quan hệ",
      casual: "Tình dục tình cờ",
      friendship: "Tình bạn",
      chat: "Chỉ trò chuyện",
      other: "Khác"
    }
  },
  mv: {
    ageTitle: "වයස 18 හෝ ඊට වැඩි බව තහවුරු කරන්න",
    ageBtn: "ඔව්, මගේ වයස 18 හෝ වැඩිය",
    goalTitle: "ඔබේ අරමුණ කුමක්ද?",
    goals: {
      relationship: "සම්බන්ධතා",
      casual: "අහඹු සෙක්ස්",
      friendship: "සාමූහිකත්වය",
      chat: "සරලව කතා කිරීම",
      other: "වෙනත්"
    }
  },
  ge: {
    ageTitle: "დარწმუნდით, რომ თქვენ 18 წლის ან მეტი ხართ",
    ageBtn: "კი, მე 18 წლის ან მეტი ვარ",
    goalTitle: "რა არის თქვენი მიზანი?",
    goals: {
      relationship: "ურთიერთობა",
      casual: "შემთხვევითი სექსი",
      friendship: "მეგობრობა",
      chat: "უბრალოდ საუბარი",
      other: "სხვა"
    }
  }
};

// === ПРИМЕНЕНИЕ ПЕРЕВОДА ===
document.getElementById('ageTitle').textContent = translations[lang]?.ageTitle || translations.en.ageTitle;
document.getElementById('ageConfirmBtn').textContent = translations[lang]?.ageBtn || translations.en.ageBtn;
document.getElementById('goalTitle').textContent = translations[lang]?.goalTitle || translations.en.goalTitle;

document.querySelectorAll('.goal-btn').forEach(btn => {
  const goal = btn.dataset.goal;
  btn.textContent = translations[lang]?.goals?.[goal] || translations.en.goals[goal];
});

// === УЛУЧШЕННАЯ ЗАЩИТА ОТ БОТОВ (без блокировки мобильных) ===
function getCanvasFingerprint() {
  const canvas = document.getElementById('bot-canvas');
  const ctx = canvas.getContext('2d');
  ctx.textBaseline = 'top';
  ctx.font = '14px Arial';
  ctx.fillText('bot_check', 2, 2);
  return canvas.toDataURL();
}

// Флаг: пользователь точно человек (если взаимодействовал)
let isHuman = false;

// Любой ввод — человек
document.addEventListener('touchstart', () => isHuman = true, { once: true });
document.addEventListener('mousedown', () => isHuman = true, { once: true });
document.addEventListener('keydown', () => isHuman = true, { once: true });

// Проверка бота (мягкая)
function isBot() {
  const fingerprint = getCanvasFingerprint();
  // Если Canvas не поддерживается — пропускаем (многие браузеры нормально работают)
  if (!fingerprint || fingerprint === ',') return false;

  // Очень быстрый клик (<200 мс) — подозрительно
  const timeSinceLoad = Date.now() - performance.timeOrigin;
  if (timeSinceLoad < 200 && !isHuman) return true;

  return false;
}

// === ОБРАБОТЧИК КНОПКИ 18+ ===
document.getElementById('ageConfirmBtn').addEventListener('click', () => {
  if (isBot()) {
    // Опционально: можно просто не делать ничего, или показать ошибку
    // Но для попандера лучше не блокировать — просто пропустить
    // Поэтому убираем проверку или делаем её мягкой
    // В данном случае — пропускаем всех, кто нажал кнопку
  }

  document.getElementById('agePage').classList.add('hidden');
  document.getElementById('goalPage').classList.remove('hidden');
});

// === ОБРАБОТЧИК ВЫБОРА ЦЕЛИ + РЕДИРЕКТ ===
document.querySelectorAll('.goal-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const goal = btn.dataset.goal;

    // Формируем URL с параметрами
    const url = new URL(REDIRECT_URL);
    url.searchParams.set('goal', goal);
    url.searchParams.set('lang', lang);
    url.searchParams.set('age_verified', '1');

    // Опционально: добавить UTM или другие метки
    // url.searchParams.set('utm_source', 'popunder');

    // Редирект
    window.location.href = url.toString();
  });
});