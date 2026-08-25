import { arguments_assert } from "./arguments_assert.mjs";
import { commit_edit_changed_lines } from "./commit_edit_changed_lines.mjs";
import { diff_lines_kind_counts } from "./diff_lines_kind_counts.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
export async function commit_edit_prose_counts(commit) {
  "One hand-made edit said as three numbers - how many lines of paragraphs written for a reader it put in, how many it took away, and how many lines of everything else it touched.";
  "THE THIRD NUMBER IS EVERYTHING THAT IS NOT PROSE ROLLED TOGETHER, code and values alike, and it is rolled together here because every reading built on this asks the same thing of it: whether the edit stayed inside the prose or did not. Which sort of other thing was touched is a question none of them ask, so keeping the two apart out here would only invite one of them to answer it by accident.";
  "IMPORTS ARE IN NEITHER NUMBER, because the canonicalizing pass writes them and a hand-made label on that work is the label being wrong rather than a person having edited an import.";
  "It is one function rather than the same nine lines at the top of each reading, so two readings of the same commit cannot come to disagree about what it did while looking as though they agree.";
  arguments_assert(arguments, 1);
  let changed = await commit_edit_changed_lines(commit);
  let counts = diff_lines_kind_counts(changed);
  let put_in = property_get(counts, "prose_put_in");
  let taken_out = property_get(counts, "prose_taken_out");
  let code = property_get(counts, "code");
  let data_put_in = property_get(counts, "data_put_in");
  let data_taken_out = property_get(counts, "data_taken_out");
  let data = add(data_put_in, data_taken_out);
  let else_touched = add(code, data);
  let r = {
    put_in,
    taken_out,
    else_touched,
  };
  return r;
}
