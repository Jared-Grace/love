import { each_object } from "../../../love/public/src/each_object.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function object_includes(object, item) {
  let e = true;
  function lambda18(value, property) {
    let value2 = property_get(object, property);
    if (equal_not(value, value2)) {
      e = false;
    }
  }
  each_object(item, lambda18);
  return e;
}
