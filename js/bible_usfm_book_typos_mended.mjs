import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_book_typos } from "./bible_usfm_book_typos.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { and } from "./and.mjs";
import { not } from "./not.mjs";
import { text_replace } from "./text_replace.mjs";
export function bible_usfm_book_typos_mended(usfm, version, book_code) {
  arguments_assert(arguments, 3);
  ("$plain usfm");
  ("$plain version");
  ("$plain book_code");
  ("One book of one bible as its publisher wrote it, with the handful of places that book is marked up wrongly put right, so that nothing below this ever sees a word the translation does not say.");
  ("★ IT MENDS THE READING AND NEVER THE SHELF. The file on the disk is a download, and a download is replaced whole the next time it is fetched, so a correction written into it is a correction that disappears without anybody being told. Written here it is applied afresh on every read, it is spelled out in one list that a person can sit and read, and it travels with the repo rather than with the disk.");
  ("WHAT IS MENDED IS NAMED ONE PLACE AT A TIME AND NEVER WORKED OUT FROM A SHAPE. A rule such as a footnote never closes against a letter would be true today and would mend a place nobody had read tomorrow, silently, in scripture. Every mend here was read at its verse in a second published edition of the same translation first; a fault this list has not been taught about is left exactly as it is, and the sweep against the interlinear is what raises it.");
  ("A RUN THAT IS NOT THERE CHANGES NOTHING AND DOES NOT COMPLAIN, WHICH IS DELIBERATE. If the publisher mends one of these upstream, every reader on this disk must go on working; the entry becoming useless is a thing to be told about at the next check, not a thing that should break a person copying a psalm. The gate beside the list is where that is said out loud.");
  let mended = usfm;
  let typos = bible_usfm_book_typos();
  for (let typo of typos) {
    let left = property_get(typo, "version");
    let same_version = equal(left, version);
    let left2 = property_get(typo, "book_code");
    let same_book = equal(left2, book_code);
    let mine = and(same_version, same_book);
    if (not(mine)) {
      continue;
    }
    let from = property_get(typo, "from");
    let to = property_get(typo, "to");
    mended = text_replace(mended, from, to);
  }
  return mended;
}
