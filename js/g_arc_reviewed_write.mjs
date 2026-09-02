import { g_arc_written_person_nicknamed_assert } from "./g_arc_written_person_nicknamed_assert.mjs";
import { property_get } from "./property_get.mjs";
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
  "FINDING THE PERSON AND REFUSING WHERE THERE IS NOBODY IS ASKED FOR BY NAME, because the command that approves an arc opened with the very same five lines and the two copies had already begun to differ. Named once, the refusal reads the same in both and cannot drift.";
  let found = await g_arc_written_person_nicknamed_assert(
    chapter_code,
    nickname,
    "record as read",
  );
  let index = property_get(found, "index");
  let arc = property_get(found, "arc");
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
