import { property_transform } from "../../../love/public/src/property_transform.mjs";
import { text_combine_curried_right } from "../../../love/public/src/text_combine_curried_right.mjs";
export function property_combine(value, extended, property_name) {
  let c2 = text_combine_curried_right(value);
  let value2 = property_transform(extended, property_name, c2);
}
