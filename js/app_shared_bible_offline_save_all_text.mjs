import { app_shared_text_reader_language_around } from "./app_shared_text_reader_language_around.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { emoji_arrow_down } from "./emoji_arrow_down.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_bible_offline_save_all_text(size) {
  "What the one button that keeps every chosen language on this device says, in the language the reader of this app reads, with how many that is.";
  "The count is said rather than left out, because somebody who chose six is being told this one press covers all six.";
  arguments_assert(arguments, 1);
  let parts = {
    en: {
      before: " Save all ",
      after: " of them",
    },
    ur: {
      before: " سبھی ",
      after: " محفوظ کریں",
    },
  };
  let words = app_shared_text_reader_language_around(parts, size);
  let arrow = emoji_arrow_down();
  let text = text_combine(arrow, words);
  return text;
}
