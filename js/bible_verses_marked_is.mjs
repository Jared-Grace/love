import { arguments_assert } from "./arguments_assert.mjs";
import { door43_version_or_null } from "./door43_version_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { berean_version_or_null } from "./berean_version_or_null.mjs";
import { or } from "./or.mjs";
export function bible_verses_marked_is(bible_folder) {
  arguments_assert(arguments, 1);
  ("$plain bible_folder");
  ("Whether one bible's text arrives with every chapter and every verse already marked inside it, rather than as pages the verses have to be found in.");
  ("The archive says where a verse begins in two places that can disagree, so a bible from there is read twice and the two readings laid against each other. usfm says it once. There is nothing there to check, and reaching for the check anyway would mean fetching the same bible a second time from a place it did not come from - which for the Berean would fetch the older printing and lay it against the newer one as though a difference were a fault.");
  ("Asked as one question about the text rather than as a list of catalogues, because that is what the roads below actually want to know. They do not care who published a bible; they care whether the words came already marked. Two sources here ship usfm and a third does not, and a fourth that did would answer yes with nothing below edited.");
  let door = door43_version_or_null(bible_folder);
  let elsewhere = null_not_is(door);
  let berean = berean_version_or_null(bible_folder);
  let published = null_not_is(berean);
  let marked = or(elsewhere, published);
  return marked;
}
