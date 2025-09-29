import { marker } from "../../../love/public/src/marker.mjs";
import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
export function prayer_end() {
  marker("1");
  let v = " Amen! " + emoji_pray();
  return v;
}
