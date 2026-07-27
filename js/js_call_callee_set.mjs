import { arguments_assert } from "./arguments_assert.mjs";
import { list_single } from "./list_single.mjs";
import { js_node_call_get } from "./js_node_call_get.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { assert_json } from "./assert_json.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
export async function js_call_callee_set(ast, selects, f_name) {
  arguments_assert(arguments, 3);
  ("Points one call at a different function, keeping what it was already being");
  ("given. The commonest hand edit in this repo that a verb could have made: a");
  ("helper is superseded and the calls have to follow, one site at a time, which");
  ("is what makes it different from a rename — the old function stays and other");
  ("callers keep using it.");
  ("Refuses when the two disagree about how many things they take, because the");
  ("arguments are being kept rather than written afresh. Swapping in a function");
  ("that wants a different number of them leaves a call that reads fine and is");
  ("wrong, which is the one outcome worth spending a check to prevent.");
  let node = list_single(selects);
  let call = js_node_call_get(node);
  let f_name_before = js_call_callee_name_try(call);
  let args = js_call_arguments_get(call);
  let d = await function_parse_declaration(f_name);
  let declaration = property_get(d, "declaration");
  let names = js_function_declaration_params_names(declaration);
  let count_args = list_size(args);
  let count_params = list_size(names);
  let same = equal(count_args, count_params);
  assert_json(same, {
    hint: "the call is being handed on as it stands, so the function taking it over has to take the same number of things — would you like to change the arguments first?",
    f_name_before,
    f_name,
    count_args,
    count_params,
  });
  let callee = js_identifier_expression(f_name);
  property_set(call, "callee", callee);
}
