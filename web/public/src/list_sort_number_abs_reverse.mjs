import { list_reverse } from "../../../love/public/src/list_reverse.mjs";
import { list_sort_number_abs } from "../../../love/public/src/list_sort_number_abs.mjs";
export function list_sort_number_abs_reverse(filtered) {
  list_sort_number_abs(filtered);
  list_reverse(filtered);
}
