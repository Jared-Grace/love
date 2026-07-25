import { not } from "./not.mjs";
import { g_sermon_groups_validate } from "./g_sermon_groups_validate.mjs";
import { bible_data_path } from "./bible_data_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { property_get } from "./property_get.mjs";
import { json_to } from "./json_to.mjs";
export async function g_sermon_groups_write(chapter, groups) {
  "validate a chapter's proposed grouping, then store it as {chapter_code, groups}; refuses (throws) on an invalid grouping so a bad grouping never persists";
  let result = await g_sermon_groups_validate(chapter, groups);
  let ok = property_get(result, "ok");
  if (not(ok)) {
    let errors = property_get(result, "errors");
    let joined = json_to(errors);
    throw new Error(joined);
  }
  let path = bible_data_path(chapter, "groups");
  let data = {
    chapter_code: chapter,
    groups,
  };
  await file_overwrite_json(path, data);
  return data;
}
