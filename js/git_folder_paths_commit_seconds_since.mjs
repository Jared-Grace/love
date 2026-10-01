import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { git_log_format_marked } from "./git_log_format_marked.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { git_log_marked_paths_firsts_generic } from "./git_log_marked_paths_firsts_generic.mjs";
import { integer_to_try } from "./integer_to_try.mjs";
export async function git_folder_paths_commit_seconds_since(folder, since) {
  "For every file this folder's recent commits touched, the second of the newest commit that touched it.";
  "Asked as one question about the whole folder rather than one question per file. Asking git about a named set of files makes it look through the whole of history for them, and it costs about the same whether two files are named or five hundred - so several such questions cost several times that, while one question naming nothing costs it once and answers for every file at the same time.";
  "Only commits made since the given second are looked through, because the caller already knows there is nothing it needs from before then. That bound is what keeps the cost small: a day of this repo's history is a few thousand lines to read, and all of it is tens of times more.";
  "A file the answer does not mention is one no recent commit touched, which is exactly what the caller wants to know about it.";
  "The bound is the whole of what this adds. How git is asked to mark a commit's own line, and how such a stream is read back, are asked of the one place that holds both - which is where the mark's own story is written down, and why it is a slash rather than a letter.";
  let asked = text_combine_multiple(["--since=@", since]);
  let format = git_log_format_marked("%ct");
  let words = ["log", asked, format, "--name-only"];
  let printed = await git_folder_run(folder, words);
  let seconds = git_log_marked_paths_firsts_generic(printed, integer_to_try);
  return seconds;
}
