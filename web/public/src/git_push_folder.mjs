import { path_join } from "../../../love/public/src/path_join.mjs";
import { data_set } from "../../../love/public/src/data_set.mjs";
import { lambda_get } from "../../../love/public/src/lambda_get.mjs";
import { command_line_git_folder } from "../../../love/public/src/command_line_git_folder.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { date_diff_hours } from "../../../love/public/src/date_diff_hours.mjs";
import { date_to } from "../../../love/public/src/date_to.mjs";
import { data_property_get } from "../../../love/public/src/data_property_get.mjs";
import { user_repo_path } from "../../../love/public/src/user_repo_path.mjs";
import { git_push } from "../../../love/public/src/git_push.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { date_iso_to } from "../../../love/public/src/date_iso_to.mjs";
import { date_now } from "../../../love/public/src/date_now.mjs";
import { catch_log_async } from "../../../love/public/src/catch_log_async.mjs";
import { git_push_command } from "../../../love/public/src/git_push_command.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function git_push_folder(folder) {
  marker("1");
  const command_git = git_push_command();
  await catch_log_async(lambda);
  async function lambda() {
    const now = date_now();
    let now_iso = date_iso_to(now);
    let property_name = function_name_combine(git_push.name, "when");
    let d_path = user_repo_path();
    let joined = path_join([folder, d_path]);
    let before_iso = await data_property_get(property_name, joined);
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
    await data_set(lambda$previous, property_name, joined);
  }
}
