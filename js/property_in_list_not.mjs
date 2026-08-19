import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
export function property_in_list_not(f_name, recorded, arrived) {
  arguments_assert(arguments, 3);
  let was = property_get(recorded, f_name);
  let n = list_includes_not(arrived, was);
  return n;
}
