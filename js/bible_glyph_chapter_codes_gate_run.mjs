import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { list_size } from "./list_size.mjs";
import { assert_json } from "./assert_json.mjs";
import { bible_glyph_chapters_canon_order } from "./bible_glyph_chapters_canon_order.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { bible_glyph_chapter_codes } from "./bible_glyph_chapter_codes.mjs";
import { list_join } from "./list_join.mjs";
import { equal } from "./equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function bible_glyph_chapter_codes_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: the light list of picture Bible chapter codes says exactly what the chapters themselves say, in the same order.");
  ("IT GUARDS A COPY THAT EXISTS FOR A MEASURED REASON. ",
    fn_name("bible_glyph_chapter_codes"),
    " is twenty five words standing in for four hundred and forty KiB of verses, so that a page can ask whether a chapter is drawn without downloading it. The saving is real and the copy is the price of it; this is what stops the price being paid in silence.");
  ("A COPY DRIFTS IN THE DIRECTION NOBODY WATCHES. Writing a new chapter is writing a chapter file and adding it to the built list, and nothing about that reminds anybody of a second list somewhere else. So the new chapter is written, drawn and readable, and the reader next door goes on saying it does not exist.");
  ("IT COMPARES THE WHOLE LIST AS ONE WORD rather than counting or sampling. Two lists of the same length in different orders are a real mistake here - the order is the reading order the page offers - and a count cannot see it.");
  ("THE HINT CARRIES THE LIST TO PASTE, because nothing in the copy is authored: every code in it is already spelled in a chapter file, so the correct answer is always known and the repair is never a judgement.");
  let chapters = bible_glyph_chapters();
  let read = list_size(chapters);
  assert_json(read, {
    hint: "no chapter was read at all, and this Bible has chapters written - the walk has stopped reaching them, so the copy is being passed without being compared to anything",
  });
  let ordered = bible_glyph_chapters_canon_order(chapters);
  let wanted = list_map_property(ordered, "chapter_code");
  let held = bible_glyph_chapter_codes();
  let wanted_text = list_join(wanted, ",");
  let held_text = list_join(held, ",");
  let same = equal(wanted_text, held_text);
  let f_name = fn_name("bible_glyph_chapter_codes");
  assert_json(same, {
    wanted,
    held,
    hint: text_combine_multiple([
      "the light list of chapter codes has drifted from the chapters themselves - a chapter was written, or renamed, and only one of the two lists heard about it. Put the codes under wanted into ",
      f_name,
      ", in that order, and nothing else needs deciding",
    ]),
  });
  let r = {
    codes: read,
  };
  return r;
}
