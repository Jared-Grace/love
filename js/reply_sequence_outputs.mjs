import { reply_on_match_output_multiple } from "./reply_on_match_output_multiple.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_sequence_outputs(sequence, outputs) {
  let fn3 = reply_sequence(sequence);
  let fn6 = reply_on_match_output_multiple(fn3, outputs);
  return fn6;
}
