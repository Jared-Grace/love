import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_parent_exists_ensure } from "./file_parent_exists_ensure.mjs";
import { file_path_temp } from "./file_path_temp.mjs";
import { promise_catch_ignore } from "./promise_catch_ignore.mjs";
import { file_to_commit_add_try } from "./file_to_commit_add_try.mjs";
import { data_file_update } from "./data_file_update.mjs";
export async function file_overwrite_unfenced(file_path, contents) {
  "$plain file_path";
  "$plain contents";
  "The steps of writing one file to a real disk, with no refusal of any path: whoever calls this has already decided the path may be written.";
  ("★ NOTHING HERE REFUSES A SETTINGS OR HOOK FILE, so it has exactly two callers, one that refuses those paths first and one that exists to write them. ",
    fn_name("file_overwrite_unfenced_callers_gate_run"),
    " fails on a third.");
  ("The write goes to a temp name and is then renamed, because a rename is the one thing a file system does all at once: a reader arriving mid-write sees the whole of the old file or the whole of the new one and never half of either. A failure takes the temp file away and lets the fault travel, so a crash leaves no litter and no silence.");
  ("The note of what to commit is taken only once the file is actually on disk, and only here: a browser keeps its files in its own store, where there is no commit for a note to serve.");
  arguments_assert(arguments, 2);
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
