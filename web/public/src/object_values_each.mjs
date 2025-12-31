import { each_object } from "../../../love/public/src/each_object.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function object_values_each(object, lambda$item) {
  marker("1");
  function lambda(value, property) {}
  each_object(object2, lambda);
}
