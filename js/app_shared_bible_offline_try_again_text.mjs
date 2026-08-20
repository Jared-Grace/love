import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { emoji_arrow_down } from "./emoji_arrow_down.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_bible_offline_try_again_text() {
  "What the button offering a download another go says, in the language the reader of this app reads.";
  "One language's row and the button that saves all of them both offer this, and they offer the same thing, so they say it in the same words.";
  let texts = {
    en: " Try again",
    ur: " دوبارہ کوشش کریں",
  };
  let label = app_shared_text_reader_language(texts);
  let arrow = emoji_arrow_down();
  let text = text_combine(arrow, label);
  return text;
}
