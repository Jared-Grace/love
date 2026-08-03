import { arguments_assert } from "./arguments_assert.mjs";
import { js_call_argument_at_try } from "./js_call_argument_at_try.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { js_visit_calls_named_nodes } from "./js_visit_calls_named_nodes.mjs";
import { not_equal } from "./not_equal.mjs";
export function js_call_argument_forwarded_name_try(ast, called, place) {
  "The variable this file hands one of these calls at that place, or null where every one of them is given something it wrote itself. Read-only, pure.";
  "A word that arrives in a variable cannot be read here, because what it holds was decided somewhere else. Naming the variable is what lets the caller ask the next question - whether it is one of this function's own parameters, and if so which one - and that question needs the name rather than a yes.";
  "Which calls to look at and which of their arguments to read are both received, because the door onto browser storage takes its key word second and the door onto the address of a page takes its field first. A reading that fixed the place would answer for one of them and be quietly wrong about the other.";
  "The first one found is the answer. A function handing two different words to two different doors would be a front door with two word slots, and there is none; the day one appears, the reading that finds it is this one saying only one of them.";
  arguments_assert(arguments, 3);
  let forwarded = null;
  function look(node) {
    let word_node = js_call_argument_at_try(node, place);
    let variable = js_identifier_name_try(word_node);
    let plain = not_equal(variable, null);
    if (plain) {
      forwarded = variable;
    }
  }
  for (let name of called) {
    js_visit_calls_named_nodes(ast, name, look);
  }
  return forwarded;
}
