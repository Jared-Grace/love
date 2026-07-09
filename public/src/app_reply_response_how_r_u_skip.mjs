import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
import { emoji_book_open } from "../../../love/public/src/emoji_book_open.mjs";
import { app_reply_response_how_r_u_skip_before } from "../../../love/public/src/app_reply_response_how_r_u_skip_before.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function app_reply_response_how_r_u_skip() {
  const before = app_reply_response_how_r_u_skip_before();
  let t = text_combine_multiple([
    before,
    emoji_book_open(),
    " all things work together for good to them that love God and are called according to the purpose of God! (Romans 8:28) However, please pray that the servant of God will be perfectly loving and healed",
    emoji_pray(),
  ]);
  return t;
}
