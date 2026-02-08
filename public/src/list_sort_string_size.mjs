import { text_size } from "../../../love/public/src/text_size.mjs";
import { list_sort_number_mapper } from "../../../love/public/src/list_sort_number_mapper.mjs";
export function list_sort_string_size(list) {
  list_sort_number_mapper(list, text_size);
}
