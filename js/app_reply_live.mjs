import { emoji_question } from "./emoji_question.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_reply_live() {
  let v = text_combine(emoji_question(), " Live");
  return v;
}
