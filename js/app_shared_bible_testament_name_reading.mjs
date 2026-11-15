import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_testament_name_reading(name) {
  "What a testament is called in the book picker, in the language the reader of this app reads.";
  "Apart from the sections inside a testament only so that neither list grows past what can be read at once. A name that is not a testament is handed back as it is.";
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
  return name;
}
