import { property_greater_than } from "./property_greater_than.mjs";
import { js_list_calls_nodes } from "./js_list_calls_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { js_rewrite_targets } from "./js_rewrite_targets.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
import { functions_rewrite_seams } from "./functions_rewrite_seams.mjs";
import { js_flo_name } from "./js_flo_name.mjs";
import { js_imports } from "./js_imports.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { not } from "./not.mjs";
export function js_rewrite_then_read_pairs(ast) {
  arguments_assert(arguments, 1);
  ("Every pairing this tree makes of a function it has written out again by name and a function it goes on to call after that, further down the same body. It is the shape a stale read is made of, said before anything has been asked about what those calls reach.");
  ("A TREE THAT REWRITES NOTHING IS NOT ASKED THE REST. The reading built on this walks the import graph once per callee, so the cheap test comes first and answers nothing at all for almost every function in the repo.");
  ("AFTER, NOT MERELY ALONGSIDE. Reading a function and then rewriting it is what a careful command does - it looks at the list, sees the name is not on it, and adds it. Rewriting it and then reading it is the trap. Ignoring the order named both, and the two it named were both of the careful kind, so the whole answer was noise.");
  ("The order is read off where the calls sit in the source rather than off anything that follows what runs. Every function here is straight-line by the time it is canonical, so a call written below another is a call made after it, and the one shape that would break that reading - work handed to a callback to run later - is the shape this repo's own pass writes back out as a wait.");
  ("THE TARGET IS READ OFF THE REWRITING CALL RATHER THAN OFF EVERY WORD THE TREE SPELLS. Both were built; the wider one is worthless. A function names small things as words constantly, and the small things are exactly the ones every other function also reaches, so pairing on spelled names alone put the error thrower beside half the repo and told nobody anything.");
  ("THE SEAMS THEMSELVES ARE NOT CALLEES. A rewriting command reaches most of the repo by construction, so pairing a target with the very command that wrote it would name every candidate and separate none of them.");
  ("THE PLAINEST CASE IS KEPT RATHER THAN SKIPPED: a tree that spells a name, has it written out again, and then imports and calls that very name. It looks like a pairing of something with itself and it is the strongest reading there is - the loaded copy and the rewritten file are the same function, so there is no import graph to walk before the answer is known.");
  ("The tree is not paired with itself, though. A function that rewrote itself and then called itself would be reported here forever and there would be nothing to do about it.");
  let imports = js_imports(ast);
  let seams = functions_rewrite_seams();
  let rewriting = list_intersect(imports, seams);
  let rewrites_nothing = list_empty_is(rewriting);
  if (rewrites_nothing) {
    let none = [];
    return none;
  }
  let f_name = js_flo_name(ast);
  let sites = js_rewrite_targets(ast);
  let nodes = js_list_calls_nodes(ast);
  let pairs = [];
  function site_lambda(site) {
    let target = property_get(site, "target");
    let at = property_get(site, "at");
    let callees = [];
    function node_lambda(node) {
      let callee = js_call_callee_name_try(node);
      let named = null_not_is(callee);
      let imported = named && list_includes(imports, callee);
      let seam_is = list_includes(seams, callee);
      let self_is = equal(callee, f_name);
      let after = property_greater_than(node, "start", at);
      let kept = imported && after && not(seam_is) && not(self_is);
      if (kept) {
        list_add_unique(callees, callee);
      }
    }
    each(nodes, node_lambda);
    function callee_lambda(callee) {
      let pair = {
        target,
        callee,
      };
      list_add(pairs, pair);
    }
    each(callees, callee_lambda);
  }
  each(sites, site_lambda);
  return pairs;
}
