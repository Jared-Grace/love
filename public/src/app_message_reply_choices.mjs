import { app_reply_response_greetings } from "../../../love/public/src/app_reply_response_greetings.mjs";
import { reply_last } from "../../../love/public/src/reply_last.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
import { app_reply_response_how_r_u } from "../../../love/public/src/app_reply_response_how_r_u.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_on_match_output } from "./reply_on_match_output.mjs";
export function app_message_reply_choices() {
  marker("1");
  let fn = reply_sequence(["how", "are", "you"]);
  let fn3 = reply_sequence(["hi"]);
  let v2 = app_reply_response_greetings();
  let item = app_reply_response_how_r_u();
  let fn4 = reply_on_match_output(fn, item);
  let fn2 = reply_choice([fn4, fn3]);
  let last = reply_last();
  let fn5 = reply_sequence([fn2, last]);
  return fn5;
}
