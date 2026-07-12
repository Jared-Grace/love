import { app_calendar_contact } from "./app_calendar_contact.mjs";
import { app_calendar_home } from "./app_calendar_home.mjs";
export function app_calendar_screens() {
  let r = [app_calendar_home, app_calendar_contact];
  return r;
}
