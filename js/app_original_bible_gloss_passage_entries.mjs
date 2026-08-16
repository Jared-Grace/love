import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { equal } from "./equal.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_single } from "./list_single.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export async function app_original_bible_gloss_passage_entries(
  chapter_code,
  verse_key,
) {
  "The word explanations already stored for one passage of the original-language gloss, or nothing where that passage has not been written yet.";
  "Saving a passage writes all of its explanations at once, so mending a single wording means handing back every other one unchanged. Reading them first is what makes that possible without retyping a passage, which is the one way a mend can quietly damage what it was not about.";
  "A chapter nobody has authored, and a passage nobody has reached inside an authored chapter, both come back as nothing rather than as an empty passage, because neither has explanations to hand back and telling them apart here would say more than the store knows.";
  "$plain chapter_code";
  "$plain verse_key";
  "both name text to read: a chapter of the Bible, and the verses a passage of it covers. Neither names anything that runs.";
  let fn = app_original_bible_gloss_generate;
  let path = local_function_path_json(chapter_code, fn);
  let exists = await file_exists(path);
  if (not(exists)) {
    let unwritten = null;
    return unwritten;
  }
  let chapter = await file_read_json(path);
  let passages = property_get(chapter, "passages");
  function matches(candidate) {
    let left = g_sermon_passage_verses_key(candidate);
    let eq = equal(left, verse_key);
    return eq;
  }
  let matched = list_filter(passages, matches);
  if (list_empty_is(matched)) {
    let unreached = null;
    return unreached;
  }
  let passage = list_single(matched);
  let entries = gloss_passage_entries(passage);
  return entries;
}
