import { reply_on_match_output } from "../../../love/public/src/reply_on_match_output.mjs";
import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
export function reply_sequence_output(sequence, item) {
  let s = reply_sequence(sequence);
  let o = reply_on_match_output(s, item);
  return o;
}
