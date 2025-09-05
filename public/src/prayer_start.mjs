import { emoji_trinity } from "./emoji_trinity.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
export function prayer_start() {
  let v =
    emoji_pray() +
    "In the name of the Father, and of the Son, and of the Holy Spirit" +
    " " +
    emoji_trinity();
  return v;
}
