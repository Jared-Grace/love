import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { fn_name_arg_get } from "./fn_name_arg_get.mjs";
import { js_visit_calls_named } from "./js_visit_calls_named.mjs";
import { list_adder } from "./list_adder.mjs";
import { property_get } from "./property_get.mjs";
export function js_fn_name_literals(ast, f_name) {
  arguments_assert(arguments, 2);
  ("every function name this tree spells out as a string rather than importing it, in the order the tree holds them");
  ("the marker call is what makes such a name a reference at all - a plain string is invisible to anything walking identifiers - so the index that records what a file mentions and the check that every spelled name still answers to something are looking for the same call and reading the same argument. That was written out in both places, and a rule written twice is a rule that can come apart: the check would go on passing while the index recorded something else, and neither would say so.");
  ("the name of the function being read is carried only so that a marker written with something other than a plain string can say which file it is in.");
  function collect(la) {
    function on_call({ args }) {
      let first = fn_name_arg_get(args, f_name);
      let value = property_get(first, "value");
      la(value);
    }
    let f_name2 = fn_name("fn_name");
    js_visit_calls_named(ast, f_name2, on_call);
  }
  let names = list_adder(collect);
  return names;
}
