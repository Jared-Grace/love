import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { equal } from "./equal.mjs";
export function property_get_or_null_equal(object, property_name, value) {
  arguments_assert(arguments, 3);
  ("Whether a record holds exactly this under a name - and carrying nothing there");
  ("counts as an honest no.");
  ("Asking a piece of parsed code what kind it is, asking whether a name is the");
  ("one being looked for, asking whether a file has changed since it was last");
  ("kept. Every one of them reaches for a name the record may simply not carry,");
  ("and then compares. The reach on its own is never the question.");
  let held = property_get_or_null(object, property_name);
  let same = equal(held, value);
  return same;
}
