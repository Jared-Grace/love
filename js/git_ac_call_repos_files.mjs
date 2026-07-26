import { not } from "./not.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { git_folder_is } from "./git_folder_is.mjs";
import { git_ac_call_folder_files } from "./git_ac_call_folder_files.mjs";
import { repos_paths_map_unordered } from "./repos_paths_map_unordered.mjs";
export async function git_ac_call_repos_files(f_name, args, files) {
  "Offers the same written files to every repo here and lets each take the ones";
  "that are its own. A command is free to write across more than one of them, and";
  "nothing at the point of writing knows or needs to know which repo a file lives";
  "in — the folder that owns it recognises it and the rest see nothing.";
  async function lambda(folder) {
    let is = await git_folder_is(folder);
    let absent = not(is);
    if (absent) {
      let skipped = null;
      return skipped;
    }
    let result = await git_ac_call_folder_files(folder, f_name, args, files);
    return result;
  }
  let all = await repos_paths_map_unordered(lambda);
  let real = list_filter_null_not_is(all);
  return real;
}
