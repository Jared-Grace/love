import { git_current_run } from "./git_current_run.mjs";
import { git_push_upstream_set_words } from "./git_push_upstream_set_words.mjs";
export async function git_push_upstream_set() {
  let words = git_push_upstream_set_words();
  let v = await git_current_run(words);
  return v;
}
