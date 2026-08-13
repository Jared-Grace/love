import { gloss_passage_misaligned_show } from "./gloss_passage_misaligned_show.mjs";
import { list_map_filter_null_not_is } from "./list_map_filter_null_not_is.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
export async function gloss_chapter_misaligned_show(
  chapter_code,
  fn,
  words_read,
) {
  "Every passage of one authored gloss chapter that needs explanations written back in, laid out to write them by.";
  "$plain chapter_code";
  "the code is a chapter's name, like PSA136, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  let path = local_function_path_json(chapter_code, fn);
  let chapter = await file_read_json(path);
  let passages = property_get(chapter, "passages");
  function passage_read(passage) {
    let r = gloss_passage_misaligned_show(passage, words_read);
    return r;
  }
  let shown = list_map_filter_null_not_is(passages, passage_read);
  let r2 = {
    chapter_code,
    shown,
  };
  return r2;
}
