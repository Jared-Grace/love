import { list_join } from "../../../love/public/src/list_join.mjs";
import { string_empty } from "../../../love/public/src/string_empty.mjs";
export function list_join_empty(list) {
  const e = string_empty();
  let joined = list_join(list, e);
  return joined;
}
