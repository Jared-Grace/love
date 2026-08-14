import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { each } from "./each.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
export async function gloss_chapter_passages_repair_generic(
  chapter_code,
  fn,
  lambda_passage,
) {
  "One authored gloss chapter with every passage of it put right, written back out, and answered for by how many explanations the putting right removed.";
  "$plain chapter_code";
  "the code is a chapter's name, like JAS01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "The whole chapter is written back out whether or not anything was dropped, so a chapter that was already clean comes back with nothing removed and a file that reads the same.";
  "The counts are added up here rather than by each repair, because a repair is handed one passage and cannot see the rest. What it answers for is its own passage; what this answers for is the file.";
  let path = local_function_path_json(chapter_code, fn);
  let chapter = await file_read_json(path);
  let passages = property_get(chapter, "passages");
  let removed = 0;
  function passage_read(passage) {
    let count = lambda_passage(passage);
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
