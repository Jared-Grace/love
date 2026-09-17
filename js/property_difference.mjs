import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
export function property_difference(to, from, property_name) {
  arguments_assert(arguments, 3);
  ("How far one object's value for a property is past another's - the first one's value take away the second one's. Neither object is changed.");
  ("Asked for the distance between two points along one axis, so that 'how far across' and 'how far down' are each one line rather than three.");
  let left = property_get(to, property_name);
  let right = property_get(from, property_name);
  let r = subtract(left, right);
  return r;
}
