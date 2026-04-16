import { property_equals_not } from "../../../love/public/src/property_equals_not.mjs";
import { each_object } from "../../../love/public/src/each_object.mjs";
export function object_includes(object, item) {
  let e = true;
  function lambda18(value, property) {
    if (property_equals_not(object, property, value)) {
      e = false;
    }
  }
  each_object(item, lambda18);
  return e;
}
