import { string_size } from "../../../love/public/src/string_size.mjs";
import { list_sort_number_mapper } from "../../../love/public/src/list_sort_number_mapper.mjs";
export function list_sort_string_size(list) {
  list_sort_number_mapper(list, string_size);
}
