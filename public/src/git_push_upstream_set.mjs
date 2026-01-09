import { command_line_git } from "../../../love/public/src/command_line_git.mjs";
import { git_push_upstream_set_text } from "../../../love/public/src/git_push_upstream_set_text.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function git_push_upstream_set() {
  marker("1");
  let c = git_push_upstream_set_text();
  let v = await command_line_git(c);
  return v;
}
