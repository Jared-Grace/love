import { arguments_assert } from "./arguments_assert.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_combine } from "./text_combine.mjs";
import { rsync_words_run } from "./rsync_words_run.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
export async function folder_copy_pending(folder_from, folder_to) {
  arguments_assert(arguments, 2);
  ("$plain folder_from");
  ("$plain folder_to");
  ("Answers which files a copy from the first folder into the second would still have to write, deciding by reading the contents on both sides. An empty answer is the proof that the copy is complete.");
  ("CONTENTS ARE READ RATHER THAN THE LENGTH AND THE MINUTE. Those two are what an ordinary copy compares, and they are cheap because they are nearly always enough; but two files can agree on both and hold different bytes, and after a copy that was cut off and resumed, agreeing on both is precisely what a wrong file would do. Reading every byte on both sides is slow and is the entire reason to have this separately from the copying.");
  ("NOTHING IS WRITTEN HERE. This is the checking half of the pair, and it is kept apart from the copying half so that a copy is proven by something that could not itself have caused what it is proving. Asking the copier to report on its own work would answer from what it believed it did.");
  ("Each line names one file still outstanding, so a caller counts the list rather than reading a summary.");
  let ended = text_ends_with(folder_from, "/");
  let source = ended ? folder_from : text_combine(folder_from, "/");
  let words = [
    "--archive",
    "--checksum",
    "--dry-run",
    "--itemize-changes",
    source,
    folder_to,
  ];
  let out = await rsync_words_run(words);
  let lines = text_split_newline(out);
  let r = list_filter(lines, text_empty_not_is);
  return r;
}
