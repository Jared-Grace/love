import { text_take } from "./text_take.mjs";
import { text_size } from "./text_size.mjs";
import { subtract } from "./subtract.mjs";
export function string_skip_end(s, missing_count) {
  let left = text_size(s);
  let from = subtract(left, missing_count);
  let without = text_take(s, from);
  return without;
}
