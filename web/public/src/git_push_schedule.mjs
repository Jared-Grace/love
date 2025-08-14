import { command_line_git_prefix } from "./command_line_git_prefix.mjs";
import { git_push_command } from "./git_push_command.mjs";
import { folder_current } from "./folder_current.mjs";
import { path_resolve } from "./path_resolve.mjs";
export async function git_push_schedule() {
  let paths = folder_current();
  let result = await path_resolve(paths);
  let text =
    'schtasks /create /sc daily /st 08:00 /tn "GitPushDaily" /tr "cmd /c cd /d ' +
    result +
    " && " +
    command_line_git_prefix() +
    git_push_command() +
    '"';
  ii;
}
