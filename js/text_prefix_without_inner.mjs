import { text_skip } from "./text_skip.mjs";
import { text_size } from "./text_size.mjs";
export function text_prefix_without_inner(s, prefix) {
  let skipped = text_size(prefix);
  let without = text_skip(s, skipped);
  return without;
}
