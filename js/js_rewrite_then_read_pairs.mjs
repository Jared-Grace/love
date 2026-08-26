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
  ("Every pairing this tree makes of a function it names as a word and a function it imports, in a tree that also asks for a named function to be written out again. It is the shape a stale read is made of, said before anything has been asked about what those imports reach.");
  ("A TREE THAT REWRITES NOTHING IS NOT ASKED THE REST. The pairing is a cross of two lists and the reading built on it walks the import graph once per callee, so the cheap test comes first and answers nothing at all for almost every function in the repo.");
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
  let targets = js_rewrite_targets(ast);
  let pairs = [];
  function target_lambda(target) {
    function callee_lambda(callee) {
      let seam_is = list_includes(seams, callee);
      let self_is = equal(callee, f_name);
      let skipped = seam_is || self_is;
      let kept = not(skipped);
      if (kept) {
        let pair = {
          target,
          callee,
        };
        list_add(pairs, pair);
      }
    }
    each(imports, callee_lambda);
  }
  each(targets, target_lambda);
  return pairs;
}
