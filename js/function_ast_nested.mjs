import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_functions_nested_declarations } from "./js_functions_nested_declarations.mjs";
export async function function_ast_nested(f_name) {
  arguments_assert(arguments, 1);
  ("The named function's parsed file, and every function written inside it.");
  ("The three lines every reading about closures opens with - parse the file, take the tree out of what came back, ask it for the functions written inside. Kept together under one name so a reading about closures starts with the closures rather than with the parsing.");
  ("Both are handed back because the tree is not scaffolding a caller can throw away once it holds the closures. A reading about one closure has to ask where in the file it is called, and that question is put to the whole tree - so a helper returning the closures alone leaves its caller parsing the same file a second time to get the tree back.");
  let parsed = await function_parse_declaration(f_name);
  let ast = property_get(parsed, "ast");
  let nested = js_functions_nested_declarations(ast);
  let read = {
    ast,
    nested,
  };
  return read;
}
