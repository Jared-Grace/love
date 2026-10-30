import { null_is } from "./null_is.mjs";
import { storage_local_key_carried_get_json } from "./storage_local_key_carried_get_json.mjs";
export function storage_local_specify_get_json(storage_local_key) {
  "$plain storage_local_key";
  "What this browser holds under one whole key, as the text it was written as; null when nothing is there.";
  "Every read of a saved setting comes through here, so when the key is empty this is where a setting filed under the owner's old name is carried across to the new one. A rename then never empties anybody's saved progress.";
  let r = localStorage.getItem(storage_local_key);
  if (null_is(r)) {
    r = storage_local_key_carried_get_json(storage_local_key);
  }
  return r;
}
