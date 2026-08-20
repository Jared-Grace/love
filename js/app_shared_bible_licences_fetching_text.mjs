import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_licences_fetching_text() {
  "What the credits screen says while it is still on its way, in the language the reader of this app reads.";
  "It names who is being fetched rather than calling them the credits. A word that means an acknowledgement in English is a word for a confession in several other languages, and the plain saying - the people who gave these - is the one every language can carry.";
  let texts = {
    en: "Fetching the credits",
    ur: "دینے والوں کی فہرست لائی جا رہی ہے",
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
