import { list_filter_includes_not } from "../../../love/public/src/list_filter_includes_not.mjs";
import { app_calendar_download_contacts } from "../../../love/public/src/app_calendar_download_contacts.mjs";
import { app_calendar_facebook_url_id } from "../../../love/public/src/app_calendar_facebook_url_id.mjs";
import { app_calendar_url_ids } from "../../../love/public/src/app_calendar_url_ids.mjs";
import { app_calendar_contacts_phones_missing_text } from "../../../love/public/src/app_calendar_contacts_phones_missing_text.mjs";
export async function sandbox_3() {
  let url_ids = await app_calendar_url_ids();
  let contacts = await app_calendar_download_contacts();
  let property = app_calendar_facebook_url_id();
  let filtered = list_filter_includes_not(contacts, property, url_ids);
  return filtered;
  let joined = await app_calendar_contacts_phones_missing_text();
}
