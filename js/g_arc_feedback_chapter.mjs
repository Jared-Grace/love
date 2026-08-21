export async function g_arc_feedback_chapter(chapter_code) {
  "Every note standing against one chapter's arcs, in the order they were made.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "NOTHING NOTED YET IS AN EMPTY LIST AND NOT A FAILURE. An arc nobody has read and no check has run over stands against nothing, which is the ordinary case for a chapter just written rather than the broken one.";
  let path = g_arc_feedback_write_path(chapter_code);
  let exists = await file_exists(path);
  let none = not(exists);
  if (none) {
    let empty = [];
    return empty;
  }
  let chapter = await file_read_json(path);
  let notes = property_get(chapter, "notes");
  return notes;
}
