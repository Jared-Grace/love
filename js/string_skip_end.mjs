import { text_take } from "./text_take.mjs";
import { text_size } from "./text_size.mjs";
import { subtract } from "./subtract.mjs";
export function string_skip_end(s, missing_count) {
  let from = subtract(text_size(s), missing_count);
  let without = text_take(s, from);
  return without;
}
