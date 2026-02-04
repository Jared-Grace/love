import { list_size } from "../../../love/public/src/list_size.mjs";
export function list_index_end(list, index_from_end) {
  let v = list_size(list) - 1 - index_from_end;
  return v;
}
