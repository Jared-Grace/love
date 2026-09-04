import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_bible_folders_repaired } from "./ebible_bible_folders_repaired.mjs";
import { list_includes } from "./list_includes.mjs";
export function ebible_bible_folder_repaired_is(bible_folder) {
  "$plain bible_folder";
  arguments_assert(arguments, 1);
  ("Whether this app alters one publisher's bible before a reader sees it, rather than showing it exactly as it arrived.");
  ("IT IS ONE ANSWER FOR TWO QUESTIONS THAT MUST NEVER DIVERGE - what a reader is TOLD was changed, and what is actually changed. The doing and the telling live in different files and had a copy each of the same comparison, so nothing stopped one being widened to a second bible while the other went on speaking about one. A bible repaired with no notice under it, and a notice about a repair nobody performs, are both false statements about somebody else's scripture, and neither is a fault any gate here would catch.");
  ("THE SET IT ASKS ABOUT IS NAMED NEXT DOOR rather than compared against here, because a third caller wanted the whole set rather than one answer: the gate over the generated reveal files has to build, for each of these bibles, the line that file would name it by. A question answered one folder at a time cannot be asked that way, and the gate would have had to keep its own copy of the set to ask it.");
  ("EVERY OTHER BIBLE IS ANSWERED NO, which is the truth about them. Adding one is a decision about a publisher's text and belongs to whoever can read that language, never to whichever caller noticed something looked wrong.");
  let folders = ebible_bible_folders_repaired();
  let repaired = list_includes(folders, bible_folder);
  return repaired;
}
