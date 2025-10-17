import { marker } from "../../../love/public/src/marker.mjs";
import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
export function reply_sequence_outputs(sequence, greetings) {
  marker("1");
  let fn3 = reply_sequence(sequence);
  let fn6 = reply_on_match_output_multiple(fn3, greetings);
  return fn6;
}
