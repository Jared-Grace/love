import { commit_edit_changed_lines } from "./commit_edit_changed_lines.mjs";
import { commit_edit_diff_kind_named } from "./commit_edit_diff_kind_named.mjs";
import { diff_line_kind } from "./diff_line_kind.mjs";
import { list_add } from "./list_add.mjs";
export async function commit_edit_kind(commit) {
  "What one hand-made commit actually changed, named as the kind of edit it was";
  "The count of hand-made commits on its own overstates the gap badly. Measured over two thousand commits, of four hundred and forty-one single-file hand edits, thirty-nine touched nothing but prose and forty-three were the canonicalizing pass's own import repair wearing a hand-made label - a fifth between them, and not the half this used to claim. Naming the kind is what turns a raw count into the number that matters - the edits a missing command would actually have made";
  "A LINE OF DATA STILL COUNTS AS CODE HERE, and that is the limitation left standing. A key inside a written-out record opens with a piece of text but closes the way a value does, so it is no longer mistaken for prose - and nothing tells it apart from a line of program either, which leaves a colour picked or a word added to a list filed under the very gap this reading exists to size.";
  let changed = await commit_edit_changed_lines(commit);
  let kinds = [];
  for (let line of changed) {
    let kind = diff_line_kind(line);
    list_add(kinds, kind);
  }
  let r = commit_edit_diff_kind_named(kinds, changed);
  return r;
}
