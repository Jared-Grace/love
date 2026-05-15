import { each } from "../../../love/public/src/each.mjs";
import { property_transform } from "../../../love/public/src/property_transform.mjs";
export function property_transform_multiple(property, lambda, list) {
  function lambda2(item) {
    let value2 = property_transform(item, property, lambda);
    return value2;
  }
  each(list, lambda2);
}
