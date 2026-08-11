import { reply_response_how_r_u_before } from "./reply_response_how_r_u_before.mjs";
import { app_reply_response_how_r_u_skip_first_upper } from "./app_reply_response_how_r_u_skip_first_upper.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_reply_response_how_r_u() {
  let hru = text_combine(
    reply_response_how_r_u_before(),
    app_reply_response_how_r_u_skip_first_upper(),
  );
  return hru;
}
