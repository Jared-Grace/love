import { list_sort_string_size } from "../../../love/public/src/list_sort_string_size.mjs";
import { list_sort_string } from "../../../love/public/src/list_sort_string.mjs";
export function list_sort_string_alpha_size(f_names) {
  list_sort_string(f_names);
  list_sort_string_size(f_names);
}
