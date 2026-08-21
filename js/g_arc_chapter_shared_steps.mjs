import { g_arc_written_chapter } from "./g_arc_written_chapter.mjs";
import { g_arcs_shared_steps } from "./g_arcs_shared_steps.mjs";
export async function g_arc_chapter_shared_steps(chapter_code) {
  "Read back everybody written for one chapter and say, for each pair of them, the longest stretch of arc they were both given.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "The reading is here and the comparing is next door, so the comparing can be asked of arcs gathered any way at all - a chapter out of the store, a draft not filed yet, or two arcs held side by side to settle an argument about them.";
  let written = await g_arc_written_chapter(chapter_code);
  let pairs = g_arcs_shared_steps(written);
  return pairs;
}
