import { list_skip_1 } from "../../../love/public/src/list_skip_1.mjs";
import { list_to_indices } from "../../../love/public/src/list_to_indices.mjs";
export function list_to_indices_skip_1(item3) {
  let r = list_to_indices(item3);
  let skipped = list_skip_1(r);
  return skipped;
}
