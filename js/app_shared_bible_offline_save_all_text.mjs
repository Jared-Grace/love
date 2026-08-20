import { app_shared_bible_offline_arrow_text } from "./app_shared_bible_offline_arrow_text.mjs";
import { app_shared_text_reader_language_around } from "./app_shared_text_reader_language_around.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
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
  let text = app_shared_bible_offline_arrow_text(words);
  return text;
}
