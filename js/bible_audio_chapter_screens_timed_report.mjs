import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
export function bible_audio_chapter_screens_timed_report(
  order,
  timed,
  long_orders,
) {
  arguments_assert(arguments, 3);
  if (equal(timed, null)) {
    return null;
  }
  let at = long_orders.indexOf(order);
  if (less_than(at, 0)) {
    return null;
  }
  let report = timed[at];
  return report;
}
