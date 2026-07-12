import { list_join } from "./list_join.mjs";
import { text_empty } from "./text_empty.mjs";
export function list_join_empty(list) {
  let e = text_empty();
  let joined = list_join(list, e);
  return joined;
}
