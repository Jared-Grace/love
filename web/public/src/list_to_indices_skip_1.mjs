import { list_skip_ } from "../../../love/public/src/list_skip_1.mjs";
import { list_to_indices } from "../../../love/public/src/list_to_indices.mjs";
export function list_to_indices_skip_(item) {
  let r = list_to_indices(item);
  let skipped = list_skip_(r);
  return skipped;
}
