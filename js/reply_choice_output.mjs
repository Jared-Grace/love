import { reply_on_match_output } from "./reply_on_match_output.mjs";
import { reply_choice } from "./reply_choice.mjs";
export function reply_choice_output(choices, item) {
  let fn_rc = reply_choice(choices);
  let fn = reply_on_match_output(fn_rc, item);
  return fn;
}
