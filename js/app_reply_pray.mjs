import { string_may_the_lord } from "../../../love/public/src/string_may_the_lord.mjs";
import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
export function app_reply_pray(pray_title, pray_request) {
  let v2 = {
    text: emoji_pray() + " " + pray_title,
    response: emoji_pray() + string_may_the_lord() + pray_request,
  };
  return v2;
}
