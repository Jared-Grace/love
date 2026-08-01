import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function property_null_not_is(item, key) {
  arguments_assert(arguments, 2);
  ("Whether something is being held under this name.");
  ("The other way round from its sibling, and kept apart from it rather than written");
  ("as a not around it, because a call site reads the way it was meant and a reader");
  ("should not have to undo a negation to see which case the code is in.");
  let value = property_get_or_null(item, key);
  let present = null_not_is(value);
  return present;
}
