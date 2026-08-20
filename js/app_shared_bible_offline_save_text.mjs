import { app_shared_bible_offline_arrow_text } from "./app_shared_bible_offline_arrow_text.mjs";
import { app_shared_text_reader_language_around } from "./app_shared_text_reader_language_around.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_bible_offline_save_text(name) {
  "What the button that keeps one language on this device says, in the language the reader of this app reads.";
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
    translated_from: {
      ur: {
        before: " Save ",
        after: "",
      },
    },
  };
  let words = app_shared_text_reader_language_around(parts, name);
  let text = app_shared_bible_offline_arrow_text(words);
  return text;
}
