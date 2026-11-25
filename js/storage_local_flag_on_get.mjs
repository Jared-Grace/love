import { arguments_assert } from "./arguments_assert.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { null_is } from "./null_is.mjs";
export function storage_local_flag_on_get(fn_get, key) {
  "$plain key";
  "the key is the word this yes-or-no is filed under. It is a name to look under and nothing that runs.";
  "A yes or no this reader set on their own device, answering YES for a reader who has never set one.";
  "The twin of the reader that answers no, for the setting whose help a newcomer needs before they know to ask for it. The absence is still answered in one place per meaning rather than at each page that asks, so a setting that starts on starts on everywhere it is read.";
  arguments_assert(arguments, 2);
  let stored = storage_local_get(fn_get, key);
  let missing = null_is(stored);
  if (missing) {
    return true;
  }
  return stored;
}
