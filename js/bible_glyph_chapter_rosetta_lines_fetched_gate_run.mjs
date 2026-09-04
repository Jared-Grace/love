import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { bible_glyph_chapter_sent_for_defects } from "./bible_glyph_chapter_sent_for_defects.mjs";
import { bible_glyph_chapter_rosetta_lines_fetched } from "./bible_glyph_chapter_rosetta_lines_fetched.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { bible_glyph_chapter_references } from "./bible_glyph_chapter_references.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_glyph_chapter_rosetta_lines_fetched_gate_run() {
  arguments_assert(arguments, 0);
  ("Every chapter's written-out Rosetta bands are sent for by code, and what comes back says it is the chapter that was asked for.");
  ("IT ASKS RATHER THAN READS, and that is the whole difference between this and a gate that compares two lists of names. Each address is spelled out by hand in the fetching, so the fault to catch is one code wired to another chapter's file - and no side-by-side reading of the addresses can see that, because both sides would be spelled correctly and simply be paired wrong.");
  ("A code with no file behind it is caught by the fetching itself, which refuses rather than answers with nothing, so this walk turns that into a failing gate instead of a silent absence.");
  ("THE SENDING AND THE CATCHING ARE NOT HERE, only the judging. They are in ",
    fn_name("bible_glyph_chapter_sent_for_defects"),
    ", along with the reason a refusal is collected rather than let out - which was a real fault in this gate until the first of September 2026, when a refusal ended the walk and every chapter after it went unasked. What is left here is the one thing that is this gate's own: what counts as a wrong answer.");
  ("WHAT COUNTS AS WRONG HERE IS NOT WHAT COUNTS AS WRONG NEXT DOOR. The bands are one function a chapter, so there is no held list to hold these against; instead what comes back is asked whether it calls itself the chapter that was asked for, which is the only question that catches a code paired with the wrong file.");
  let f_name = fn_name("bible_glyph_chapter_rosetta_lines_fetched");
  function defect_of(chapter_code, lines) {
    "what is wrong with one chapter's sent-for bands, or nothing where they call themselves the chapter that was asked for.";
    let same = equal(lines.chapter_code, chapter_code);
    if (same) {
      let none = null;
      return none;
    }
    let r = {
      fn: f_name,
      asked_for: chapter_code,
      came_back: lines.chapter_code,
    };
    return r;
  }
  let wrong = await bible_glyph_chapter_sent_for_defects(
    f_name,
    bible_glyph_chapter_rosetta_lines_fetched,
    defect_of,
  );
  let clean = list_empty_is(wrong);
  let f_name2 = fn_name("bible_glyph_chapters_rosetta_lines_write");
  assert_json(clean, {
    list: wrong,
    hint: text_combine_multiple([
      "a chapter's Rosetta bands would not come back as that chapter's from ",
      f_name,
      ". A line with a refused on it did not come at all, and the words there are the fetching's own reason - usually bands nobody has written yet, which ",
      f_name2,
      " writes. A line with a came_back on it arrived calling itself another chapter, so that code is wired to the wrong bands",
    ]),
  });
  let references = bible_glyph_chapter_references();
  let read = list_size(references);
  let r2 = {
    fetched: read,
  };
  return r2;
}
