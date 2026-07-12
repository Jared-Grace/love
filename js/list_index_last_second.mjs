import { list_index_end } from "./list_index_end.mjs";
export function list_index_last_second(list) {
  let last_second = list_index_end(list, 1);
  return last_second;
}
