import { arguments_assert } from "./arguments_assert.mjs";
import { g_arc_written_person_nicknamed_assert } from "./g_arc_written_person_nicknamed_assert.mjs";
import { property_get } from "./property_get.mjs";
import { g_arc_reviewed_write } from "./g_arc_reviewed_write.mjs";
import { g_arc_approved_write_path } from "./g_arc_approved_write_path.mjs";
import { g_arc_approved_chapter } from "./g_arc_approved_chapter.mjs";
import { g_arc_person_replaced_write } from "./g_arc_person_replaced_write.mjs";
export async function g_arc_approved_write(chapter_code, nickname) {
  "Say that one person's arc is rightly worded as it stands, keeping it exactly as it stands so that a later reviewer is shown only the lines that have changed since somebody passed it.";
  "$plain chapter_code";
  "$plain nickname";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "IT TAKES NO TEXT, and that is what stops it lying, exactly as the reading record does. A caller handing over what it says was approved could hand over anything, and the record would then say a reviewer had passed lines nobody had written yet. Read here from the live store, the snapshot is the arc that was actually in front of somebody at the moment they said it was right.";
  "APPROVING IS A CLAIM ABOUT THE WRITING AND READING IS A CLAIM ABOUT THE READER, which is why there are two records rather than one word carrying two meanings. Somebody who got to the end of an arc without deciding it is right has read it; somebody who says the lines they filed no note against are right as worded has done a further thing - and an arc that only ever gets read is never finished.";
  "IT IS THE WHOLE ARC AND NOT A LINE AT A TIME, because the notes are already the exceptions. Every line a reviewer passes over in silence is a line they judged and let stand, so one press says truthfully what thirty presses would say at thirty times the cost, and the cost is paid by the one person whose reading time this bench exists to save.";
  "STANDING NOTES DO NOT STOP IT, and the moment they are standing is the likeliest moment to press it. Approving beside them says the exact thing a reviewer means - these lines are wrong and every other line is right as it is written. Refused there, the verdict would have to wait on a revision, and the reading that produced it would then have to be done a second time to say it.";
  "THE READING IS RECORDED IN THE SAME BREATH, because an arc cannot be approved without being read. It also keeps the older copy the moved marks are measured from honest: with the reading left unrecorded, an approved arc would go on being measured against a backup or against whatever some revision replaced, and the page would mark as moved the very lines this reviewer has just passed.";
  "APPROVE AGAIN LATER AND IT SIMPLY MOVES FORWARD, the same as reading does. The snapshot is replaced, so an arc passed a second time records the second verdict and the first stops mattering, which is what a reviewer means by having approved it.";
  "FINDING THE PERSON AND REFUSING WHERE THERE IS NOBODY IS ASKED FOR BY NAME, and it is the same asking the reading record makes. The two opened with the same five lines and their two copies of the refusal had already begun to differ; named once, neither can drift from the other.";
  arguments_assert(arguments, 2);
  let found = await g_arc_written_person_nicknamed_assert(
    chapter_code,
    nickname,
    "approve",
  );
  let index = property_get(found, "index");
  let arc = property_get(found, "arc");
  await g_arc_reviewed_write(chapter_code, nickname);
  let path = g_arc_approved_write_path(chapter_code);
  let approved = await g_arc_approved_chapter(chapter_code);
  let stored = await g_arc_person_replaced_write(
    path,
    approved,
    chapter_code,
    index,
    arc,
  );
  return stored;
}
