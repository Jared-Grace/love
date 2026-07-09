import { emoji_wave } from "../../../love/public/src/emoji_wave.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function app_reply_greetings() {
  let t = text_combine(emoji_wave(), " Greetings");
  return t;
}
