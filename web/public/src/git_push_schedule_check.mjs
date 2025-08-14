import { git_push_schedule_task_name } from "./git_push_schedule_task_name.mjs";
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
  let result2 = git_push_schedule_task_name();
  let command = `schtasks /query /tn "${result2}" >nul 2>&1`;
  let stdout = await command_line(command);
}
