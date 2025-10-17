import { reply_on_match_output } from "../../../love/public/src/reply_on_match_output.mjs";
import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
export function reply_sequence_outputs(sequence, greetings) {
  let fn3 = reply_sequence(sequence);
  let fn6 = reply_on_match_output(fn3, greetings);
  return fn6;
}
