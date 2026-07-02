import { list_join } from "../../../love/public/src/list_join.mjs";
import { text_space_nb } from "../../../love/public/src/text_space_nb.mjs";
export function list_join_space_nb(pair) {
  let separator = text_space_nb();
  let joined = list_join(pair, separator);
  return joined;
}
