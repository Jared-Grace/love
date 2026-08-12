import { arguments_assert } from "./arguments_assert.mjs";
import { qa_tree_names_skipped } from "./qa_tree_names_skipped.mjs";
import { folder_gitignore_name } from "./folder_gitignore_name.mjs";
import { list_add } from "./list_add.mjs";
export function repo_search_folders_skipped() {
  "The folders a search of this repo does not go into";
  "The history, the installed packages, the python environment and the phone build are the same ones the frozen copy leaves out, and they are borrowed from there rather than written again. None of them is somebody's code answering a question about this repo: the history is every version of every file, so a word found there is a word that used to be somewhere, and the packages are other people's code, which is a real thing to search but never the thing somebody means by searching here.";
  "The scratch folder is added on top, which is the one the frozen copy keeps and a search does not want. It holds throwaway probes and generated output, so a word found there is a word somebody wrote to look at once - the same word, found in the code, is the answer wanted, and the scratch copy sits in front of it.";
  "Kept apart from the searching itself because it is a fact about this repo rather than about searching. Anyone searching somewhere else names their own, and this is only what the repo-wide command fills in for them.";
  arguments_assert(arguments, 0);
  let names = qa_tree_names_skipped();
  let scratch = folder_gitignore_name();
  list_add(names, scratch);
  return names;
}
