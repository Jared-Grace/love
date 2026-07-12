import { app_reply_response_how_r_u_skip } from "./app_reply_response_how_r_u_skip.mjs";
import { app_reply_response_how_r_u_before } from "./app_reply_response_how_r_u_before.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_reply_response_how_r_u_today() {
  let hru = text_combine_multiple([
    app_reply_response_how_r_u_before(),
    "Today, ",
    app_reply_response_how_r_u_skip(),
  ]);
  return hru;
}
