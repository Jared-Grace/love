import { emoji_wave } from "./emoji_wave.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_reply_greetings() {
  let t = text_combine(emoji_wave(), " Greetings");
  return t;
}
