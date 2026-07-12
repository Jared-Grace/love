import { list_join } from "./list_join.mjs";
import { newline } from "./newline.mjs";
import { text_combine } from "./text_combine.mjs";
export function list_join_newline_2(list) {
  let separator = newline();
  let joined = list_join(list, text_combine(separator, separator));
  return joined;
}
