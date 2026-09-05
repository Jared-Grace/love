import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_documents_hand_times_unkept } from "./lyric_video_documents_hand_times_unkept.mjs";
import { lyric_video_hand_times_read } from "./lyric_video_hand_times_read.mjs";
import { lyric_video_hand_times_path } from "./lyric_video_hand_times_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function lyric_video_documents_hand_times_keep() {
  arguments_assert(arguments, 0);
  ("Keeps a copy of every person's timings that has none kept yet, or whose kept copy is older than the document, and shows afterwards that none is left unkept.");
  ("★ IT PROVES ITSELF BY ASKING THE SAME QUESTION AGAIN RATHER THAN BY COUNTING WHAT IT OPENED. A count of files written is a report about this command's own activity, and the thing anybody actually needs to know is a fact about the world - that there is now no timing anybody sat and tapped which exists in only one place. Those are different claims, and only the second one is worth reading before letting a machine write over a document.");
  ("A kept copy is never removed, only added to and refreshed, because a document that stops being a person's - by being marked as a machine's, or by being written over - is exactly the document whose old copy has just become the only one there is.");
  let unkept = await lyric_video_documents_hand_times_unkept();
  let kept = await lyric_video_hand_times_read();
  let names = [];
  for (let one of unkept) {
    let copy = {
      path: one.path,
      duration: one.document.duration,
      lines: one.document.lines,
    };
    kept[one.name] = copy;
    names.push(one.name);
  }
  let path = lyric_video_hand_times_path();
  await file_overwrite_json(path, kept);
  let after = await lyric_video_documents_hand_times_unkept();
  list_empty_is_assert_json(after, {
    hint: "a person's timings were copied and the copy still does not match the document they came from - read the named document and the kept record side by side before anything is allowed to write over it",
  });
  let r = {
    kept: names.length,
    names,
  };
  return r;
}
