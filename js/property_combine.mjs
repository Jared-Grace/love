import { property_transform } from "./property_transform.mjs";
import { text_combine_curried_right } from "./text_combine_curried_right.mjs";
export function property_combine(object, property_name, value) {
  let c = text_combine_curried_right(value);
  let value2 = property_transform(object, property_name, c);
}
