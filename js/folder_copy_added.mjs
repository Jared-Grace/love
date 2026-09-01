import { arguments_assert } from "./arguments_assert.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_combine } from "./text_combine.mjs";
import { rsync_words_run } from "./rsync_words_run.mjs";
export async function folder_copy_added(folder_from, folder_to) {
  arguments_assert(arguments, 2);
  ("$plain folder_from");
  ("$plain folder_to");
  ("Copies everything one folder holds into another, writing what is missing and mending what does not match, and taking nothing away.");
  ("NOTHING IS EVER DELETED, which is the whole of the difference from the neighbouring one that empties its target before it starts. That one rebuilds a working copy from somewhere that is the truth, so anything the target held and the source does not is stale by definition. This one is for a backup, where the target is often the older and richer of the two, and throwing away what the source has since lost is the exact accident a backup exists to prevent.");
  ("A FILE ALREADY THERE IS COMPARED RATHER THAN ASSUMED FINISHED. Simply skipping every name that exists would be faster, and would leave a file that was cut off part way through looking complete for as long as anyone cared to look - the one failure a backup must not have. A run that was interrupted also keeps what it had already transferred, so the next one carries that file on instead of beginning it again.");
  ("The source is given with a slash on the end so that what lands in the target is the folder's contents and not the folder inside itself. Adding it here rather than asking every caller to remember it is what stops the same two paths meaning two different things on two different days.");
  let ended = text_ends_with(folder_from, "/");
  let source = ended ? folder_from : text_combine(folder_from, "/");
  let words = ["--archive", "--partial", "--stats", source, folder_to];
  let out = await rsync_words_run(words);
  return out;
}
