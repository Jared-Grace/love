import { g_sermon_chapter_passages_chaptered } from "./g_sermon_chapter_passages_chaptered.mjs";
import { g_arc_assert } from "./g_arc_assert.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_add } from "./list_add.mjs";
import { not_equal } from "./not_equal.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
export async function g_arc_write(chapter_code, index, arc) {
  "Save one person's written arc into the chapter it answers from, replacing whatever was written for that same person and leaving every other arc of the chapter as it was.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "FILED BY CHAPTER AND NOT BY PERSON, which is the decision this makes. A person is drawn into the pool without a chapter - a plant is cut from whichever chapters a player picked when their game begins - so an arc is written for a person AGAINST a chapter, and the same person may be written again for another one. Play reads by chapter, because the chapters are what the player chose; so the chapter is the address and the person is a field inside it, exactly as a sermon chapter holds its passages.";
  "THE ARC IS CHECKED BEFORE IT IS STORED. A written arc that names a passage nobody offered, or an opener the player is never given, is not something to keep and correct later - stored, it becomes a file that reads as content until somebody plays it. Checked here, the store cannot hold one.";
  "The person's number is what ties the arc back to the pool entry that fixed how many turns it may have. Written anywhere else it would be an arc for nobody, and the turn counts it was written against would have nothing to attach to.";
  let passages = await g_sermon_chapter_passages_chaptered(chapter_code);
  g_arc_assert(arc, passages);
  let path = local_function_path_json(chapter_code, g_arc_write);
  let exists = await file_exists(path);
  let empty = {
    chapter_code,
    arcs: [],
  };
  let chapter = exists ? await file_read_json(path) : empty;
  let arcs = property_get(chapter, "arcs");
  function arc_other(other) {
    let left = property_get(other, "index");
    let neq = not_equal(left, index);
    return neq;
  }
  let others = list_filter(arcs, arc_other);
  list_add(others, {
    index,
    arc,
  });
  let contents = json_format_to({
    chapter_code,
    arcs: others,
  });
  await file_overwrite_uncached(path, contents);
  return path;
}
