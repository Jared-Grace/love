import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapter_rosetta_lines_name } from "./bible_glyph_chapter_rosetta_lines_name.mjs";
import { function_exists } from "./function_exists.mjs";
import { property_get } from "./property_get.mjs";
import { assert_json } from "./assert_json.mjs";
import { bible_glyph_chapters_rosetta_lines } from "./bible_glyph_chapters_rosetta_lines.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { file_text_replace_once } from "./file_text_replace_once.mjs";
import { function_auto_checked } from "./function_auto_checked.mjs";
export async function bible_glyph_chapters_rosetta_lines_name_add(
  chapter_code,
) {
  "$plain chapter_code";
  "the code names one chapter. It names a stretch of text and nothing that runs.";
  arguments_assert(arguments, 1);
  ("Names one chapter's already-written Rosetta band file in the list the page reads, which is the step between writing a band and a reader ever seeing it.");
  ("IT IS THE HALF OF ADDING A CHAPTER THAT WAS ONLY EVER DONE BY HAND, and the half that was skipped twelve times running. Writing the band leaves a file; nothing reads a file nobody names, so twelve bands sat committed and unreachable and the only symptom was a blank panel. A gate catches that now, which is what makes the drift visible - it does not make it not happen, because the repair was still three text edits somebody had to get right.");
  ("IT REFUSES A CHAPTER WHOSE BAND IS NOT THERE YET rather than naming it hopefully. The name would be added, the canonical pass would write an import for a file that does not exist, and the list would stop loading at all - which takes the page down rather than leaving one band missing. A step that can only run after another step should say so instead of finding out.");
  ("RUN TWICE IT DOES NOTHING AND SAYS SO. The list is read first and a chapter already in it is left alone, so this is safe inside a repair that cannot know how much of its work was already done.");
  ("THE LOCAL IS NAMED AFTER THE CHAPTER AND NOT AFTER ITS POSITION. The list was numbered by hand up to twenty three, and a number has to be counted before it can be chosen, is wrong the moment two of these run against the same file, and says nothing to a reader about which chapter it holds. The code cannot collide because the list cannot hold a chapter twice.");
  let f_name = bible_glyph_chapter_rosetta_lines_name(chapter_code);
  let band = await function_exists(f_name);
  let band_there = property_get(band, "exists");
  assert_json(band_there, {
    chapter_code,
    f_name,
    hint: "this chapter has no written Rosetta band file to name, so naming it would leave the list importing a file that is not there and nothing would load at all - write the band first",
  });
  let banded = bible_glyph_chapters_rosetta_lines();
  let codes = [];
  for (let chapter of banded) {
    let code = property_get(chapter, "chapter_code");
    list_add(codes, code);
  }
  let already = list_includes(codes, chapter_code);
  if (already) {
    let untouched = {
      chapter_code,
      f_name,
      added: false,
    };
    return untouched;
  }
  let list_name = fn_name("bible_glyph_chapters_rosetta_lines");
  let found = await function_exists(list_name);
  let f_path = property_get(found, "f_path");
  let code_lower = text_lower_to(chapter_code);
  let local = text_combine("chapter_", code_lower);
  let binding_anchor = "  let chapters = [";
  let binding = text_combine_multiple([
    "  let ",
    local,
    " = ",
    f_name,
    "();\n",
    binding_anchor,
  ]);
  await file_text_replace_once(f_path, binding_anchor, binding);
  let list_anchor = "  ];\n  return chapters;";
  let entry = text_combine_multiple(["    ", local, ",\n", list_anchor]);
  await file_text_replace_once(f_path, list_anchor, entry);
  ("THE IMPORT IS LEFT TO THE CANONICAL PASS, which is the one part of this that is not a text edit. A name written into a body with nothing importing it is exactly what that pass exists to repair, and asking it here rather than leaving it to the next person is what keeps the file loadable between this commit and the next one.");
  let auto = await function_auto_checked(list_name);
  let ok = property_get(auto, "ok");
  assert_json(ok, {
    auto,
    hint: "the list was edited and then would not canonicalize, so it is left in a state that may not load - read the file before doing anything else",
  });
  let r = {
    chapter_code,
    f_name,
    local,
    added: true,
  };
  return r;
}
