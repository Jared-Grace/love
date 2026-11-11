import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_book_section_name_reading(name) {
  "What a group of books is called in the book picker - a testament or a section of one - in the language the reader of this app reads.";
  "The groups keep their English names everywhere else, because a group is matched by that one spelling. Only the words drawn on the screen change, here, at the last step.";
  "A name not listed here is handed back as it is, so a group added later still shows, in English, rather than leaving a blank.";
  arguments_assert(arguments, 1);
  if (equal(name, "Old Testament")) {
    let texts = {
      en: "Old Testament",
      ur: "پرانا عہد نامہ",
      tgl: "Lumang Tipan",
      translated_from: {
        ur: "Old Testament",
        tgl: "Old Testament",
      },
    };
    let r = app_shared_text_reader_language(texts);
    return r;
  }
  if (equal(name, "New Testament")) {
    let texts = {
      en: "New Testament",
      ur: "نیا عہد نامہ",
      tgl: "Bagong Tipan",
      translated_from: {
        ur: "New Testament",
        tgl: "New Testament",
      },
    };
    let r2 = app_shared_text_reader_language(texts);
    return r2;
  }
  if (equal(name, "Law")) {
    let texts = {
      en: "Law",
      ur: "شریعت",
      tgl: "Kautusan",
      translated_from: {
        ur: "Law",
        tgl: "Law",
      },
    };
    let r3 = app_shared_text_reader_language(texts);
    return r3;
  }
  if (equal(name, "History")) {
    let texts = {
      en: "History",
      ur: "تاریخ",
      tgl: "Kasaysayan",
      translated_from: {
        ur: "History",
        tgl: "History",
      },
    };
    let r4 = app_shared_text_reader_language(texts);
    return r4;
  }
  if (equal(name, "Poetry")) {
    let texts = {
      en: "Poetry",
      ur: "شاعری",
      tgl: "Mga Tula",
      translated_from: {
        ur: "Poetry",
        tgl: "Poetry",
      },
    };
    let r5 = app_shared_text_reader_language(texts);
    return r5;
  }
  if (equal(name, "Prophets")) {
    let texts = {
      en: "Prophets",
      ur: "نبیوں کی کتابیں",
      tgl: "Mga Propeta",
      translated_from: {
        ur: "Prophets",
        tgl: "Prophets",
      },
    };
    let r6 = app_shared_text_reader_language(texts);
    return r6;
  }
  if (equal(name, "Gospels & Acts (history)")) {
    let texts = {
      en: "Gospels & Acts (history)",
      ur: "انجیل اور اعمال (تاریخ)",
      tgl: "Mga Ebanghelyo at Gawa (kasaysayan)",
      translated_from: {
        ur: "Gospels & Acts (history)",
        tgl: "Gospels & Acts (history)",
      },
    };
    let r7 = app_shared_text_reader_language(texts);
    return r7;
  }
  if (equal(name, "Letters")) {
    let texts = {
      en: "Letters",
      ur: "خطوط",
      tgl: "Mga Sulat",
      translated_from: {
        ur: "Letters",
        tgl: "Letters",
      },
    };
    let r8 = app_shared_text_reader_language(texts);
    return r8;
  }
  if (equal(name, "Revelation")) {
    let texts = {
      en: "Revelation",
      ur: "مکاشفہ",
      tgl: "Pahayag",
      translated_from: {
        ur: "Revelation",
        tgl: "Revelation",
      },
    };
    let r9 = app_shared_text_reader_language(texts);
    return r9;
  }
  if (equal(name, "Other")) {
    let texts = {
      en: "Other",
      ur: "دیگر",
      tgl: "Iba pa",
      translated_from: {
        ur: "Other",
        tgl: "Other",
      },
    };
    let r10 = app_shared_text_reader_language(texts);
    return r10;
  }
  if (equal(name, "Uncategorized")) {
    let texts = {
      en: "Uncategorized",
      ur: "دوسری کتابیں",
      tgl: "Iba pang aklat",
      translated_from: {
        ur: "Uncategorized",
        tgl: "Uncategorized",
      },
    };
    let r11 = app_shared_text_reader_language(texts);
    return r11;
  }
  return name;
}
