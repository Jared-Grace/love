import { arguments_assert } from "./arguments_assert.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_combine } from "./text_combine.mjs";
import { rsync_words_run } from "./rsync_words_run.mjs";
export async function folder_copy_added(folder_from, folder_to) {
  arguments_assert(arguments, 2);
  ("$plain folder_from");
  ("$plain folder_to");
  ("Copies everything one folder holds into another, writing what is missing and rewriting what differs in length or in when it was last written, and taking nothing away.");
  ("NOTHING IS EVER DELETED, which is the whole of the difference from the neighbouring one that empties its target before it starts. That one rebuilds a working copy from somewhere that is the truth, so anything the target held and the source does not is stale by definition. This one is for a backup, where the target is often the older and richer of the two, and throwing away what the source has since lost is the exact accident a backup exists to prevent.");
  ("A FILE ALREADY THERE IS COMPARED ON ITS LENGTH AND ITS TIME, NOT ON ITS CONTENTS, and that is a real limit rather than an oversight. It is enough for the failure this is built around: a run cut off part way leaves a file shorter than the one it was copying, so the next run sees the difference and finishes it, and what had already transferred is kept rather than begun again. It is not enough for a file that was damaged without changing length - that one is invisible here and is why the checking half of this pair reads the bytes instead. Reading every byte on the way past would close the gap and would also mean a first copy of a folder reading a target that is not there yet, so the cost was put where the question actually is.");
  ("The source is given with a slash on the end so that what lands in the target is the folder's contents and not the folder inside itself. Adding it here rather than asking every caller to remember it is what stops the same two paths meaning two different things on two different days.");
  let ended = text_ends_with(folder_from, "/");
  let source = ended ? folder_from : text_combine(folder_from, "/");
  let words = ["--archive", "--partial", "--stats", source, folder_to];
  let out = await rsync_words_run(words);
  return out;
}
