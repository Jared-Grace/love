import { each } from "./each.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { list_add } from "./list_add.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function gloss_chapter_passages_asked_generic(
  chapter_code,
  fn,
  lambda_passage,
) {
  "Ask one question of every passage of an authored gloss chapter, and answer with what each passage said, leaving out the ones that said nothing.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "Mending a chapter is done a passage at a time, so what is wanted before starting is which passages need mending - a single answer for the chapter says how long the work is without saying where any of it is.";
  "The words of a passage and the verses it covers are handed over together, because every question worth asking here is about the words and every answer worth keeping has to say which verses to open to reach them.";
  "A passage with nothing to say answers with nothing at all rather than with an empty saying, so what comes back is the work and not the chapter. Deciding that here would mean deciding what empty looks like, and a count and a list are empty in different ways.";
  "A chapter nobody has authored comes back as no work rather than as an error, so a store read for a question it has no chapters for answers quietly.";
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
    let verses = g_sermon_passage_verses_key(passage);
    let saying = lambda_passage(entries, verses);
    if (null_is(saying)) {
      return;
    }
    list_add(found, saying);
  }
  each(passages, passage_read);
  return found;
}
