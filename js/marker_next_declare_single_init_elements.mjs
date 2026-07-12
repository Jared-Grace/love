import { property_get } from "./property_get.mjs";
import { marker_next_declare_single_init } from "./marker_next_declare_single_init.mjs";
export function marker_next_declare_single_init_elements(a) {
  let array_expression = marker_next_declare_single_init(a);
  let elements = property_get(array_expression, "elements");
  return elements;
}
