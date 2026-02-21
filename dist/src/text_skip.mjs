import { text_slice } from "../../../love/public/src/text_slice.mjs";
import { text_size } from "../../../love/public/src/text_size.mjs";
export function text_skip(s, skip_count) {
  let b = text_size(s);
  const skipped = text_slice(s, skip_count, b);
  return skipped;
}
