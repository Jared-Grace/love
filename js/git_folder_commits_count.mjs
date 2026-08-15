import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_trim } from "./text_trim.mjs";
import { number_from_text } from "./number_from_text.mjs";
export async function git_folder_commits_count(folder) {
  "$plain folder";
  "How many commits a repository holds, counting every branch it knows about rather than only the one it is standing on.";
  "Read beside the tree a rewrite is checked against, never instead of it. A count that fell says only that something went, and the whole question is whether what went was what was asked for - a rewrite drops any commit whose entire content was a removed path, so a small fall is expected and a big one is the thing worth stopping for.";
  arguments_assert(arguments, 1);
  let printed = await git_folder_run(folder, ["rev-list", "--count", "--all"]);
  let count = number_from_text(text_trim(printed));
  return count;
}
