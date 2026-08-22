export async function g_arc_feedback_kept_write(chapter_code, note_keep) {
  "Keep the notes in one chapter that answer to a test and drop the rest, write what is left back, and say how many went and how many stand.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "THE TEST IS THE PARAMETER BECAUSE THE TEST IS THE ONLY THING THAT DIFFERS. Every clear over this store does the same seven things - find the file, read the notes, count them, drop some, count what is left, subtract, write - and the two that exist disagree about one of the seven. Written out twice, the six that agree are six chances for a fix to land in one copy, and the one that disagrees is buried where nobody can see it is the whole difference.";
  "IT SAYS HOW MANY IT DROPPED rather than answering nothing. Dropping none is what a clear aimed at nobody looks like and also what an already-clean chapter looks like, and the two need telling apart by whoever ran it.";
  "THE TEST NAMES WHAT SURVIVES, NOT WHAT GOES, and that is worth stating because a clear is asked for the other way round. Every caller here is named for what it destroys, so the test each one hands over reads backwards from its own name - a clear of one person keeps every note against everybody else. Naming the parameter for keeping is what stops a caller writing the test that deletes the notes it meant to spare, which is a mistake nothing here could catch: both answers are a list of notes, both write, and the count it reports would be exactly as confident either way.";
  arguments_assert(arguments, 2);
  let path = g_arc_feedback_write_path(chapter_code);
  let notes = await g_arc_feedback_chapter(chapter_code);
  let before = list_size(notes);
  let kept = list_filter(notes, note_keep);
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
