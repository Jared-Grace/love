import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_lord_bless } from "./text_lord_bless.mjs";
import { prayer_wrap } from "./prayer_wrap.mjs";
export function prayer_blessing(blessed) {
  let v2 = text_lord_bless();
  let prayer = text_combine_multiple([
    v2,
    blessed,
    " exceedingly abundantly more than anyone can ask or think ",
  ]);
  let v = prayer_wrap(prayer);
  return v;
}
