import { path_join } from "./path_join.mjs";
import { data_set } from "./data_set.mjs";
import { lambda_get } from "./lambda_get.mjs";
import { command_line_git_folder } from "./command_line_git_folder.mjs";
import { log_keep } from "./log_keep.mjs";
import { date_diff_hours } from "./date_diff_hours.mjs";
import { date_to } from "./date_to.mjs";
import { data_property_get } from "./data_property_get.mjs";
import { user_repo_path } from "./user_repo_path.mjs";
import { git_push } from "./git_push.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { date_iso_to } from "./date_iso_to.mjs";
import { date_now } from "./date_now.mjs";
import { catch_log_async } from "./catch_log_async.mjs";
import { git_push_command } from "./git_push_command.mjs";
import { marker } from "./marker.mjs";
export async function git_push_folder(folder) {
  marker("1");
  const command_git = git_push_command();
  await catch_log_async(lambda);
  async function lambda() {
    const now = date_now();
    let now_iso = date_iso_to(now);
    let property_name = function_name_combine(git_push.name, "when");
    let d_path = user_repo_path();
    let joined = path_join(segments);
    let before_iso = await data_property_get(property_name, d_path);
    let before = date_to(before_iso);
    const hours = date_diff_hours(now, before);
    if (hours < 1) {
      if (false) {
        log_keep("less than 1 hour:");
        log_keep(hours);
      }
      return;
    }
    await command_line_git_folder(folder, command_git);
    let lambda$previous = lambda_get(now_iso);
    await data_set(lambda$previous, property_name, d_path);
  }
}
