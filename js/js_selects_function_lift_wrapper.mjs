import { property_list_map } from "./property_list_map.mjs";
import { js_selects_function_lift_reading } from "./js_selects_function_lift_reading.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { js_function_lift_wrapper_refusals } from "./js_function_lift_wrapper_refusals.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { js_function_arguments_assert_add } from "./js_function_arguments_assert_add.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_return } from "./js_code_return.mjs";
import { js_code_function_declaration_args } from "./js_code_function_declaration_args.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
export async function js_selects_function_lift_wrapper(
  ast,
  selects,
  f_name_new,
) {
  arguments_assert(arguments, 3);
  ("Move the body of a function written inside another one out to stand under a name of its own, and leave the function itself where it is holding a single line that calls it. What it reached out of itself for becomes its parameters, and the line left behind hands it those same things.");
  ("The twin of the lift next door, for the closure that lift refuses. That one takes the name away with the body, so everywhere the name was used has to be handed the closed-over names as well - and where the name is handed on as a value rather than called, there is nowhere to put them. Leaving the function where it stands answers that at a stroke: nothing that used it changes at all, because what it names still takes exactly the arguments it always took and still reaches exactly what it always reached.");
  ("Only the body is swapped, and nothing is moved out of the place it was written in. That is what lets this reach a function written as a value - handed to a visitor, or sitting under a name in a table of cases - which is the shape most of a long function's length has here and the one shape the other lift can never take, because a value has no line of its own to be lifted off.");
  ("Reaching out is still read at the moment of the call, not the moment of the writing, because the line left behind reads those names where it stands and passes on what it finds. That is what makes this the same function it was.");
  ("Why it would not go ahead is read next door, so the report of what could be moved and the move itself cannot disagree about a single function.");
  let reading = await js_selects_function_lift_reading(ast, selects);
  let declaration = property_get(reading, "declaration");
  let refusals = await js_function_lift_wrapper_refusals(ast, declaration);
  let name_old = property_get(reading, "name_old");
  let closed = property_get(reading, "closed");
  list_empty_is_assert_json(refusals, {
    name_old,
  });
  let param_names = property_list_map(
    declaration,
    "params",
    js_identifier_name_try,
  );
  let passed = list_concat(param_names, closed);
  let async_is = property_get(declaration, "async");
  let block = property_get(declaration, "body");
  let moved_code = js_code_function_declaration_args(
    async_is,
    f_name_new,
    passed,
    "",
  );
  let moved = js_parse_statement(moved_code);
  property_set(moved, "body", block);
  ("The count is written once the parameters are settled, because it has to say how many the function takes after everything it reached out for has become one.");
  js_function_arguments_assert_add(moved);
  let call_code = js_code_call_args(f_name_new, passed);
  let inside = js_code_return(call_code);
  let stub_code = js_code_function_declaration_args(
    async_is,
    name_old,
    param_names,
    inside,
  );
  let stub = js_parse_statement(stub_code);
  let stub_block = property_get(stub, "body");
  property_set(declaration, "body", stub_block);
  let body = property_get(ast, "body");
  list_add(body, moved);
}
