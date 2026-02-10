import { undefined_not_is_assert } from "../../../love/public/src/undefined_not_is_assert.mjs";
import { property_initialize } from "../../../love/public/src/property_initialize.mjs";
import { each_object } from "../../../love/public/src/each_object.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function object_invert(object) {
  let inverted = {};
  function lambda(value, key) {
    undefined_not_is_assert(value);
    let list = property_initialize(inverted, value, []);
    list_add(list, key);
  }
  each_object(object, lambda);
  return inverted;
}
