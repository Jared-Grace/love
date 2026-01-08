import { git_purge_everyone } from "../../../love/public/src/git_purge_everyone.mjs";
import { command_line_git_multiple } from "../../../love/public/src/command_line_git_multiple.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
export async function git_purge_only(f_path) {
  await command_line("pip install git-filter-repo");
  let commands = [
    "filter-repo --path " + f_path + " --invert-paths",
    "push --force --all",
    "push --force --tags",
  ];
  await command_line_git_multiple(commands);
  await git_purge_everyone();
}
