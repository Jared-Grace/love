import { arguments_assert } from "./arguments_assert.mjs";
import { git_here_run_text } from "./git_here_run_text.mjs";
import { git_here_run_lines } from "./git_here_run_lines.mjs";
export async function git_commit_files(commit) {
  "What one commit touched: the message it was made under and the paths it changed.";
  "The question asked most often of the history and the one with no name until now. Over seven days it was typed a hundred and twenty four different ways, every one of them a line of git nobody had run before and so a line the guard could not have been asked about in advance - a hundred and twenty four interruptions for one question. Named once, it is a single shape that can be granted once.";
  "The paths come back as a list rather than as the printed table, because a caller wants to know whether a file is among them, and reading that off a table means splitting the table.";
  "Standing in the folder, running the line and taking git's own trailing newline off is the same on both askings and everywhere else in the repo, so it is asked for by name rather than written out here twice.";
  arguments_assert(arguments, 1);
  let asked = ["show", "--no-patch", "--format=%s", commit];
  let message = await git_here_run_text(asked);
  let asked_files = ["show", "--name-only", "--format=", commit];
  let files = await git_here_run_lines(asked_files);
  let r = {
    commit,
    message,
    count: files.length,
    files,
  };
  return r;
}
