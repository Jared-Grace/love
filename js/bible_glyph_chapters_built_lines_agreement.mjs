import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapter_codes } from "./bible_glyph_chapter_codes.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { bible_glyph_chapter_built } from "./bible_glyph_chapter_built.mjs";
import { bible_glyph_chapter_rosetta_lines_fetched } from "./bible_glyph_chapter_rosetta_lines_fetched.mjs";
import { add } from "./add.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
export async function bible_glyph_chapters_built_lines_agreement() {
  arguments_assert(arguments, 0);
  ("How far the original and English lines a built chapter keeps agree with the lines written out beside the hand chapters, verse by verse, over every chapter that has both.");
  ("It exists to answer one question before the written-out lines are retired: does the built chapter say the same thing under every verse the key shows today. A verse is counted the same only when BOTH lines are equal as text; every other verse is listed by chapter, verse and which line differs, so a difference is read rather than counted.");
  ("The built lines come from ",
    fn_name("bible_glyph_chapter_built"),
    " and the written-out ones from ",
    fn_name("bible_glyph_chapter_rosetta_lines_fetched"),
    ".");
  let codes = bible_glyph_chapter_codes();
  let property_name = verse_number_key();
  let verses_written = 0;
  let same = 0;
  let missing = [];
  let differ = [];
  for (let chapter_code of codes) {
    let built = await bible_glyph_chapter_built(chapter_code);
    let lines = await bible_glyph_chapter_rosetta_lines_fetched(chapter_code);
    for (let written of lines.verses) {
      verses_written = add(verses_written, 1);
      let verse_number = written.verse_number;
      let found = list_find_property_or_null(
        built.verses,
        property_name,
        verse_number,
      );
      if (null_is(found)) {
        list_add(missing, {
          chapter_code,
          verse_number,
        });
        continue;
      }
      let original_same = equal(found.original, written.original);
      let english_same = equal(found.english, written.english);
      if (original_same && english_same) {
        same = add(same, 1);
        continue;
      }
      list_add(differ, {
        chapter_code,
        verse_number,
        original_same,
        english_same,
      });
    }
  }
  let r = {
    chapters: codes.length,
    verses_written,
    same,
    missing,
    differ,
  };
  return r;
}
