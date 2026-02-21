import { list_join } from "../../../love/public/src/list_join.mjs";
import { newline } from "../../../love/public/src/newline.mjs";
export function list_join_newline(list) {
  let separator = newline();
  let joined = list_join(list, separator);
  return joined;
}
