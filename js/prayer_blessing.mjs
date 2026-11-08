import { text_may_the_lord_exclamation } from "./text_may_the_lord_exclamation.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { prayer_wrap } from "./prayer_wrap.mjs";
export function prayer_blessing(blessed) {
  let request = text_combine_multiple([
    "always bless ",
    blessed,
    " exceedingly abundantly more than anyone can ask or think",
  ]);
  let prayer = text_may_the_lord_exclamation(request);
  let v = prayer_wrap(prayer);
  return v;
}
