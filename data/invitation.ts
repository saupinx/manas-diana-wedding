export type Language = "ru" | "kz";

export type InvitationContent = {
  eventTitle: string;
  name: string;
  heroNames: string;
  organizers: string;
  invitationText: string;
  guestArrival: string;
  start: string;
  date: string;
  venue: string;
  city: string;
  address: string;
  childrenNote: string;
  closingPhrase: string;
  labels: {
    languageRu: string;
    languageKz: string;
    invitation: string;
    eventInfo: string;
    countdown: string;
    calendar: string;
    program: string;
    rsvp: string;
    children: string;
    wishes: string;
    gallery: string;
    final: string;
    guestArrival: string;
    start: string;
    date: string;
    venue: string;
    city: string;
    address: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    addToCalendar: string;
    sendRsvp: string;
    copyWish: string;
    copied: string;
    music: string;
    musicUnavailable: string;
  };
  program: Array<{ time: string; title: string }>;
  wishes: string[];
};

export const eventDateIso = "2026-08-10T18:00:00+05:00";

export const assetPaths = {
  hero: "/assets/photos/hero.jpg",
  gallery: ["/assets/photos/gallery-1.jpg", "/assets/photos/gallery-2.jpg"],
  music: "/assets/music/music.mp3",
};

export const whatsappPhone = "77024657723";

export const invitation: Record<Language, InvitationContent> = {
  ru: {
  eventTitle: "Свадебное торжество",
  name: "Манас и Диана",
  heroNames: "Manas & Diana",
  organizers: "Хозяева торжества",
  invitationText:
    "Приглашаем Вас стать почётным гостем на свадебном торжестве Манаса и Дианы.",
  guestArrival: "17:00",
  start: "18:00",
  date: "10.08.2026",
  venue: "Ресторан Han Tau",
  city: "Алматы",
  address:
    "https://2gis.kz/almaty/firm/70000001058768409?m=77.242578%2C43.408285%2F19.11",
  childrenNote: "",
  closingPhrase:
    "Будем рады разделить с Вами один из самых важных и счастливых дней нашей жизни.",
  labels: {
    languageRu: "RU",
    languageKz: "KZ",
    invitation: "Приглашение",
    eventInfo: "Детали",
    countdown: "До торжества",
    calendar: "Календарь",
    program: "Программа",
    rsvp: "Подтвердите своё участие",
    children: "DRESS-CODE",
    wishes: "Пожелания",
    gallery: "Галерея",
    final: "До встречи",
    guestArrival: "Сбор гостей",
    start: "Начало",
    date: "Дата",
    venue: "Место",
    city: "Город",
    address: "Адрес",
    days: "дней",
    hours: "часов",
    minutes: "минут",
    seconds: "секунд",
    addToCalendar: "Добавить в календарь",
    sendRsvp: "Ответить в WhatsApp",
    copyWish: "Скопировать",
    copied: "Скопировано",
    music: "Музыка",
    musicUnavailable: "Музыка недоступна",
  },
  program: [
    { time: "17:00", title: "Сбор гостей" },
    { time: "18:00", title: "Начало свадебного торжества" },
    { time: "19:00", title: "Праздничная программа" },
    { time: "23:00", title: "Завершение вечера" },
  ],
  wishes: [
    "Пусть этот день станет началом долгой и счастливой семейной жизни.",
    "Желаем Манасу и Диане любви, взаимопонимания и семейного благополучия.",
    "Пусть ваш дом всегда будет наполнен радостью, теплом и гармонией.",
  ],
},  
  kz: {
  eventTitle: "Үйлену тойы",
  name: "Манас және Диана",
  heroNames: "Manas & Diana",
  organizers: "Той иелері",
  invitationText:
    "Сіздерді Манас пен Диананың үйлену тойының қадірлі қонағы болуға шақырамыз.",
  guestArrival: "17:00",
  start: "18:00",
  date: "10.08.2026",
  venue: "Han Tau мейрамханасы",
  city: "Алматы",
  address:
    "https://2gis.kz/almaty/firm/70000001058768409?m=77.242578%2C43.408285%2F19.11",
  childrenNote: "",
  closingPhrase:
    "Өміріміздегі ең бақытты әрі маңызды күнді бізбен бірге бөлісуге шақырамыз.",
  labels: {
    languageRu: "RU",
    languageKz: "KZ",
    invitation: "Шақыру",
    eventInfo: "Мәлімет",
    countdown: "Тойға дейін",
    calendar: "Күнтізбе",
    program: "Бағдарлама",
    rsvp: "Қатысатыныңызды растаңыз",
    children: "DRESS-CODE",
    wishes: "Тілектер",
    gallery: "Галерея",
    final: "Кездескенше",
    guestArrival: "Қонақтарды қарсы алу",
    start: "Басталуы",
    date: "Күні",
    venue: "Өтетін орны",
    city: "Қала",
    address: "Мекенжай",
    days: "күн",
    hours: "сағат",
    minutes: "минут",
    seconds: "секунд",
    addToCalendar: "Күнтізбеге қосу",
    sendRsvp: "WhatsApp арқылы жауап беру",
    copyWish: "Көшіру",
    copied: "Көшірілді",
    music: "Әуен",
    musicUnavailable: "Әуен қолжетімсіз",
  },
  program: [
    { time: "17:00", title: "Қонақтарды қарсы алу" },
    { time: "18:00", title: "Үйлену тойының басталуы" },
    { time: "19:00", title: "Мерекелік бағдарлама" },
    { time: "23:00", title: "Кештің аяқталуы" },
  ],
  wishes: [
    "Бұл күн ұзақ әрі бақытты отбасылық өмірдің бастауы болсын.",
    "Манас пен Дианаға махаббат, түсіністік және отбасы бақыты тілейміз.",
    "Шаңырақтарыңыз әрдайым жылулыққа, қуанышқа және берекеге толы болсын.",
  ],
},
};