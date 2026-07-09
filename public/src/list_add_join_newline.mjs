import { list_join_newline } from "../../../love/public/src/list_join_newline.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function list_add_join_newline(scripts, body) {
  list_add(scripts, body);
  let joined = list_join_newline(scripts);
  return joined;
}
