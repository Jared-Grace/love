import { list_map_property_fn } from "../../../love/public/src/list_map_property_fn.mjs";
import { app_calendar_contacts_initialize } from "../../../love/public/src/app_calendar_contacts_initialize.mjs";
import { app_calendar_whatsapp_phone } from "../../../love/public/src/app_calendar_whatsapp_phone.mjs";
import { app_calendar_download } from "../../../love/public/src/app_calendar_download.mjs";
import { app_calendar_preaching_ask_phones } from "../../../love/public/src/app_calendar_preaching_ask_phones.mjs";
export async function sandbox_3() {
  let phones = await app_calendar_preaching_ask_phones();
  let data = await app_calendar_download();
  let list = app_calendar_contacts_initialize(data);
  let mapped = list_map_property_fn(list, app_calendar_whatsapp_phone);
  return mapped;
}
