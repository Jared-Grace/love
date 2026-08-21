import { g_arc_feedback_note_add } from "./g_arc_feedback_note_add.mjs";
export async function g_arc_feedback_checked_add(
  chapter_code,
  index,
  turn,
  field,
  note,
) {
  "$plain field";
  "$plain note";
  "Put one note against one line of one person's arc on a check's behalf, marked as a check's so that dropping it later costs nothing.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "IT EXISTS SO THAT A CHECK CANNOT FILE AS A PERSON. A check reaching the person's door would write a note nothing could safely drop, and the mistake is invisible - the note reads the same, the store takes it, and the only sign is a clear that refuses to clear. Giving the check a door of its own means the marking is done by which function was called rather than by a caller remembering to say so.";
  "IT TAKES NO SAYING WHETHER, unlike the writer beneath it. A door whose whole purpose is to be the check's would be pointless if a check could still pass the other answer through it, and a fixed answer is one fewer thing every check has to get right.";
  let path = await g_arc_feedback_note_add(
    chapter_code,
    index,
    turn,
    field,
    note,
    true,
  );
  return path;
}
