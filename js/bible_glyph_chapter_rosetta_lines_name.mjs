import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
export function bible_glyph_chapter_rosetta_lines_name(chapter_code) {
  "$plain chapter_code";
  "the code names one chapter. It names a stretch of text and nothing that runs.";
  arguments_assert(arguments, 1);
  ("What the function holding one chapter's written-out Rosetta bands is called, worked out from the chapter's code alone.");
  ("It is said here rather than at each of the two places that need it - the one that writes the file and the one that asks whether the file is there yet - because those two must agree exactly or the writer keeps rewriting a chapter the asker keeps calling missing.");
  ("The code is lower-cased and nothing else, which is how every other function named after a chapter here is spelled.");
  let code_lower = text_lower_to(chapter_code);
  let f_name = "bible_glyph_chapter_rosetta_lines_" + code_lower;
  return f_name;
}
