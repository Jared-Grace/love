import { ics_to_json } from "../../../love/public/src/ics_to_json.mjs";
import { folder_user_downloads_path } from "../../../love/public/src/folder_user_downloads_path.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { me_email } from "../../../love/public/src/me_email.mjs";
export async function me_calendar() {
  const email_address = me_email();
  let combined = text_combine(email_address, ".ics");
  let r = folder_user_downloads_path(combined);
  let result = await ics_to_json(r);
  return result;
}
