import { me_calendar_zip_folder_path } from "./me_calendar_zip_folder_path.mjs";
import { folder_user_downloads_path } from "./folder_user_downloads_path.mjs";
import { text_combine } from "./text_combine.mjs";
export function me_calendar_zip_path() {
  let combined = me_calendar_zip_folder_path();
  let combined2 = text_combine(combined, ".zip");
  let r = folder_user_downloads_path(combined2);
  return r;
}
