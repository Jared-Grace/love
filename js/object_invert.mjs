import { undefined_not_is_assert_json } from "./undefined_not_is_assert_json.mjs";
import { property_initialize } from "./property_initialize.mjs";
import { each_object } from "./each_object.mjs";
import { list_add } from "./list_add.mjs";
export function object_invert(object) {
  let inverted = {};
  function lambda(value, key) {
    undefined_not_is_assert_json(value, {
      hint: "object values shouldn't be undefined when inverting — this key maps to undefined",
      key,
    });
    let list = property_initialize(inverted, value, []);
    list_add(list, key);
  }
  each_object(object, lambda);
  return inverted;
}
