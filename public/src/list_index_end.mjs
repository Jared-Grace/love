import { list_index_last } from "../../../love/public/src/list_index_last.mjs";
export function list_index_end(list, index_from_end) {
  let v = list_index_last(list) - index_from_end;
  return v;
}
