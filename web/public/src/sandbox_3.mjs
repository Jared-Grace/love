import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { app_calendar_download } from "../../../love/public/src/app_calendar_download.mjs";
import { app_calendar_preaching_ask_phones } from "../../../love/public/src/app_calendar_preaching_ask_phones.mjs";
export async function sandbox_3() {
  let phones = await app_calendar_preaching_ask_phones();
  let data = await app_calendar_download();
  let mapped = list_map_property(list, property_name);
}
