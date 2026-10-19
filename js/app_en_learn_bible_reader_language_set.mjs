import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_store_chosen } from "./app_en_learn_bible_store_chosen.mjs";
import { property_get } from "./property_get.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { app_shared_language_code_reader_set } from "./app_shared_language_code_reader_set.mjs";
export function app_en_learn_bible_reader_language_set() {
  "Say which language the app is speaking to its reader in, taken from the store of explanations the reader has chosen.";
  "Asked again each time a screen is drawn rather than once at the start, because the language can be changed in the settings while the app runs, and Urdu reads from the right while Tagalog reads from the left.";
  arguments_assert(arguments, 0);
  let store = app_en_learn_bible_store_chosen();
  let language = property_get(store, "language");
  let property_name = language_code_key();
  let language_code = property_get(language, property_name);
  app_shared_language_code_reader_set(language_code);
}
