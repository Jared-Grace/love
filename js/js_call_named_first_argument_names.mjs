import { arguments_assert } from "./arguments_assert.mjs";
import { js_call_first_argument_try } from "./js_call_first_argument_try.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { js_list_calls_named_nodes } from "./js_list_calls_named_nodes.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_map } from "./list_map.mjs";
export function js_call_named_first_argument_names(ast, f_name) {
  "The names handed as the first argument to every call of one named function.";
  "It is the shape a whole family of questions about a function turns out to be. What lists does this one refuse to have anything in - the names given to an emptiness check. What offenders does it hand to a ratchet - the names given to the ratchet. Both were about to be written out longhand as the same nested walk, differing only in the name being called.";
  "Two kinds of call fall out on the way and neither is a fault. A call written with no arguments has no first one, and a first argument that is a whole expression rather than a plain name has nothing that could be recognised again later. So what comes back is the names alone, and a caller counting them is counting call sites it can follow rather than call sites there were.";
  arguments_assert(arguments, 2);
  let calls = js_list_calls_named_nodes(ast, f_name);
  let firsts = list_map(calls, js_call_first_argument_try);
  let given = list_filter_null_not_is(firsts);
  let names = list_map(given, js_identifier_name_try);
  let present = list_filter_null_not_is(names);
  return present;
}
