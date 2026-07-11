import { text_colon_ } from "../../../love/public/src/text_colon_2.mjs";
import { list_join } from "../../../love/public/src/list_join.mjs";
export function list_join_colon_(texts) {
  let separator = text_colon_();
  let joined = list_join(texts, separator);
  return joined;
}
