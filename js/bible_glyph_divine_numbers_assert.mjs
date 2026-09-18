import { bible_glyph_divine_numbers } from "./bible_glyph_divine_numbers.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { bible_glyph_roots_drawn_lookup } from "./bible_glyph_roots_drawn_lookup.mjs";
import { bible_glyph_roots } from "./bible_glyph_roots.mjs";
import { bible_glyph_roots_hebrew } from "./bible_glyph_roots_hebrew.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_empty_is_assert_walked_generic } from "./list_empty_is_assert_walked_generic.mjs";
export function bible_glyph_divine_numbers_assert() {
  "QA gate: every number listed as a name of God with no picture yet really has no picture yet, and really belongs to the testament its row names.";
  "A LIST THAT KEEPS A MARK OFF A WORD HAS TO EXPIRE WHEN THE WORD GETS ITS OWN MARK. The list beside this one stops the name badge landing on Shaddai, on the ground that Shaddai has no picture yet and the generic badge would be a worse answer than plain letters. The day somebody draws Shaddai that ground is gone: the drawer already passes over every number that has a picture, so the row would sit there doing nothing, and the next reader would have to work out from scratch whether it was load bearing.";
  "SO THE GATE IS WHAT MAKES THE LIST SELF EMPTYING. Seating one of these numbers turns this red, and the only repair is to delete the row - which is the repair a person would want anyway, and which they now cannot forget. A register nobody is forced to prune becomes a list of reasons that were true once, and then it is read as though they still are.";
  "THE TESTAMENT IS CHECKED TOO BECAUSE THE NUMBER ALONE CANNOT SAY. Hebrew 4990 and Greek 4990 are both real and only one of them is the saviour, so a row whose chapter code names the wrong half would refuse a badge over the wrong words entirely, and nothing about the number would show it.";
  "IT IS CHECKED BY MATCHING BOTH TESTAMENTS RATHER THAN BY ASKING WHETHER THE ANSWER IS MISSING, and the difference is whether the check can fail at all. A chapter code naming no book does not come back empty - it comes back as the uncategorized division, which is a real string and reads as a testament to anything that only tested for nothing. So the row's testament has to equal one of the two this Bible actually draws from, named by asking two chapters rather than by typing the words.";
  "It is measured against nothing rather than against a record, because the list is new and there is no older fault to grandfather.";
  let rows = bible_glyph_divine_numbers();
  let greek_testament_name = bible_chapter_testament_name("JHN01");
  let hebrew_testament_name = bible_chapter_testament_name("GEN01");
  let roots = bible_glyph_roots();
  let greek = bible_glyph_roots_drawn_lookup(roots);
  let roots2 = bible_glyph_roots_hebrew();
  let hebrew = bible_glyph_roots_drawn_lookup(roots2);
  let faults = [];
  let walked = 0;
  for (let row of rows) {
    let side = bible_chapter_testament_name(row.testament_chapter);
    let is_greek = equal(side, greek_testament_name);
    let is_hebrew = equal(side, hebrew_testament_name);
    walked = add(walked, 1);
    if (not(is_greek || is_hebrew)) {
      let c = String(side);
      let item = text_combine_3(
        row.strong,
        " names no testament this Bible draws, it names ",
        c,
      );
      list_add(faults, item);
      continue;
    }
    let table = hebrew;
    if (is_greek) {
      table = greek;
    }
    let seated = property_get_or_null(table, row.strong);
    walked = add(walked, 1);
    let free = null_is(seated);
    if (not(free)) {
      let c2 = String(seated);
      let item2 = text_combine_3(row.strong, " is already drawn as ", c2);
      list_add(faults, item2);
    }
  }
  let hint =
    "these numbers are listed as names of God with no picture yet and that is no longer true of them - drop the row, because the drawer already passes over every number that has a picture";
  list_empty_is_assert_walked_generic(walked, faults, hint);
  let r = {
    walked,
    rows: rows.length,
  };
  return r;
}
