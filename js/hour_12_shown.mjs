import { arguments_assert } from "./arguments_assert.mjs";
import { modulo } from "./modulo.mjs";
import { equal } from "./equal.mjs";
export function hour_12_shown(hour) {
  arguments_assert(arguments, 1);
  ("The number a twelve-hour clock face shows for an hour of the day counted from zero to twenty-three: 0 and 12 both show 12, 13 shows 1, 23 shows 11.");
  ("Midnight and midday are the whole reason this is not just the remainder. Counting round by twelve leaves nothing at all for those two, and a clock has no nought on it - the hour a clock never shows is the one every plain remainder hands back.");
  let twelve_hour = modulo(hour, 12);
  let none = equal(twelve_hour, 0);
  let shown = none ? 12 : twelve_hour;
  return shown;
}
