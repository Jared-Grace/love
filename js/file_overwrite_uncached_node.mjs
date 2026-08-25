import { arguments_assert } from "./arguments_assert.mjs";
import { folder_public_root_blocked_assert } from "./folder_public_root_blocked_assert.mjs";
import { file_parent_exists_ensure } from "./file_parent_exists_ensure.mjs";
import { file_path_temp } from "./file_path_temp.mjs";
import { promise_catch_ignore } from "./promise_catch_ignore.mjs";
import { file_to_commit_add_try } from "./file_to_commit_add_try.mjs";
import { data_file_update } from "./data_file_update.mjs";
export async function file_overwrite_uncached_node(file_path, contents) {
  "$plain file_path";
  "$plain contents";
  "Writing one file to a real disk: the half of an overwrite that only a build machine can do.";
  "★ IT IS SEPARATE FOR WEIGHT, NOT FOR CLARITY. The check that chooses between this and a browser's own store decides which machine RUNS this and settles nothing about which machine DOWNLOADS it - a bundler follows a plain import whether the branch is walked or not, so every page that saved anything at all was carrying a public-folder guard, a parent-folder maker, a temp-file namer and the note-what-to-commit machinery, in order never to run a line of it. Asked for by name at the moment it is wanted, none of it is in the page.";
  "The write goes to a temp name and is then renamed, because a rename is the one thing a file system does all at once: a reader arriving mid-write sees the whole of the old file or the whole of the new one and never half of either. A failure takes the temp file away and lets the fault travel, so a crash leaves no litter and no silence.";
  "The note of what to commit is taken only once the file is actually on disk, and only here: a browser keeps its files in its own store, where there is no commit for a note to serve.";
  arguments_assert(arguments, 2);
  await folder_public_root_blocked_assert(file_path);
  await file_parent_exists_ensure(file_path);
  let fs = await import("fs");
  let temp_path = file_path_temp(file_path);
  try {
    await fs.promises.writeFile(temp_path, contents, "utf-8");
    await fs.promises.rename(temp_path, file_path);
  } catch (e) {
    let promise = fs.promises.unlink(temp_path);
    await promise_catch_ignore(promise);
    throw e;
  }
  await file_to_commit_add_try(file_path);
  ("the record of what this file now holds is kept up to date here rather than beside the branch, because the browser's half returns before ever reaching it - it was already node's alone, written where it read as both's.");
  await data_file_update(file_path);
}
