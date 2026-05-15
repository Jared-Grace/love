import { app_calendar_whatsapp_name } from "../../../love/public/src/app_calendar_whatsapp_name.mjs";
import { app_calendar_facebook_name } from "../../../love/public/src/app_calendar_facebook_name.mjs";
export function app_calendar_name_properties() {
  let r2 = app_calendar_facebook_name();
  let r = app_calendar_whatsapp_name();
  let r3 = [r, r2];
  return r3;
}
