import { list_join } from "../../../love/public/src/list_join.mjs";
import { newline } from "../../../love/public/src/newline.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function list_join_newline_(list) {
  let separator = newline();
  let joined = list_join(list, text_combine(separator, separator));
  return joined;
}
