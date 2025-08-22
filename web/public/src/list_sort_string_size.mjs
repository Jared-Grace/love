import { string_size } from "./string_size.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
export function list_sort_string_size(list) {
  list_sort_number_mapper(list, string_size);
}
