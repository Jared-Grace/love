import { diff_lines_kind_counts } from "./diff_lines_kind_counts.mjs";
import { property_get } from "./property_get.mjs";
import { equal_not } from "./equal_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { commit_edit_changed_lines } from "./commit_edit_changed_lines.mjs";
import { add } from "./add.mjs";
import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
export async function commit_edit_prose_verb_named(commit) {
  "Which of the prose-writing verbs would have made one hand-made edit outright, or that no single one of them would have.";
  "COUNTING PROSE EDITS WAS NEVER THE QUESTION. Knowing that a paragraph was reworded by hand says nothing about whether a command was there to be reached for, and the reading beside this one stops exactly there. Three verbs write a prose line - one adds a line, one takes a line away, one puts different words in a line that is already there - so the answer worth having is which of the three fits, and how often none of them does.";
  "THE SHAPE OF THE DIFFERENCE DECIDES, and it decides completely. A line put in with none taken out is an addition and nothing else; a line taken out with none put in is a removal; one for one is a rewording of a single line, which is what the replacing verb does. Anything larger is a paragraph rewritten, where the count of lines changed and so no one verb spans it.";
  "AN EDIT THAT TOUCHED CODE IS NOT ASKED ABOUT AT ALL, because the question is what a prose verb would have made outright, and an edit that also changed code was never going to be made by one command whatever its prose looked like.";
  arguments_assert(arguments, 1);
  let changed = await commit_edit_changed_lines(commit);
  let counts = diff_lines_kind_counts(changed);
  let put_in = property_get(counts, "put_in");
  let taken_out = property_get(counts, "taken_out");
  let code = property_get(counts, "code");
  let touched_code_is = equal_not(code, 0);
  if (touched_code_is) {
    let r = "not prose alone";
    return r;
  }
  let left = add(put_in, taken_out);
  let untouched_is = equal(left, 0);
  if (untouched_is) {
    let r2 = "no prose touched";
    return r2;
  }
  let added_only_is = equal(taken_out, 0);
  if (added_only_is) {
    let r3 = fn_name("function_prose_add");
    return r3;
  }
  let removed_only_is = equal(put_in, 0);
  if (removed_only_is) {
    let r4 = fn_name("function_prose_remove");
    return r4;
  }
  let one_for_one_is = equal(put_in, 1) && equal(taken_out, 1);
  if (one_for_one_is) {
    let r5 = fn_name("function_prose_replace");
    return r5;
  }
  let r6 = "no one verb spans it";
  return r6;
}
