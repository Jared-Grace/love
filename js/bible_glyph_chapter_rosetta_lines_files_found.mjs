import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapter_references } from "./bible_glyph_chapter_references.mjs";
import { repo_love_functions_names } from "./repo_love_functions_names.mjs";
import { bible_glyph_chapter_rosetta_lines_name } from "./bible_glyph_chapter_rosetta_lines_name.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_chapter_rosetta_lines_files_found() {
  arguments_assert(arguments, 0);
  ("Which of the picture Bible's chapters have had their two Rosetta bands written out to a file of their own, and which have not - the ones present come back with the name of the file holding them, the ones absent as bare chapter codes.");
  ("THE NAME IS ASKED FOR RATHER THAN SPELLED, from ",
    fn_name("bible_glyph_chapter_rosetta_lines_name"),
    ", which is the same naming the writer uses. A reading that built the name itself would agree with the writer on the day it was written and would quietly stop agreeing the day the naming changed - and it would fail by finding nothing at all, which reads exactly like a picture Bible with no bands written yet.");
  ("PRESENT AND ABSENT COME BACK TOGETHER because every caller wants both. Asking is one walk over the chapter list, and a caller handed only the present ones has no way to say how many it did not look at - which is the number that tells a passing verdict apart from a reading that broke.");
  ("A FILE IS COUNTED PRESENT BECAUSE THE REPO ANSWERS TO ITS NAME, not because it opened. Whether it opens, and what it says when it does, is the business of whoever asked; here it would mean reading every chapter's file to answer a question about which files exist.");
  let references = bible_glyph_chapter_references();
  let names_all = await repo_love_functions_names();
  let present = [];
  let absent = [];
  for (let reference of references) {
    let chapter_code = reference.chapter_code;
    let name = bible_glyph_chapter_rosetta_lines_name(chapter_code);
    let known = list_includes(names_all, name);
    if (not(known)) {
      list_add(absent, chapter_code);
      continue;
    }
    list_add(present, {
      chapter_code,
      name,
    });
  }
  let r = {
    present,
    absent,
  };
  return r;
}
