import { git_push_schedule_task_name } from "./git_push_schedule_task_name.mjs";
import { git_push_command } from "./git_push_command.mjs";
import { command_line_git_prefix } from "./command_line_git_prefix.mjs";
import { path_resolve } from "./path_resolve.mjs";
import { folder_current } from "./folder_current.mjs";
export async function git_push_schedule_command() {
  if (false) {
  }
  let paths = folder_current();
  let result = await path_resolve(paths);
  let command =
    'schtasks /create /sc daily /st 08:00 /tn "' +
    git_push_schedule_task_name() +
    '" /tr "cmd /c cd /d ' +
    result +
    " && " +
    command_line_git_prefix() +
    git_push_command() +
    '"';
  return command;
}
