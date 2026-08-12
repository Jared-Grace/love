import { arguments_assert } from "./arguments_assert.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { repo_search_folders_skipped } from "./repo_search_folders_skipped.mjs";
import { folder_lines_search } from "./folder_lines_search.mjs";
export async function repo_lines_search(s) {
  "Every line in this repo that holds this word, each one given back with the file it came from and the place it sits at";
  "The one search almost everybody means. Naming the folder and the folders to leave out is a real choice exactly once, and after that it is the same two answers typed again every time - so they are filled in here, and what is left to say is the word.";
  "Filling them in is what makes this one safe to grant. A search that receives a folder receives a path, and a grant covers every argument the function is ever handed, so granting that would be granting a reader pointed anywhere on the disk. This one takes a word and nothing else, and the only place it can ever look is the folder this file is checked out in - so it can be approved once by name instead of being approved again every time somebody looks something up.";
  "Where the repo is, is worked out from this file's own place on disk rather than from where the command was run, so the answer does not change with the folder somebody happens to be standing in.";
  arguments_assert(arguments, 1);
  let path_folder = folder_repo_love();
  let folders_skipped = repo_search_folders_skipped();
  let found = await folder_lines_search(path_folder, s, folders_skipped);
  return found;
}
