import { reply_choice } from "../../../love/public/src/reply_choice.mjs";
import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { reply_optional } from "./reply_optional.mjs";
export function reply_roads() {
  marker("1");
  let fn2 = reply_optional("w");
  let fn = reply_sequence([fn2, "walta"]);
  let fn3 = reply_choice(fn);
  let fn5 = reply_choice(choices);
  let fn4 = reply_sequence(sequence_fns);
  return fn3;
}
