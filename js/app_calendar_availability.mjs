import { week_calendar_current } from "./week_calendar_current.mjs";
import { availability_send } from "./availability_send.mjs";
import { availability_load } from "./availability_load.mjs";
export async function app_calendar_availability(parent, user) {
  "the owner's screen for choosing when they can preach: loads their saved windows, shows the weekly grid, and saves to Firebase after each change";
  let uid = user.uid;
  let initial = await availability_load(uid);
  async function on_ranges(ranges) {
    await availability_send(uid, ranges);
  }
  week_calendar_current(parent, initial, on_ranges);
}
