import { unzip_self } from "../../../love/public/src/unzip_self.mjs";
import { me_calendar_zip_path } from "../../../love/public/src/me_calendar_zip_path.mjs";
export async function me_calendar_google_unzip() {
  let file_path = me_calendar_zip_path();
  let r = await unzip_self(file_path);
  return r;
}
