import { object_property_set } from "./object_property_set.mjs";
import { range } from "./range.mjs";
import { list_map } from "./list_map.mjs";
import { equal } from "./equal.mjs";
export async function sandbox() {
  let left = 1;
  left = 1;
  let right = 2;
  if (equal(left, right)) {
  }
  let list = range(count);
  function lambda(item) {
    object_property_set(object, property_name, value);
  }
  let mapped = list_map(list, lambda);
}
