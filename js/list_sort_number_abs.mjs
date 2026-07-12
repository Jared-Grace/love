import { abs } from "./abs.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
export function list_sort_number_abs(filtered) {
  list_sort_number_mapper(filtered, abs);
}
