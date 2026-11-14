import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_live_is } from "./calendar_live_is.mjs";
export function calendar_api_base() {
  arguments_assert(arguments, 0);
  ("Where the calendar page sends its questions: on the live site, its own address, where the live Worker's routes answer; anywhere else, the test Worker's workers.dev address.");
  if (calendar_live_is()) {
    let r = "/calendar/api/";
    return r;
  }
  let base = "https://calendar.christarose.workers.dev/calendar/api/";
  return base;
}
