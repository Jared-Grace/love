import { emoji_pray } from "./emoji_pray.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_reply_how_feel() {
  let t = text_combine(emoji_pray(), " How feeling");
  return t;
}
