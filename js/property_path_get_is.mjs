import { arguments_assert } from "./arguments_assert.mjs";
import { property_path_get } from "./property_path_get.mjs";
import { equal } from "./equal.mjs";
export function property_path_get_is(item, property_names, value) {
  arguments_assert(arguments, 3);
  ("Whether what sits at the end of a run of names inside a record is the value asked about: the plain half of the pair whose other half asks whether it is anything else.");
  ("Only the far half of the pair had been written, so every caller wanting the plain question was writing it out by hand or asking the far one and turning the answer round. Both halves exist now, and neither reads as the negation of the other at the call site.");
  let result = property_path_get(item, property_names);
  let eq = equal(result, value);
  return eq;
}
