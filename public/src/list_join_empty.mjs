import { list_join } from "../../../love/public/src/list_join.mjs";
import { text_empty } from "../../../love/public/src/text_empty.mjs";
export function list_join_empty(list) {
  const e = text_empty();
  let joined = list_join(list, e);
  return joined;
}
