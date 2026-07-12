import { text_combine } from "./text_combine.mjs";
import { me_email } from "./me_email.mjs";
export function me_calendar_zip_folder_path() {
  let email_address = me_email();
  let combined = text_combine(email_address, ".ical");
  return combined;
}
