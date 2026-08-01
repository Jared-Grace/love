import { js_call_argument_at_try } from "./js_call_argument_at_try.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { js_visit_calls_named_nodes } from "./js_visit_calls_named_nodes.mjs";
import { not_equal } from "./not_equal.mjs";
export function js_storage_key_word_forwarded_is(ast, seams) {
  "Whether this file hands a storage seam a key word it was given rather than one it spells out. Read-only, pure.";
  "A word written out here, or spelled as a reference here, can be read here. A word that arrives as a plain variable cannot: what it holds was decided by whoever called this function, so the name being published is in their file, not this one. Saying so is what lets the reading go one step out and look there.";
  "A variable is taken as forwarded without asking where it came from. Some of them hold a word worked out on the spot rather than one handed in, and treating those as forwarded only means the callers are read too - and what a caller writes there is dropped unless it answers to a real function. Guessing the other way would lose a published name, and that is the loss with no way back.";
  arguments_assert(arguments, 2);
  let forwarded = false;
  function look(node) {
    let word_node = js_call_argument_at_try(node, "2");
    let variable = js_identifier_name_try(word_node);
    let plain = not_equal(variable, null);
    if (plain) {
      forwarded = true;
    }
  }
  for (let seam of seams) {
    js_visit_calls_named_nodes(ast, seam, look);
  }
  return forwarded;
}
