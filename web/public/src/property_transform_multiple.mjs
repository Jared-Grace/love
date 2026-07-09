import { each } from "../../../love/public/src/each.mjs";
import { property_transform } from "../../../love/public/src/property_transform.mjs";
export function property_transform_multiple(list, property, lambda) {
  function lambda2(item) {
    let value = property_transform(item, property, lambda);
    return value;
  }
  each(list, lambda2);
}
