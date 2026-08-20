import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { emoji_font_larger } from "./emoji_font_larger.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_font_size_larger_text() {
  "What the button that grows the writing says, in the language the reader of this app reads.";
  "Said as an instruction rather than as the name of a setting. A reader who cannot make out the words on the screen is the one person who needs this button, and they are reading it at the size that already defeated them - so it says what will happen when they press it, in as few words as that takes.";
  let texts = {
    en: " Font size larger",
    ur: " لکھائی بڑی کریں",
  };
  let label = app_shared_text_reader_language(texts);
  let left = emoji_font_larger();
  let text = text_combine(left, label);
  return text;
}
