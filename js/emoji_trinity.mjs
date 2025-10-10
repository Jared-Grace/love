import { emoji_dove } from "../../../love/public/src/emoji_dove.mjs";
import { emoji_cross } from "../../../love/public/src/emoji_cross.mjs";
import { emoji_heart_fire } from "../../../love/public/src/emoji_heart_fire.mjs";
export function emoji_trinity() {
  let v = emoji_heart_fire() + emoji_cross() + emoji_dove();
  return v;
}
