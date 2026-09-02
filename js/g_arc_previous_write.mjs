import { arguments_assert } from "./arguments_assert.mjs";
import { g_arc_previous_write_path } from "./g_arc_previous_write_path.mjs";
import { g_arc_previous_chapter } from "./g_arc_previous_chapter.mjs";
import { g_arc_chapter_person_or_null } from "./g_arc_chapter_person_or_null.mjs";
import { not_equal } from "./not_equal.mjs";
import { g_arc_reviewed_chapter } from "./g_arc_reviewed_chapter.mjs";
import { equal } from "./equal.mjs";
import { g_arc_person_replaced_write } from "./g_arc_person_replaced_write.mjs";
export async function g_arc_previous_write(chapter_code, index, arc) {
  "Keep one person's outgoing arc - the one about to be written over - so that what a rewrite changed can be seen afterwards, holding on to the oldest copy no reviewer has read rather than to the newest.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "IT EXISTS BECAUSE ARCS ARE NOT IN THE REPO. Every file git holds can be compared against what it said yesterday for nothing, and an arc cannot - the store sits outside the repo, so an arc written over is gone with no record that it was ever different. The reader who has to say whether a rewrite improved anything then has only the new text, and reading a whole arc to find out what moved is the most expensive way there is to be told.";
  "IT IS NOT CHECKED THE WAY THE LIVE ONE IS, on purpose. The live writer refuses an arc naming a passage nobody offered, because a stored arc reads as content until somebody plays it. Nothing here is ever played. Checking it again would also mean an arc that passed the rules of its own day could not be kept once the rules were tightened - which is exactly the arc a reader most wants to compare against.";
  "IT KEEPS THE OLDEST UNREAD COPY AND NOT THE NEWEST. The marks fed from this store say which lines a reviewer has not seen in the wording they now carry, and a second rewrite arriving before the first was ever read used to move this copy forward and take the first rewrite's marks off the page with it. That happened: five notes answered in one pass erased the mark on a line revised the pass before, which nobody had yet looked at, so the one line most needing a reading was the one the page stopped pointing at. An entry already standing for a person with no reading on record is now left exactly where it is.";
  "A READING ON RECORD IS THE ONLY THING THAT MAKES IT SAFE TO MOVE FORWARD. The reading store snapshots the arc at the moment somebody got to the end of it, and it outranks this store when a base is chosen - so once a person has been read, what is kept here stops being looked at, and holding an ever older copy would be hoarding. Before that first reading there is nothing else saying what they saw, so this is it.";
  arguments_assert(arguments, 3);
  let path = g_arc_previous_write_path(chapter_code);
  let arcs = await g_arc_previous_chapter(chapter_code);
  let held = g_arc_chapter_person_or_null(arcs, index);
  let kept = not_equal(held, null);
  if (kept) {
    let read_arcs = await g_arc_reviewed_chapter(chapter_code);
    let read_arc = g_arc_chapter_person_or_null(read_arcs, index);
    let unread = equal(read_arc, null);
    if (unread) {
      return path;
    }
  }
  let written = await g_arc_person_replaced_write(
    path,
    arcs,
    chapter_code,
    index,
    arc,
  );
  return written;
}
