import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_trim } from "./text_trim.mjs";
export async function git_folder_head_tree(folder) {
  "$plain folder";
  "The name of the tree the current commit points at - one word standing for every file the commit holds and every name it holds them under.";
  "This is what a rewrite has to be proved against. A commit's own name changes the moment anything behind it changes, so comparing commits before and after says nothing; the tree is computed from the content alone, so the same tree on both sides is the whole proof that not one byte of the present moved. Counting commits or files instead only says that as many survived, which is true of a rewrite that swapped two of them.";
  arguments_assert(arguments, 1);
  let printed = await git_folder_run(folder, ["rev-parse", "HEAD^{tree}"]);
  let tree = text_trim(printed);
  return tree;
}
