import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_love } from "./git_folder_love.mjs";
import { git_folder_files_changed_since } from "./git_folder_files_changed_since.mjs";
export async function git_files_changed_since_love(oldest) {
  "$plain oldest";
  "Every file any commit has touched in this repo between the one named and where it stands now, each named once. Read-only.";
  "It exists so the reading can be approved once and then stop asking. A standing approval covers every argument the function is ever handed, so one that takes a folder can never hold one - approving it for this repo would approve it for any folder named later. The commit left to name is not a folder and cannot be turned into one, so what is approved here stays this repo whatever it is asked.";
  "This is the reading the editing protocol asks for before committing: the commit noted at the start, held against the files a neighbour has moved underneath you since.";
  arguments_assert(arguments, 1);
  let folder = await git_folder_love();
  let files = await git_folder_files_changed_since(folder, oldest);
  return files;
}
