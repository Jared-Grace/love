import { emoji_ok } from "../../../love/public/src/emoji_ok.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function app_reply_response_how_r_u_before() {
  let r = text_combine(emoji_ok(), " ");
  return r;
}
