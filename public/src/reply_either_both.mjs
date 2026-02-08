import { reply_choice } from "../../../love/public/src/reply_choice.mjs";
import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
export function reply_either_both(function_copy_replace_first, second) {
  let both = reply_sequence([function_copy_replace_first, second]);
  let fn23 = reply_choice([function_copy_replace_first, second, both]);
  return fn23;
}
