import { list_add } from "./list_add.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_once_or_more(item) {
  let sequence = [item];
  let room = reply_sequence(sequence);
  let ro = reply_optional(room);
  list_add(sequence, ro);
  return room;
}
