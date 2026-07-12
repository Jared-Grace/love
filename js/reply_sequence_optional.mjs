import { reply_optional } from "./reply_optional.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_sequence_optional(sequence) {
  let fn_s = reply_sequence(sequence);
  let fn = reply_optional(fn_s);
  return fn;
}
