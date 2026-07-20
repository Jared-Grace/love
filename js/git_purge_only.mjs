import { py_exe_name } from "./py_exe_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { git_purge_only_after } from "./git_purge_only_after.mjs";
import { command_line } from "./command_line.mjs";
export async function git_purge_only(f_path) {
  await command_line("pip install git-filter-repo");
  let n = py_exe_name();
  let combined = text_combine_multiple([
    n,
    " -m git_filter_repo --force --path ",
    f_path,
    " --invert-paths",
  ]);
  await command_line(combined);
  await git_purge_only_after();
}
