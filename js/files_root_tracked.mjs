import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { git_files_tracked_folder } from "./git_files_tracked_folder.mjs";
import { text_includes } from "./text_includes.mjs";
export async function files_root_tracked() {
  "Every file git keeps directly at the top of this repo, outside any folder.";
  "Read off what git is keeping rather than off the disk, so a file a run leaves lying at the top is out of the answer until somebody commits it - and committing it is the moment worth catching.";
  arguments_assert(arguments, 0);
  let repo = folder_repo_love();
  let paths = await git_files_tracked_folder(repo);
  let files = [];
  for (let tracked_path of paths) {
    let nested = text_includes(tracked_path, "/");
    if (not(nested)) {
      files.push(tracked_path);
    }
  }
  return files;
}
