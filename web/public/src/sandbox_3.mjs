import { list_join_newline } from "../../../love/public/src/list_join_newline.mjs";
import { app_calendar_contacts_phones_missing } from "../../../love/public/src/app_calendar_contacts_phones_missing.mjs";
export async function sandbox_3() {
  let add_to_contacts = await app_calendar_contacts_phones_missing();
  let joined = list_join_newline(add_to_contacts);
  return joined;
}
