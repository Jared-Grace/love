import { js_call_named_first_argument_names } from "./js_call_named_first_argument_names.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
export function qa_gate_asserted_empty_names(ast) {
  "The names a gate hands to an emptiness check - the lists it is about to refuse to have anything in.";
  "They are worth knowing apart from every other name in the function because of what is true of them on a run that passes: they are empty. So a number worked out from one of them is nothing on every green run by construction, and reporting it as how much was looked at says the same word whether the looking found nothing or the looking never happened.";
  "Only a name is collected. A list built in the argument itself has nothing to be recognised by later, and a gate written that way is rare enough that guessing at it would cost more than it caught.";
  "The walk it is written out of asks one named function what names it was handed first, which is the whole of what a check like this is - so all that is left here is which functions to ask, and the reasoning above about why those.";
  arguments_assert(arguments, 1);
  let plain = fn_name("list_empty_is_assert");
  let recorded = fn_name("list_empty_is_assert_json");
  let checks = [plain, recorded];
  let names = [];
  for (let check of checks) {
    let found = js_call_named_first_argument_names(ast, check);
    list_add_multiple(names, found);
  }
  return names;
}
