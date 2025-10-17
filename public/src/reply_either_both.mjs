import { reply_choice } from "../../../love/public/src/reply_choice.mjs";
import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
export function reply_either_both(first, second) {
  let both = reply_sequence([first, second]);
  let fn23 = reply_choice([first, second, both]);
  return fn23;
}
