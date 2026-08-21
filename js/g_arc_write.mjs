import { g_arc_previous_write } from "./g_arc_previous_write.mjs";
import { equal } from "./equal.mjs";
import { g_arc_write_path } from "./g_arc_write_path.mjs";
import { g_arc_written_chapter } from "./g_arc_written_chapter.mjs";
import { g_arc_person_assert } from "./g_arc_person_assert.mjs";
import { g_sermon_chapter_passages_chaptered } from "./g_sermon_chapter_passages_chaptered.mjs";
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
  "WHAT IT REPLACES IS KEPT BEFORE IT IS REPLACED. Arcs live outside the repo, so an arc written over used to be gone with nothing recording that it had ever said anything else - and the reader who has to judge whether a rewrite helped was then handed a whole arc to read rather than the part that moved. Keeping happens here rather than at the caller because there is no other door into the store: a caller that forgot would destroy the comparison silently, and the loss is only noticed later, when the comparison is wanted and cannot be made.";
  let passages = await g_sermon_chapter_passages_chaptered(chapter_code);
  await g_arc_person_assert(index, arc, passages);
  let path = g_arc_write_path(chapter_code);
  let arcs = await g_arc_written_chapter(chapter_code);
  function arc_other(other) {
    let left = property_get(other, "index");
    let neq = not_equal(left, index);
    return neq;
  }
  function arc_same(other) {
    let left = property_get(other, "index");
    let eq = equal(left, index);
    return eq;
  }
  let replaced = list_filter(arcs, arc_same);
  for (let entry of replaced) {
    let going = property_get(entry, "arc");
    await g_arc_previous_write(chapter_code, index, going);
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
