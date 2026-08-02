import { js_function_declaration_property_params_names } from "./js_function_declaration_property_params_names.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_single } from "./list_single.mjs";
import { js_node_call_get } from "./js_node_call_get.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { list_includes } from "./list_includes.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { list_set } from "./list_set.mjs";
export async function js_call_argument_named_node_set(
  ast,
  selects,
  param_name,
  node_argument,
) {
  arguments_assert(arguments, 4);
  ("Changes one argument of a call, saying which one by the name the called");
  ("function knows it as. Counting from the left would name the same argument by");
  ("where it happens to sit, so adding a parameter upstream would silently point");
  ("every written address at its neighbour.");
  ("The called function is asked what its parameters are, so a name that is not");
  ("one of them is caught here rather than becoming a call nobody meant.");
  ("Takes the replacement already built, so the two ways of saying what to put");
  ("there — a written line, or a name that must be only a name — share everything");
  ("except how they were read. Which matters because only one of them can be");
  ("handed a standing approval.");
  let node = list_single(selects);
  let call = js_node_call_get(node);
  let f_name = js_call_callee_name_try(call);
  let d = await function_parse_declaration(f_name);
  let names = js_function_declaration_property_params_names(d, "declaration");
  let includes = list_includes(names, param_name);
  assert_json(includes, {
    hint: "the called function has no parameter by that name — would you like one of the names it does have?",
    f_name,
    param_name,
    names,
  });
  let index = list_index_of(names, param_name);
  let args = js_call_arguments_get(call);
  list_set(args, index, node_argument);
}
