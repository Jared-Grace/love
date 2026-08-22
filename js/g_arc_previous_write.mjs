import { g_arc_person_replaced_write } from "./g_arc_person_replaced_write.mjs";
import { g_arc_previous_write_path } from "./g_arc_previous_write_path.mjs";
import { g_arc_previous_chapter } from "./g_arc_previous_chapter.mjs";
export async function g_arc_previous_write(chapter_code, index, arc) {
  "Keep one person's outgoing arc - the one about to be written over - so that what a rewrite changed can be seen afterwards, replacing whatever was kept for that same person before.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "IT EXISTS BECAUSE ARCS ARE NOT IN THE REPO. Every file git holds can be compared against what it said yesterday for nothing, and an arc cannot - the store sits outside the repo, so an arc written over is gone with no record that it was ever different. The reader who has to say whether a rewrite improved anything then has only the new text, and reading a whole arc to find out what moved is the most expensive way there is to be told.";
  "IT IS NOT CHECKED THE WAY THE LIVE ONE IS, on purpose. The live writer refuses an arc naming a passage nobody offered, because a stored arc reads as content until somebody plays it. Nothing here is ever played. Checking it again would also mean an arc that passed the rules of its own day could not be kept once the rules were tightened - which is exactly the arc a reader most wants to compare against.";
  let path = g_arc_previous_write_path(chapter_code);
  let arcs = await g_arc_previous_chapter(chapter_code);
  let written = await g_arc_person_replaced_write(
    path,
    arcs,
    chapter_code,
    index,
    arc,
  );
  return written;
}
