import { arguments_assert } from "./arguments_assert.mjs";
import { js_call_argument_at_try } from "./js_call_argument_at_try.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { js_visit_calls_named_nodes } from "./js_visit_calls_named_nodes.mjs";
import { not_equal } from "./not_equal.mjs";
export function js_storage_key_word_forwarded_name_try(ast, seams) {
  "The variable this file hands a storage seam as the key word, or null where it writes the word out itself. Read-only, pure.";
  "A word that arrives in a variable cannot be read here, because what it holds was decided somewhere else. Naming the variable is what lets the caller ask the next question - whether it is one of this function's own parameters, and if so which one - and that question needs the name rather than a yes.";
  "Its neighbour asks only whether there is one at all, and is this reading with the name thrown away, so the two cannot come apart.";
  "The first one found is the answer. A function handing two different words to two different seams would be a front door with two key slots, and there is none; the day one appears, the reading that finds it is this one saying only one of them.";
  arguments_assert(arguments, 2);
  let forwarded = null;
  function look(node) {
    let word_node = js_call_argument_at_try(node, "2");
    let variable = js_identifier_name_try(word_node);
    let plain = not_equal(variable, null);
    if (plain) {
      forwarded = variable;
    }
  }
  for (let seam of seams) {
    js_visit_calls_named_nodes(ast, seam, look);
  }
  return forwarded;
}
