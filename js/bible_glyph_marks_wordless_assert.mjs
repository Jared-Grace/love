import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_marks_wordless } from "./bible_glyph_marks_wordless.mjs";
import { bible_glyph_roots_glyph_sharers } from "./bible_glyph_roots_glyph_sharers.mjs";
import { bible_glyph_roots } from "./bible_glyph_roots.mjs";
import { bible_glyph_roots_hebrew } from "./bible_glyph_roots_hebrew.mjs";
import { bible_glyph_characters } from "./bible_glyph_characters.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_empty_is_assert_walked_generic } from "./list_empty_is_assert_walked_generic.mjs";
export function bible_glyph_marks_wordless_assert() {
  arguments_assert(arguments, 0);
  ("QA gate: every mark named as standing for no word of the original really is seated on no word, and really is a mark this Bible can draw.");
  ("AN EXEMPTION HAS TO PROVE ITS OWN PREMISE OR IT IS JUST A HOLE. The list next door takes marks out of every seating reading there is, on the stated ground that no Strong's number seats them. Nothing keeps that true: a later author meeting the name badge in a chapter could seat it on a root to make some other reading quiet, and from that moment the exemption would be hiding a real mark from the readings that check it, silently and for as long as nobody thought to look. So the ground is checked rather than trusted.");
  ("IT ALSO CHECKS THE NAME IS A REAL ONE, which catches the cheaper and likelier mistake. A glyph name misspelled here exempts nothing at all - no reading ever meets that name - and the list would go on saying the mark is covered while the real mark took the full weight of every seating reading. A name nothing answers to is the shape a claim has when it was never true, which no amount of renaming would have produced.");
  ("Both testaments are asked, because a mark seated in one and not the other is still seated.");
  ("It is measured against nothing rather than against a record, because the list it checks was empty until the mark that needed it arrived, so there is no older fault to grandfather.");
  ("What is handed back is how many checks were made rather than how many marks are listed, and the two are three apart on purpose: an empty answer is what a clean run says and also what a run that walked no marks would say, and only the number of checks falls in the second case.");
  let marks = bible_glyph_marks_wordless();
  let roots = bible_glyph_roots();
  let greek = bible_glyph_roots_glyph_sharers(roots);
  let roots2 = bible_glyph_roots_hebrew();
  let hebrew = bible_glyph_roots_glyph_sharers(roots2);
  let drawable = [];
  for (let row of bible_glyph_characters()) {
    list_add(drawable, row.name);
  }
  let faults = [];
  let walked = 0;
  for (let mark of marks) {
    walked = add(walked, 3);
    let unknown = list_includes_not(drawable, mark);
    if (unknown) {
      let item = text_combine_3(mark, " ", "is no glyph this Bible can draw");
      list_add(faults, item);
    }
    let in_greek = property_exists(greek, mark);
    if (in_greek) {
      let item2 = text_combine_3(mark, " ", "is seated on a Greek root");
      list_add(faults, item2);
    }
    let in_hebrew = property_exists(hebrew, mark);
    if (in_hebrew) {
      let item3 = text_combine_3(mark, " ", "is seated on a Hebrew root");
      list_add(faults, item3);
    }
  }
  let r = list_empty_is_assert_walked_generic(
    walked,
    faults,
    "these marks are listed as standing for no word of the original and that is not true of them - either drop the name from the list, or take the seat back out of the root table",
  );
  return r;
}
