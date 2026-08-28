import { property_get } from "./property_get.mjs";
import { bible_glyph_chapter_rosetta_lines_fetched_known } from "./bible_glyph_chapter_rosetta_lines_fetched_known.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function bible_glyph_chapter_rosetta_lines_fetched(chapter_code) {
  "$plain chapter_code";
  "the code names one chapter. It names a stretch of text and nothing that runs.";
  arguments_assert(arguments, 1);
  let r = await bible_glyph_chapter_rosetta_lines_fetched_known(chapter_code);
  let known = property_get(r, "known");
  let found = property_get(r, "found");
  let f_name = fn_name("bible_glyph_chapters_rosetta_lines_write");
  assert_json(known, {
    chapter_code,
    hint: text_combine_multiple([
      "no picture Bible chapter has its Rosetta bands written out under that code - run ",
      f_name,
      " to write the ones that are missing",
    ]),
  });
  return found;
}
