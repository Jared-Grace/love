import { app_calendar_download } from "../../../love/public/src/app_calendar_download.mjs";
import { app_api_fn } from "../../../love/public/src/app_api_fn.mjs";
export async function app_calendar_download_browser() {
  let r5 = await app_api_fn({
    fn: app_calendar_download,
  });
  return r5;
}
