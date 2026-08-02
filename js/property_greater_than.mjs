import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
export function property_greater_than(object, property_name, number) {
  arguments_assert(arguments, 3);
  ("Whether what a record holds under a name stands above a given number.");
  ("Whether a rename touched any place at all, whether a process has been working");
  ("hard enough for long enough to be worth naming, whether one line sits later in");
  ("a file than another. Each reaches in for a count and asks one question of it,");
  ("and the count itself is never wanted.");
  let held = property_get(object, property_name);
  let above = greater_than(held, number);
  return above;
}
