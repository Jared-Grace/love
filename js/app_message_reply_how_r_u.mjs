import { reply_on_match_output } from "./reply_on_match_output.mjs";
import { app_reply_response_how_r_u } from "./app_reply_response_how_r_u.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_phrase_you } from "./reply_phrase_you.mjs";
export function app_message_reply_how_r_u() {
  let you = reply_phrase_you();
  let fn = reply_sequence(["how", "are", you]);
  let hru_response = app_reply_response_how_r_u();
  let hru = reply_on_match_output(fn, hru_response);
  return hru;
}
