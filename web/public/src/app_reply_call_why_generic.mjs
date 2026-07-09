import { emoji_phone } from "../../../love/public/src/emoji_phone.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function app_reply_call_why_generic(a, b) {
  let v = text_combine_multiple([
    emoji_phone(),
    " Why ",
    a,
    " you ",
    b,
    "call me? What did you want to talk about?",
  ]);
  return v;
}
