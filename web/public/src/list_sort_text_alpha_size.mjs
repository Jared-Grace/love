import { list_sort_string_size } from "../../../love/public/src/list_sort_string_size.mjs";
import { list_sort_text } from "../../../love/public/src/list_sort_text.mjs";
export function list_sort_text_alpha_size(f_names) {
  list_sort_text(f_names);
  list_sort_string_size(f_names);
}
