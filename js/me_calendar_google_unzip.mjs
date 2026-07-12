import { unzip_self } from "./unzip_self.mjs";
import { me_calendar_zip_path } from "./me_calendar_zip_path.mjs";
export async function me_calendar_google_unzip() {
  let file_path = me_calendar_zip_path();
  let r = await unzip_self(file_path);
  return r;
}
