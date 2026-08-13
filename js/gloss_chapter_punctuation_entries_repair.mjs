import { gloss_passage_punctuation_entries_repair } from "./gloss_passage_punctuation_entries_repair.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
import { add } from "./add.mjs";
export async function gloss_chapter_punctuation_entries_repair(
  chapter_code,
  fn,
) {
  "Drop every explanation in one authored gloss chapter that explains a mark rather than a word, and answer with how many were dropped.";
  "The whole chapter is written back out whether or not anything was dropped, so a chapter that was already clean comes back with nothing removed and a file that reads the same.";
  "$plain chapter_code";
  "the code is a chapter's name, like JAS01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  let path = local_function_path_json(chapter_code, fn);
  let chapter = await file_read_json(path);
  let passages = property_get(chapter, "passages");
  let removed = 0;
  function passage_read(passage) {
    let count = gloss_passage_punctuation_entries_repair(passage);
    removed = add(removed, count);
  }
  each(passages, passage_read);
  let contents = json_format_to(chapter);
  await file_overwrite_uncached(path, contents);
  let r = {
    chapter_code,
    path,
    removed,
  };
  return r;
}
