import { list_squash } from "../../../love/public/src/list_squash.mjs";
import { list_concat_multiple } from "../../../love/public/src/list_concat_multiple.mjs";
export function list_concat_multiple_squash(lists) {
  let combined = list_concat_multiple(lists);
  let squashed = list_squash(combined);
  return squashed;
}
