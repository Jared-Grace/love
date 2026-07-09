import { emoji_ok } from "../../../love/public/src/emoji_ok.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function app_reply_how_day() {
  let v = text_combine(emoji_ok(), " How day");
  return v;
}
