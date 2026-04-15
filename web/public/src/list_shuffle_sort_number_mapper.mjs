import { list_sort_number_mapper } from "../../../love/public/src/list_sort_number_mapper.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
export function list_shuffle_sort_number_mapper(list, lambda$item) {
  list_shuffle(list);
  list_sort_number_mapper(list, lambda$item);
}
