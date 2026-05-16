import { me_calendar_path } from "../../../love/public/src/me_calendar_path.mjs";
import { ics_to_json } from "../../../love/public/src/ics_to_json.mjs";
import { folder_user_downloads_path } from "../../../love/public/src/folder_user_downloads_path.mjs";
export async function me_calendar() {
  let combined = me_calendar_path();
  let r = folder_user_downloads_path(combined);
  let result = await ics_to_json(r);
  return result;
}
