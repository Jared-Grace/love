import { app_calendar_facebook_url_id } from "../../../love/public/src/app_calendar_facebook_url_id.mjs";
import { app_calendar_whatsapp_phone } from "../../../love/public/src/app_calendar_whatsapp_phone.mjs";
export function app_calendar_id_properties() {
  let r = app_calendar_whatsapp_phone();
  let r2 = app_calendar_facebook_url_id();
  let id_properties = [r, r2];
  return id_properties;
}
