import { property_delete_curried } from "../../../love/public/src/property_delete_curried.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { property_delete } from "../../../love/public/src/property_delete.mjs";
export function properties_delete(object, properties) {
  let lambda2 = property_delete_curried(object);
  each(properties, lambda2);
}
