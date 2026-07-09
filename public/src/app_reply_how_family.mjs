import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function app_reply_how_family() {
  let v = text_combine(emoji_pray(), " How family");
  return v;
}
