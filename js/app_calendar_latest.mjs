import { app_calendar } from "./app_calendar.mjs";
import { app_shared_main_latest } from "./app_shared_main_latest.mjs";
export async function app_calendar_latest() {
  await app_shared_main_latest(app_calendar.name, firebase_project_name_jg());
}
