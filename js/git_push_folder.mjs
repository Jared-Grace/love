import { git_remote_origin_is } from "./git_remote_origin_is.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
import { fn_name } from "./fn_name.mjs";
import { git_push_folder_now } from "./git_push_folder_now.mjs";
import { date_diff_mins } from "./date_diff_mins.mjs";
import { path_join } from "./path_join.mjs";
import { data_set } from "./data_set.mjs";
import { lambda_get } from "./lambda_get.mjs";
import { date_to } from "./date_to.mjs";
import { data_property_get_generic } from "./data_property_get_generic.mjs";
import { user_data_path } from "./user_data_path.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { date_iso_to } from "./date_iso_to.mjs";
import { date_now } from "./date_now.mjs";
import { catch_log_async } from "./catch_log_async.mjs";
export async function git_push_folder(folder) {
  await catch_log_async(lambda);
  async function lambda() {
    let now = date_now();
    let now_iso = date_iso_to(now);
    let left = fn_name("git_push");
    let property_name = function_name_combine(left, "when");
    let d_path = user_data_path();
    let joined = path_join([folder, d_path]);
    let before_iso = await data_property_get_generic(joined, property_name);
    let before = date_to(before_iso);
    let mins = date_diff_mins(now, before);
    if (less_than(mins, 5)) {
      return;
    }
    ("A repository with nowhere to push to is passed over here rather than pushed at and left to fail. Both endings leave the machine untouched, so nothing about what reaches the internet changes; what changes is that one of them is quiet. A push with no remote complains every five minutes for as long as the machine is on, and a log that always carries the same complaint is a log nobody reads, which costs the complaints that matter.");
    ("Kept deliberately off the internet is a real thing for a folder to be, and this is what makes it cost nothing. A repository with no remote sits beside the others and is reached by every sweep and every transform exactly as they are - it simply never leaves. Adding a remote is a deliberate act, and this reads that act rather than a list of which folders are meant to be private, which would be right on the day it was typed and wrong afterwards.");
    ("It is asked here and not at the top so git is only asked when a push was otherwise about to happen.");
    let somewhere = await git_remote_origin_is(folder);
    let nowhere = not(somewhere);
    if (nowhere) {
      return;
    }
    await git_push_folder_now(folder);
    let lambda$previous = lambda_get(now_iso);
    await data_set(lambda$previous, property_name, joined);
  }
}
