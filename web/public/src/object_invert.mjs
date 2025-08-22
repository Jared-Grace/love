import { object_property_initialize } from "./object_property_initialize.mjs";
import { each_object } from "./each_object.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { object_properties } from "./object_properties.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function object_invert(object) {
  let inverted = {};
  each_object(object, (value, key) => {
    let list = object_property_initialize(inverted, value, []);
    list_add(list, key);
  });
  return inverted;
}
