import { emoji_trinity } from "../../../love/public/src/emoji_trinity.mjs";
import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
export function app_reply_choices_glory() {
  let v2 = emoji_pray() + " All glory to God " + emoji_trinity() + " ! ";
  return v2;
}
