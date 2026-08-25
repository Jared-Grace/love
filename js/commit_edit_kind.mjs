import { commit_edit_changed_lines } from "./commit_edit_changed_lines.mjs";
import { commit_edit_diff_kind_named } from "./commit_edit_diff_kind_named.mjs";
import { diff_line_kind } from "./diff_line_kind.mjs";
import { list_add } from "./list_add.mjs";
export async function commit_edit_kind(commit) {
  "What one hand-made commit actually changed, named as the kind of edit it was";
  "The count of hand-made commits on its own overstates the gap badly. Measured over two thousand commits, of four hundred and forty-one single-file hand edits, fifty changed nothing but values written into a record, forty were the canonicalizing pass's own import repair wearing a hand-made label, thirty-nine touched nothing but prose and nine mixed those three together - a hundred and thirty-eight between them, very nearly a third, and not the fifth the reading claimed while a value counted as program. Naming the kind is what turns a raw count into the number that matters - the three hundred and three edits a missing command would actually have made.";
  "A VALUE CHOSEN IS THE LARGEST OF THE THREE AND WAS THE LAST ONE FOUND, which is worth saying because the order the mistakes were fixed in was the reverse of the order they mattered. Prose was separated first and is the smallest, imports next; values were still counted as program while both of those were argued about, and there are more of them than of either.";
  let changed = await commit_edit_changed_lines(commit);
  let kinds = [];
  for (let line of changed) {
    let kind = diff_line_kind(line);
    list_add(kinds, kind);
  }
  let r = commit_edit_diff_kind_named(kinds, changed);
  return r;
}
