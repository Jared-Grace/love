import { reply_response_how_r_u_skip } from "./reply_response_how_r_u_skip.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
export function reply_response_how_r_u_skip_first_upper() {
  let t = reply_response_how_r_u_skip();
  let u = text_first_upper_to(t);
  return u;
}
