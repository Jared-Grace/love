import { reply_optional } from "./reply_optional.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { subtract } from "./subtract.mjs";
import { each_range } from "./each_range.mjs";
export function reply_at_most(count, one) {
  "One piece repeated up to a limit, or not at all.";
  let piece = reply_optional(one);
  function one_longer(i) {
    let longer = reply_sequence([one, piece]);
    piece = reply_optional(longer);
  }
  let count2 = subtract(count, 1);
  each_range(count2, one_longer);
  return piece;
}
