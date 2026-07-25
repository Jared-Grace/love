import { storage_local_key_get } from "./storage_local_key_get.mjs";
import { undefined_is_if_null } from "./undefined_is_if_null.mjs";
import { json_to } from "./json_to.mjs";
export function storage_session_set(app_fn, key, value) {
  "kept only for this tab and only until it closes; the value is wrapped so that a stored null reads back as null rather than as the text null";
  let storage_key = storage_local_key_get(app_fn, key);
  value = undefined_is_if_null(value);
  let j = json_to({
    value,
  });
  sessionStorage.setItem(storage_key, j);
}
