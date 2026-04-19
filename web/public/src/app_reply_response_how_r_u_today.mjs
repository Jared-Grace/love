import { app_reply_response_how_r_u_skip } from "../../../love/public/src/app_reply_response_how_r_u_skip.mjs";
import { app_reply_response_how_r_u_before } from "../../../love/public/src/app_reply_response_how_r_u_before.mjs";
export function app_reply_response_how_r_u_today() {
  let hru = app_reply_response_how_r_u_before() + "Today, "+
  app_reply_response_how_r_u_skip();
  return hru;
}
