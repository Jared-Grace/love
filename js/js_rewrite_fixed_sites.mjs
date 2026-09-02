import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { each } from "./each.mjs";
import { js_visit_calls_named } from "./js_visit_calls_named.mjs";
import { list_adder } from "./list_adder.mjs";
export function js_rewrite_fixed_sites(ast, writers) {
  arguments_assert(arguments, 2);
  ("Which functions this tree has had written out again by calling a writer that always writes the same file, and where in the source each of those calls sits.");
  ("THE NAME IS NOWHERE IN THE TREE, WHICH IS THE WHOLE DIFFICULTY. A seam is handed the name of what it is about to rewrite, so the call site says what changed; a writer with one fixed file says nothing at the call site but its own name and an empty pair of brackets. The target has to be brought in from the reading that opened that writer, and the caller can only be read against it once somebody has.");
  ("THE PLACE IS CARRIED FOR THE SAME REASON IT IS CARRIED BESIDE A SEAM. Reading a list and then rewriting it is what a careful command does; rewriting it and then reading it is the trap, and a target with no position attached cannot tell those two apart.");
  ("ONE SITE PER TARGET RATHER THAN ONE PER CALL. A writer may write more than one file - the command that lands both per chapter chains writes two - and each of those files is separately something a later step may go on to read stale.");
  function collect(la) {
    function js_rewrite_fixed_sites_writer_lambda(writer) {
      let f_name = property_get(writer, "f_name");
      let targets = property_get(writer, "targets");
      function on_call(called) {
        let node = property_path_get_2(called, "v", "node");
        let at = property_get(node, "start");
        function js_rewrite_fixed_sites_target_lambda(target) {
          let site = {
            target,
            at,
          };
          la(site);
        }
        each(targets, js_rewrite_fixed_sites_target_lambda);
      }
      js_visit_calls_named(ast, f_name, on_call);
    }
    each(writers, js_rewrite_fixed_sites_writer_lambda);
  }
  let sites = list_adder(collect);
  return sites;
}
