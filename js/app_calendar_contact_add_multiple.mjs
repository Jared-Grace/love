import { each } from "./each.mjs";
import { app_calendar_contact_add_curried } from "./app_calendar_contact_add_curried.mjs";
export function app_calendar_contact_add_multiple(data, mapped) {
  let lambda = app_calendar_contact_add_curried(data);
  each(mapped, lambda);
}
