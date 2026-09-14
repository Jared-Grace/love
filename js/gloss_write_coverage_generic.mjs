import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { list_flat } from "./list_flat.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_all } from "./list_all.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_write_coverage_generic(
  chapter_code,
  fn,
  passages_read,
) {
  "Which of a chapter's passages already carry authored word explanations in one gloss store and which are still waiting, named by the verses each one covers.";
  "A passage counts as written only when its explanations are there and can be read back, so a file left half-written shows up as waiting rather than as done, and the next sitting picks it up instead of stepping over it.";
  "How a chapter is divided into passages is asked for rather than assumed, because a store glossing the original language and a store glossing a translation cut the same chapter by different bibles. Which store to read is asked for the same way.";
  "A PASSAGE IS DONE WHEN EVERY VERSE IN IT IS COVERED, not when a stored passage carries the same verses, added 2026-09-14. Where a chapter is cut depends on which verses are read as finishing a sentence, and that reading was widened on 2026-09-05 to see past more closing marks. Chapters authored before then were stored cut coarser - verses seven to nine as one passage - and asked by the new cut for verse seven alone, a whole-passage match found nothing and reported seventy-four finished New Testament chapters as waiting. Authoring the passages it named would have explained the same verses twice.";
  "This answers what is still waiting and fails nothing. Completeness is a report and never a gate: material is authored over weeks, so a gate over it would be red for months by design and would stop every app deploying for as long as one chapter was unfinished.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names text to read and nothing that runs.";
  let passages = await passages_read(chapter_code);
  let path = local_function_path_json(chapter_code, fn);
  let exists = await file_exists(path);
  let covered = [];
  if (exists) {
    let chapter = await file_read_json(path);
    let stored = property_get(chapter, "passages");
    function entries_present_is(passage) {
      let entries = gloss_passage_entries(passage);
      let present = list_empty_not_is(entries);
      return present;
    }
    let authored = list_filter(stored, entries_present_is);
    function verse_numbers_get(passage) {
      let verse_numbers = property_get(passage, "verse_numbers");
      return verse_numbers;
    }
    let nested = list_map(authored, verse_numbers_get);
    covered = list_flat(nested);
  }
  function covered_is(verse_number) {
    let included = list_includes(covered, verse_number);
    return included;
  }
  function written_is(passage) {
    let verse_numbers = property_get(passage, "verse_numbers");
    let all = list_all(verse_numbers, covered_is);
    return all;
  }
  let done_passages = list_filter(passages, written_is);
  let done = list_map(done_passages, g_sermon_passage_verses_key);
  let keys = list_map(passages, g_sermon_passage_verses_key);
  function waiting_is(key) {
    let waiting = list_includes_not(done, key);
    return waiting;
  }
  let missing = list_filter(keys, waiting_is);
  let r = {
    chapter_code,
    passages: list_size(keys),
    done,
    missing,
  };
  return r;
}
