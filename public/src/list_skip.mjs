import { list_slice } from "./list_slice.mjs";
import { list_size } from "./list_size.mjs";
import { string_slice } from "./string_slice.mjs";
import { string_size } from "./string_size.mjs";
export function list_skip(s, skip_count) {
  let b = list_size(s);
  const skipped = list_slice(s, skip_count, b);
  return skipped;
}
