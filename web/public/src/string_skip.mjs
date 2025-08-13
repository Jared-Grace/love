import { string_slice } from "./string_slice.mjs";
import { string_size } from "./string_size.mjs";
export function string_skip(s, skip_count) {
  let b = string_size(s);
  const skipped = string_slice(s, skip_count, b);
  return skipped;
}
