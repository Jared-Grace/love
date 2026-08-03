import { list_includes_not } from "./list_includes_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_suffix_change } from "./text_suffix_change.mjs";
export async function baselines_prefix_split() {
  "Every ratchet whose record and whose rewriter are filed under different names, listed by the record.";
  "A ratchet is four functions that only find each other by sharing a prefix. Where the sharing breaks, the three you did not write yourself become unfindable: eight of the twenty-five here keep the record under one word and the rewrite under another, so asking for the rewrite beside a record you are reading answers that no such file exists. It does exist. It is filed elsewhere.";
  "That is not a style complaint. The rewriter is what somebody reaches for at the one moment the gate is red and they are trying to get back to green, and a name that cannot be guessed from the one in front of them is a name they will not reach.";
  "Only the rewriter is asked about, out of the three. It is the one a person looks for by hand; the other two are reached by the code and would be a missing import rather than a search that comes back empty.";
  arguments_assert(arguments, 0);
  let suffix = "_baseline_path";
  let suffix_write = "_baseline_write";
  let names = await functions_names();
  function path_is(name) {
    let ends = text_ends_with(name, suffix);
    return ends;
  }
  let paths = list_filter(names, path_is);
  function split_is(name) {
    let write = text_suffix_change(name, suffix, suffix_write);
    let missing = list_includes_not(names, write);
    return missing;
  }
  let split = list_filter(paths, split_is);
  return split;
}
