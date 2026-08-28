import { multiply_divide } from "./multiply_divide.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_book_codes } from "./ebible_book_codes.mjs";
import { bible_usfm_versions_book_verses_apart } from "./bible_usfm_versions_book_verses_apart.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { subtract } from "./subtract.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_usfm_versions_verses_apart() {
  arguments_assert(arguments, 0);
  ("How far each bible on the shelf stands apart from the rest of the shelf across the whole of scripture, as how often it says not a single meaning-carrying word of a verse the way any other bible says it.");
  ("THIS IS THE NARROW CHECK NEXT DOOR WIDENED FROM FIVE VERSES TO EVERY VERSE THERE IS. The one already here reads five psalms over the network, which was enough to catch the bible it was written for and can say nothing whatever about the other sixty-five books. A wrong reckoning outside the psalms would walk past it untouched, and so would a bible added to the shelf tomorrow that is one out somewhere else.");
  ("IT READS THE SHELF ON THIS DISK RATHER THAN OVER THE NETWORK, which is what makes the whole bible affordable at all and also takes away the one failure the narrow check has to guard against. A fetch that times out costs a bible its place in the answer and says nothing, so a wrongly numbered bible walks through a check it was never in; a file on the disk is either there or it is not, and not being there is answered rather than passed over.");
  ("THE RATE IS THE ANSWER AND THE COUNT IS ONLY HOW IT WAS REACHED. Bibles carry different books and different numbers of verses, so two bare counts put the shorter shelf in front for a reason that has nothing to do with its reckoning. How many verses each bible was actually measured at is carried through from every book and divided into its count here.");
  ("THE LOOSEST TRANSLATIONS STAND APART TOO, AND THAT IS THE WHOLE DIFFICULTY. A bible rewritten for a reader with little English shares no word with the others at some verses honestly, so nothing here can separate a loose wording from a wrong reckoning by looking at one verse. It is the rate over the whole book that separates them, which is why this counts rather than judges, and why what counts as too far is decided next door.");
  ("It is ordered worst first, because the reason anybody asks this is to find out which bible is the problem.");
  let book_codes = ebible_book_codes();
  let apart_by_version = {};
  let measured_by_version = {};
  let first_by_version = {};
  let verses = 0;
  for (let book_code of book_codes) {
    let found = await bible_usfm_versions_book_verses_apart(book_code);
    let book_verses = property_get(found, "verses");
    verses = add(verses, book_verses);
    let book_held = property_get(found, "held");
    for (let version of object_property_names(book_held)) {
      let before = property_get_or_null(measured_by_version, version);
      let start = 0;
      let unseen = null_is(before);
      if (not(unseen)) {
        start = before;
      }
      let more = property_get(book_held, version);
      measured_by_version[version] = add(start, more);
    }
    let book_apart = property_get(found, "apart");
    for (let cell of book_apart) {
      let version = property_get(cell, "version");
      let before = property_get_or_null(apart_by_version, version);
      let start = 0;
      let unseen = null_is(before);
      if (not(unseen)) {
        start = before;
      }
      apart_by_version[version] = add(start, 1);
      let shown = property_get_or_null(first_by_version, version);
      let unshown = null_is(shown);
      if (unshown) {
        let reference = property_get(cell, "reference");
        first_by_version[version] = book_code + " " + reference;
      }
    }
  }
  let rows = [];
  for (let version of object_property_names(measured_by_version)) {
    let measured = property_get(measured_by_version, version);
    let counted = property_get_or_null(apart_by_version, version);
    let apart = 0;
    let never = null_is(counted);
    if (not(never)) {
      apart = counted;
    }
    let per_thousand = multiply_divide(apart, 1000, measured);
    let first = property_get_or_null(first_by_version, version);
    let row = {
      version,
      measured,
      apart,
      per_thousand,
      first,
    };
    list_add(rows, row);
  }
  function row_worst_first(row) {
    let per_thousand = property_get(row, "per_thousand");
    let inverted = subtract(0, per_thousand);
    return inverted;
  }
  let sorted = list_sort_number_mapper(rows, row_worst_first);
  let r = {
    verses,
    versions: list_size(sorted),
    rows: sorted,
  };
  return r;
}
