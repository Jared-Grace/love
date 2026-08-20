import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapters_rosetta_lines } from "./bible_glyph_chapters_rosetta_lines.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { not_equal } from "./not_equal.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function bible_glyph_chapter_rosetta_lines(chapter_code) {
  "$plain chapter_code";
  "the code names one chapter. It names a stretch of text and nothing that runs.";
  arguments_assert(arguments, 1);
  "One chapter's two known Rosetta bands: for each verse the same verse in the language it was written in, and word for word in English.";
  "IT IS A PLAIN READ AND NOTHING ELSE. The lines were worked out once, at authoring time, and written into a function of their own; this asks that function and hands over what it says. That is the whole point of the arrangement - a browser reads Bible text without reaching for the machinery that produced it.";
  "An unknown chapter code is refused rather than answered with nothing, because a chapter whose bands have not been written yet and a chapter code that was misspelled would otherwise look identical.";
  let chapters = bible_glyph_chapters_rosetta_lines();
  let found = list_find_property(chapters, "chapter_code", chapter_code);
  let b = not_equal(found, null);
  let f_name = fn_name("bible_glyph_chapters_rosetta_lines_write");
  assert_json(b, {
    chapter_code,
    hint: text_combine_multiple([
      "no picture Bible chapter has its Rosetta bands written out under that code - run ",
      f_name,
      " to write the ones that are missing",
    ]),
  });
  return found;
}
