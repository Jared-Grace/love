import { property_equals_not } from "./property_equals_not.mjs";
import { each_object } from "./each_object.mjs";
export function object_includes(object, item) {
  let e = true;
  function lambda(value, property) {
    if (property_equals_not(object, property, value)) {
      e = false;
    }
  }
  each_object(item, lambda);
  return e;
}
