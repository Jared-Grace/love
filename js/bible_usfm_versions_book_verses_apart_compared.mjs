import { list_size_greater_than } from "./list_size_greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_verse_holders } from "./bible_usfm_verse_holders.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { add } from "./add.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { bible_usfm_verse_holder_shares_is } from "./bible_usfm_verse_holder_shares_is.mjs";
import { list_add } from "./list_add.mjs";
export function bible_usfm_versions_book_verses_apart_compared(
  references,
  carried,
  words_by_version,
  book_code,
) {
  "Every verse of one book where some bible on the shelf shares not a single meaning-carrying word with any other bible holding that same verse, and how many verses each bible was weighed at.";
  "AGAINST THE OTHERS RATHER THAN AGAINST A CHOSEN ONE. Picking one bible to measure from would settle in advance whose chapter reckoning is the right one, and the question here is which bibles stand apart from the rest, whichever rest that turns out to be at each verse.";
  "A VERSE FEWER THAN THREE BIBLES CARRY IS NOT WEIGHED AT ALL, and so is not counted either. Standing apart from a single other bible is symmetric and says nothing about which of the two moved, while the fault being looked for is a bible differing from a settled agreement.";
  "HOW MANY VERSES EACH BIBLE WAS WEIGHED AT COMES BACK BESIDE THE STANDING-APART ONES, because a bare count is not comparable between bibles. One carrying only the New Testament stands apart at fewer verses than one carrying the whole book, for a reason that has nothing to do with its numbering, and a reader handed two bare counts would read the shorter shelf as the safer bible.";
  "The counting happens before the sharing is asked about, so a bible is counted as weighed whether or not it turned out to stand apart. Counting only the ones that came through would make the two numbers say the same thing twice and leave nothing to read the standing-apart count against.";
  arguments_assert(arguments, 4);
  let apart = [];
  let held_by_version = {};
  let measured = 0;
  for (let reference of references) {
    let holders = bible_usfm_verse_holders(
      carried,
      words_by_version,
      reference,
    );
    let enough = list_size_greater_than(holders, 2);
    if (not(enough)) {
      continue;
    }
    measured = add(measured, 1);
    for (let holder of holders) {
      let version = property_get(holder, "version");
      let content = property_get(holder, "content");
      let held_before = property_get_or_null(held_by_version, version);
      let held_first = null_is(held_before);
      let held_now = 1;
      if (not(held_first)) {
        held_now = add(held_before, 1);
      }
      held_by_version[version] = held_now;
      let shares = bible_usfm_verse_holder_shares_is(holders, version, content);
      if (shares) {
        continue;
      }
      let alone = {
        version,
        book_code,
        reference,
        holders: list_size(holders),
      };
      list_add(apart, alone);
    }
  }
  let r = {
    book_code,
    versions: list_size(carried),
    verses: measured,
    held: held_by_version,
    apart,
  };
  return r;
}
