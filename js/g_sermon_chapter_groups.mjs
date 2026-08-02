import { bible_data_path } from "./bible_data_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
export async function g_sermon_chapter_groups(chapter) {
  "the passage grouping stored for one chapter - the list of verse-number groups, each of which is one preaching day";
  "read as its own atom because the group COUNT is the chapter's day count, which is what every budget over a chapter is measured against. The checker used to hold this read inside itself, where nothing else could reach it.";
  let path = bible_data_path(chapter, "groups");
  let data = await file_read_json(path);
  let groups = property_get(data, "groups");
  return groups;
}
