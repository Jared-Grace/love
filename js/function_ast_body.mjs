import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_function_declaration_to_block_body } from "./js_function_declaration_to_block_body.mjs";
import { property_get } from "./property_get.mjs";
export async function function_ast_body(f_name) {
  arguments_assert(arguments, 1);
  ("The named function's parsed file, and the lines of its own body at the top level.");
  ("The twin of the reading that hands back the closures instead. A span of work is chosen out of the top level and nowhere else, so the list wanted here is the one the block holds directly, deep counting left to whoever is measuring size.");
  ("The tree comes back beside the lines because addressing a line asks a question of the whole file, and a helper handing back the lines alone leaves its caller parsing the same file a second time.");
  let parsed = await function_parse_declaration(f_name);
  let ast = property_get(parsed, "ast");
  let declaration = property_get(parsed, "declaration");
  let statements = js_function_declaration_to_block_body(declaration);
  let read = {
    ast,
    statements,
  };
  return read;
}
