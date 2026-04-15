import { list_sort_number_mapper } from "../../../love/public/src/list_sort_number_mapper.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
export function list_shuffle_sort_number_mapper(filtered3, lambda19) {
  list_shuffle(filtered3);
  list_sort_number_mapper(filtered3, lambda19);
}
