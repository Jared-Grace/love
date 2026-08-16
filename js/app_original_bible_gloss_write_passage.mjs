import { gloss_passages_verses_key_find } from "./gloss_passages_verses_key_find.mjs";
import { bible_strong_chapter_tallies_cache } from "./bible_strong_chapter_tallies_cache.mjs";
import { gloss_words_occurrence_added } from "./gloss_words_occurrence_added.mjs";
import { gloss_words_parsing_sentence_added } from "./gloss_words_parsing_sentence_added.mjs";
import { gloss_words_lexicon_added } from "./gloss_words_lexicon_added.mjs";
import { list_find_property_get } from "./list_find_property_get.mjs";
import { list_map_index_async } from "./list_map_index_async.mjs";
import { app_original_bible_gloss_passages } from "./app_original_bible_gloss_passages.mjs";
import { bible_interlinear_chapters_words_cache } from "./bible_interlinear_chapters_words_cache.mjs";
import { gloss_write_file_path } from "./gloss_write_file_path.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { property_get } from "./property_get.mjs";
export async function app_original_bible_gloss_write_passage(
  chapter_code,
  verse_key,
) {
  "Everything needed to author one named passage: its English wording, and each of its verses with every original-language word already parsed, said in plain English, counted for rarity, and looked up in the lexicon.";
  "$plain chapter_code";
  "$plain verse_key";
  "both name text to read: a chapter of the Bible, and the verses one passage of it covers. Neither names anything that runs.";
  "The passage is named rather than found, which is what lets a passage that already carries explanations be authored again. Everything asked for here is read out of the text and the tables, so it says nothing about whether the passage has been written before and is the same hand-off either way.";
  "That matters because the first chapters were generated rather than authored, and generated content cannot be repaired in place - an explanation that names a case the parsing does not give is wrong from its first word, not in one clause of it. Until this existed the only hand-off was the one that finds the next unwritten passage, so a written passage could be overwritten but not read for.";
  let passages = await app_original_bible_gloss_passages(chapter_code);
  let passage = gloss_passages_verses_key_find(passages, verse_key);
  ("The parsed words come from the kept copy. This is asked once per passage authored, so a chapter of twenty-two passages walks the whole table twenty-two times over without it - which is the case the kept copy was written for. Reading a passage to explain it consumes the text and settles nothing about it, so a kept copy is the right thing to read here, unlike the paths that publish the text.");
  let chapters = await bible_interlinear_chapters_words_cache();
  let verses_interlinear = property_get(chapters, chapter_code);
  let verse_numbers = property_get(passage, "verse_numbers");
  let originals = property_get(passage, "originals");
  let tallies = await bible_strong_chapter_tallies_cache();
  async function verse_read(verse_number, index) {
    let property_name = verse_number_key();
    let found = list_find_property_get(
      verses_interlinear,
      property_name,
      verse_number,
      "words",
    );
    let counted = gloss_words_occurrence_added(tallies, chapter_code, found);
    let said = gloss_words_parsing_sentence_added(counted);
    let words = await gloss_words_lexicon_added(chapter_code, said);
    let original = originals[index];
    let r = {
      verse_number,
      original,
      words,
    };
    return r;
  }
  let verses = await list_map_index_async(verse_numbers, verse_read);
  let file = gloss_write_file_path(chapter_code, verse_key);
  let r2 = {
    chapter_code,
    verse_key,
    file,
    texts: property_get(passage, "texts"),
    verses,
  };
  return r2;
}
