import { list_join_newline } from "./list_join_newline.mjs";
import { app_calendar_contacts_phones_missing } from "./app_calendar_contacts_phones_missing.mjs";
export async function app_calendar_contacts_phones_missing_text() {
  let add_to_contacts = await app_calendar_contacts_phones_missing();
  let joined = list_join_newline(add_to_contacts);
  return joined;
}
