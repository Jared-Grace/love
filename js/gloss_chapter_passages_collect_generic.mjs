import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { each } from "./each.mjs";
export async function gloss_chapter_passages_collect_generic(
  chapter_code,
  fn,
  lambda_passage,
) {
  "One authored gloss chapter opened, walked passage by passage, and answered with the chapter itself, where it lives on disk, and everything the caller's reading of its passages gave back.";
  "$plain chapter_code";
  "the code is a chapter's name, like JAS02, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "A chapter nobody has authored yet answers with no chapter and nothing gathered, so a sweep crosses the gaps without being told where they are.";
  "The chapter and its path come back alongside what was gathered because a caller that changes a passage while reading it has to write the chapter out again afterwards, and it cannot do that from the gathered list alone. A caller that only reads simply ignores both.";
  "Nothing is written here. Opening a file is not deciding to change it, and a reader that had to go through a writer to look at a chapter would be one edit away from writing one out by accident.";
  let path = local_function_path_json(chapter_code, fn);
  let exists = await file_exists(path);
  let chapter = null;
  let collected = [];
  if (exists) {
    chapter = await file_read_json(path);
    let passages = property_get(chapter, "passages");
    function passage_read(passage) {
      let found = lambda_passage(passage);
      list_add_multiple(collected, found);
    }
    each(passages, passage_read);
  }
  let r = {
    chapter,
    path,
    collected,
  };
  return r;
}
