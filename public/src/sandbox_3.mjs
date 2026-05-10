import { app_calendar_url_ids } from "../../../love/public/src/app_calendar_url_ids.mjs";
import { app_calendar_contacts_phones_missing_text } from "../../../love/public/src/app_calendar_contacts_phones_missing_text.mjs";
export async function sandbox_3() {
  let url_ids = await app_calendar_url_ids();
  return;
  let joined = await app_calendar_contacts_phones_missing_text();
}
