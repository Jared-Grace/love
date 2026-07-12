import { app_calendar_whatsapp_phone } from "./app_calendar_whatsapp_phone.mjs";
import { list_filter_property_exists_map_fn } from "./list_filter_property_exists_map_fn.mjs";
import { app_calendar_download_contacts } from "./app_calendar_download_contacts.mjs";
export async function app_calendar_download_contacts_phones_whatsapp() {
  let list = await app_calendar_download_contacts();
  let phones_stored = list_filter_property_exists_map_fn(
    list,
    app_calendar_whatsapp_phone,
  );
  return phones_stored;
}
