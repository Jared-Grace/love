import { reply_choice } from "../../../love/public/src/reply_choice.mjs";
import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
export function reply_either_both(dear, brother) {
  let both = reply_sequence([dear, brother]);
  let fn23 = reply_choice([dear, brother, both]);
  return fn23;
}
