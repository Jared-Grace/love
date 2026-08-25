import { commit_edit_lines_placed } from "./commit_edit_lines_placed.mjs";
import { commit_edit_diff_kind_named } from "./commit_edit_diff_kind_named.mjs";
export async function commit_edit_kind(commit) {
  "What one hand-made commit actually changed, named as the kind of edit it was";
  "The count of hand-made commits on its own overstates the gap badly. Measured over two thousand commits, of four hundred and thirty-seven single-file hand edits, a hundred changed nothing but values written into a record, eighty-two wrote a whole new function, forty-two were the canonicalizing pass's own import repair wearing a hand-made label, forty-one touched nothing but prose and twelve mixed those together - two hundred and seventy-seven between them, very nearly two in three. Naming the kind is what turns a raw count into the number that matters - the hundred and sixty edits a missing command would actually have made.";
  "THE READING WAS TOO HIGH FIVE TIMES AND EVERY CORRECTION WENT THE SAME WAY, which is the part worth remembering rather than any one of the numbers. Prose was separated first, then imports, then values, then a whole new function, then the word standing alone that only the file could place - and each one moved work out of the gap and none moved work into it. Read the next figure as an upper bound, because the last four were.";
  let placed = await commit_edit_lines_placed(commit);
  let r = commit_edit_diff_kind_named(placed);
  return r;
}
