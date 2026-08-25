import { commit_edit_changed_lines } from "./commit_edit_changed_lines.mjs";
import { commit_edit_diff_kind_named } from "./commit_edit_diff_kind_named.mjs";
import { diff_line_kind } from "./diff_line_kind.mjs";
import { list_add } from "./list_add.mjs";
export async function commit_edit_kind(commit) {
  "What one hand-made commit actually changed, named as the kind of edit it was";
  "The count of hand-made commits on its own overstates the gap badly. Half of them turn out to be a comment reworded or a colour picked, which no command was ever going to make, and others are the canonicalizing pass's own import repair wearing a hand-made label. Naming the kind is what turns a raw count into the number that matters - the edits a missing command would actually have made";
  let changed = await commit_edit_changed_lines(commit);
  let kinds = [];
  for (let line of changed) {
    let kind = diff_line_kind(line);
    list_add(kinds, kind);
  }
  let r = commit_edit_diff_kind_named(kinds, changed);
  return r;
}
