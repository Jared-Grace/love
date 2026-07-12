import { me_calendar_zip_folder_path } from "./me_calendar_zip_folder_path.mjs";
import { path_join } from "./path_join.mjs";
import { folder_user_downloads_path } from "./folder_user_downloads_path.mjs";
import { text_combine } from "./text_combine.mjs";
import { me_email } from "./me_email.mjs";
export function me_calendar_path() {
  let combined2 = me_calendar_zip_folder_path();
  let email_address = me_email();
  let combined = text_combine(email_address, ".ics");
  let result = path_join([combined2, combined]);
  let r = folder_user_downloads_path(result);
  return r;
}
