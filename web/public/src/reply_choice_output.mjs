import { reply_on_match_output } from "../../../love/public/src/reply_on_match_output.mjs";
import { reply_choice } from "../../../love/public/src/reply_choice.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function reply_choice_output(choices) {
  marker("1");
  let fn_rc = reply_choice(choices);
  let fn = reply_on_match_output(fn_rc, item);
  return fn;
}
