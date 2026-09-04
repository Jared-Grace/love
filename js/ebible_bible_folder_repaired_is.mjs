import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_urdu } from "./ebible_folder_urdu.mjs";
import { equal } from "./equal.mjs";
export function ebible_bible_folder_repaired_is(bible_folder) {
  "$plain bible_folder";
  arguments_assert(arguments, 1);
  ("Whether this app alters one publisher's bible before a reader sees it, rather than showing it exactly as it arrived.");
  ("IT IS ONE ANSWER FOR TWO QUESTIONS THAT MUST NEVER DIVERGE - what the reader is told was changed, and what is actually changed. Those were decided in two places: the notice knew which bible it was about, and the repair was run by whichever caller happened to remember to run it. Two places deciding one thing is how a bible comes to be repaired with no notice under it, or credited with a notice about a repair nobody performs any more - and both of those are false statements about somebody else's scripture rather than bugs anything would catch.");
  ("EVERY OTHER BIBLE IS ANSWERED NO, which is the truth about them. Adding one here is a decision about a publisher's text and belongs to whoever can read that language, never to whichever caller noticed something looked wrong.");
  let urdu = ebible_folder_urdu();
  let same = equal(bible_folder, urdu);
  return same;
}
