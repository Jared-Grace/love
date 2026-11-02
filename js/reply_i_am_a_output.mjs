import { reply_phrase_i_am } from "./reply_phrase_i_am.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_sequence_optional } from "./reply_sequence_optional.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_on_match_output } from "./reply_on_match_output.mjs";
export function reply_i_am_a_output(title, response) {
  let iam = reply_phrase_i_am();
  let o_n = reply_optional("n");
  let o_a_an = reply_sequence_optional(["a", o_n]);
  let phrase = reply_sequence([iam, o_a_an, title]);
  let matched = reply_on_match_output(phrase, response);
  return matched;
}
