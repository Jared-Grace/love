import { git_push_repos } from "./git_push_repos.mjs";
import { catch_log_async } from "./catch_log_async.mjs";
import { sleep_seconds } from "./sleep_seconds.mjs";
import { git_push_auto_seconds } from "./git_push_auto_seconds.mjs";
export async function git_push_auto() {
  let seconds = git_push_auto_seconds();
  while (true) {
    await catch_log_async(git_push_repos);
    await sleep_seconds(seconds);
  }
}
