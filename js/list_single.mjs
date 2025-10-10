import { list_size_1_assert } from "../../../love/public/src/list_size_1_assert.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export function list_single(list) {
  list_size_1_assert(list);
  let only = list_first(list);
  return only;
}
