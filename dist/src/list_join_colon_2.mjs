import { text_colon_2 } from "../../../love/public/src/text_colon_2.mjs";
import { list_join } from "../../../love/public/src/list_join.mjs";
export function list_join_colon_2(texts) {
  let separator = text_colon_2();
  let joined2 = list_join(texts, separator);
  return joined2;
}
