import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { js_function_declaration_param_named_assert } from "./js_function_declaration_param_named_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_params_ast_get } from "./js_function_declaration_params_ast_get.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { js_function_declaration_param_named } from "./js_function_declaration_param_named.mjs";
export function function_param_index(ast, param_name) {
  "Where a parameter of this name sits in the list, beside the list itself, for the verbs that delete, move and swap one.";
  "It insists the parameter is really there, and that guard belongs here rather than in each of them. A name nothing answers to comes back as not-found, which turns into a position of minus one, and a position of minus one counts from the END of the list - so every verb standing on this quietly took the LAST parameter instead of refusing. Measured: deleting a mistyped name removed the final parameter from the declaration and the final argument from every call site, and nothing threw, because exactly one thing had been removed and that is what the removal was asked to check.";
  let v2 = js_function_declaration_params_ast_get(ast);
  let params = property_get(v2, "params");
  let declaration = property_get(v2, "declaration");
  let f_name = js_function_declaration_name(declaration);
  js_function_declaration_param_named_assert(declaration, f_name, param_name);
  let p = js_function_declaration_param_named(declaration, param_name);
  let index = list_index_of(params, p);
  let v = {
    params,
    index,
  };
  return v;
}
