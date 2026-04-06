import { list_set_nested } from "../../../love/public/src/list_set_nested.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function list_set_nested_y_x(rows, x_y, value) {
  let x = property_get(x_y, "x");
  let y = property_get(x_y, "y");
  list_set_nested(rows, y, x, value);
}
