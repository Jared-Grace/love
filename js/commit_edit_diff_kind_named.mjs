import { arguments_assert } from "./arguments_assert.mjs";
import { kinds_all_is } from "./kinds_all_is.mjs";
import { diff_line_kind } from "./diff_line_kind.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { commit_edit_callee_swap_is } from "./commit_edit_callee_swap_is.mjs";
import { list_first } from "./list_first.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export function commit_edit_diff_kind_named(kinds, changed) {
  "What one commit's change amounts to, in a few words a person can read down a list of - imports only, prose only, one line added, one call swapped for another, several lines.";
  "A log of commits is read to find the ones worth opening, and a commit that only moved imports about or only reworded a sentence is not one of them. Those two are the commonest kind in this repo, because the canonicalizing pass writes imports on almost every commit, so saying so in three words is most of what the reading is for.";
  "Lines that are prose or imports are set aside first and the words are chosen from what is left, which is why a commit touching thirty import lines and one line of code is called one line of code. Counting the lines rather than the kinds would have called it a large change and hidden the only part anybody needs to look at.";
  "Two lines of code, one taken out and one put in, is looked at once more: where the two differ only in which function is being called, that is worth saying, because it is the shape almost every routing and renaming commit takes and it is always safe to skip.";
  "A VALUE CHOSEN IS SET ASIDE WITH THE OTHER TWO. A number raised in a record or a colour picked is hand-made and always will be, so it is no more a line worth opening than a reworded sentence is, and counting it as program called every such commit several lines of code. It gets a name of its own rather than joining the prose, because a person scanning the log for what changed wants to know which of the two it was.";
  arguments_assert(arguments, 2);
  let only_import = kinds_all_is(kinds, "import");
  if (only_import) {
    let r = "imports only (the canonicalizing pass)";
    return r;
  }
  let only_comment = kinds_all_is(kinds, "comment");
  if (only_comment) {
    let r2 = "comment prose only";
    return r2;
  }
  let only_data = kinds_all_is(kinds, "data");
  if (only_data) {
    let r9 = "values chosen only";
    return r9;
  }
  let code = [];
  for (let line of changed) {
    let kind = diff_line_kind(line);
    let real = equal(kind, "code");
    if (real) {
      list_add(code, line);
    }
  }
  let size = list_size(code);
  let none = equal(size, 0);
  if (none) {
    let r3 = "comment, values and imports only";
    return r3;
  }
  let pair = equal(size, 2);
  if (pair) {
    let swapped = commit_edit_callee_swap_is(code);
    if (swapped) {
      let r4 = "one call, different function put in its place";
      return r4;
    }
    let r5 = "one line of code replaced";
    return r5;
  }
  let single = equal(size, 1);
  if (single) {
    let first = list_first(code);
    let put_in = text_starts_with(first, "+");
    if (put_in) {
      let r6 = "one line of code added";
      return r6;
    }
    let r7 = "one line of code removed";
    return r7;
  }
  let r8 = "several lines of code";
  return r8;
}
