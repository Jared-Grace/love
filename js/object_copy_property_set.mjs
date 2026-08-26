import { object_copy } from "./object_copy.mjs";
import { property_set } from "./property_set.mjs";
export function object_copy_property_set(object, name, value) {
  "a copy of an object with one of its properties written differently, leaving the object it was copied from exactly as it was";
  "It copies rather than writes, because the object handed in is usually one somebody else is still reading. Writing into it would change what they see next, at a moment they have no way of noticing.";
  let copy = object_copy(object);
  property_set(copy, name, value);
  return copy;
}
