import { emoji_dove } from "./emoji_dove.mjs";
import { emoji_cross } from "./emoji_cross.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function emoji_trinity() {
  let v = text_combine_multiple(["❤️", emoji_cross(), emoji_dove()]);
  return v;
}
