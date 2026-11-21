import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_declaration_params_ast_get } from "./js_function_declaration_params_ast_get.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_arguments_assert_add } from "./js_function_arguments_assert_add.mjs";
import { function_transform } from "./function_transform.mjs";
export async function function_arguments_assert_add(f_name) {
  "Writes the line that counts a named function's arguments at the top of its body, saying how many it takes.";
  arguments_assert(arguments, 1);
  ("The work itself was already written and reached only from the commands that cut a new function out of an old one, so a function written by hand without the check had no way to get one by name - and a missing argument then runs on as undefined instead of stopping. Measured 2026-11-21: a report given no number of days answered 0 for every app, with no error.");
  ("A function already opening with the check is left exactly as it stands, so running this twice writes it once.");
  function lambda(ast) {
    let got = js_function_declaration_params_ast_get(ast);
    let declaration = property_get(got, "declaration");
    js_function_arguments_assert_add(declaration);
  }
  await function_transform(f_name, lambda);
}
