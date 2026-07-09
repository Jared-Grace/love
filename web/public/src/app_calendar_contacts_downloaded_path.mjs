import { folder_user_downloads_path } from "../../../love/public/src/folder_user_downloads_path.mjs";
export function app_calendar_contacts_downloaded_path() {
  let r = folder_user_downloads_path("contacts.csv");
  return r;
}
