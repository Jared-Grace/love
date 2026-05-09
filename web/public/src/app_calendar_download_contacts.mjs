import { app_calendar_contacts_initialize } from "../../../love/public/src/app_calendar_contacts_initialize.mjs";
import { app_calendar_download } from "../../../love/public/src/app_calendar_download.mjs";
export async function app_calendar_download_contacts() {
  let data = await app_calendar_download();
  let list = app_calendar_contacts_initialize(data);
  return list;
}
