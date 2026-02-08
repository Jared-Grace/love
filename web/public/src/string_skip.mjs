import { string_slice } from "../../../love/public/src/string_slice.mjs";
import { text_size } from "../../../love/public/src/text_size.mjs";
export function string_skip(s, skip_count) {
  let b = text_size(s);
  const skipped = string_slice(s, skip_count, b);
  return skipped;
}
