import { list_index_of_delta } from "./list_index_of_delta.mjs";
import { list_index_of } from "./list_index_of.mjs";
export function list_index_of_next(list, item) {
  const delta = 1;
  return list_index_of_delta(list, item, delta);
}
