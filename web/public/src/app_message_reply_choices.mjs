import { reply_on_match_output } from "../../../love/public/src/reply_on_match_output.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { reply_on_match } from "../../../love/public/src/reply_on_match.mjs";
import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
import { app_reply_response_how_r_u } from "../../../love/public/src/app_reply_response_how_r_u.mjs";
import { reply_choice } from "./reply_choice.mjs";
export function app_message_reply_choices() {
  marker("1");
  let item = app_reply_response_how_r_u();
  let fn = reply_sequence(["how", "are", "you"]);
  let fn3 = reply_sequence(["hi"]);
  let v = reply_on_match_output(fn);
  let fn2 = reply_choice([v, fn3]);
  let r = reply_on_match(fn2, lambda);
  return r;
}
