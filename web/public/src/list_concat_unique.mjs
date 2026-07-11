import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
export function list_concat_unique(a, b) {
  let unique = list_unique(list_concat(a, b));
  return unique;
}
