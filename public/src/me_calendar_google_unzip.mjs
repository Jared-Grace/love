import { me_calendar_zip_path } from "../../../love/public/src/me_calendar_zip_path.mjs";
import { unzip } from "../../../love/public/src/unzip.mjs";
export async function me_calendar_google_unzip(file_path, buffer) {
  let r2 = me_calendar_zip_path();
  let r = await unzip(file_path, buffer);
  return r;
}
