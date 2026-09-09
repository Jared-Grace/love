import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_interlinear_words_apart } from "./bible_usfm_interlinear_words_apart.mjs";
import { property_get } from "./property_get.mjs";
import { less_than } from "./less_than.mjs";
import { bible_usfm_interlinear_words_apart_allowed } from "./bible_usfm_interlinear_words_apart_allowed.mjs";
import { property_set } from "./property_set.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { json_equal } from "./json_equal.mjs";
import { and } from "./and.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { json_to } from "./json_to.mjs";
import { list_size } from "./list_size.mjs";
import { add } from "./add.mjs";
import { greater_than } from "./greater_than.mjs";
export async function bible_usfm_interlinear_words_apart_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: prove that every chapter of the Berean this repo hands to whoever copies one says the same words as the Berean published a second time in the interlinear tables, except at the thirteen places somebody has read and written down. Throws so the dispatcher seam exits nonzero.");
  ("★ IT IS THE ONLY CHECK HERE THAT CAN SEE WHAT THE READER LETS THROUGH. Everything else asks the shelf through the same reader, so a line the reader wrongly keeps is in both answers and the two agree perfectly about a passage with a heading in the middle of it. The tables are the same translation set from the original words by another road, and nothing in this repo made them, so a word that is in the reading and not in scripture has nowhere to hide.");
  ("IT WAS BUILT AFTER EXACTLY THAT FAULT SHIPPED. Copying Psalm 107 handed back Psalms 107-150 above the first line, because the printing writes its book-division subtitles with the same mark it writes a psalm's ascription with, and the reader kept the mark on purpose. Read against the tables, that line is one word the reading holds and the tables do not, and it fails here.");
  ("IT REFUSES TO PASS WITHOUT HAVING LOOKED AT ANYTHING, which is the way a check like this really dies. A shelf moved, a table half downloaded, a cache written empty: any of them leaves the sweep comparing nothing, every chapter agreeing at nothing, and an empty list of disagreements - which is exactly what a clean Bible looks like. So how many chapters were actually set side by side is asserted first, against the eleven hundred and eighty nine both sides carried when this was written.");
  ("THREE THINGS FAIL IT. A chapter standing apart with no line written for it is a chapter nobody has read at the words where the two differ. A chapter standing apart differently from the way it is written down has changed under a name somebody already checked, which is the same thing wearing a trusted face. And a chapter written down here that no longer stands apart is good news that still has to be read, because the record is the reading and a record nobody prunes stops being one.");
  let apart = await bible_usfm_interlinear_words_apart();
  let compared = property_get(apart, "compared");
  let rows = property_get(apart, "rows");
  let too_few = less_than(compared, 1189);
  if (too_few) {
    throw new Error(
      "bible usfm interlinear words apart gate: only " +
        compared +
        " chapters were compared, and there were 1189 - did the shelf move, or the interlinear tables fail to load?",
    );
  }
  let allowed = bible_usfm_interlinear_words_apart_allowed();
  let unread = [];
  let changed = [];
  let seen = {};
  for (let row of rows) {
    let chapter_code = property_get(row, "chapter_code");
    property_set(seen, chapter_code, true);
    let written = property_exists(allowed, chapter_code);
    if (not(written)) {
      list_add(unread, row);
      continue;
    }
    let allowance = property_get(allowed, chapter_code);
    let left = property_get(row, "reading_over");
    let right = property_get(allowance, "reading_over");
    let reading_same = json_equal(left, right);
    let left2 = property_get(row, "english_over");
    let right2 = property_get(allowance, "english_over");
    let english_same = json_equal(left2, right2);
    let same = and(reading_same, english_same);
    if (not(same)) {
      list_add(changed, row);
    }
  }
  let mended = [];
  let written_codes = object_property_names(allowed);
  for (let chapter_code of written_codes) {
    let stands = property_exists(seen, chapter_code);
    if (not(stands)) {
      list_add(mended, chapter_code);
    }
  }
  for (let row of unread) {
    console.log("unread     " + json_to(row));
  }
  for (let row of changed) {
    console.log("changed    " + json_to(row));
  }
  for (let chapter_code of mended) {
    console.log("mended     " + chapter_code);
  }
  let unread_count = list_size(unread);
  let changed_count = list_size(changed);
  let mended_count = list_size(mended);
  let left3 = add(unread_count, changed_count);
  let faults = add(left3, mended_count);
  console.log(
    "chapters compared: " + compared + "   words apart defects: " + faults,
  );
  let failed = greater_than(faults, 0);
  if (failed) {
    throw new Error(
      "bible usfm interlinear words apart gate: " +
        unread_count +
        " chapters stand apart with nobody having read them, " +
        changed_count +
        " stand apart differently from the way they are written down, and " +
        mended_count +
        " no longer stand apart at all - read the verses named above and mend the allowance",
    );
  }
  let r = {
    compared,
    apart: list_size(rows),
    faults: 0,
  };
  return r;
}
