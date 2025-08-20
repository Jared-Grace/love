import { data_set } from "./data_set.mjs";
import { git_push_command } from "./git_push_command.mjs";
import { command_line_git } from "./command_line_git.mjs";
import { catch_log_async } from "./catch_log_async.mjs";
export async function git_push() {
  const command_git = git_push_command();
  await catch_log_async(lambda);
  async function lambda() {
    await command_line_git(command_git);
    await data_set(value_get, property_name);
  }
}
