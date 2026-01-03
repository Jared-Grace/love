import { marker } from "../../../love/public/src/marker.mjs";
import { object_adder } from "../../../love/public/src/object_adder.mjs";
import { each_object } from "../../../love/public/src/each_object.mjs";
export function object_filter(object, filter) {
  marker("1");
  function lambda2(oad2) {
    function lambda3(value, property) {
      if (filter(value, property)) {
        oad2(property, value);
      }
    }
    each_object(object, lambda3);
  }
  let result3 = object_adder(lambda2);
  return result3;
}
