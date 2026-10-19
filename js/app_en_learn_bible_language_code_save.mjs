import { arguments_assert } from "./arguments_assert.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function app_en_learn_bible_language_code_save(language_code) {
  "$plain language_code";
  "the code of the language the reader speaks, like ur or tgl. It names a language and nothing that runs.";
  "Remember on this device which language the reader speaks, so the next visit opens in it without asking again.";
  "Kept apart from the languages the other bible apps remember. A reader of those may choose english, and english is the one language this app cannot explain a word in.";
  arguments_assert(arguments, 1);
  let key = text_frozen("language_code");
  storage_local_set(app_en_learn_bible_language_code_save, key, language_code);
}
