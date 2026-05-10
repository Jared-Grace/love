import { folder_user_downloads_path } from "../../../love/public/src/folder_user_downloads_path.mjs";
export function app_calendar_contacts_path() {
  let r2 = folder_user_downloads_path("contacts.csv");
  return r2;
}
