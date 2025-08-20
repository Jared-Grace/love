import { date_now_iso } from "./date_now_iso.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { data_set } from "./data_set.mjs";
import { git_push_command } from "./git_push_command.mjs";
import { command_line_git } from "./command_line_git.mjs";
import { catch_log_async } from "./catch_log_async.mjs";
export async function git_push() {
  const command_git = git_push_command();
  await catch_log_async(lambda);
  async function lambda() {
    await command_line_git(command_git);
    let combined = function_name_combine(git_push.name, "when");
    await data_set(date_now_iso, combined);
  }
}
