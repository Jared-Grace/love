import { reply_sequence_output } from "./reply_sequence_output.mjs";
import { reply_phrase_i_am } from "./reply_phrase_i_am.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_sequence_optional } from "./reply_sequence_optional.mjs";
export function reply_i_am_a_output(title, response) {
  let iam = reply_phrase_i_am();
  let o_n = reply_optional("n");
  let o_a_an = reply_sequence_optional(["a", o_n]);
  let matched = reply_sequence_output([iam, o_a_an, title], response);
  return matched;
}
