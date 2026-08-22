import { g_arc_written_chapter } from "./g_arc_written_chapter.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number } from "./list_sort_number.mjs";
export async function g_arc_written_indexes(chapter_code) {
  "The number of every person one chapter already has an arc written for, in order.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "ONE CHAPTER AND NOT THE WHOLE STORE, because an arc is written for a person AGAINST a chapter and the same person may be written again for another one. The question this answers is who a player meets in this chapter, and a person written in a different chapter is not somebody they meet here.";
  "NOTHING WRITTEN IS AN EMPTY LIST rather than nothing at all. Every chapter starts with no arcs, so the caller asking before the first one is written is the ordinary case, and a caller that had to tell an empty chapter from an absent store would be telling apart two things it would then do the same thing about.";
  let arcs = await g_arc_written_chapter(chapter_code);
  let indexes = [];
  for (let entry of arcs) {
    let index = property_get(entry, "index");
    list_add(indexes, index);
  }
  let r = list_sort_number(indexes);
  return r;
}
