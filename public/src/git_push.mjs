import { date_ms_to_hours } from "./date_ms_to_hours.mjs";
import { date_diff_ms } from "./date_diff_ms.mjs";
import { log } from "./log.mjs";
import { lambda_get } from "./lambda_get.mjs";
import { date_to } from "./date_to.mjs";
import { date_iso_to } from "./date_iso_to.mjs";
import { date_now } from "./date_now.mjs";
import { data_property_get } from "./data_property_get.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { data_set } from "./data_set.mjs";
import { git_push_command } from "./git_push_command.mjs";
import { command_line_git } from "./command_line_git.mjs";
import { catch_log_async } from "./catch_log_async.mjs";
export async function git_push() {
  const command_git = git_push_command();
  await catch_log_async(lambda);
  async function lambda() {
    const now = date_now();
    let now_iso = date_iso_to(now);
    let property_name = function_name_combine(git_push.name, "when");
    let before_iso = await data_property_get(property_name);
    let before = date_to(before_iso);
    let ms = date_diff_ms(now, before);
    const hours = date_ms_to_hours(ms);
    if (hours < 1) {
      log("less than 1 hour");
      log(hours);
      return;
    }
    await command_line_git(command_git);
    let lambda$previous = lambda_get(now_iso);
    await data_set(lambda$previous, property_name);
  }
}
