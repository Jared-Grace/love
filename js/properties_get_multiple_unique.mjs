import { arguments_assert } from "./arguments_assert.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_unique } from "./list_unique.mjs";
export function properties_get_multiple_unique(objects) {
  "$plain objects";
  "Every property name appearing on any of the objects given, each name once.";
  arguments_assert(arguments, 1);
  ("IT IS FOR WALKING TWO RECORDS OF THE SAME THING TOGETHER, which is the shape it was collapsed out of in two places at once - one comparing where neighbouring repos stood against where they stand, the other joining two searches of the code. Both wanted every name on either side rather than every name on one side, and both had written the union out by hand.");
  ("READING ONLY THE FIRST OBJECT IS THE BUG THIS EXISTS TO PREVENT, and it is a quiet one. A name present on the second and missing from the first simply never comes up, so a neighbour that has appeared since the record was written reads as agreeing with it, and a caller sees a shorter list rather than an error. Asking for the union is what makes the newcomer visible.");
  ("The order is the order the names were met in, first object first, because the caller decides what it hands over and an order it chose is more use than one imposed here. Nothing downstream today depends on it; saying so is cheaper than leaving a later reader to find out by experiment.");
  let names = [];
  for (let object of objects) {
    let more = properties_get(object);
    list_add_multiple(names, more);
  }
  let unique = list_unique(names);
  return unique;
}
