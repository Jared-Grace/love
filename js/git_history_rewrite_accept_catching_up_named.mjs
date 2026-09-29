import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_head_tree } from "./git_folder_head_tree.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { git_history_rewrite_accept_catching_up } from "./git_history_rewrite_accept_catching_up.mjs";
export async function git_history_rewrite_accept_catching_up_named(
  folder,
  clone_folder,
  commit,
  words_text,
  paths_text,
  bundle_path,
) {
  "$plain folder";
  "$plain clone_folder";
  "$plain commit";
  "$plain words_text";
  "$plain paths_text";
  "$plain bundle_path";
  arguments_assert(arguments, 6);
  ("Accepts a rehearsal that is already sitting on the disk, named by its folder and the commit it was taken at, while everyone else goes on committing. do NOT grant.");
  let tree = await git_folder_head_tree(clone_folder);
  let paths = text_split_comma(paths_text);
  let rehearsed = {
    clone_folder,
    commit,
    tree,
    paths,
    changed: null,
  };
  let accepted = await git_history_rewrite_accept_catching_up(
    folder,
    rehearsed,
    words_text,
    bundle_path,
  );
  return accepted;
}
