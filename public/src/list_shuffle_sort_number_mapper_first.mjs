import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_shuffle_sort_number_mapper } from "../../../love/public/src/list_shuffle_sort_number_mapper.mjs";
export function list_shuffle_sort_number_mapper_first(list, lambda$item) {
  list_shuffle_sort_number_mapper(list, lambda$item);
  let coordinates_move_to = list_first(list);
  return coordinates_move_to;
}
