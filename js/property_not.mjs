import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
export function property_not(object, property_name) {
  arguments_assert(arguments, 2);
  ("Whether what is held under this name is missing or false.");
  ("A flag is nearly always read to ask about the case it is off in, so the reach and");
  ("the negation travel together; joined, the call says which case the code is in");
  ("without a reader having to undo anything.");
  let value = property_get(object, property_name);
  let off = not(value);
  return off;
}
