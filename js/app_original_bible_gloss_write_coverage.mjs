import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { app_original_bible_gloss_passages } from "./app_original_bible_gloss_passages.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
export async function app_original_bible_gloss_write_coverage(chapter_code) {
  "Which of a chapter's passages already carry authored word explanations and which are still waiting, named by the verses each one covers.";
  "A passage counts as written only when its explanations are there and can be read back, so a file left half-written shows up as waiting rather than as done, and the next sitting picks it up instead of stepping over it.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names text to read and nothing that runs.";
  let passages = await app_original_bible_gloss_passages(chapter_code);
  let keys = list_map(passages, g_sermon_passage_verses_key);
  let fn = app_original_bible_gloss_generate;
  let path = local_function_path_json(chapter_code, fn);
  let exists = await file_exists(path);
  let written = [];
  if (exists) {
    let chapter = await file_read_json(path);
    let stored = property_get(chapter, "passages");
    function entries_present_is(passage) {
      let entries = gloss_passage_entries(passage);
      let empty = list_empty_is(entries);
      let present = not(empty);
      return present;
    }
    let authored = list_filter(stored, entries_present_is);
    written = list_map(authored, g_sermon_passage_verses_key);
  }
  function written_is(key) {
    let included = list_includes(written, key);
    return included;
  }
  function waiting_is(key) {
    let included = list_includes(written, key);
    let waiting = not(included);
    return waiting;
  }
  let done = list_filter(keys, written_is);
  let missing = list_filter(keys, waiting_is);
  let r = {
    chapter_code,
    passages: list_size(keys),
    done,
    missing,
  };
  return r;
}
