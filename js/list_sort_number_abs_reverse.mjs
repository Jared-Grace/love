import { list_reverse } from "./list_reverse.mjs";
import { list_sort_number_abs } from "./list_sort_number_abs.mjs";
export function list_sort_number_abs_reverse(filtered) {
  list_sort_number_abs(filtered);
  list_reverse(filtered);
}
