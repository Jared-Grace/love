import { js_imports_missing_add_all } from "./js_imports_missing_add_all.mjs";
import { property_from } from "./property_from.mjs";
import { js_function_declaration_asyncify } from "./js_function_declaration_asyncify.mjs";
import { js_flo } from "./js_flo.mjs";
export async function js_function_declaration_asyncify_params_from(
  ast,
  declaration_call,
) {
  let declaration = js_flo(ast);
  js_function_declaration_asyncify(declaration, declaration_call);
  property_from(declaration, "params", declaration_call);
  await js_imports_missing_add_all(ast);
}
