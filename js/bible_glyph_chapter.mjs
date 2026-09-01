import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { bible_glyph_chapter_parse } from "./bible_glyph_chapter_parse.mjs";
export function bible_glyph_chapter(chapter_code) {
  "$plain chapter_code";
  "the code names one chapter, spelled as the chapter codes spell it. It names a chapter to look up and nothing that runs.";
  "One picture Bible chapter with every word already parsed out of the shorthand, which is the form everything downstream reads.";
  ("IT FINDS THE CHAPTER IN THE WHOLE BIBLE, which means whoever calls it is holding every chapter there is whether they wanted them or not. That is right for a program running here and wrong for a page on a phone, and ",
    fn_name("bible_glyph_chapter_fetched"),
    " is the same answer reached the other way for that reason.");
  ("The parsing itself is not here. It is ",
    fn_name("bible_glyph_chapter_parse"),
    ", shared with the fetching way in, because there are two ways to arrive at a stored chapter and there must go on being one answer to what the shorthand means.");
  ("An unknown chapter code is refused rather than answered with nothing, because a chapter that has not been written yet and a chapter code that was misspelled would otherwise look identical.");
  let chapters = bible_glyph_chapters();
  let found = null;
  for (let chapter of chapters) {
    let same = equal(chapter.chapter_code, chapter_code);
    if (same) {
      found = chapter;
    }
  }
  let b = not_equal(found, null);
  let f_name = fn_name("bible_glyph_chapters");
  assert_json(b, {
    chapter_code,
    hint: text_combine_multiple([
      "no picture Bible chapter answers to that code yet - ask ",
      f_name,
      " for the ones that have been written",
    ]),
  });
  let chapter_parsed = bible_glyph_chapter_parse(found);
  return chapter_parsed;
}
