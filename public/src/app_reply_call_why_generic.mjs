import { emoji_phone } from "../../../love/public/src/emoji_phone.mjs";
export function app_reply_call_why_generic(a, b) {
  let v2 =
    emoji_phone() +
    " Why " +
    a +
    " you " +
    b +
    "call me? What did you want to talk about?";
  return v2;
}
