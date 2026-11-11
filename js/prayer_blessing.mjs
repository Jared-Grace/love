import { prayer_blessing_line } from "./prayer_blessing_line.mjs";
import { prayer_wrap } from "./prayer_wrap.mjs";
export function prayer_blessing(blessed) {
  let prayer = prayer_blessing_line(blessed);
  let v = prayer_wrap(prayer);
  return v;
}
