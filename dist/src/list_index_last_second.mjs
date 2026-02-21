import { list_index_end } from "../../../love/public/src/list_index_end.mjs";
export function list_index_last_second(list) {
  const last_second = list_index_end(list, 1);
  return last_second;
}
