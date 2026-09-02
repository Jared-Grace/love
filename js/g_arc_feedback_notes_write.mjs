import { arguments_assert } from "./arguments_assert.mjs";
import { g_arc_feedback_write_path } from "./g_arc_feedback_write_path.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
export async function g_arc_feedback_notes_write(chapter_code, notes) {
  "Save one chapter's whole list of notes over whatever was there, and hand back the file it was saved to, so that everything changing a note writes the store the same way.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, and it names the file this chapter's notes are kept in.";
  "$plain notes";
  "the notes are the entire list for the chapter, everybody's together, in the order they are to be kept in.";
  "IT TAKES THE WHOLE LIST AND NEVER A CHANGE TO IT. A store written from a description of what changed has to be able to apply that description, and there are only two kinds of change worth making here - dropping some notes and rewriting one - which are far easier to make in a list than to describe. So the deciding is done by whoever calls, and this does the part that is the same either way.";
  "IT SAYS NOTHING ABOUT WHAT MOVED, on purpose. How many notes went and how many are left is a question about the difference between two lists, and the caller is the only one holding both of them.";
  arguments_assert(arguments, 2);
  let path = g_arc_feedback_write_path(chapter_code);
  let contents = json_format_to({
    chapter_code,
    notes,
  });
  await file_overwrite_uncached(path, contents);
  return path;
}
