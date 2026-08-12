import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_add } from "./list_add.mjs";
import { not_equal } from "./not_equal.mjs";
export async function gloss_passage_write(passage, entries, fn) {
  "Save one passage's authored word explanations into a chapter's gloss store, replacing whatever that passage held before and leaving every other passage of the chapter untouched.";
  "A passage is recognised by the verse numbers it covers, so re-writing one that is already there corrects it rather than doubling it, and the chapter can be authored over as many sittings as it takes.";
  let chapter_code = property_get(passage, "chapter_code");
  let path = local_function_path_json(chapter_code, fn);
  let exists = await file_exists(path);
  let chapter = exists
    ? await file_read_json(path)
    : {
        chapter_code,
        passages: [],
      };
  let passages = property_get(chapter, "passages");
  let key = g_sermon_passage_verses_key(passage);
  function passage_other(other) {
    let left = g_sermon_passage_verses_key(other);
    let neq = not_equal(left, key);
    return neq;
  }
  let others = list_filter(passages, passage_other);
  let value = json_format_to(entries);
  object_merge_set(passage, {
    generated: value,
  });
  list_add(others, passage);
  let contents = json_format_to({
    chapter_code,
    passages: others,
  });
  await file_overwrite_uncached(path, contents);
  return path;
}
