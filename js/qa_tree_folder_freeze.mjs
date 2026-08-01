import { arguments_assert } from "./arguments_assert.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { folder_copy_fresh } from "./folder_copy_fresh.mjs";
import { qa_tree_written_since } from "./qa_tree_written_since.mjs";
import { qa_tree_files_recopy } from "./qa_tree_files_recopy.mjs";
import { qa_tree_settled_print } from "./qa_tree_settled_print.mjs";
export async function qa_tree_folder_freeze(here, folder, skipped) {
  arguments_assert(arguments, 3);
  ("take one living folder across into a frozen copy of it, and settle whatever was being written while that was happening");
  ("the copying is not itself instant, so a file saved while it was being read could land in pieces - and a file in pieces does not parse, which is a complaint about nobody's work that looks exactly like a complaint about somebody's. The moment before the copy starts is noted, and afterwards every file written since is taken across again on its own.");
  ("asking a second time is what makes it a repair rather than a hope. Whatever is still moving after the files were taken across is named out loud, because a copy that could not be settled is worth knowing about and a silent one reads exactly like a clean one.");
  ("this was the body of the one call that froze this repo, and it is a named thing now because the neighbouring repos need the same treatment and were getting a pointer to the living folder instead.");
  let started = date_now_milliseconds();
  await folder_copy_fresh(here, folder, skipped);
  let moved = await qa_tree_written_since(here, skipped, started);
  let settling = date_now_milliseconds();
  await qa_tree_files_recopy(here, folder, moved);
  let unsettled = await qa_tree_written_since(here, skipped, settling);
  qa_tree_settled_print(moved, unsettled);
  let r = {
    moved,
    unsettled,
  };
  return r;
}
