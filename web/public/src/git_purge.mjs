import { command_line_git_multiple } from "../../../love/public/src/command_line_git_multiple.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
import { git_remove } from "../../../love/public/src/git_remove.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { repos_gitignore_overwrite } from "../../../love/public/src/repos_gitignore_overwrite.mjs";
export async function git_purge() {
  marker("1");
  const f_path = "firebase-debug.log";
  await git_remove(f_path);
  await repos_gitignore_overwrite();
  await command_line("pip install git-filter-repo");
  let commands = [
    "filter-repo --" + f_path + " --invert-paths",
    "push --force --all",
    "push --force --tags",
  ];
  await command_line_git_multiple(commands);
  let commands_everyone = ["fetch origin", "reset --hard origin/main"];
  await command_line_git_multiple(commands_everyone);
}
