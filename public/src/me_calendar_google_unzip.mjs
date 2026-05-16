import { unzip } from "../../../love/public/src/unzip.mjs";
export async function me_calendar_google_unzip(file_path, buffer) {
  let r = await unzip(file_path, buffer);
  return r;
}
