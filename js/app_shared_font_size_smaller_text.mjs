import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { emoji_font_smaller } from "./emoji_font_smaller.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_font_size_smaller_text() {
  "What the button that shrinks the writing says, in the language the reader of this app reads.";
  "Its neighbour going the other way says why this is an instruction rather than the name of a setting.";
  let texts = {
    en: " Font size smaller",
    ur: " لکھائی چھوٹی کریں",
    translated_from: {
      ur: " Font size smaller",
    },
  };
  let label = app_shared_text_reader_language(texts);
  let left = emoji_font_smaller();
  let text = text_combine(left, label);
  return text;
}
