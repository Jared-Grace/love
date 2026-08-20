import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_offline_starting_text() {
  "What one language's row says in the moment between the press and the first thing arriving, in the language the reader of this app reads.";
  let texts = {
    en: "Starting the download",
    ur: "ڈاؤن لوڈ شروع ہو رہا ہے",
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
