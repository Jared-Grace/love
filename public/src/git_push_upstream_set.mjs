import { command_line_git } from "../../../love/public/src/command_line_git.mjs";
import { git_push_upstream_set_text } from "../../../love/public/src/git_push_upstream_set_text.mjs";
export async function git_push_upstream_set() {
  let c = git_push_upstream_set_text();
  let v = await command_line_git(c);
  return v;
}
