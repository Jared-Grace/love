import { app_reply_pray_response } from "../../../love/public/src/app_reply_pray_response.mjs";
import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
export function app_reply_pray(pray_title, pray_request) {
  let v2 = {
    text: emoji_pray() + " " + pray_title,
    response: app_reply_pray_response(pray_request),
  };
  return v2;
}
