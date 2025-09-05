import { emoji_dove } from "./emoji_dove.mjs";
import { emoji_cross } from "./emoji_cross.mjs";
import { emoji_heart_fire } from "./emoji_heart_fire.mjs";
export function emoji_trinity() {
  let v = emoji_heart_fire() + emoji_cross() + emoji_dove();
  return v;
}
