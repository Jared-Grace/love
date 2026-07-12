import { emoji_fire } from "./emoji_fire.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_reply_glory() {
  let r = text_combine(emoji_fire(), " Glory");
  return r;
}
