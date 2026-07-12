import { git_push_upstream_set_text } from "./git_push_upstream_set_text.mjs";
import { git_purge_everyone } from "./git_purge_everyone.mjs";
import { command_line_git_multiple } from "./command_line_git_multiple.mjs";
export async function git_purge_only_after() {
  let v = git_push_upstream_set_text();
  let commands = [
    "remote add origin https://github.com/Jared-Grace/love.git",
    v,
    "push --force --all",
    "push --force --tags",
  ];
  await command_line_git_multiple(commands);
  await git_purge_everyone();
}
