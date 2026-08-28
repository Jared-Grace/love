import { g_arc_written_chapter } from "./g_arc_written_chapter.mjs";
import { g_npc_nickname_index } from "./g_npc_nickname_index.mjs";
import { g_arc_chapter_person_or_null } from "./g_arc_chapter_person_or_null.mjs";
import { not_equal } from "./not_equal.mjs";
import { assert_json } from "./assert_json.mjs";
import { g_arc_reviewed_write_path } from "./g_arc_reviewed_write_path.mjs";
import { g_arc_reviewed_chapter } from "./g_arc_reviewed_chapter.mjs";
import { g_arc_person_replaced_write } from "./g_arc_person_replaced_write.mjs";
export async function g_arc_reviewed_write(chapter_code, nickname) {
  "Say that one person's arc has been read, keeping it exactly as it stands so that a later reading is handed only what has moved since.";
  "$plain chapter_code";
  "$plain nickname";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "IT TAKES NO TEXT, and that is what stops it lying. A caller handing over what it says was read could hand over anything, and the record would then say a reader had seen lines nobody wrote yet. Reading the live store here means the snapshot is the arc that was actually there at the moment somebody said they had read it, and no caller can make it otherwise.";
  "IT IS THE CHEAPEST THING TO FORGET AND THE COSTLIEST, because forgetting it costs a whole second reading rather than an error. So it is one command taking a name a reader already knows, and it names the person rather than numbering them for the same reason filing an arc does - a number one too high quietly marks somebody else's arc read.";
  "READ AGAIN LATER AND IT SIMPLY MOVES FORWARD. The snapshot is replaced, so a person who reads an arc twice records the second reading and the first stops mattering, which is what a reader means by having read it.";
  let live_arcs = await g_arc_written_chapter(chapter_code);
  let index = await g_npc_nickname_index(nickname);
  let arc = g_arc_chapter_person_or_null(live_arcs, index);
  let written = not_equal(arc, null);
  assert_json(written, {
    chapter_code,
    nickname,
    hint: "nobody by that name is written in this chapter, so there is nothing to record as read",
  });
  let path = g_arc_reviewed_write_path(chapter_code);
  let reviewed = await g_arc_reviewed_chapter(chapter_code);
  let stored = await g_arc_person_replaced_write(
    path,
    reviewed,
    chapter_code,
    index,
    arc,
  );
  return stored;
}
