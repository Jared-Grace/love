import { command_line_schtasks } from "./command_line_schtasks.mjs";
import { git_push_schedule_command } from "./git_push_schedule_command.mjs";
export async function git_push_schedule() {
  let command = await git_push_schedule_command();
  let stdout = await command_line_schtasks(command);
}
