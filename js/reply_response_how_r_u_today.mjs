import { reply_response_how_r_u_skip } from "./reply_response_how_r_u_skip.mjs";
import { reply_response_how_r_u_before } from "./reply_response_how_r_u_before.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function reply_response_how_r_u_today() {
  let hru = text_combine_multiple([
    reply_response_how_r_u_before(),
    "Today, ",
    reply_response_how_r_u_skip(),
  ]);
  return hru;
}
