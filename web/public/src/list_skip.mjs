import { list_slice } from "./list_slice.mjs";
import { list_size } from "./list_size.mjs";
export function list_skip(list, skip_count) {
  let b = list_size(list);
  const skipped = list_slice(list, skip_count, b);
  return skipped;
}
