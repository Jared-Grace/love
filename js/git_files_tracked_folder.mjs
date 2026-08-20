import { git_folder_run } from "./git_folder_run.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
export async function git_files_tracked_folder(folder) {
  "Every file git is keeping in one repository, each said as the path from that repository's own root.";
  "Asked of git rather than walked off the disk, so what comes back is what the repository is made of and not what happens to be sitting beside it. A folder of local records, a folder of downloaded packages and a half-finished scratch file are all on the disk and none of them are the repo.";
  let listed = await git_folder_run(folder, ["ls-files"]);
  let lines = text_split_newline(listed);
  let paths = list_filter_text_empty_not_is(lines);
  return paths;
}
