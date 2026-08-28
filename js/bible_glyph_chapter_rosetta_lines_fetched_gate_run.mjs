import { list_size } from "./list_size.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapter_references } from "./bible_glyph_chapter_references.mjs";
import { bible_glyph_chapter_rosetta_lines_fetched } from "./bible_glyph_chapter_rosetta_lines_fetched.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { assert_json } from "./assert_json.mjs";
export async function bible_glyph_chapter_rosetta_lines_fetched_gate_run() {
  arguments_assert(arguments, 0);
  ("Every chapter's written-out Rosetta bands are sent for by code, and what comes back says it is the chapter that was asked for.");
  ("IT ASKS RATHER THAN READS, and that is the whole difference between this and a gate that compares two lists of names. Each address is spelled out by hand in the fetching, so the fault to catch is one code wired to another chapter's file - and no side-by-side reading of the addresses can see that, because both sides would be spelled correctly and simply be paired wrong.");
  ("A code with no file behind it is caught by the fetching itself, which refuses rather than answers with nothing, so this walk turns that into a failing gate instead of a silent absence.");
  let references = bible_glyph_chapter_references();
  let wrong = [];
  for (let chapter of references) {
    let chapter_code = chapter.chapter_code;
    let lines = await bible_glyph_chapter_rosetta_lines_fetched(chapter_code);
    let same = equal(lines.chapter_code, chapter_code);
    if (same) {
      continue;
    }
    list_add(wrong, {
      asked_for: chapter_code,
      came_back: lines.chapter_code,
    });
  }
  let clean = list_empty_is(wrong);
  let f_name = fn_name("bible_glyph_chapter_rosetta_lines_fetched");
  assert_json(clean, {
    wrong,
    hint: text_combine_multiple([
      "a chapter code is wired to another chapter's Rosetta bands in ",
      f_name,
      " - correct the address beside that code",
    ]),
  });
  let read = list_size(references);
  let r = {
    fetched: read,
  };
  return r;
}
