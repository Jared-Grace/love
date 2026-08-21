import { g_arc_previous_write_path } from "./g_arc_previous_write_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
export async function g_arc_previous_chapter(chapter_code) {
  "Every replaced arc kept for one chapter, each one still paired with the number of the person it was written for.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "NOTHING KEPT YET IS AN EMPTY LIST AND NOT A FAILURE, exactly as it is for the live store. A person written for the first time has no previous version, and that is the ordinary case rather than the broken one - so a missing file answers none, and a caller can loop over the answer without asking first whether there was one.";
  let path = g_arc_previous_write_path(chapter_code);
  let exists = await file_exists(path);
  let none = not(exists);
  if (none) {
    let empty = [];
    return empty;
  }
  let chapter = await file_read_json(path);
  let arcs = property_get(chapter, "arcs");
  return arcs;
}
