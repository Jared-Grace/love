import { object_adder } from "../../../love/public/src/object_adder.mjs";
import { each_object } from "../../../love/public/src/each_object.mjs";
export function object_filter(object, lambda$value$key) {
  function lambda2(oad2) {
    function lambda3(value, key) {
      if (lambda$value$key(value, key)) {
        oad2(key, value);
      }
    }
    each_object(object, lambda3);
  }
  let filtered = object_adder(lambda2);
  return filtered;
}
