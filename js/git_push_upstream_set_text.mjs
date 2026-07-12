import { git_push_text } from "./git_push_text.mjs";
import { text_combine } from "./text_combine.mjs";
export function git_push_upstream_set_text() {
  let v = text_combine(git_push_text(), " --set-upstream origin main");
  return v;
}
