import { list_join } from "./list_join.mjs";
import { newline } from "./newline.mjs";
export function list_join_newline(list) {
  let separator = newline();
  let joined = list_join(list, separator);
  return joined;
}
