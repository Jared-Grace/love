import { fn_name } from "./fn_name.mjs";
import { app_api } from "./app_api.mjs";
export async function app_calendar_download_browser() {
  let r = await app_api({
    f_name: fn_name("app_calendar_download"),
  });
  return r;
}
