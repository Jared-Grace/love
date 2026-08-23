import { arguments_assert } from "./arguments_assert.mjs";
import { door43_version_or_null } from "./door43_version_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { ternary } from "./ternary.mjs";
export function bible_folder_source(bible_folder) {
  arguments_assert(arguments, 1);
  ("$plain bible_folder");
  ("Which of the two places this repo fetches bibles from a named bible came from, written as the word that place is called by here.");
  ("A NAME FOR THE ANSWER, WHERE EVERY OTHER CALLER TAKES A BRANCH. Asking which place a bible came from is done all over this repo, and every asker so far wanted to do one thing or another about it. Counting them, or reporting them, or checking that both were heard from, wants the answer itself rather than a fork in the road - and a caller with no name for it has to invent one, so two callers invent two.");
  ("It is asked of the folder name alone and reaches nothing. So it costs nothing to ask about every bible in a list, which is what a check that both places were heard from has to do.");
  let door = door43_version_or_null(bible_folder);
  let elsewhere = null_is(door);
  let source = ternary(elsewhere, "ebible", "door43");
  return source;
}
