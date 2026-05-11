import { null_is } from "../../../love/public/src/null_is.mjs";
import { app_calendar_download_contacts } from "../../../love/public/src/app_calendar_download_contacts.mjs";
import { app_calendar_facebook_url_id } from "../../../love/public/src/app_calendar_facebook_url_id.mjs";
import { property_get_or_null } from "../../../love/public/src/property_get_or_null.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { app_calendar_url_ids } from "../../../love/public/src/app_calendar_url_ids.mjs";
import { app_calendar_contacts_phones_missing_text } from "../../../love/public/src/app_calendar_contacts_phones_missing_text.mjs";
import { list_includes_not } from "../../../love/public/src/list_includes_not.mjs";
export async function sandbox_3() {
  let url_ids = await app_calendar_url_ids();
  let contacts = await app_calendar_download_contacts();
  let property = app_calendar_facebook_url_id();
  let filtered = list_filter_text_includes_not(property, url_ids, contacts);
  return filtered;
  let joined = await app_calendar_contacts_phones_missing_text();
}
function list_filter_text_includes_not(property, url_ids, contacts) {
  function lambda(item) {
    let value = property_get_or_null(item, property);
    if (null_is(value)) {
      return false;
    }
    let includes = list_includes_not(url_ids, value);
    return includes;
  }
  let filtered = list_filter(contacts, lambda);
  return filtered;
}
