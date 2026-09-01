import { arguments_assert } from "./arguments_assert.mjs";
import { g_arc_noted_write_path } from "./g_arc_noted_write_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
export async function g_arc_noted_chapter(chapter_code) {
  "Every person's noted addresses for one chapter - the lines their last revision was asked to answer, each still paired with the number of the person they were asked of.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "NOTHING RECORDED YET IS AN EMPTY LIST AND NOT A FAILURE, exactly as it is for the arcs that were replaced. A person never revised was never asked anything, and that is the ordinary case rather than the broken one - so a missing file answers none, and a caller can walk the answer without asking first whether there was one.";
  arguments_assert(arguments, 1);
  let path = g_arc_noted_write_path(chapter_code);
  let exists = await file_exists(path);
  let none = not(exists);
  if (none) {
    let empty = [];
    return empty;
  }
  let chapter = await file_read_json(path);
  let people = property_get(chapter, "people");
  return people;
}
