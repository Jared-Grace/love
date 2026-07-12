import { text_slice } from "./text_slice.mjs";
import { text_size } from "./text_size.mjs";
export function text_skip(s, skip_count) {
  let b = text_size(s);
  let skipped = text_slice(s, skip_count, b);
  return skipped;
}
