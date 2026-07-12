import { command_line_git_current } from "./command_line_git_current.mjs";
import { git_push_upstream_set_text } from "./git_push_upstream_set_text.mjs";
export async function git_push_upstream_set() {
  let c = git_push_upstream_set_text();
  let v = await command_line_git_current(c);
  return v;
}
