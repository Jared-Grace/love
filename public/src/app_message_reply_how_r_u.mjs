import { reply_on_match_output } from "../../../love/public/src/reply_on_match_output.mjs";
import { app_reply_response_how_r_u } from "../../../love/public/src/app_reply_response_how_r_u.mjs";
import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
import { reply_phrase_you } from "../../../love/public/src/reply_phrase_you.mjs";
export function app_message_reply_how_r_u() {
  let you2 = reply_phrase_you();
  let fn = reply_sequence(["how", "are", you2]);
  let hru_response = app_reply_response_how_r_u();
  let hru = reply_on_match_output(fn, hru_response);
  return hru;
}
