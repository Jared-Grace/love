import { app_calendar_download_browser } from "../../../love/public/src/app_calendar_download_browser.mjs";
import { object_pick_try_values_join_space } from "../../../love/public/src/object_pick_try_values_join_space.mjs";
import { app_calendar_whatsapp_phone } from "../../../love/public/src/app_calendar_whatsapp_phone.mjs";
import { app_calendar_facebook_conversation_id } from "../../../love/public/src/app_calendar_facebook_conversation_id.mjs";
import { app_calendar_facebook_url_id } from "../../../love/public/src/app_calendar_facebook_url_id.mjs";
import { list_to_dictionary_key } from "../../../love/public/src/list_to_dictionary_key.mjs";
import { list_filter_property_exclude_if_exists } from "../../../love/public/src/list_filter_property_exclude_if_exists.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { app_calendar_contacts_initialize } from "../../../love/public/src/app_calendar_contacts_initialize.mjs";
import { global_function_self_async } from "../../../love/public/src/global_function_self_async.mjs";
export async function app_calendar_download_browser_contacts() {
  let data = await global_function_self_async(app_calendar_download_browser);
  let contacts = app_calendar_contacts_initialize(data);
  log(app_calendar_download_browser_contacts.name, {
    contacts,
  });
  let filtered = list_filter_property_exclude_if_exists(
    contacts,
    "unavailable",
    true,
  );
  let r3 = app_calendar_facebook_conversation_id();
  let r2 = app_calendar_facebook_url_id();
  let r4 = app_calendar_whatsapp_phone();
  const properties = ["whatsapp_name", "facebook_name", r4, r2, r3];
  function lambda6(o) {
    let joined = object_pick_try_values_join_space(o, properties);
    return joined;
  }
  let dictionary = list_to_dictionary_key(filtered, lambda6);
  return dictionary;
}
