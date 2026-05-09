import { list_filter_property_exists } from "../../../love/public/src/list_filter_property_exists.mjs";
import { app_calendar_download_contacts } from "../../../love/public/src/app_calendar_download_contacts.mjs";
import { list_map_property_fn } from "../../../love/public/src/list_map_property_fn.mjs";
import { app_calendar_whatsapp_phone } from "../../../love/public/src/app_calendar_whatsapp_phone.mjs";
import { app_calendar_preaching_ask_phones } from "../../../love/public/src/app_calendar_preaching_ask_phones.mjs";
export async function sandbox_3() {
  let phones = await app_calendar_preaching_ask_phones();
  let list = await app_calendar_download_contacts();
  let property_name = fn();
  let filtered = list_filter_property_exists(list2, property_name);
  let mapped = list_map_property_fn(list, app_calendar_whatsapp_phone);
  let r = {
    phones,
    mapped,
  };
  return r;
}
