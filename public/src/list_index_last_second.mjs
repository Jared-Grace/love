import { list_index_last } from "../../../love/public/src/list_index_last.mjs";
export function list_index_last_second(passages) {
  let index_last = list_index_last(passages);
  const last_second = index_last - 1;
  return last_second;
}
