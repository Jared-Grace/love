import { app_shared_text_reader_language_around } from "./app_shared_text_reader_language_around.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { emoji_arrow_down } from "./emoji_arrow_down.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_bible_offline_save_text(name) {
  "What the button that keeps one language on this device says, in the language the reader of this app reads.";
  "The arrow pointing down is not turned round for a reader who reads from the right. It faces down because what it means is down - onto the thing in your hand - and that is the same direction for everybody.";
  arguments_assert(arguments, 1);
  let parts = {
    en: {
      before: " Save ",
      after: "",
    },
    ur: {
      before: " ",
      after: " محفوظ کریں",
    },
  };
  let words = app_shared_text_reader_language_around(parts, name);
  let arrow = emoji_arrow_down();
  let text = text_combine(arrow, words);
  return text;
}
