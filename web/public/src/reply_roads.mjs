import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function reply_roads() {
  marker("1");
  let fn = reply_sequence(sequence_fns);
}
