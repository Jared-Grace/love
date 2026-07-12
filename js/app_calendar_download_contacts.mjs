import { app_calendar_contacts_initialize } from "./app_calendar_contacts_initialize.mjs";
import { app_calendar_download } from "./app_calendar_download.mjs";
export async function app_calendar_download_contacts() {
  let data = await app_calendar_download();
  let contacts = app_calendar_contacts_initialize(data);
  return contacts;
}
