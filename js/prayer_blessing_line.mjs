import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_may_the_lord_exclamation } from "./text_may_the_lord_exclamation.mjs";
export function prayer_blessing_line(blessed) {
  "The one line of a prayer that asks the LORD to bless whoever or whatever is given, without the words a whole prayer opens and closes with.";
  let request = text_combine_multiple([
    "always bless ",
    blessed,
    " exceedingly abundantly more than anyone can ask or think",
  ]);
  let line = text_may_the_lord_exclamation(request);
  return line;
}
