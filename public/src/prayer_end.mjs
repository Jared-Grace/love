import { marker } from "./marker.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
export function prayer_end() {
  marker("1");
  let v = " Amen! " + emoji_pray();
  return v;
}
