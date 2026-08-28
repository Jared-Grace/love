import { arguments_assert } from "./arguments_assert.mjs";
import { functions_ast_offenders_generic } from "./functions_ast_offenders_generic.mjs";
import { js_rewrite_then_read_pairs } from "./js_rewrite_then_read_pairs.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { each } from "./each.mjs";
import { list_map_async_record_try } from "./list_map_async_record_try.mjs";
import { function_reachable_names } from "./function_reachable_names.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { not } from "./not.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
export async function functions_rewrite_then_read() {
  "Every function that has a named function written out again and then, in the same run, calls something that reads it - each named beside the pairings that say so, and beside how many functions were opened as candidates at all.";
  "A RUN THAT HAS ALREADY LOADED A FUNCTION GOES ON HOLDING THE VERSION IT LOADED, and the file changing underneath it changes nothing about what is in hand. So a command that rewrites a function and then asks anything that reads it is answered about the repo as it was before its own edit. It does not throw and nothing goes red: it answers calmly, and the wrong answer wears the shape of the right one.";
  "IT WAS CALLED A CLASS OF ONE ONCE AND WAS NOT. A sweep in August 2026 found a single member and the reading was left to be done by hand from then on; a second arrived within days, and was found the same way the first was - from an answer that looked wrong for some other reason. Two is enough to stop reading it by hand.";
  "TWO PASSES, BECAUSE ONE OF THE QUESTIONS IS CHEAP AND THE OTHER IS A WALK. Whether a tree rewrites anything at all is read straight off its imports; whether a callee reaches the rewritten name means walking the import graph from that callee, and doing it for every function in the repo would be a walk per function rather than a walk per candidate.";
  "THE WALK IS PAID FOR ONCE PER CALLEE RATHER THAN ONCE PER PAIRING. The same callee turns up under several targets and under several candidates, and its reachable set does not depend on which pairing asked.";
  "A callee whose walk cannot be worked out is dropped rather than kept. It is the quiet direction, and it is the right one here: this reading is answered against a ratchet, and a walk that failed would otherwise add a name nobody can act on and freeze it into the record.";
  "HOW MANY CANDIDATES WERE OPENED COMES BACK BESIDE THEM, because the offenders cannot say. Nothing offending is what a clean repo looks like and also what a first pass that has stopped recognising a rewrite looks like - and that pass is read off imports, so a rename of the writing atoms would empty it in one commit and leave every run after that answering clean about nothing.";
  arguments_assert(arguments, 0);
  let candidates = await functions_ast_offenders_generic(
    js_rewrite_then_read_pairs,
    "pairs",
  );
  let callees = [];
  function functions_rewrite_then_read_candidate_lambda(candidate) {
    let pairs = property_get(candidate, "pairs");
    function functions_rewrite_then_read_pair_lambda(pair) {
      let callee = property_get(pair, "callee");
      list_add_unique(callees, callee);
    }
    each(pairs, functions_rewrite_then_read_pair_lambda);
  }
  each(candidates, functions_rewrite_then_read_candidate_lambda);
  let reached = await list_map_async_record_try(
    callees,
    function_reachable_names,
  );
  let offenders = [];
  function functions_rewrite_then_read_kept_lambda(candidate) {
    let pairs = property_get(candidate, "pairs");
    function functions_rewrite_then_read_stale_is(pair) {
      let callee = property_get(pair, "callee");
      let target = property_get(pair, "target");
      let names = property_get(reached, callee);
      let known = null_not_is(names);
      if (not(known)) {
        return false;
      }
      let reads = list_includes(names, target);
      return reads;
    }
    let stale = list_filter(pairs, functions_rewrite_then_read_stale_is);
    let none = list_empty_is(stale);
    if (not(none)) {
      let f_name = property_get(candidate, "f_name");
      let told = {
        f_name,
        pairs: stale,
      };
      list_add(offenders, told);
    }
  }
  each(candidates, functions_rewrite_then_read_kept_lambda);
  let walked = list_size(candidates);
  let r = {
    walked,
    offenders,
  };
  return r;
}
