import { git_purge_only_after } from "../../../love/public/src/git_purge_only_after.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
export async function git_purge_only(f_path) {
  await command_line("pip install git-filter-repo");
  let stdout = await command_line(
    "filter-repo  --force --path " + f_path + " --invert-paths",
  );
  await git_purge_only_after();
}
