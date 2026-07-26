import { text_combine } from "./text_combine.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { git_add_folder } from "./git_add_folder.mjs";
export async function git_add_folder_paths(folder, paths) {
  "Stages exactly these files and nothing else. The double dash keeps a path from";
  "being read as an option, whatever it happens to be named.";
  let listed = list_join_space(paths);
  let added = text_combine("-- ", listed);
  await git_add_folder(folder, added);
}
