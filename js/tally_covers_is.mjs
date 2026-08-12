import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { less_than } from "./less_than.mjs";
export function tally_covers_is(tally, wanted) {
  arguments_assert(arguments, 2);
  ("Whether one tally holds everything another one asks for - true when every value wanted turns up here at least as many times as it is wanted.");
  ("Counting the repeats is the whole point, and asking only WHETHER a value appears is the weaker question that lets the wrong thing through. Something needing the same value twice is satisfied by one of them under the weaker question, and the expensive answer is then spent finding out what counting would have said for nothing.");
  ("A value wanted none of is held by every tally, so an empty want is covered by anything - which is the answer that lets a caller ask without first checking whether it has anything to ask.");
  for (let value of object_property_names(wanted)) {
    let needed = property_get(wanted, value);
    let seen = tally[value];
    let held = seen ? seen : 0;
    let short = less_than(held, needed);
    if (short) {
      return false;
    }
  }
  return true;
}
