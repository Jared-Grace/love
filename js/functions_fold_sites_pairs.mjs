import { functions_fold_sites_pairs_candidates } from "./functions_fold_sites_pairs_candidates.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { null_is } from "./null_is.mjs";
import { list_tally } from "./list_tally.mjs";
import { functions_fold_shape_of } from "./functions_fold_shape_of.mjs";
export function functions_fold_sites_pairs(
  entries,
  callee_index,
  shapes,
  block_tallies,
  blocks_kept,
) {
  arguments_assert(arguments, 5);
  let sites = [];
  for (let x_name in entries) {
    let pattern = entries[x_name].pattern;
    if (not(pattern)) {
      continue;
    }
    function lambda2(s) {
      let r = s.callee;
      return r;
    }
    let x_callees = property_get(pattern, "pattern_sigs").map(lambda2);
    function lambda3(c) {
      let r3 = callee_index[c] || {};
      return r3;
    }
    let candidate_sets = x_callees.map(lambda3);
    if (equal(candidate_sets.length, 0)) {
      continue;
    }
    function lambda5(name) {
      function lambda4(set) {
        let r4 = set[name];
        return r4;
      }
      let r5 = not_equal(name, x_name) && candidate_sets.every(lambda4);
      return r5;
    }
    let candidates = object_property_names(candidate_sets[0]).filter(lambda5);
    ("What x wants, counted. Reading a candidate's shape and trying the fold against it was ninety-two percent of this gate, measured 2026-08-12, and nearly all of it was spent on files that could not have held the body however hard they were read.");
    ("The cheap question asked first is whether some single run of the candidate calls everything x calls, as many times as x calls it. That is necessary for a fold and nothing like sufficient, which is the right shape for a question asked before an expensive one: it can only ever send work away that was going to come back empty.");
    ("Counted rather than merely present, and per run rather than per file, because both weaker forms let through exactly the files that are slowest to read - the large ones, which call everything somewhere.");
    ("Measured over the whole repo: 65,677 pairings fell to 25,728 for two tenths of a second of counting, and every site found without it was still found with it.");
    function lambda6(c) {
      let missing = null_is(c);
      let r6 = not(missing);
      return r6;
    }
    let list = x_callees.filter(lambda6);
    let x_wanted = list_tally(list);
    let x_ast = functions_fold_shape_of(x_name, shapes, entries);
    functions_fold_sites_pairs_candidates(
      candidates,
      block_tallies,
      x_wanted,
      shapes,
      entries,
      blocks_kept,
      x_ast,
      sites,
      x_name,
    );
  }
  return sites;
}
