import { reply_response_how_r_u_skip_before } from "./reply_response_how_r_u_skip_before.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
export function reply_response_how_r_u_skip_before_first_upper() {
  let t = reply_response_how_r_u_skip_before();
  let u = text_first_upper_to(t);
  return u;
}
