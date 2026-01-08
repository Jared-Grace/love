import { command_line_git } from "../../../love/public/src/command_line_git.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
import { git_remove } from "../../../love/public/src/git_remove.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { repos_gitignore_overwrite } from "../../../love/public/src/repos_gitignore_overwrite.mjs";
export async function git_purge() {
  marker("1");
  const f_path = "firebase-debug.log";
  await git_remove(f_path);
  await repos_gitignore_overwrite();
  let commands = [, "git filter-repo --" + f_path + " --invert-paths"];
  await command_line("pip install git-filter-repo");
  await command_line_git(command_git);
}
