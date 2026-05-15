import { properties_delete_curried_right } from "../../../love/public/src/properties_delete_curried_right.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { properties_delete } from "../../../love/public/src/properties_delete.mjs";
export function properties_delete_multiple(list, properties) {
  let lambda = properties_delete_curried_right(properties);
  each(list, lambda);
}
