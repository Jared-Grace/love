import { arguments_assert } from "./arguments_assert.mjs";
import { function_exists_assert } from "./function_exists_assert.mjs";
import { js_array_expression_only_elements } from "./js_array_expression_only_elements.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_string } from "./js_string.mjs";
import { property_get } from "./property_get.mjs";
import { js_declare_unique_ast } from "./js_declare_unique_ast.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { list_add } from "./list_add.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
import { js_body_list_declaration_index } from "./js_body_list_declaration_index.mjs";
import { function_transform_auto } from "./function_transform_auto.mjs";
export async function function_list_fn_name_add(f_name, name) {
  "$plain f_name";
  "$plain name";
  arguments_assert(arguments, 2);
  ("Adds one function's NAME to the end of the list another function hands back - the word, not the function.");
  ("The twin of the adder beside it, and the difference is the whole of what makes a register of names different from a register of functions. That one writes the name in as a reference and imports it, which puts the function itself into the list; a list of words wants the word, and the marker this repo writes a word with is the one that survives a rename without dragging the function's own dependencies in behind it.");
  ("The word is put into a string that was parsed empty rather than into one built out of the name, so nothing handed to this command can arrive as code. It is the same move every other command taking a name makes, and it is what lets this be approved once instead of at every use.");
  ("It canonicalizes afterwards and commits nothing, so the added line arrives in the shape the repo writes and lands in a commit of your own.");
  await function_exists_assert(name);
  function lambda(ast) {
    let elements = js_array_expression_only_elements(ast);
    let f_name2 = fn_name("fn_name");
    let code_expression = text_combine_multiple([f_name2, '("")']);
    let call = js_parse_expression(code_expression);
    let argument = js_string(name);
    let call_arguments = property_get(call, "arguments");
    call_arguments[0] = argument;
    let made = js_declare_unique_ast(ast, "spelled", call);
    let declare = property_get(made, "declare");
    let unique = property_get(made, "unique");
    let identifier = js_identifier_expression(unique);
    list_add(elements, identifier);
    let body = js_flo_body(ast);
    let at = js_body_list_declaration_index(body);
    body.splice(at, 0, declare);
  }
  let output = await function_transform_auto(f_name, lambda);
  return output;
}
