import { json_format_to_replaced } from "./json_format_to_replaced.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function json_keyed_values(object, key) {
  arguments_assert(arguments, 2);
  ("every value anywhere inside an object that is filed under the given name, however deeply it is nested");
  ("asked by standing in front of each value on its way into json rather than by walking the object, because a walk has to know the shape and this does not. That matters when the shape is written by another program and may gain a level without asking: a value filed under that name is found at whatever depth it ends up at.");
  ("the writing itself is thrown away. What is wanted is the visit, and json already visits everything exactly once.");
  let found = [];
  function lambda(k, value) {
    let matches = equal(k, key);
    if (matches) {
      list_add(found, value);
    }
    return value;
  }
  json_format_to_replaced(object, lambda);
  return found;
}
