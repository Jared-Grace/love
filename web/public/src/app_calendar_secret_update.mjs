import { app_calendar_secret_whatsapp_add } from "../../../love/public/src/app_calendar_secret_whatsapp_add.mjs";
import { app_calendar_secret_facebook_add } from "../../../love/public/src/app_calendar_secret_facebook_add.mjs";
import { app_calendar_preaching_ask_lookup_load } from "../../../love/public/src/app_calendar_preaching_ask_lookup_load.mjs";
export async function app_calendar_secret_update() {
  await app_calendar_preaching_ask_lookup_load();
  await app_calendar_secret_facebook_add();
  await app_calendar_secret_whatsapp_add();
}
