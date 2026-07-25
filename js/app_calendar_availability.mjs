import { noop } from "./noop.mjs";
import { week_calendar } from "./week_calendar.mjs";
export function app_calendar_availability(parent) {
  "the owner's screen for choosing when they are available to preach: a weekly grid of 30-minute pieces; the chosen windows are not yet saved to Firebase";
  week_calendar(parent, noop);
}
