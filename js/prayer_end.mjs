import { emoji_pray } from "./emoji_pray.mjs";
import { text_combine } from "./text_combine.mjs";
export function prayer_end() {
  let v = text_combine(" Amen! ", emoji_pray());
  return v;
}
