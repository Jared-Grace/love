import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_list_calls_named_nodes } from "./js_list_calls_named_nodes.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_add } from "./list_add.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function qa_gate_asserted_empty_names(ast) {
  "The names a gate hands to an emptiness check - the lists it is about to refuse to have anything in.";
  "They are worth knowing apart from every other name in the function because of what is true of them on a run that passes: they are empty. So a number worked out from one of them is nothing on every green run by construction, and reporting it as how much was looked at says the same word whether the looking found nothing or the looking never happened.";
  "Only a name is collected. A list built in the argument itself has nothing to be recognised by later, and a gate written that way is rare enough that guessing at it would cost more than it caught.";
  arguments_assert(arguments, 1);
  let plain = fn_name("list_empty_is_assert");
  let recorded = fn_name("list_empty_is_assert_json");
  let checks = [plain, recorded];
  let names = [];
  for (let check of checks) {
    let calls = js_list_calls_named_nodes(ast, check);
    for (let call of calls) {
      let call_arguments = property_get(call, "arguments");
      let none_is = list_empty_is(call_arguments);
      if (none_is) {
        continue;
      }
      let first = list_first(call_arguments);
      let name = js_identifier_name_try(first);
      let named_is = null_not_is(name);
      if (named_is) {
        list_add(names, name);
      }
    }
  }
  return names;
}
