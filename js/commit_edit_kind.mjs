import { commit_edit_changed_lines } from "./commit_edit_changed_lines.mjs";
import { commit_edit_diff_kind_named } from "./commit_edit_diff_kind_named.mjs";
import { diff_line_kind } from "./diff_line_kind.mjs";
import { list_add } from "./list_add.mjs";
export async function commit_edit_kind(commit) {
  "What one hand-made commit actually changed, named as the kind of edit it was";
  let changed = await commit_edit_changed_lines(commit);
  let kinds = [];
  for (let line of changed) {
    let kind = diff_line_kind(line);
    list_add(kinds, kind);
  }
  let r = commit_edit_diff_kind_named(kinds, changed);
  return r;
}
