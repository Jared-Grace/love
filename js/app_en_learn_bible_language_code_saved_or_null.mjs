import { arguments_assert } from "./arguments_assert.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { app_en_learn_bible_language_code_save } from "./app_en_learn_bible_language_code_save.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function app_en_learn_bible_language_code_saved_or_null() {
  "The language this reader said they speak, remembered on this device, or nothing when they have never said.";
  "Nothing is the answer for a new reader, and it is not filled in with a guess. A reader who never chose is asked, because nobody has been using the app long enough for a guess to be keeping anyone's place.";
  arguments_assert(arguments, 0);
  let key = text_frozen("language_code");
  let value = storage_local_get(app_en_learn_bible_language_code_save, key);
  return value;
}
