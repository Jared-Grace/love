import { arguments_assert } from "./arguments_assert.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { null_is } from "./null_is.mjs";
export function storage_local_flag_get(fn_get, key) {
  "$plain key";
  "the key is the word this yes-or-no is filed under. It is a name to look under and nothing that runs.";
  "A yes or no this reader set on their own device, answering NO for a reader who has never set one.";
  "The stored answer and the absence of one are a single question, and answering the absence at each place that asks is where two pages drift apart - one reads a missing answer as no and the next as yes, and the reader meets one setting behaving two ways.";
  "The reading half of a pair owns the drawer, so the function that asks is handed in and its own name is what names the place. That is what keeps the reader and the writer of one setting looking in the same drawer.";
  arguments_assert(arguments, 2);
  let stored = storage_local_get(fn_get, key);
  let missing = null_is(stored);
  if (missing) {
    return false;
  }
  return stored;
}
