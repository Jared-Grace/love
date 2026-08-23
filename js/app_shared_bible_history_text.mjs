import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { emoji_clock } from "./emoji_clock.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_bible_history_text() {
  "What the way into the remembered readings is called - said as what the reader will find there rather than as the word history, which is a word about records and this is a way back to where they were.";
  let texts = {
    en: " Where you were reading",
    ur: " آپ کہاں پڑھ رہے تھے",
    translated_from: {
      ur: " Where you were reading",
    },
  };
  let label = app_shared_text_reader_language(texts);
  let left = emoji_clock();
  let text = text_combine(left, label);
  return text;
}
