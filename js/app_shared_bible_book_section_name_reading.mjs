import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { app_shared_bible_testament_name_reading } from "./app_shared_bible_testament_name_reading.mjs";
export function app_shared_bible_book_section_name_reading(name) {
  "What a group of books is called in the book picker - a testament or a section of one - in the language the reader of this app reads.";
  "The groups keep their English names everywhere else, because a group is matched by that one spelling. Only the words drawn on the screen change, here, at the last step.";
  "A name not listed here is handed back as it is, so a group added later still shows, in English, rather than leaving a blank.";
  arguments_assert(arguments, 1);
  if (equal(name, "Law")) {
    let texts = {
      eng: "Law",
      urd: "شریعت",
      tgl: "Kautusan",
      translated_from: {
        urd: "Law",
        tgl: "Law",
      },
    };
    let r = app_shared_text_reader_language(texts);
    return r;
  }
  if (equal(name, "History")) {
    let texts = {
      eng: "History",
      urd: "تاریخ",
      tgl: "Kasaysayan",
      translated_from: {
        urd: "History",
        tgl: "History",
      },
    };
    let r4 = app_shared_text_reader_language(texts);
    return r4;
  }
  if (equal(name, "Poetry")) {
    let texts = {
      eng: "Poetry",
      urd: "شاعری",
      tgl: "Mga Tula",
      translated_from: {
        urd: "Poetry",
        tgl: "Poetry",
      },
    };
    let r5 = app_shared_text_reader_language(texts);
    return r5;
  }
  if (equal(name, "Prophets")) {
    let texts = {
      eng: "Prophets",
      urd: "نبیوں کی کتابیں",
      tgl: "Mga Propeta",
      translated_from: {
        urd: "Prophets",
        tgl: "Prophets",
      },
    };
    let r6 = app_shared_text_reader_language(texts);
    return r6;
  }
  if (equal(name, "Gospels & Acts (history)")) {
    let texts = {
      eng: "Gospels & Acts (history)",
      urd: "انجیل اور اعمال (تاریخ)",
      tgl: "Mga Ebanghelyo at Gawa (kasaysayan)",
      translated_from: {
        urd: "Gospels & Acts (history)",
        tgl: "Gospels & Acts (history)",
      },
    };
    let r7 = app_shared_text_reader_language(texts);
    return r7;
  }
  if (equal(name, "Letters")) {
    let texts = {
      eng: "Letters",
      urd: "خطوط",
      tgl: "Mga Sulat",
      translated_from: {
        urd: "Letters",
        tgl: "Letters",
      },
    };
    let r8 = app_shared_text_reader_language(texts);
    return r8;
  }
  if (equal(name, "Revelation")) {
    let texts = {
      eng: "Revelation",
      urd: "مکاشفہ",
      tgl: "Pahayag",
      translated_from: {
        urd: "Revelation",
        tgl: "Revelation",
      },
    };
    let r9 = app_shared_text_reader_language(texts);
    return r9;
  }
  if (equal(name, "Other")) {
    let texts = {
      eng: "Other",
      urd: "دیگر",
      tgl: "Iba pa",
      translated_from: {
        urd: "Other",
        tgl: "Other",
      },
    };
    let r10 = app_shared_text_reader_language(texts);
    return r10;
  }
  if (equal(name, "Uncategorized")) {
    let texts = {
      eng: "Uncategorized",
      urd: "دوسری کتابیں",
      tgl: "Iba pang aklat",
      spa: "Sin categoría",
      por: "Sem categoria",
      ind: "Tanpa kategori",
      translated_from: {
        urd: "Uncategorized",
        tgl: "Uncategorized",
        spa: "Uncategorized",
        por: "Uncategorized",
        ind: "Uncategorized",
      },
    };
    let r11 = app_shared_text_reader_language(texts);
    return r11;
  }
  ("a testament, or a group nobody has named here yet, which the testaments hand back as it is");
  let testament = app_shared_bible_testament_name_reading(name);
  return testament;
}
