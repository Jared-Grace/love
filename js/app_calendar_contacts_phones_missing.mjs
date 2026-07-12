import { app_calendar_download_contacts_phones_whatsapp } from "./app_calendar_download_contacts_phones_whatsapp.mjs";
import { list_difference } from "./list_difference.mjs";
import { app_calendar_preaching_ask_phones } from "./app_calendar_preaching_ask_phones.mjs";
export async function app_calendar_contacts_phones_missing() {
  let phones_asked = await app_calendar_preaching_ask_phones();
  let phones_stored = await app_calendar_download_contacts_phones_whatsapp();
  let add_to_contacts = list_difference(phones_asked, phones_stored);
  return add_to_contacts;
}
