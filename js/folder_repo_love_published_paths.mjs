import { arguments_assert } from "./arguments_assert.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { folder_repo_love_published_folders } from "./folder_repo_love_published_folders.mjs";
import { path_join } from "./path_join.mjs";
import { folder_read_recursive_skipped_paths_async } from "./folder_read_recursive_skipped_paths_async.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function folder_repo_love_published_paths() {
  "Every file this repo publishes, named from the root of the machine.";
  "Where the repo itself is is worked out from this code's own place on disk rather than from a history, so this answers the same way inside the frozen copy the whole-repo run asks its questions of, where there is no history to ask.";
  "The scratch folder the throwaway scripts are written in is stepped over. Nothing there is committed, so nothing there is published, and it is the one folder inside a published one that is not itself published.";
  arguments_assert(arguments, 0);
  let root = folder_repo_love();
  let folders = folder_repo_love_published_folders();
  let folders_skipped = ["temp", "node_modules"];
  let paths = [];
  for (let folder of folders) {
    let full = path_join([root, folder]);
    let found = await folder_read_recursive_skipped_paths_async(
      full,
      folders_skipped,
    );
    list_add_multiple(paths, found);
  }
  return paths;
}
