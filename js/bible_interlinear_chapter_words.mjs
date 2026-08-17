import { fn_name } from "./fn_name.mjs";
import { bible_interlinear_chapters_words_cache } from "./bible_interlinear_chapters_words_cache.mjs";
import { property_exists } from "./property_exists.mjs";
import { assert_json } from "./assert_json.mjs";
import { property_get } from "./property_get.mjs";
export async function bible_interlinear_chapter_words(chapter_code) {
  "$plain chapter_code";
  "the code names one chapter, spelled as the chapter codes spell it. It names a stretch of text to read and nothing that runs.";
  "One chapter's verses with their ordered per-word interlinear records: the word, its transliteration, its parsing, and its Strong's number.";
  ("This is the whole-Bible walk asked for one chapter. ",
    fn_name("bible_interlinear_chapters_words"),
    " answers with every chapter at once, which is seventy-seven megabytes, and a person authoring one chapter wants one chapter. The walk is cached, so asking for one chapter costs the same as asking for all of them and returns something a person can actually read.");
  ("An unknown chapter code is refused rather than answered with nothing, because nothing looks exactly like a chapter with no words in it, and a misspelled code would then read as a chapter the Bible does not contain.");
  let chapters = await bible_interlinear_chapters_words_cache();
  let known = property_exists(chapters, chapter_code);
  assert_json(known, {
    chapter_code,
    hint: "no chapter answers to that code - the codes are three letters of the book and two digits of the chapter, so first John four is 1JN04",
  });
  let verses = property_get(chapters, chapter_code);
  return verses;
}
