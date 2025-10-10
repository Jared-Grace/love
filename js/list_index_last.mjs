import { list_size } from "../../../love/public/src/list_size.mjs";
export function list_index_last(list) {
  const index_last = list_size(list) - 1;
  return index_last;
}
