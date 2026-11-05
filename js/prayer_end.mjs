import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { prayer_amen } from "./prayer_amen.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
export function prayer_end() {
  let v2 = prayer_amen();
  let v3 = emoji_pray();
  let v = text_combine_multiple([" ", v2, " ", v3]);
  return v;
}
