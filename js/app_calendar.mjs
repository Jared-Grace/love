import { app_calendar_screens } from "./app_calendar_screens.mjs";
import { app_shared_initialize_refresh } from "./app_shared_initialize_refresh.mjs";
export async function app_calendar(context) {
  let screens = app_calendar_screens();
  await app_shared_initialize_refresh(context, app_calendar, screens);
}
