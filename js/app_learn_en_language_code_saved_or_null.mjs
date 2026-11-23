import { arguments_assert } from "./arguments_assert.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { app_learn_en_language_code_save } from "./app_learn_en_language_code_save.mjs";
import { null_is } from "./null_is.mjs";
import { ebible_language_code_current } from "./ebible_language_code_current.mjs";
export function app_learn_en_language_code_saved_or_null() {
  "The language this reader said they speak, remembered on this device, or nothing when they have never said.";
  "Nothing is the answer for a new reader, and it is not filled in with a guess. A reader who never chose is asked, because nobody has been using the app long enough for a guess to be keeping anyone's place.";
  arguments_assert(arguments, 0);
  let key = text_frozen("language_code");
  let value = storage_local_get(app_learn_en_language_code_save, key);
  if (null_is(value)) {
    return value;
  }
  ("saved before its code was renamed, perhaps, so read as the code it goes by now");
  let current = ebible_language_code_current(value);
  return current;
}
