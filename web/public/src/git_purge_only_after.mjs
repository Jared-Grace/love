import { git_purge_everyone } from "../../../love/public/src/git_purge_everyone.mjs";
import { command_line_git_multiple } from "../../../love/public/src/command_line_git_multiple.mjs";
export async function git_purge_only_after() {
  let commands = [
    "remote add origin https://github.com/Jared-Grace/love.git",
    "push --force --all",
    "push --force --tags",
  ];
  await command_line_git_multiple(commands);
  await git_purge_everyone();
}
