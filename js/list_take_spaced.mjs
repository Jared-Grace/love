import { floor } from "./floor.mjs";
import { greater_than } from "./greater_than.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { range_map } from "./range_map.mjs";
export function list_take_spaced(list, count) {
  "This many items out of a list, picked evenly from one end to the other rather than all from the front";
  "Taking the first few is the wrong way to look at a pile that was gathered over time. The front of it is the oldest part, so a reading taken there describes how things were done then and says nothing about how they are done now, while sounding exactly like a reading of the whole. Spreading the picks over the whole length costs the same and cannot make that mistake.";
  "Evenly rather than at random, so the same list always gives back the same items. A reading somebody else can repeat is worth more than one that is a little fairer and different every time.";
  "A list shorter than the count asked for comes back whole, because every item is already the most anyone can be shown.";
  arguments_assert(arguments, 2);
  let plenty = greater_than(list.length, count);
  if (not(plenty)) {
    return list;
  }
  let step_size = divide(list.length, count);
  function list_take_spaced_item(i) {
    let p = multiply(i, step_size);
    let place_at = floor(p);
    let item_here = list[place_at];
    return item_here;
  }
  let taken = range_map(count, list_take_spaced_item);
  return taken;
}
