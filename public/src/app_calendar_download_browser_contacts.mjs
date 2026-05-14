import { list_to_dictionary_key } from "../../../love/public/src/list_to_dictionary_key.mjs";
import { list_filter_property_exclude_if_exists } from "../../../love/public/src/list_filter_property_exclude_if_exists.mjs";
import { app_calendar_home } from "../../../love/public/src/app_calendar_home.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { app_calendar_contacts_initialize } from "../../../love/public/src/app_calendar_contacts_initialize.mjs";
import { app_calendar_download_browser } from "../../../love/public/src/app_calendar_download_browser.mjs";
import { global_function_self_async } from "../../../love/public/src/global_function_self_async.mjs";
export async function app_calendar_download_browser_contacts(lambda6) {
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
  let dictionary = list_to_dictionary_key(filtered, lambda6);
  return dictionary;
}
