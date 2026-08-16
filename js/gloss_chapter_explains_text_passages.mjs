import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { gloss_entries_explains_text_count } from "./gloss_entries_explains_text_count.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { each } from "./each.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export async function gloss_chapter_explains_text_passages(
  chapter_code,
  fn,
  text,
) {
  "Every passage of one authored gloss chapter whose word explanations say a named piece of text, each named by the verses it covers and by how many of its explanations say it.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "$plain text";
  "the text is a run of letters to look for. It names words to read and nothing that runs.";
  "Mending a chapter's wording is done a passage at a time, so what is wanted before starting is which passages need mending and how much is in each - a single count for the chapter says how long the work is without saying where any of it is.";
  "Passages saying it nowhere are left out rather than listed at nothing, so what comes back is the work and not the chapter.";
  let path = local_function_path_json(chapter_code, fn);
  let exists = await file_exists(path);
  if (not(exists)) {
    let unwritten = [];
    return unwritten;
  }
  let chapter = await file_read_json(path);
  let passages = property_get(chapter, "passages");
  let found = [];
  function passage_read(passage) {
    let entries = gloss_passage_entries(passage);
    let count = gloss_entries_explains_text_count(entries, text);
    let some = greater_than(count, 0);
    if (not(some)) {
      return;
    }
    let verses = g_sermon_passage_verses_key(passage);
    let saying = {
      verses,
      count,
    };
    list_add(found, saying);
  }
  each(passages, passage_read);
  return found;
}
