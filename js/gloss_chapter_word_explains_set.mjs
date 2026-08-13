import { file_exists } from "./file_exists.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { gloss_passage_word_explains_set } from "./gloss_passage_word_explains_set.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { each } from "./each.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export async function gloss_chapter_word_explains_set(
  chapter_code,
  fn,
  explains,
) {
  "Give every explanation in one authored gloss chapter that is about a named word the wording written for that word, and answer with the words it rewrote.";
  "$plain chapter_code";
  "the code is a chapter's name, like JAS02, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "A chapter nobody has authored yet answers with nothing, so a sweep crosses the gaps without being told where they are. A chapter holding none of the words is left on disk exactly as it was found, rather than being written back out unchanged - a store this size is read by other people at the same time, and a file whose bytes did not need to move should not move.";
  let path = local_function_path_json(chapter_code, fn);
  let exists = await file_exists(path);
  if (not(exists)) {
    let none = [];
    return none;
  }
  let chapter = await file_read_json(path);
  let passages = property_get(chapter, "passages");
  let changes = [];
  function passage_set(passage) {
    let changed = gloss_passage_word_explains_set(passage, explains);
    list_add_multiple(changes, changed);
  }
  each(passages, passage_set);
  let none_changed = list_empty_is(changes);
  if (none_changed) {
    return changes;
  }
  let contents = json_format_to(chapter);
  await file_overwrite_uncached(path, contents);
  return changes;
}
