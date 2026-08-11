import { emoji_ok } from "./emoji_ok.mjs";
import { text_combine } from "./text_combine.mjs";
export function reply_response_how_r_u_before() {
  let r = text_combine(emoji_ok(), " ");
  return r;
}
