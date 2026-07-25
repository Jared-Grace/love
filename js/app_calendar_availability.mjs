import { week_calendar } from "./week_calendar.mjs";
import { availability_send } from "./availability_send.mjs";
export function app_calendar_availability(parent, user) {
  "the owner's screen for choosing when they are available to preach: a weekly grid of 30-minute pieces, saved to Firebase after each change";
  let uid = user.uid;
  async function on_ranges(ranges) {
    await availability_send(uid, ranges);
  }
  week_calendar(parent, on_ranges);
}
