import { list_skip_1 } from "./list_skip_1.mjs";
import { list_to_indices } from "./list_to_indices.mjs";
export function list_to_indices_skip_1(item) {
  let r = list_to_indices(item);
  let skipped = list_skip_1(r);
  return skipped;
}
