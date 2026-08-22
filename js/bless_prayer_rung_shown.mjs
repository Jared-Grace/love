import { arguments_assert } from "./arguments_assert.mjs";
import { bless_prayer_emoji } from "./bless_prayer_emoji.mjs";
import { bless_prayer_flanked } from "./bless_prayer_flanked.mjs";
export function bless_prayer_rung_shown(prayer) {
  arguments_assert(arguments, 1);
  ("The prayer over one person as the player sees it - the same words as ever, between two");
  ("pictures drawn afresh for this one praying.");
  ("The two are drawn separately rather than as a matching pair, so the panel differs in");
  ("both places at once and the number of faces it can wear is the pool multiplied by");
  ("itself rather than the pool. A pair that always matched would be one picture shown");
  ("twice, and the second one would carry nothing.");
  ("They may land the same, and a prayer held between two of the same picture is not a");
  ("fault - it is a draw that came up twice, which is what a real draw does.");
  let before = bless_prayer_emoji();
  let after = bless_prayer_emoji();
  let text = bless_prayer_flanked(prayer, before, after);
  return text;
}
