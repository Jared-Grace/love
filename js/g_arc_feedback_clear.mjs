export async function g_arc_feedback_clear(chapter_code, index) {
  "Drop every note standing against one person's arc, leaving the notes against everybody else in the chapter where they are, and say how many were dropped.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "A NOTE ACTED ON MUST GO, or the next revision is handed the same fault again and rewrites a line that was already put right. Worse, the reader who asks what still stands against this person is answered with work already done, and cannot tell which half is which.";
  "IT CLEARS ONE PERSON AND NOT THE CHAPTER, because revising is done one person at a time. A whole-chapter clear run after revising one of them would throw away the notes nobody has acted on yet - silently, since a note is gone with nothing recording that it was ever made.";
  "IT SAYS HOW MANY IT DROPPED rather than answering nothing. Dropping none is what a wrong person number looks like and also what an already-clean person looks like, and the two need telling apart by whoever ran it.";
  let path = g_arc_feedback_write_path(chapter_code);
  let notes = await g_arc_feedback_chapter(chapter_code);
  let before = list_size(notes);
  function note_other(note) {
    let left = property_get(note, "index");
    let neq = not_equal(left, index);
    return neq;
  }
  let kept = list_filter(notes, note_other);
  let after = list_size(kept);
  let dropped = subtract(before, after);
  let contents = json_format_to({
    chapter_code,
    notes: kept,
  });
  await file_overwrite_uncached(path, contents);
  let r = {
    path,
    dropped,
    standing: after,
  };
  return r;
}
