import { string_may_the_lord } from "../../../love/public/src/string_may_the_lord.mjs";
import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
export function app_reply_pray_response(pray_request) {
  let v = emoji_pray() + " " + string_may_the_lord() + pray_request;
  return v;
}
