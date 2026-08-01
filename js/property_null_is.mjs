import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
export function property_null_is(item, key) {
  arguments_assert(arguments, 2);
  ("Whether nothing is being held under this name.");
  ("Absent and present-but-empty answer the same here, on purpose: five files asked");
  ("this question by fetching the value, giving it a name, and then asking whether");
  ("that name held anything - and the name was never read again. The value was never");
  ("what they wanted.");
  let value = property_get_or_null(item, key);
  let missing = null_is(value);
  return missing;
}
