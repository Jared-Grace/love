import { reply_i_am_a } from "./reply_i_am_a.mjs";
import { reply_on_match_output } from "./reply_on_match_output.mjs";
export function reply_i_am_a_output(title, response) {
  let said = reply_i_am_a(title);
  let matched = reply_on_match_output(said, response);
  return matched;
}
