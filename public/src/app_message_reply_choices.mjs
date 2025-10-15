import { app_reply_response_greetings } from "../../../love/public/src/app_reply_response_greetings.mjs";
import { reply_last } from "../../../love/public/src/reply_last.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
import { app_reply_response_how_r_u } from "../../../love/public/src/app_reply_response_how_r_u.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_on_match_output } from "./reply_on_match_output.mjs";
export function app_message_reply_choices() {
  marker("1");
  let greetings = app_reply_response_greetings();
  let fn7 = reply_choice(["hello", "hell"]);
  let fn3 = reply_choice(["hi", "hello", "hey"]);
  let fn6 = reply_on_match_output(fn3, greetings);
  let fn = reply_sequence(["how", "are", "you"]);
  let hru = app_reply_response_how_r_u();
  let fn4 = reply_on_match_output(fn, hru);
  let fn2 = reply_on_match_output("jesus", "✝️ Jesus is Lord! 👑");
  let choices_main = reply_choice([fn4, fn6, fn2]);
  let last = reply_last();
  let fn5 = reply_sequence([choices_main, last]);
  return fn5;
}
