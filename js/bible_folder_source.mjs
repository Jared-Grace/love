import { door43_version_or_null } from "./door43_version_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { sword_version_or_null } from "./sword_version_or_null.mjs";
export function bible_folder_source(bible_folder) {
  "$plain bible_folder";
  "Which of the places this repo fetches bibles from a named bible came from, written as the word that place is called by here.";
  "A NAME FOR THE ANSWER, WHERE EVERY OTHER CALLER TAKES A BRANCH. Asking which place a bible came from is done all over this repo, and every asker so far wanted to do one thing or another about it. Counting them, or reporting them, or checking that every place was heard from, wants the answer itself rather than a fork in the road - and a caller with no name for it has to invent one, so two callers invent two.";
  "IT IS ASKED OF THE CATALOGUES BY NAME RATHER THAN GUESSED AT FROM WHAT IS ABSENT. It used to answer one word when a bible had a read-aloud edition and the other word when it had not, which held while there were two places and quietly broke the day there was a third: a Sword module has no read-aloud edition either, so it came back named as a Door43 text. A place that names its own bibles cannot be mistaken for one that does not.";
  "It reaches nothing outside the lists, so it costs nothing to ask about every bible in a list, which is what a check that every place was heard from has to do.";
  let door = door43_version_or_null(bible_folder);
  let carried = null_not_is(door);
  if (carried) {
    return "door43";
  }
  let sword = sword_version_or_null(bible_folder);
  let packaged = null_not_is(sword);
  if (packaged) {
    return "sword";
  }
  return "ebible";
}
