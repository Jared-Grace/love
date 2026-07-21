import { storage_local_get } from "./storage_local_get.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { uuid } from "./uuid.mjs";
export async function app_shared_contact_user_id() {
  "a stable per-device id so every message a person sends — from any app's Contact screen, or the message app — lands under one folder in the developer's inbox. Kept in localStorage, created once on first use.";
  let key = "user_id";
  let existing = storage_local_get(app_shared_contact_user_id, key);
  let found = null_not_is(existing);
  if (found) {
    return existing;
  }
  let created = await uuid();
  storage_local_set(app_shared_contact_user_id, key, created);
  return created;
}
