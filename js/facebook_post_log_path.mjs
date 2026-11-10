import { folder_user_root } from "./folder_user_root.mjs";
import { text_combine } from "./text_combine.mjs";
export function facebook_post_log_path() {
  "Where the scheduled facebook runs write their output: a date line from the timer, then whatever the run printed. The crontab spells the same path out, so a move here must move it there too.";
  let left = folder_user_root();
  let r = text_combine(left, "facebook_post.log");
  return r;
}
