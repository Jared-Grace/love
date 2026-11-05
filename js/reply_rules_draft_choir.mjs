import { reply_minister_choir_work } from "./reply_minister_choir_work.mjs";
import { reply_once_or_more } from "./reply_once_or_more.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_last } from "./reply_last.mjs";
export function reply_rules_draft_choir() {
  let piece = reply_minister_choir_work();
  let room = reply_once_or_more(piece);
  let last = reply_last();
  let r = reply_sequence([room, last]);
  return r;
}
