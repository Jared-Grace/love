import { reply_on_match_output } from "./reply_on_match_output.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_sequence_output(sequence, item) {
  let s = reply_sequence(sequence);
  let o = reply_on_match_output(s, item);
  return o;
}
