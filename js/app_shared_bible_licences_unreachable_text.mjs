import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_licences_unreachable_text() {
  "What the credits screen says when it could not get to them, in the language the reader of this app reads.";
  "It promises they will be here rather than asking the reader to do anything, because nothing they can do from this screen would help and the connection coming back is the whole of what is needed.";
  let texts = {
    en: "The credits could not be fetched just now. They need the internet, and they will be here when it is back",
    ur: "دینے والوں کی فہرست ابھی نہیں لائی جا سکی۔ اس کے لیے انٹرنیٹ چاہیے، اور جب انٹرنیٹ واپس آئے گا تو یہ یہاں ہوگی",
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
