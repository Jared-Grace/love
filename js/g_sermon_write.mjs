import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
export async function g_sermon_write(chapter_code, verse_numbers, lines) {
  let path = local_function_path_json(chapter_code, g_sermon_write);
  let exists = await file_exists(path);
  let chapter = exists
    ? await file_read_json(path)
    : { chapter_code, passages: [] };
  let passages = property_get(chapter, "passages");
  let key = list_join_comma(verse_numbers);
  function passage_other(passage) {
    return g_sermon_passage_verses_key(passage) !== key;
  }
  let others = list_filter(passages, passage_other);
  list_add(others, { verse_numbers, lines });
  await file_overwrite_uncached(path, json_format_to({ chapter_code, passages: others }));
  return path;
}
