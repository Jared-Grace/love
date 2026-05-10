import { app_calendar_facebook_url_id } from "../../../love/public/src/app_calendar_facebook_url_id.mjs";
import { property_get_or_null } from "../../../love/public/src/property_get_or_null.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { app_calendar_download } from "../../../love/public/src/app_calendar_download.mjs";
import { app_calendar_url_ids } from "../../../love/public/src/app_calendar_url_ids.mjs";
import { app_calendar_contacts_phones_missing_text } from "../../../love/public/src/app_calendar_contacts_phones_missing_text.mjs";
export async function sandbox_3() {
  let url_ids = await app_calendar_url_ids();
  let data = await app_calendar_download();
  function lambda(item) {
    let property = app_calendar_facebook_url_id();
    let value = property_get_or_null(item, property);
  }
  let filtered = list_filter(list, lambda);
  return;
  let joined = await app_calendar_contacts_phones_missing_text();
}
