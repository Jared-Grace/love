import { app_reply_response_how_r_u_before } from "../../../love/public/src/app_reply_response_how_r_u_before.mjs";
import { app_reply_response_how_r_u_skip_first_upper } from "../../../love/public/src/app_reply_response_how_r_u_skip_first_upper.mjs";
export function app_reply_response_how_r_u() {
  let hru =
    app_reply_response_how_r_u_before() +
    app_reply_response_how_r_u_skip_first_upper();
  return hru;
}
