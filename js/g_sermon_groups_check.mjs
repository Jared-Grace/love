import { g_sermon_chapter_groups } from "./g_sermon_chapter_groups.mjs";
import { g_sermon_groups_validate } from "./g_sermon_groups_validate.mjs";
export async function g_sermon_groups_check(chapter) {
  "validate the grouping stored at bible/<book>/<chapter>/groups.json in place: reads {chapter_code, groups} and checks contiguity, completeness, and the line caps";
  let groups = await g_sermon_chapter_groups(chapter);
  let result = await g_sermon_groups_validate(chapter, groups);
  return result;
}
