import { app_reply_response_how_r_u_skip_before } from "../../../love/public/src/app_reply_response_how_r_u_skip_before.mjs";
import { text_first_upper_to } from "../../../love/public/src/text_first_upper_to.mjs";
import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
import { emoji_book_open } from "../../../love/public/src/emoji_book_open.mjs";
export function app_reply_response_how_r_u_skip_first_upper() {
  const before = app_reply_response_how_r_u_skip_before();
  let t =
    before +
    emoji_book_open() +
    " all things work together for good to them that love God and are called according to the purpose of God! (Romans 8:28) However, please pray that the servant of God will be perfectly loving and healed" +
    emoji_pray();
  let u = text_first_upper_to(t);
  return u;
}
