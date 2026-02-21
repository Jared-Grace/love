import { list_sort_text_size } from "../../../love/public/src/list_sort_text_size.mjs";
import { list_sort_text } from "../../../love/public/src/list_sort_text.mjs";
export function list_sort_text_alpha_size(f_names) {
  list_sort_text(f_names);
  list_sort_text_size(f_names);
}
