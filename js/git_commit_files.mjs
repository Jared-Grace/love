import { arguments_assert } from "./arguments_assert.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
export async function git_commit_files(commit) {
  "What one commit touched: the message it was made under and the paths it changed.";
  "The question asked most often of the history and the one with no name until now. Over seven days it was typed a hundred and twenty four different ways, every one of them a line of git nobody had run before and so a line the guard could not have been asked about in advance - a hundred and twenty four interruptions for one question. Named once, it is a single shape that can be granted once.";
  "The paths come back as a list rather than as the printed table, because a caller wants to know whether a file is among them, and reading that off a table means splitting the table.";
  arguments_assert(arguments, 1);
  let here = folder_current_absolute();
  let asked = ["show", "--no-patch", "--format=%s", commit];
  let printed = await git_folder_run(here, asked);
  let message = text_trim(printed);
  let asked_files = ["show", "--name-only", "--format=", commit];
  let printed_files = await git_folder_run(here, asked_files);
  let s = text_trim(printed_files);
  let lines = text_split_newline(s);
  let files = list_filter(lines, text_empty_not_is);
  let r = {
    commit,
    message,
    count: files.length,
    files,
  };
  return r;
}
