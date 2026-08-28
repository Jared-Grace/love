import { g_arc_written_chapter } from "./g_arc_written_chapter.mjs";
import { g_arc_reviewed_chapter } from "./g_arc_reviewed_chapter.mjs";
import { property_get } from "./property_get.mjs";
import { g_npc_nickname } from "./g_npc_nickname.mjs";
import { g_arc_chapter_person_or_null } from "./g_arc_chapter_person_or_null.mjs";
import { equal } from "./equal.mjs";
import { g_arc_lines_addressed } from "./g_arc_lines_addressed.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
import { list_size } from "./list_size.mjs";
import { g_arc_lines_moved } from "./g_arc_lines_moved.mjs";
import { g_arc_moved_addresses } from "./g_arc_moved_addresses.mjs";
export async function g_arc_unreviewed_chapter(chapter_code) {
  "What a second reading of one chapter still has to look at - every person nobody has read at all, and for the ones already read, only the lines that have moved since.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "IT IS THE WHOLE POINT OF KEEPING WHAT WAS READ. A reading is the scarcest thing spent on an arc, and re-reading a person from the top because three lines moved spends it on the lines that did not. Given the addresses that moved, a second pass costs what the change cost rather than what the arc cost.";
  "AN UNREAD PERSON IS EVERY ADDRESS, NOT A SPECIAL CASE. A caller asking what to look at wants one list either way, so a person nobody has read answers with all of their lines rather than a word the caller has to branch on. The read flag is there to be reported, not to be tested.";
  "IT DOES NOT SAY WHAT IS WRONG WITH ANYTHING, and must not. A moved line is a line a reader has not passed, which is a different thing from a line a check has faulted - the faults live in the note store, and folding the two together would let an unread line read as a defect and a defect read as merely unread.";
  let live_arcs = await g_arc_written_chapter(chapter_code);
  let reviewed_arcs = await g_arc_reviewed_chapter(chapter_code);
  let people = [];
  let waiting = 0;
  for (let entry of live_arcs) {
    let index = property_get(entry, "index");
    let arc = property_get(entry, "arc");
    let nickname = await g_npc_nickname(index);
    let read_arc = g_arc_chapter_person_or_null(reviewed_arcs, index);
    let unread = equal(read_arc, null);
    if (unread) {
      let lines = g_arc_lines_addressed(arc);
      let addresses = [];
      for (let line of lines) {
        let address = property_get(line, "address");
        list_add(addresses, address);
      }
      let right = list_size(addresses);
      waiting = add(waiting, right);
      list_add(people, {
        index,
        nickname,
        read: false,
        addresses,
        changed: [],
      });
      continue;
    }
    let moved = g_arc_lines_moved(read_arc, arc);
    let changed = property_get(moved, "changed");
    let addresses = g_arc_moved_addresses(moved);
    let right2 = list_size(addresses);
    waiting = add(waiting, right2);
    list_add(people, {
      index,
      nickname,
      read: true,
      addresses,
      changed,
    });
  }
  let r = {
    chapter_code,
    waiting,
    people,
  };
  return r;
}
