import { gloss_passage_words_respell } from "./gloss_passage_words_respell.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { each } from "./each.mjs";
export async function gloss_chapter_words_respell(
  chapter_code,
  fn,
  words_read,
) {
  "Give every explanation in one authored gloss chapter the passage's own spelling of the word it is about, and answer with the spellings it changed.";
  "The whole chapter is written back out whether or not anything changed, so a chapter already spelt right comes back with nothing listed and a file that reads the same.";
  "$plain chapter_code";
  "the code is a chapter's name, like JAS02, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  let path = local_function_path_json(chapter_code, fn);
  let chapter = await file_read_json(path);
  let passages = property_get(chapter, "passages");
  let changes = [];
  function passage_read(passage) {
    let changed = gloss_passage_words_respell(passage, words_read);
    list_add_multiple(changes, changed);
  }
  each(passages, passage_read);
  let contents = json_format_to(chapter);
  await file_overwrite_uncached(path, contents);
  let r = {
    chapter_code,
    path,
    changes,
  };
  return r;
}
