import { app_reply_pray_response } from "./app_reply_pray_response.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_reply_pray(pray_title, pray_request) {
  let v = {
    text: text_combine_multiple([emoji_pray(), " ", pray_title]),
    response: app_reply_pray_response(pray_request),
  };
  return v;
}
