import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { list_size } from "./list_size.mjs";
import { assert_json } from "./assert_json.mjs";
import { bible_glyph_chapters_canon_order } from "./bible_glyph_chapters_canon_order.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { bible_glyph_chapter_references } from "./bible_glyph_chapter_references.mjs";
import { list_join } from "./list_join.mjs";
import { equal } from "./equal.mjs";
export function bible_glyph_chapter_references_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: the light list of picture Bible chapters says exactly what the chapters themselves say - the same codes, the same references, in the same order.");
  ("IT GUARDS A COPY THAT EXISTS FOR A MEASURED REASON. ",
    fn_name("bible_glyph_chapter_references"),
    " is fifty short words standing in for four hundred and forty KiB of verses, so that a page can draw the whole way around this Bible without downloading any of it. The saving is real and the copy is the price of it; this is what stops the price being paid in silence.");
  ("A COPY DRIFTS IN THE DIRECTION NOBODY WATCHES. Writing a new chapter is writing a chapter file and adding it to the built list, and nothing about that reminds anybody of a second list somewhere else. So the new chapter is written, drawn and readable, and every page reading the light list goes on saying it does not exist.");
  ("THE REFERENCE IS CHECKED AND NOT ONLY THE CODE, because the reference is the only half a reader ever sees. A code that has drifted shows itself at once - a link goes nowhere - while a reference that has drifted is a chapter sitting in the list under the wrong name, which looks exactly like a chapter sitting in the list.");
  ("EACH PAIR IS SPELLED OUT AS A WORD BEFORE ANYTHING IS COMPARED, and that is not tidiness. Joining a list of records asks each one what it looks like as text and every record answers the same thing, so the two sides would have matched each other whatever either of them held - a gate that passes on every input, including the one it was built to catch.");
  ("IT COMPARES THE WHOLE LIST AS ONE WORD rather than counting or sampling. Two lists of the same length in different orders are a real mistake here - the order is the reading order the page offers - and a count cannot see it.");
  ("THE HINT CARRIES THE LIST TO PASTE, because nothing in the copy is authored: every word of it is already spelled in a chapter file, so the correct answer is always known and the repair is never a judgement.");
  let chapters = bible_glyph_chapters();
  let read = list_size(chapters);
  assert_json(read, {
    hint: "no chapter was read at all, and this Bible has chapters written - the walk has stopped reaching them, so the copy is being passed without being compared to anything",
  });
  let ordered = bible_glyph_chapters_canon_order(chapters);
  let wanted = [];
  let wanted_words = [];
  for (let chapter of ordered) {
    list_add(wanted, {
      chapter_code: chapter.chapter_code,
      reference: chapter.reference,
    });
    let word = text_combine_multiple([
      chapter.chapter_code,
      "=",
      chapter.reference,
    ]);
    list_add(wanted_words, word);
  }
  let held = bible_glyph_chapter_references();
  let held_words = [];
  for (let chapter of held) {
    let word = text_combine_multiple([
      chapter.chapter_code,
      "=",
      chapter.reference,
    ]);
    list_add(held_words, word);
  }
  let wanted_text = list_join(wanted_words, ",");
  let held_text = list_join(held_words, ",");
  let same = equal(wanted_text, held_text);
  let f_name = fn_name("bible_glyph_chapter_references");
  assert_json(same, {
    wanted,
    held,
    hint: text_combine_multiple([
      "the light list of chapters has drifted from the chapters themselves - a chapter was written, or renamed, and only one of the two lists heard about it. Put the pairs under wanted into ",
      f_name,
      ", in that order, and nothing else needs deciding",
    ]),
  });
  let r = {
    references: read,
  };
  return r;
}
