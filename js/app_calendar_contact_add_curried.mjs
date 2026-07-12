import { app_calendar_contact_add } from "./app_calendar_contact_add.mjs";
export function app_calendar_contact_add_curried(data) {
  let c = function app_calendar_contact_add_curried_result(item) {
    let r = app_calendar_contact_add(data, item);
    return r;
  };
  return c;
}
