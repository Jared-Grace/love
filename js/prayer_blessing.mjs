import { prayer_end } from "./prayer_end.mjs";
import { text_lord_bless } from "./text_lord_bless.mjs";
import { prayer_start } from "./prayer_start.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function prayer_blessing(blessed) {
  let v = text_combine_multiple([
    prayer_start(),
    text_lord_bless(),
    blessed,
    " exceedingly abundantly more than anyone can ask or think ",
    prayer_end(),
  ]);
  return v;
}
