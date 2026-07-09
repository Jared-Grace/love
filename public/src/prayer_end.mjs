import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function prayer_end() {
  let v = text_combine(" Amen! ", emoji_pray());
  return v;
}
