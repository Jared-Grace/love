import { js_rewrite_targets_spelled_or_null } from "./js_rewrite_targets_spelled_or_null.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { fn_name } from "./fn_name.mjs";
import { functions_rewrite_seams } from "./functions_rewrite_seams.mjs";
import { js_visit_calls_named } from "./js_visit_calls_named.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_first_try } from "./list_first_try.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_rewrite_targets(ast) {
  arguments_assert(arguments, 1);
  ("Which functions this tree has written out again by name, and where in the source each rewrite was asked for - read from the first argument of every call it makes to a rewriting command, rather than from every name it happens to spell.");
  ("THE PLACE IS CARRIED BECAUSE THE DEFECT IS ABOUT ORDER. Reading a function and then rewriting it is ordinary and safe; rewriting it and then reading it is the trap. A target with no position attached cannot tell those two apart, and answering as though it could would name the careful commands alongside the careless one.");
  ("READING EVERY SPELLED NAME INSTEAD WAS TRIED AND WAS USELESS. A function names things as words for many reasons, and the ones it names most are the small ones every other function also reaches - so a reading built on spelled names alone paired a target like the error thrower with half the repo and separated nothing. Following the argument is what turns a list of mentions back into a list of edits.");
  ("THE ARGUMENT IS FOLLOWED ONE STEP, NO FURTHER. A rewriting command is handed either the word itself or a local bound from the marker call on the line above, and those two shapes are the whole of how this repo spells a name for a command. Anything else - a name arriving as a parameter, or built out of pieces - is answered as nothing, because a guess about what it holds would be a guess this reading then reports as a fact.");
  ("A NAME ARRIVING AS A PARAMETER IS SILENCE RATHER THAN A COMPLAINT, and that is the honest direction. A command told at run time which function to rewrite cannot be read here at all, so naming it would be naming every call site it might ever have.");
  let seams = functions_rewrite_seams();
  let marker_fn_name = fn_name("fn_name");
  function collect(la) {
    function seam_lambda(seam) {
      function on_call(called) {
        let args = property_get(called, "args");
        let first = list_first_try(args);
        let target = js_rewrite_targets_spelled_or_null(
          first,
          ast,
          marker_fn_name,
        );
        let found = null_not_is(target);
        if (found) {
          let node = property_path_get_2(called, "v", "node");
          let at = property_get(node, "start");
          let site = {
            target,
            at,
          };
          la(site);
        }
      }
      js_visit_calls_named(ast, seam, on_call);
    }
    each(seams, seam_lambda);
  }
  let targets = list_adder(collect);
  return targets;
}
