import { git_push_text } from "../../../love/public/src/git_push_text.mjs";
export function git_push_upstream_set_text() {
  let v = git_push_text() + " --set-upstream origin main";
  return v;
}
