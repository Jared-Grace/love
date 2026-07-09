import { app_reply_pray_response } from "../../../love/public/src/app_reply_pray_response.mjs";
import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function app_reply_pray(pray_title, pray_request) {
  let v = {
    text: text_combine_multiple([emoji_pray(), " ", pray_title]),
    response: app_reply_pray_response(pray_request),
  };
  return v;
}
