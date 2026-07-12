import { list_join_newline } from "./list_join_newline.mjs";
import { list_add } from "./list_add.mjs";
export function list_add_join_newline(scripts, body) {
  list_add(scripts, body);
  let joined = list_join_newline(scripts);
  return joined;
}
