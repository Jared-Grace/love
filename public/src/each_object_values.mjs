import { each_object } from "../../../love/public/src/each_object.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function each_object_values(object, lambda$item) {
  marker("1");
  function lambda(value, property) {
    lambda$item(value);
  }
  each_object(object, lambda);
}
