import { me_calendar_zip_folder_path } from "../../../love/public/src/me_calendar_zip_folder_path.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { folder_user_downloads_path } from "../../../love/public/src/folder_user_downloads_path.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { me_email } from "../../../love/public/src/me_email.mjs";
export function me_calendar_path() {
  let combined2 = me_calendar_zip_folder_path();
  let email_address = me_email();
  let combined = text_combine(email_address, ".ics");
  let result = path_join([combined2, combined]);
  let r = folder_user_downloads_path(result);
  return r;
}
