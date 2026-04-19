import { text_first_upper_to } from "../../../love/public/src/text_first_upper_to.mjs";
import { app_reply_response_how_r_u_skip } from "../../../love/public/src/app_reply_response_how_r_u_skip.mjs";
import { emoji_ok } from "../../../love/public/src/emoji_ok.mjs";
export function app_reply_response_how_r_u() {
  let hru = emoji_ok() + " " + app_reply_response_how_r_u_skip();
  let u = text_first_upper_to(t);
  return hru;
}
