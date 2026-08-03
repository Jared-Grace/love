import { each_object } from "./each_object.mjs";
import { object_copy } from "./object_copy.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function object_cartesian_product(axes) {
  "Every way of picking one value from each of an object's lists, as a list of objects.";
  "The argument names the axes - {gender: [...], age: [...]} - and every result holds one value under every name.";
  "The count is the sizes multiplied, so this grows fast and is meant for a handful of short axes rather than for anything unbounded.";
  let combinations = [{}];
  function lambda(values, name) {
    let grown = [];
    function lambda2(combination) {
      function lambda3(value) {
        let copy = object_copy(combination);
        property_set(copy, name, value);
        list_add(grown, copy);
      }
      each(values, lambda3);
    }
    each(combinations, lambda2);
    combinations = grown;
  }
  each_object(axes, lambda);
  return combinations;
}
