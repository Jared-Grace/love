import { storage_key_name_get } from "./storage_key_name_get.mjs";
import { storage_local_enabled } from "./storage_local_enabled.mjs";
import { storage_local_specify_get } from "./storage_local_specify_get.mjs";
import { storage_local_get_global } from "./storage_local_get_global.mjs";
export function storage_local_name_get(app_fn_name, key) {
  "What one app filed on this device under a word it chose, asked for by the name that app answers to.";
  "The twin beside this one takes the app itself, and every page that owns what it is reading should keep taking it. This one is for reading across: a page that shows a verse and hands the reading on to the bible wants to open at the size the bible was left at, and the only thing standing between it and that setting was that saying whose setting it is meant importing the whole reader.";
  "Nothing is written back from here on purpose. Reading another app's setting is a kindness; writing one is that app losing track of its own, and there is no reader who wants a page they passed through to change what they chose next door.";
  let storage_local_key = storage_key_name_get(app_fn_name, key);
  if (storage_local_enabled()) {
    let result = storage_local_specify_get(storage_local_key);
    return result;
  }
  let value = storage_local_get_global(storage_local_key);
  return value;
}
