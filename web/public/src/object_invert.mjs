import { object_property_initialize } from "./object_property_initialize.mjs";
import { each_object } from "./each_object.mjs";
import { list_add } from "./list_add.mjs";
export function object_invert(object) {
  let inverted = {};
  function lambda(value, key) {
    let list = object_property_initialize(inverted, value, []);
    list_add(list, key);
  }
  each_object(object, lambda);
  return inverted;
}
