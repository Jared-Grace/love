import { git_push_upstream_set_words } from "./git_push_upstream_set_words.mjs";
import { git_purge_everyone } from "./git_purge_everyone.mjs";
import { git_current_run_multiple } from "./git_current_run_multiple.mjs";
export async function git_purge_only_after() {
  let upstream = git_push_upstream_set_words();
  let commands = [
    ["remote", "add", "origin", "https://github.com/Jared-Grace/love.git"],
    upstream,
    ["push", "--force", "--all"],
    ["push", "--force", "--tags"],
  ];
  await git_current_run_multiple(commands);
  await git_purge_everyone();
}
