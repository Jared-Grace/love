import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_history_empty_text() {
  "What an empty list of remembered readings says.";
  "It says what will be here rather than only that nothing is. Somebody who opens this and finds a blank screen cannot tell whether they have nothing kept or whether the keeping is broken, and the answer matters most to the reader who has just lost a tab.";
  let texts = {
    en: "Nothing yet. Whatever you are reading is remembered here, so you can come back to it if a tab closes.",
    ur: "ابھی کچھ نہیں۔ آپ جو بھی پڑھ رہے ہوں وہ یہاں یاد رکھا جاتا ہے، تاکہ کوئی ٹیب بند ہو جائے تو آپ واپس آ سکیں۔",
    translated_from: {
      ur: "Nothing yet. Whatever you are reading is remembered here, so you can come back to it if a tab closes.",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
