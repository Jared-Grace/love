import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
export function hour_12_suffix(hour) {
  arguments_assert(arguments, 1);
  ("Which half of the day an hour counted from zero to twenty-three falls in, written the way a twelve-hour clock label ends: ' AM' before midday and ' PM' from midday on.");
  ("The space in front belongs to the word rather than to the caller, because every caller wants it and one that forgot it would read as a single run of letters and digits.");
  let afternoon = greater_than_equal(hour, 12);
  let suffix = afternoon ? " PM" : " AM";
  return suffix;
}
