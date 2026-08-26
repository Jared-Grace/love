import { arguments_assert } from "./arguments_assert.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_get_try } from "./list_get_try.mjs";
import { js_literal_text_is } from "./js_literal_text_is.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
import { list_add } from "./list_add.mjs";
import { js_visit_calls_named_nodes } from "./js_visit_calls_named_nodes.mjs";
export function js_calls_named_literal_argument(ast, f_name, literal) {
  "$plain literal";
  arguments_assert(arguments, 3);
  ("Every call in this file that hands one named function a single written-out word, and that word is the one being asked about.");
  ("This is what tells a caller who meant a particular thing apart from a caller who meant whatever it was handed. Both call the same helper with one thing, so counting what they hand over cannot separate them, and only the caller whose argument is written into the line can be moved to a helper that already knows the answer.");
  ("The calls are gathered and handed back rather than changed here, so that the same reading serves both the question of which files need the change and the change itself. A reading that only the change can use has to be written twice and the two drift.");
  ("A call handing over anything else - a name, a working out, more than one thing - is not gathered. That is the whole safety of it: the callers that meant something else are left alone by the test rather than by anybody reading them.");
  let found = [];
  function lambda(node) {
    let args = js_call_arguments_get(node);
    let count = list_size(args);
    let single = equal(count, 1);
    if (not(single)) {
      return;
    }
    let argument = list_get_try(args, 0);
    let words_is = js_literal_text_is(argument);
    if (not(words_is)) {
      return;
    }
    let value = js_literal_value_get(argument);
    let same = equal(value, literal);
    if (not(same)) {
      return;
    }
    list_add(found, node);
  }
  js_visit_calls_named_nodes(ast, f_name, lambda);
  return found;
}
