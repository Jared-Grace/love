import { bible_data_path } from "./bible_data_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { g_sermon_groups_validate } from "./g_sermon_groups_validate.mjs";
export async function g_sermon_groups_check(chapter) {
  "validate the grouping stored at bible/<book>/<chapter>/groups.json in place: reads {chapter_code, groups} and checks contiguity, completeness, and the line caps";
  let path = bible_data_path(chapter, "groups");
  let data = await file_read_json(path);
  let groups = property_get(data, "groups");
  let result = await g_sermon_groups_validate(chapter, groups);
  return result;
}
