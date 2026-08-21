import { local_function_path_json } from "./local_function_path_json.mjs";
import { g_arc_write } from "./g_arc_write.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
export async function g_arc_written_chapter(chapter_code) {
  "Every arc already written for one chapter, each one still paired with the number of the person it was written for.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "NOTHING WRITTEN YET IS AN EMPTY LIST AND NOT A FAILURE. Every chapter starts with no arcs, and the caller that asks this before writing the first one is the ordinary case rather than the broken one - so a missing file answers none, and the caller can loop over the answer without asking first whether there was one.";
  "THE NUMBER TRAVELS WITH THE ARC because an arc alone cannot say whose it is. The pool is what fixed how many turns that person may have, and an arc handed on without its number is an arc nothing can check against the pool again.";
  let path = g_arc_write_path(chapter_code);
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
