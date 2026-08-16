import { list_filter } from "./list_filter.mjs";
import { gloss_finding_elsewhere_empty_is } from "./gloss_finding_elsewhere_empty_is.mjs";
import { list_filter_not } from "./list_filter_not.mjs";
import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { bible_interlinear_chapters_words_cache } from "./bible_interlinear_chapters_words_cache.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { gloss_entries_parsings_exceeding } from "./gloss_entries_parsings_exceeding.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { each } from "./each.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { list_add } from "./list_add.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_find_property_get } from "./list_find_property_get.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function app_original_bible_gloss_parsings_exceeding(
  chapter_code,
) {
  "Every place in one authored chapter of the original-language gloss where an explanation names a tense, a mood or a form that the interlinear does not give the word it is explaining.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN04, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "The parsing is the one thing in a word explanation that was handed to its author instead of being worked out, so it is the one thing a reader can be held to without anybody having to know Greek. Everything else an explanation says - what a form is doing in its clause, what the word is built from, what it echoes elsewhere - is outside what this can see, and a chapter that comes back clean here has been checked on one claim and not on the rest.";
  "A chapter nobody has authored yet has nothing to look at and comes back empty, and a passage whose explanations and words will not line up is named as unlooked-at rather than counted as clean. Which passages are still waiting to be written is a separate question with its own reader.";
  "What comes back is sorted into two, and nothing is dropped out of either. A place lands under the exceeding ones when no word in its passage carries the form the explanation names, which leaves the explanation nothing to have meant; it lands under the elsewhere ones when some other word does carry it, which is what an explanation saying a word does not agree with the genitive words before it looks like from here. The second sort is far the commoner and is read by skimming; the first is short and every one of them wants an answer.";
  let fn = app_original_bible_gloss_generate;
  let path = local_function_path_json(chapter_code, fn);
  let exists = await file_exists(path);
  if (not(exists)) {
    let none = {
      chapter_code,
      passages: 0,
      exceeding: [],
      elsewhere: [],
      unpaired: [],
    };
    return none;
  }
  let chapter = await file_read_json(path);
  let passages = property_get(chapter, "passages");
  let chapters = await bible_interlinear_chapters_words_cache();
  let verses_interlinear = property_get(chapters, chapter_code);
  let exceeding = [];
  let elsewhere = [];
  let unpaired = [];
  function passage_read(passage) {
    let entries = gloss_passage_entries(passage);
    if (list_empty_is(entries)) {
      return;
    }
    let verses = g_sermon_passage_verses_key(passage);
    let verse_numbers = property_get(passage, "verse_numbers");
    let records = [];
    function verse_read(verse_number) {
      let property_name = verse_number_key();
      let words = list_find_property_get(
        verses_interlinear,
        property_name,
        verse_number,
        "words",
      );
      list_add_multiple(records, words);
    }
    each(verse_numbers, verse_read);
    let found = gloss_entries_parsings_exceeding(entries, records);
    if (null_is(found)) {
      let unlooked = {
        verses,
        explanations: list_size(entries),
        words: list_size(records),
      };
      list_add(unpaired, unlooked);
      return;
    }
    function place_add(places, findings) {
      if (list_empty_is(findings)) {
        return;
      }
      let place = {
        verses,
        findings,
      };
      list_add(places, place);
    }
    let alone = list_filter(found, gloss_finding_elsewhere_empty_is);
    let nearby = list_filter_not(found, gloss_finding_elsewhere_empty_is);
    place_add(exceeding, alone);
    place_add(elsewhere, nearby);
  }
  each(passages, passage_read);
  let r = {
    chapter_code,
    passages: list_size(passages),
    exceeding,
    elsewhere,
    unpaired,
  };
  return r;
}
