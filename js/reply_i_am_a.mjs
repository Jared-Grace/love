import { reply_phrase_i_am } from "./reply_phrase_i_am.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_sequence_optional } from "./reply_sequence_optional.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_i_am_a(title) {
  "Somebody saying what they are: I am, then a or an if they say it, then the title given.";
  let iam = reply_phrase_i_am();
  let o_n = reply_optional("n");
  let o_a_an = reply_sequence_optional(["a", o_n]);
  let matched = reply_sequence([iam, o_a_an, title]);
  return matched;
}
