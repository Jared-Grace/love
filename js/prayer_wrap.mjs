import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { prayer_start } from "./prayer_start.mjs";
import { prayer_end } from "./prayer_end.mjs";
export function prayer_wrap(prayer) {
  let v2 = prayer_start();
  let v3 = prayer_end();
  let v = text_combine_multiple([v2, prayer, v3]);
  return v;
}
