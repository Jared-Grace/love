import { each_object } from "../../../love/public/src/each_object.mjs";
import { object_adder } from "../../../love/public/src/object_adder.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function object_values_map(object, lambda$value$key) {
  marker("1");
  function lambda(oad) {
    function lambda2(value, key) {
      let mapped = lambda$value$key(value, key);
      oad(key, mapped);
    }
    each_object(object, lambda2);
  }
  let result = object_adder(lambda);
  return result;
}
