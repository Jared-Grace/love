import { storage_local_get } from "./storage_local_get.mjs";
import { null_is } from "./null_is.mjs";
import { app_shared_contact_messages_key } from "./app_shared_contact_messages_key.mjs";
export function app_shared_contact_messages() {
  "everything this person has written to the developer from a contact panel, oldest first, or an empty list if they have never written one.";
  "Filed under this shared code's own name rather than under whichever app the panel was opened over, so one person sees one conversation wherever they open it - and so no app has to hand its own name in to be shown what it has nothing to do with. Reading another app's storage is allowed here; writing to it is not, which is the reason this thread is the contact panel's own rather than the message app's.";
  let key = app_shared_contact_messages_key();
  let stored = storage_local_get(app_shared_contact_messages, key);
  let missing = null_is(stored);
  if (missing) {
    return [];
  }
  return stored;
}
