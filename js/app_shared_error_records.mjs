import { html_error_records_storage_key } from "./html_error_records_storage_key.mjs";
import { storage_local_specify_get } from "./storage_local_specify_get.mjs";
import { null_is } from "./null_is.mjs";
export function app_shared_error_records() {
  ("what this device has written down about the errors it has hit, oldest first - an empty list when it has hit none");
  ("The writer is the handful of lines baked into the page rather than anything in here, so this is a read of somebody else's file. It is asked for by the one word both sides spell, and nothing here writes back: trimming the list is the writer's job, and doing it from both ends would be two places deciding how much is kept.");
  let key = html_error_records_storage_key();
  let held = storage_local_specify_get(key);
  let missing = null_is(held);
  if (missing) {
    let none = [];
    return none;
  }
  return held;
}
