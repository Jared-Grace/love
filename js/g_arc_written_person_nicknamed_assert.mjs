import { arguments_assert } from "./arguments_assert.mjs";
import { g_arc_written_chapter } from "./g_arc_written_chapter.mjs";
import { g_npc_nickname_index } from "./g_npc_nickname_index.mjs";
import { g_arc_chapter_person_or_null } from "./g_arc_chapter_person_or_null.mjs";
import { not_equal } from "./not_equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { assert_json } from "./assert_json.mjs";
export async function g_arc_written_person_nicknamed_assert(
  chapter_code,
  nickname,
  doing,
) {
  "$plain chapter_code";
  "$plain nickname";
  "$plain doing";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "the doing is the few words for what the caller was about to do, dropped into the refusal so it says which thing there was nothing to do. It is text shown to a person and nothing that runs.";
  "One named person's written arc in a chapter, handed back together with the number the store files them under, refusing outright if nobody by that name is written there.";
  "TWO COMMANDS OPENED WITH THIS SAME RUN OF WORK, and both of them need both halves of what it finds - the number, to write a snapshot in beside, and the arc itself, to be the snapshot. Written out at each of them, the five lines were a warning kept in two copies, and the second copy is the one nobody updates.";
  "THE SIBLING BESIDE THIS TAKES A NUMBER AND THIS TAKES A NAME, which is the whole difference and is why there are two. A reader types a person's name; the store files them by number. Turning one into the other is the first thing either command must do, so it belongs on the near side of the lookup rather than at every caller.";
  "WHAT THE CALLER WAS ABOUT TO DO COMES IN, and only that, rather than the whole refusal. The two callers said the same sentence and differed in three words at the end of it, so passing the sentence would have let the two copies drift apart again in the one place this was written to join them.";
  arguments_assert(arguments, 3);
  let live_arcs = await g_arc_written_chapter(chapter_code);
  let index = await g_npc_nickname_index(nickname);
  let arc = g_arc_chapter_person_or_null(live_arcs, index);
  let written = not_equal(arc, null);
  let hint = text_combine_multiple([
    "nobody by that name is written in this chapter, so there is nothing to ",
    doing,
  ]);
  assert_json(written, {
    chapter_code,
    nickname,
    hint,
  });
  let r = {
    index,
    arc,
  };
  return r;
}
