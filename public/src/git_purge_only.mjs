import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { git_purge_only_after } from "../../../love/public/src/git_purge_only_after.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
export async function git_purge_only(f_path) {
  await command_line("pip install git-filter-repo");
  let combined = text_combine_multiple(list);
  let stdout = await command_line(
    " -m git_filter_repo --force --path " + f_path + " --invert-paths",
  );
  await git_purge_only_after();
}
