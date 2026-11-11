// Translation keys for reference data. Display with t(key).
export const RASIS = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];

export const NAKSHATRAS = [
  'ashwini', 'bharani', 'krittika', 'rohini', 'mrigashirsha', 'thiruvathirai', 'punarvasu', 'pusam', 'ayilyam',
  'magam', 'pooram', 'uthiram', 'hastham', 'chithirai', 'swathi', 'visakam', 'anusham', 'kettai',
  'moolam', 'pooradam', 'uthiradam', 'thiruvonam', 'avittam', 'sadhayam', 'poorattathi', 'uthirattathi', 'revathi',
];

export const PORUTHAMS = [
  'dinaPorutham', 'ganaPorutham', 'mahendraPorutham', 'streeDeergham', 'yoniPorutham',
  'rasiPorutham', 'rasiAdhipathi', 'vasyaPorutham', 'rajjuPorutham', 'vedhaiPorutham',
];

// Service directory: [labelKey, icon, route]
export const SERVICE_SECTIONS = [
  { id: 'astro', tab: 'astrology', title: 'astrologyServices', tone: 'maroon', items: [
    ['calculateJathagam', 'chart', '/jathagam'], ['lifeHoroscope', 'doc', '/jathagam'],
    ['marriageMatching', 'rings', '/porutham'], ['nakshatraMatching', 'star', '/porutham'],
    ['numerology', 'hash', '/services'], ['nameAstrology', 'hash', '/services'],
    ['vastu', 'house', '/services'], ['askAstrologer', 'chat', '/consult'],
    ['babyNames', 'star', '/services'], ['doshaCheck', 'planet', '/jathagam'],
  ] },
  { id: 'cal', tab: 'calendar', title: 'calendarGoodTimes', tone: 'green', items: [
    ['dailyPanchangam', 'cal', '/'], ['goodTime', 'clock', '/'],
    ['gowriPanchangam', 'clock', '/'], ['muhurthamDates', 'star', '/'],
    ['rahuKalam', 'moon', '/'], ['amavasaiPournami', 'moon', '/'],
    ['vrathamDays', 'lamp', '/'], ['festivals', 'lamp', '/'],
  ] },
  { id: 'palan', tab: 'predictions', title: 'predictionsPeyarchi', tone: 'indigo', items: [
    ['dailyRasiPalan', 'sun', '/rasi-palan'], ['weeklyRasiPalan', 'sun', '/rasi-palan'],
    ['monthlyRasiPalan', 'sun', '/rasi-palan'], ['yearlyPredictions', 'sun', '/rasi-palan'],
    ['guruPeyarchi', 'planet', '/rasi-palan'], ['saniPeyarchi', 'saturn', '/rasi-palan'],
    ['rahuKetuPeyarchi', 'moon', '/rasi-palan'], ['nakshatraPalan', 'star', '/rasi-palan'],
  ] },
  { id: 'spirit', tab: 'spiritual', title: 'spiritualRemedies', tone: 'gold', items: [
    ['pariharaPoojas', 'lamp', '/consult'], ['temples', 'temple', '/services'],
    ['mantras', 'doc', '/services'], ['slokas', 'doc', '/services'],
    ['homamBooking', 'lamp', '/consult'], ['pdfBooks', 'doc', '/account'],
    ['spiritualProducts', 'bag', '/shop'], ['articles', 'doc', '/'],
  ] },
  { id: 'biz', tab: 'business', title: 'businessAds', tone: 'maroon', items: [
    ['businessBranding', 'bag', '/consult'], ['localAds', 'mega', '/services'],
    ['logoAstrology', 'star', '/consult'], ['advertiseWithUs', 'mega', '/consult'],
  ] },
];
