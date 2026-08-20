import { arguments_assert } from "./arguments_assert.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { git_files_tracked_folder } from "./git_files_tracked_folder.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_split_first } from "./text_split_first.mjs";
import { list_unique } from "./list_unique.mjs";
export async function folders_root_tracked() {
  "Every folder sitting directly at the top of this repo, named once each.";
  "Read off what git is keeping rather than off the disk, so the folders a build or a download leaves lying about are out of the answer by construction. Anything git has never heard of is not something the repo is made of, and having to name those in a list of exceptions is exactly the arrangement this avoids.";
  "A path with no folder mark in it is a file sitting at the top rather than a folder, and those are not what is being counted.";
  arguments_assert(arguments, 0);
  let repo = folder_repo_love();
  let paths = await git_files_tracked_folder(repo);
  let folders = [];
  for (let tracked_path of paths) {
    let nested = text_includes(tracked_path, "/");
    if (nested) {
      let first = text_split_first(tracked_path, "/");
      folders.push(first);
    }
  }
  let named = list_unique(folders);
  return named;
}
