import { arguments_assert } from "./arguments_assert.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
export async function git_commit_file_text(commit, file_path) {
  "What one file held at one commit, as text.";
  "The other half of the question the history is asked, beside what a commit touched. It answers whether a change is really in, and how the file read before somebody edited it - which is what a Claude needs before deciding whether a peer's version or its own should stand.";
  "Both halves are read-only whatever they are handed, which is what makes them safe to grant: no argument can turn a reading of the history into a writing of anything.";
  arguments_assert(arguments, 2);
  let here = folder_current_absolute();
  let named = commit + ":" + file_path;
  let asked = ["show", named];
  let text = await git_folder_run(here, asked);
  return text;
}
