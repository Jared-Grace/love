import { each_object } from "../../../love/public/src/each_object.mjs";
export function each_object_values(object, lambda$item) {
  function lambda(value, property) {
    lambda$item(value);
  }
  each_object(object, lambda);
}
