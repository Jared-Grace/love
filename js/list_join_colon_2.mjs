import { text_colon_2 } from "./text_colon_2.mjs";
import { list_join } from "./list_join.mjs";
export function list_join_colon_2(texts) {
  let separator = text_colon_2();
  let joined = list_join(texts, separator);
  return joined;
}
