import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_love } from "./git_folder_love.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_trim } from "./text_trim.mjs";
import { integer_to_try } from "./integer_to_try.mjs";
export async function git_commit_second(commit) {
  "$plain commit";
  "The second at which a named commit was made, so that a moment in this repo's past can be compared against the age of something on disk.";
  "★ THE SECOND IS ASKED FOR RATHER THAN A DATE BECAUSE A FILE'S AGE IS KEPT IN SECONDS. Anything comparing the two has to bring them to one measure eventually, and doing it here means it is done once, in the place that knows which of the two readings is being converted, rather than at every place that asks.";
  "★ THE COMMIT'S OWN SECOND IS ASKED FOR, NOT THE AUTHOR'S. A commit can be written long before it lands - a change made on one machine and brought over later carries the earlier moment as its author's - and what matters to anything comparing against a file is when the change was actually here.";
  arguments_assert(arguments, 1);
  let folder = await git_folder_love();
  let printed = await git_folder_run(folder, [
    "show",
    "-s",
    "--format=%ct",
    commit,
  ]);
  let trimmed = text_trim(printed);
  let second = integer_to_try(trimmed);
  return second;
}
