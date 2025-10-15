import { list_add } from "../../../love/public/src/list_add.mjs";
import { reply_optional } from "../../../love/public/src/reply_optional.mjs";
import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
export function reply_once_or_more(item) {
  const sequence = [item];
  let rs = reply_sequence(sequence);
  let ro = reply_optional(rs);
  list_add(sequence, ro);
}
