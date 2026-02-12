import { text_skip } from "../../../love/public/src/text_skip.mjs";
import { text_size } from "../../../love/public/src/text_size.mjs";
export function text_prefix_without_inner(s, prefix) {
  let skipped = text_size(prefix);
  let without = text_skip(s, skipped);
  return without;
}
