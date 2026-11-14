import { reply_optional } from "./reply_optional.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_once_or_twice(one) {
  "One piece written once, or twice in a row - the doubled letter a misspelling adds, as in jarred for jared.";
  let second = reply_optional(one);
  let piece = reply_sequence([one, second]);
  return piece;
}
