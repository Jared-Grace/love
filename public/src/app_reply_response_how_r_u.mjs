import { app_reply_response_how_r_u_skip } from "../../../love/public/src/app_reply_response_how_r_u_skip.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { emoji_ok } from "../../../love/public/src/emoji_ok.mjs";
export function app_reply_response_how_r_u() {
  marker("1");
  let hru = emoji_ok() + " " + app_reply_response_how_r_u_skip();
  return hru;
}
