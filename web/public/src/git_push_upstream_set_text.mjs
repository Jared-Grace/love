import { git_push_text } from "../../../love/public/src/git_push_text.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function git_push_upstream_set_text() {
  let v = text_combine(git_push_text(), " --set-upstream origin main");
  return v;
}
