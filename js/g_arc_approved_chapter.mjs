import { arguments_assert } from "./arguments_assert.mjs";
import { g_arc_approved_write_path } from "./g_arc_approved_write_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
export async function g_arc_approved_chapter(chapter_code) {
  "Every arc of one chapter as it stood when a reviewer passed it as rightly worded, each one still paired with the number of the person it was written for.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "NOTHING APPROVED YET IS AN EMPTY LIST AND NOT A FAILURE, exactly as it is for the live store and for the reading store. Every arc starts unapproved, and a caller asking before anybody has passed one is the ordinary case rather than the broken one - so a missing file answers none, and a caller can walk the answer without asking first whether there was one.";
  arguments_assert(arguments, 1);
  let path = g_arc_approved_write_path(chapter_code);
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
