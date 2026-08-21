import { g_arc_feedback_write_path } from "./g_arc_feedback_write_path.mjs";
import { g_arc_feedback_chapter } from "./g_arc_feedback_chapter.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { list_add } from "./list_add.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
export async function g_arc_feedback_note_add(
  chapter_code,
  index,
  turn,
  field,
  note,
  checked,
) {
  "$plain field";
  "$plain note";
  "Put one note against one line of one person's arc, saying whether a check found it or a person did, and keep every note already standing.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "IT IS THE ONE WRITER AND NOT THE ONE DOOR. Two doors open onto it - a person's and a check's - because a person files from a command line and should not have to spell out that they are a person, while a check can never be allowed to file as one. Making them two callers of one writer is what keeps a single spelling of a note in the store while the two ways in stay honest about which is which.";
  "WHOEVER FOUND IT IS WRITTEN DOWN, because it decides what may be thrown away. Re-running a check reproduces its notes exactly, so dropping them costs nothing; a person's reading is gone the moment it is dropped and no command brings it back.";
  let path = g_arc_feedback_write_path(chapter_code);
  let notes = await g_arc_feedback_chapter(chapter_code);
  let person = number_from_text(index);
  let line = number_from_text(turn);
  list_add(notes, {
    index: person,
    turn: line,
    field,
    note,
    checked,
  });
  let contents = json_format_to({
    chapter_code,
    notes,
  });
  await file_overwrite_uncached(path, contents);
  return path;
}
