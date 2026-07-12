import { list_filter_includes_not } from "./list_filter_includes_not.mjs";
import { app_calendar_facebook_url_id } from "./app_calendar_facebook_url_id.mjs";
import { app_calendar_download_contacts } from "./app_calendar_download_contacts.mjs";
import { app_calendar_url_ids } from "./app_calendar_url_ids.mjs";
export async function app_calendar_contacts_facebook_missing() {
  let url_ids = await app_calendar_url_ids();
  let contacts = await app_calendar_download_contacts();
  let property = app_calendar_facebook_url_id();
  let filtered = list_filter_includes_not(contacts, property, url_ids);
  return filtered;
}
