import { arguments_assert } from "./arguments_assert.mjs";
import { git_commit_maps_folder } from "./git_commit_maps_folder.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_filter } from "./list_filter.mjs";
import { path_join } from "./path_join.mjs";
import { list_map } from "./list_map.mjs";
export async function git_commit_maps_paths() {
  "The saved rewrite records, whole file paths, in the order the rewrites happened.";
  "The order is the file names' own order, which is why the folder numbers them. Reading the folder already sorts what it finds by name, so the numbering is the whole of the ordering and nothing here decides it a second time.";
  arguments_assert(arguments, 0);
  let folder = git_commit_maps_folder();
  let names = await folder_read_files(folder);
  function git_commit_maps_paths_named(name) {
    let saved = text_ends_with(name, ".txt");
    return saved;
  }
  let kept = list_filter(names, git_commit_maps_paths_named);
  function git_commit_maps_paths_joined(name) {
    let file_path = path_join([folder, name]);
    return file_path;
  }
  let paths = list_map(kept, git_commit_maps_paths_joined);
  return paths;
}
