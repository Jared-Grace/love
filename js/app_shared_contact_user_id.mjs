import { fn_name } from "./fn_name.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { uuid } from "./uuid.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
export async function app_shared_contact_user_id() {
  "a stable per-device id so every message a person sends — from any app's Contact screen, or the message app — lands under one folder in the developer's inbox. Kept in localStorage, created once on first use.";
  ("frozen, because it is already written on devices and because a second reader spells it too. A page that never booted has no bundle and so cannot ask this function anything - it reads the same slot straight out of localStorage, through $fn ",
    fn_name("app_shared_contact_user_id_storage_key"),
    ", to say WHOSE device a dead boot is being reported from. Two spellings of one word only stay one word while neither may move, which is what the freezing says.");
  let key = text_frozen("user_id");
  let existing = storage_local_get(app_shared_contact_user_id, key);
  let found = null_not_is(existing);
  if (found) {
    return existing;
  }
  let created = await uuid();
  storage_local_set(app_shared_contact_user_id, key, created);
  return created;
}
