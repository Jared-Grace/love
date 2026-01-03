import { object_adder } from "../../../love/public/src/object_adder.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function object_values_map(object, lambda$value$key) {
  marker("1");
  function lambda(oad) {
    each_object_values_generic(object, lambda$value$key, oad);
  }
  let result = object_adder(lambda);
  return result;
}
