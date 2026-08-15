import { arguments_assert } from "./arguments_assert.mjs";
import { list_single } from "./list_single.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { list_map } from "./list_map.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_replace } from "./list_replace.mjs";
import { list_previous } from "./list_previous.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { false_is_assert_json } from "./false_is_assert_json.mjs";
import { js_function_nested_lift_reading } from "./js_function_nested_lift_reading.mjs";
import { js_identifiers_named } from "./js_identifiers_named.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { js_node_to_visitor_stack } from "./js_node_to_visitor_stack.mjs";
import { js_function_declaration_params_add } from "./js_function_declaration_params_add.mjs";
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
  ("Move the body of a function written inside another one out to stand under a name of its own, and leave the name behind holding a single line that calls it. What it reached out of itself for becomes its parameters, and the line left behind hands it those same things.");
  ("The twin of the lift next door, for the closure that lift refuses. That one takes the name away with the body, so everywhere the name was used has to be handed the closed-over names as well - and where the name is handed on as a value rather than called, there is nowhere to put them. Leaving the name where it stands answers that at a stroke: nothing that used it changes at all, because what it names still takes exactly the arguments it always took and still reaches exactly what it always reached.");
  ("What this costs is one call's worth of indirection. What it buys is a whole body out of a long function, in the shape that long functions here actually have - a callback handed to a visitor or a renderer, which is precisely what the other lift cannot take.");
  ("Reaching out is still read at the moment of the call, not the moment of the writing, because the line left behind reads those names where it stands and passes on what it finds. That is what makes this the same function it was.");
  ("It refuses a function that writes to something it reached out for, for the same reason the other one does: a parameter is a copy, so the write would land on the copy and the line waiting to read it would go on reading the old value.");
  ("It refuses one that calls itself, because the name it calls itself by is the line left behind, and the moved body cannot see it.");
  ("It refuses one whose parameters are not plain names, because the line left behind has to spell each of them out to pass it on, and a parameter that pulls a value apart cannot be spelled out again.");
  let declaration = list_single(selects);
  let reading = await js_function_nested_lift_reading(ast, declaration);
  let name_old = property_get(reading, "name_old");
  let closed = property_get(reading, "closed");
  let written_closed = property_get(reading, "written_closed");
  list_empty_is_assert_json(written_closed, {
    hint: "this function writes to a name it reached out for, and a parameter would only be a copy of it, so the write would stop reaching the line waiting to read it. Would you like it to hand the new value back instead?",
    name_old,
  });
  ("Asked of the body alone rather than of the whole declaration, because the name is written once at the head of every function and a reading that counted that would call every function one that calls itself.");
  let block = property_get(declaration, "body");
  let itself = js_identifiers_named(block, name_old);
  list_empty_is_assert_json(itself, {
    hint: "this function calls itself, and the name it calls itself by would be left behind on the line that calls the moved body, where the moved body cannot see it. Would you like to hand it in as one more thing it is given?",
    name_old,
  });
  let params = property_get(declaration, "params");
  let param_names = list_map(params, js_identifier_name_try);
  let pattern_is = list_includes(param_names, null);
  false_is_assert_json(pattern_is, {
    hint: "one of this function's parameters pulls a value apart rather than naming it, and the line left behind has to spell every parameter out to pass it on. Would you like to give that parameter a plain name first?",
    name_old,
  });
  let stack = js_node_to_visitor_stack(ast, declaration);
  let container = list_previous(stack, declaration);
  let at = list_index_of(container, declaration);
  let passed = list_concat(param_names, closed);
  let call_code = js_code_call_args(f_name_new, passed);
  let inside = js_code_return(call_code);
  let async_is = property_get(declaration, "async");
  let wrapper_code = js_code_function_declaration_args(
    async_is,
    name_old,
    param_names,
    inside,
  );
  let wrapper = js_parse_statement(wrapper_code);
  let id = property_get(declaration, "id");
  property_set(id, "name", f_name_new);
  js_function_declaration_params_add(declaration, closed);
  ("The count is written once the parameters are settled, because it has to say how many the function takes after everything it reached out for has become one.");
  js_function_arguments_assert_add(declaration);
  list_replace(container, at, wrapper);
  let body = property_get(ast, "body");
  list_add(body, declaration);
}
