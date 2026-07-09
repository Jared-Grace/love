import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function app_reply_give() {
  let r = text_combine(emoji_pray(), " Give");
  return r;
}
