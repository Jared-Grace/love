import { folder_user_root } from "./folder_user_root.mjs";
import { path_join } from "./path_join.mjs";
export function facebook_post_log_path() {
  "Where the scheduled facebook runs write their output: a date line from the timer, then whatever the run printed. The crontab spells the same path out, so a move here must move it there too.";
  let left = folder_user_root();
  let r = path_join([left, "facebook_post.log"]);
  return r;
}
