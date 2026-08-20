import { app_shared_text_reader_language_around } from "./app_shared_text_reader_language_around.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_bible_offline_freeing_text(name) {
  "What stands in place of the button while one language's space is being given back, in the language the reader of this app reads.";
  arguments_assert(arguments, 1);
  let parts = {
    en: {
      before: "Freeing the space ",
      after: " uses",
    },
    ur: {
      before: "",
      after: " کی جگہ خالی کی جا رہی ہے",
    },
  };
  let text = app_shared_text_reader_language_around(parts, name);
  return text;
}
