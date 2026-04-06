import { list_set } from "../../../love/public/src/list_set.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
export function list_set_nested(rows, y, x, value) {
  let water_row = list_get(rows, y);
  list_set(water_row, x, value);
}
