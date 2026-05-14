import { app_calendar_screens } from "../../../love/public/src/app_calendar_screens.mjs";
import { app_calendar } from "../../../love/public/src/app_calendar.mjs";
import { app_shared_initialize_refresh } from "../../../love/public/src/app_shared_initialize_refresh.mjs";
export async function app_calendar_main(context) {
  let screens = app_calendar_screens();
  await app_shared_initialize_refresh(context, app_calendar, screens);
}
