import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { list_filter_property_exists_map_fn } from "../../../love/public/src/list_filter_property_exists_map_fn.mjs";
import { app_calendar_download_contacts } from "../../../love/public/src/app_calendar_download_contacts.mjs";
import { app_calendar_whatsapp_phone } from "../../../love/public/src/app_calendar_whatsapp_phone.mjs";
import { app_calendar_preaching_ask_phones } from "../../../love/public/src/app_calendar_preaching_ask_phones.mjs";
export async function sandbox_3() {
  let phones_asked = await app_calendar_preaching_ask_phones();
  let list = await app_calendar_download_contacts();
  let phones_stored = list_filter_property_exists_map_fn(
    list,
    app_calendar_whatsapp_phone,
  );
  function lambda(la) {}
  let list2 = list_adder(lambda);
  let r = {
    phones: phones_asked,
    mapped: phones_stored,
  };
  return r;
}
