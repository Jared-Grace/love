import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapter_references } from "./bible_glyph_chapter_references.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { bible_glyph_chapter_rosetta_lines_fetched } from "./bible_glyph_chapter_rosetta_lines_fetched.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_glyph_chapter_rosetta_lines_fetched_gate_run() {
  arguments_assert(arguments, 0);
  ("Every chapter's written-out Rosetta bands are sent for by code, and what comes back says it is the chapter that was asked for.");
  ("IT ASKS RATHER THAN READS, and that is the whole difference between this and a gate that compares two lists of names. Each address is spelled out by hand in the fetching, so the fault to catch is one code wired to another chapter's file - and no side-by-side reading of the addresses can see that, because both sides would be spelled correctly and simply be paired wrong.");
  ("A code with no file behind it is caught by the fetching itself, which refuses rather than answers with nothing, so this walk turns that into a failing gate instead of a silent absence.");
  ("THE REFUSAL IS CAUGHT HERE RATHER THAN LET OUT, WHICH IS A CHANGE OF HOW AND NOT OF WHETHER. A refusal let out still failed the gate, so the line above stayed true - but it ended the walk where it happened, and the gate then reported one chapter and asked about nothing after it. Measured on the first of September 2026 exactly one chapter is missing its bands and it happens to be first in the list, so the escaping refusal named the right chapter by luck. A chapter missing further down would have been reported alone, with every chapter after it never asked.");
  ("THE OFFENDERS ARE WRITTEN UNDER list AND EACH ONE NAMES THE FUNCTION AT FAULT. A red gate whose complaint names nobody cannot be shown to be about code some app does not carry, so it holds EVERY app out of a deployment - and a refusal thrown from inside the fetching wrote a record with no list in it at all, which reads as naming nobody. Naming ",
    fn_name("bible_glyph_chapter_rosetta_lines_fetched"),
    " holds out the apps that reach it and lets the rest past.");
  ("The chapter code sits beside the name rather than instead of it: the code is what a person needs to repair this, and the function name is what the deployment reader needs to place it. A code alone reads to that reader as naming nobody.");
  let references = bible_glyph_chapter_references();
  let f_name = fn_name("bible_glyph_chapter_rosetta_lines_fetched");
  let wrong = [];
  for (let chapter of references) {
    let chapter_code = chapter.chapter_code;
    async function bands_sent_for() {
      let got = await bible_glyph_chapter_rosetta_lines_fetched(chapter_code);
      return got;
    }
    let lines = await catch_null_async(bands_sent_for);
    let refused = null_is(lines);
    if (refused) {
      list_add(wrong, {
        fn: f_name,
        asked_for: chapter_code,
        refused: true,
      });
      continue;
    }
    let same = equal(lines.chapter_code, chapter_code);
    if (same) {
      continue;
    }
    list_add(wrong, {
      fn: f_name,
      asked_for: chapter_code,
      came_back: lines.chapter_code,
    });
  }
  let clean = list_empty_is(wrong);
  let f_name2 = fn_name("bible_glyph_chapters_rosetta_lines_write");
  assert_json(clean, {
    list: wrong,
    hint: text_combine_multiple([
      "a chapter's Rosetta bands are either missing or wired to another chapter, in ",
      f_name,
      ". A line saying refused is a code with no bands written behind it - run ",
      f_name2,
      " to write the ones that are missing. A line saying came_back is a code wired to that other chapter's bands - correct the address beside the asked_for code",
    ]),
  });
  let read = list_size(references);
  let r = {
    fetched: read,
  };
  return r;
}
