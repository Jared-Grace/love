import {list_join} from "./list_join.mjs";
import {newline} from "./newline.mjs";
export function list_join_newline(waited2) {
  let separator = newline();
  let code = list_join(waited2, separator);
  return code;
}
