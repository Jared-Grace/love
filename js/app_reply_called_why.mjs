import { emoji_phone } from "./emoji_phone.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_reply_called_why() {
  let t = text_combine(emoji_phone(), " Called why?");
  return t;
}
