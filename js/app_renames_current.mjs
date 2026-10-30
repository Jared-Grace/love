import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
export function app_renames_current(renames, a_name) {
  "$plain a_name";
  arguments_assert(arguments, 2);
  ("The name an app has today, from any name it was ever called, following the renames record oldest first.");
  let name = a_name;
  for (let rename of renames) {
    let before = property_get(rename, "before");
    if (equal(before, name)) {
      name = property_get(rename, "after");
    }
  }
  return name;
}
