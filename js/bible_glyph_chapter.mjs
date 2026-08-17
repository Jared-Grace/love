import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { equal } from "./equal.mjs";
import { assert_json } from "./assert_json.mjs";
import { not_equal } from "./not_equal.mjs";
import { bible_glyph_word_parse } from "./bible_glyph_word_parse.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_chapter(chapter_code) {
  "$plain chapter_code";
  "the code names one chapter, spelled as the chapter codes spell it. It names a chapter to look up and nothing that runs.";
  "One picture Bible chapter with every word already parsed out of the shorthand, which is the form everything downstream reads.";
  "This is the ONE PLACE THE SHORTHAND IS PARSED, and that is the whole reason it exists. A chapter is authored in shorthand because shorthand is what a person can type; if the shorthand were also what shipped, every reader of this Bible - including readers written later by other people - would have to write a parser, and each of them would write a slightly different one. Parsing here means a consumer receives words that are already lists and strings, which every language on earth can already read.";
  "An unknown chapter code is refused rather than answered with nothing, because a chapter that has not been written yet and a chapter code that was misspelled would otherwise look identical.";
  let chapters = bible_glyph_chapters();
  let found = null;
  for (let chapter of chapters) {
    let same = equal(chapter.chapter_code, chapter_code);
    if (same) {
      found = chapter;
    }
  }
  let b = not_equal(found, null);
  assert_json(b, {
    chapter_code,
    hint: text_combine_multiple([
      "no picture Bible chapter answers to that code yet - ask ",
      fn_name("bible_glyph_chapters"),
      " for the ones that have been written",
    ]),
  });
  let verses = [];
  for (let verse of found.verses) {
    let words = [];
    for (let word of verse.words) {
      let parsed = bible_glyph_word_parse(word);
      list_add(words, parsed);
    }
    list_add(verses, {
      verse_number: verse.verse_number,
      words,
    });
  }
  let chapter = {
    chapter_code: found.chapter_code,
    verses,
  };
  return chapter;
}
