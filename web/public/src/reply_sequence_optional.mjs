import { reply_optional } from "../../../love/public/src/reply_optional.mjs";
import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
export function reply_sequence_optional(sequence) {
  let fn_s = reply_sequence(sequence);
  let fn = reply_optional(fn_s);
  return fn;
}
