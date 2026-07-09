import { text_may_the_lord } from "../../../love/public/src/text_may_the_lord.mjs";
import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function app_reply_pray_response(pray_request) {
  let v = text_combine_multiple([
    emoji_pray(),
    " ",
    text_may_the_lord(),
    pray_request,
  ]);
  return v;
}
