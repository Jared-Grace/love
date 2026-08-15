import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_functions_nested_named } from "./js_functions_nested_named.mjs";
export async function function_ast_nested_named(f_name) {
  arguments_assert(arguments, 1);
  ("The named function's parsed file, and every function carrying a name written inside it, whichever way it is written down.");
  ("The wider twin of the reading beside it. That one hands back only the functions standing on lines of their own, which is all the move that takes a name away can touch; this one also hands back the functions written as values, which is what the move that leaves the name behind can touch and where most of a long function's length here actually sits.");
  let parsed = await function_parse_declaration(f_name);
  let ast = property_get(parsed, "ast");
  let nested = js_functions_nested_named(ast);
  let read = {
    ast,
    nested,
  };
  return read;
}
