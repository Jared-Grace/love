import { reply_name_title_optional } from "./reply_name_title_optional.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_last } from "./reply_last.mjs";
export function reply_rules_draft_names() {
  let name = reply_name_title_optional();
  let last = reply_last();
  let r = reply_sequence([name, last]);
  return r;
}
