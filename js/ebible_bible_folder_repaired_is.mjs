import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_urdu } from "./ebible_folder_urdu.mjs";
import { equal } from "./equal.mjs";
export function ebible_bible_folder_repaired_is(bible_folder) {
  "$plain bible_folder";
  arguments_assert(arguments, 1);
  ("Whether this app alters one publisher's bible before a reader sees it, rather than showing it exactly as it arrived.");
  ("IT IS ONE ANSWER FOR TWO QUESTIONS THAT MUST NEVER DIVERGE - what a reader is TOLD was changed, and what is actually changed. The doing and the telling live in different files and had a copy each of the same comparison, so nothing stopped one being widened to a second bible while the other went on speaking about one. A bible repaired with no notice under it, and a notice about a repair nobody performs, are both false statements about somebody else's scripture, and neither is a fault any gate here would catch.");
  ("EVERY OTHER BIBLE IS ANSWERED NO, which is the truth about them. Adding one is a decision about a publisher's text and belongs to whoever can read that language, never to whichever caller noticed something looked wrong - and the twin next door says what it costs to get this wrong: the Urdu repairs write the Arabic spelling of the name of God as the Urdu word for it, which is right for the Urdu bible and would silently rewrite the name of God in the Arabic one.");
  let urdu = ebible_folder_urdu();
  let same = equal(bible_folder, urdu);
  return same;
}
