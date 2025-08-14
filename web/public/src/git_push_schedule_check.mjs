import { git_push_schedule_command } from "./git_push_schedule_command.mjs";
import { command_line } from "./command_line.mjs";
import { command_line_git_prefix } from "./command_line_git_prefix.mjs";
import { git_push_command } from "./git_push_command.mjs";
import { folder_current } from "./folder_current.mjs";
import { path_resolve } from "./path_resolve.mjs";
import { marker } from "./marker.mjs";
export async function git_push_schedule_check() {
  marker("1");
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
  let command = command;
  let stdout = await command_line(command);
}
