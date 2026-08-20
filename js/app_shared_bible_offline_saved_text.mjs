import { app_shared_text_reader_language_around } from "./app_shared_text_reader_language_around.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { emoji_check } from "./emoji_check.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_bible_offline_saved_text(name) {
  "What a language already kept on this device says about itself, in the language the reader of this app reads.";
  "The tick is not written out per language. What it means - this one is done - is the same picture whichever way the page is read, so only the words are asked for here.";
  arguments_assert(arguments, 1);
  let parts = {
    en: {
      before: " ",
      after: " is saved on this device",
    },
    ur: {
      before: " ",
      after: " اس آلے پر محفوظ ہے",
    },
    translated_from: {
      ur: {
        before: " ",
        after: " is saved on this device",
      },
    },
  };
  let words = app_shared_text_reader_language_around(parts, name);
  let tick = emoji_check();
  let text = text_combine(tick, words);
  return text;
}
