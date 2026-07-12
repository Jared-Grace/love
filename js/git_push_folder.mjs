import { git_push_folder_now } from "./git_push_folder_now.mjs";
import { date_diff_mins } from "./date_diff_mins.mjs";
import { path_join } from "./path_join.mjs";
import { data_set } from "./data_set.mjs";
import { lambda_get } from "./lambda_get.mjs";
import { date_to } from "./date_to.mjs";
import { data_property_get_generic } from "./data_property_get_generic.mjs";
import { user_data_path } from "./user_data_path.mjs";
import { git_push } from "./git_push.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { date_iso_to } from "./date_iso_to.mjs";
import { date_now } from "./date_now.mjs";
import { catch_log_async } from "./catch_log_async.mjs";
export async function git_push_folder(folder) {
  await catch_log_async(lambda);
  async function lambda() {
    let now = date_now();
    let now_iso = date_iso_to(now);
    let property_name = function_name_combine(git_push.name, "when");
    let d_path = user_data_path();
    let joined = path_join([folder, d_path]);
    let before_iso = await data_property_get_generic(joined, property_name);
    let before = date_to(before_iso);
    let mins = date_diff_mins(now, before);
    if (mins < 5) {
      return;
    }
    await git_push_folder_now(folder);
    let lambda$previous = lambda_get(now_iso);
    await data_set(lambda$previous, property_name, joined);
  }
}
