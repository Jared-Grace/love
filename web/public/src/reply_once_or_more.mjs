import { list_add } from "../../../love/public/src/list_add.mjs";
import { reply_optional } from "../../../love/public/src/reply_optional.mjs";
import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
export function reply_once_or_more(item) {
  const sequence = [item];
  let fn10 = reply_sequence(sequence);
  let fn11 = reply_optional(fn10);
  list_add(sequence, fn11);
}
