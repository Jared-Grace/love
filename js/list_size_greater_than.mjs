import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
export function list_size_greater_than(list, number) {
  arguments_assert(arguments, 2);
  ("Whether a list holds more things than a given number.");
  ("Whether a gate turned anything up, whether more than one thing was found,");
  ("whether any file could not be read. Each one counts a list only to hold the");
  ("count against a number, and the count itself is never reported or kept.");
  let size = list_size(list);
  let more = greater_than(size, number);
  return more;
}
