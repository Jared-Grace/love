import { list_includes_not } from "./list_includes_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_names } from "./functions_names.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_suffix_change } from "./text_suffix_change.mjs";
import { text_size } from "./text_size.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_skip } from "./text_skip.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export async function baselines_prefix_split() {
  "Every ratchet whose record and whose rewriter are filed under different names, listed by the record.";
  "A ratchet is four functions that only find each other by sharing a prefix. Where the sharing breaks, the three you did not write yourself become unfindable: eight of the twenty-five here keep the record under one word and the rewrite under another, so asking for the rewrite beside a record you are reading answers that no such file exists. It does exist. It is filed elsewhere.";
  "That is not a style complaint. The rewriter is what somebody reaches for at the one moment the gate is red and they are trying to get back to green, and a name that cannot be guessed from the one in front of them is a name they will not reach.";
  "Only the rewriter is asked about, out of the three. It is the one a person looks for by hand; the other two are reached by the code and would be a missing import rather than a search that comes back empty.";
  "★ THE QUESTION IS WHETHER A REWRITER SHARES THE RECORD'S PREFIX, AND NOT WHETHER ONE IS SPELLED write. This was asked the narrow way at first - is there a function with this record's prefix and the word write on the end - and the narrow way reported a family that is perfectly findable. The recordings heard too badly to follow keep their record under one prefix and two rewriters under the same one, an add that blesses named recordings and a shrink that drops the ones that stopped offending, and neither is called write. Both are sitting next to the record where anybody reading it would look, which is the whole of what the sentences above ask for.";
  "That family has no plain write on purpose, so demanding one would have been demanding the dangerous function back. Growing its record means saying a recording of the right psalm was simply sung too unclearly, which its own prose insists is a judgment somebody makes per recording after listening to the transcript - a command that wrote the whole offending set down at once is exactly the blanket blessing it was split in two to prevent. A gate that can only be satisfied by writing that command is a gate asking for harm.";
  "So a rewriter is anything sharing the prefix that is not one of the three readers - the record's own path, the reading of it, and the refusal to grow it. Spelled as the complement rather than as a list of blessed words, because a list of words is the same narrowing again one step along: the next family will reseed or rekey or hand over, and each of those would have to be remembered here before the family could be found. Measured over all eighty eight records, this changes exactly one verdict and loosens nothing - eighty seven of them do have a plain write, and the fault this was built for is untouched, since a rewriter filed under a longer head word does not share the record's prefix and so is still not found.";
  arguments_assert(arguments, 0);
  let suffix = "_baseline_path";
  let suffix_family = "_baseline_";
  let readers = ["path", "read", "growth_assert"];
  let names = await functions_names();
  function path_is(name) {
    let ends = text_ends_with(name, suffix);
    return ends;
  }
  let paths = list_filter(names, path_is);
  function split_is(name) {
    let start = text_suffix_change(name, suffix, suffix_family);
    let start_size = text_size(start);
    function family_is(other) {
      let starts = text_starts_with(other, start);
      return starts;
    }
    let family = list_filter(names, family_is);
    function rewriter_is(other) {
      let tail = text_skip(other, start_size);
      let rewriter = list_includes_not(readers, tail);
      return rewriter;
    }
    let rewriters = list_filter(family, rewriter_is);
    let missing = list_empty_is(rewriters);
    return missing;
  }
  let split = list_filter(paths, split_is);
  return split;
}
