import { list_map_index } from "./list_map_index.mjs";
import { app_original_bible_gloss_passages } from "./app_original_bible_gloss_passages.mjs";
import { app_original_bible_gloss_write_coverage } from "./app_original_bible_gloss_write_coverage.mjs";
import { bible_interlinear_chapters_words } from "./bible_interlinear_chapters_words.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { gloss_write_file_path } from "./gloss_write_file_path.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { list_find } from "./list_find.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { list_first } from "./list_first.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
export async function app_original_bible_gloss_write_next(chapter_code) {
  "Everything needed to author the next passage of a chapter that has no word explanations yet: its English wording, and each of its verses with every original-language word already parsed.";
  "The parsing, the transliteration and the Strong's number are handed over rather than worked out, so an explanation says what a form is doing in its clause and never has to decide what the form is. The rubric for what an explanation owes the reader is notes/gloss_method.md.";
  "It also answers with the file to write the explanations into, because that name is a convention and a convention nobody can see is a convention nobody can follow.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names text to read and nothing that runs.";
  let coverage = await app_original_bible_gloss_write_coverage(chapter_code);
  let missing = property_get(coverage, "missing");
  if (list_empty_is(missing)) {
    let finished = {
      chapter_code,
      remaining: 0,
      verse_key: null,
    };
    return finished;
  }
  let verse_key = list_first(missing);
  let passages = await app_original_bible_gloss_passages(chapter_code);
  function matches(candidate) {
    let left = g_sermon_passage_verses_key(candidate);
    let eq = equal(left, verse_key);
    return eq;
  }
  let passage = list_find(passages, matches);
  let chapters = await bible_interlinear_chapters_words();
  let verses_interlinear = property_get(chapters, chapter_code);
  let verse_numbers = property_get(passage, "verse_numbers");
  let originals = property_get(passage, "originals");
  function verse_read(verse_number, index) {
    let property_name = verse_number_key();
    let verse = list_find_property(
      verses_interlinear,
      property_name,
      verse_number,
    );
    let words = property_get(verse, "words");
    let original = originals[index];
    let r = {
      verse_number,
      original,
      words,
    };
    return r;
  }
  let verses = list_map_index(verse_numbers, verse_read);
  let file = gloss_write_file_path(chapter_code, verse_key);
  let r2 = {
    chapter_code,
    verse_key,
    remaining: list_size(missing),
    file,
    texts: property_get(passage, "texts"),
    verses,
  };
  return r2;
}
