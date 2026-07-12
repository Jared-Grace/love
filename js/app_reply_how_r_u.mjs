import { emoji_ok } from "./emoji_ok.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_reply_how_r_u() {
  let t = text_combine(emoji_ok(), "How r u");
  return t;
}
