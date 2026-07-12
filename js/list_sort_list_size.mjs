import { list_size } from "./list_size.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
export function list_sort_list_size(list) {
  list_sort_number_mapper(list, list_size);
}
