import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_declaration_params_ast_get } from "./js_function_declaration_params_ast_get.mjs";
import { js_function_arguments_assert_number_node_or_null } from "./js_function_arguments_assert_number_node_or_null.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { property_list_size } from "./property_list_size.mjs";
import { text_to } from "./text_to.mjs";
import { null_is } from "./null_is.mjs";
export function js_function_arguments_assert_count_repair(ast) {
  arguments_assert(arguments, 1);
  ("Make the line counting a function's arguments say the number of names the function actually takes.");
  ("Run after anything that changes the list of names. That line is written once, when the function is first made to stand on its own, and until now no command ever went back to it - so adding a name or taking one away left the line saying the old number, and every correct call to that function threw. It threw saying the caller passed the wrong count, which sends the reader to the calling file, where nothing is wrong.");
  ("A function with no such line is left with none. Whether one belongs there is a separate question with its own command, and answering it here would put the line into every function a name was ever moved in.");
  ("The number is written into the piece already standing in the file rather than a fresh line being built and put in its place. The line is not always the first one in the body, so replacing it would have to know where it stood, and writing into the piece needs to know nothing at all.");
  ("Both spellings of the number are written, the value and the text it was read from. What prints the file back out prefers the text when it is there, so writing only the value left the file saying exactly what it said before, silently.");
  let got = js_function_declaration_params_ast_get(ast);
  let declaration = property_get(got, "declaration");
  let node = js_function_arguments_assert_number_node_or_null(declaration);
  let unguarded = null_is(node);
  if (unguarded) {
    return;
  }
  let count = property_list_size(declaration, "params");
  let written = text_to(count);
  property_set(node, "value", count);
  property_set(node, "raw", written);
}
