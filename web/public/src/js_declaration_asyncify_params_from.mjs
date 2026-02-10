import { js_imports_missing_add } from "../../../love/public/src/js_imports_missing_add.mjs";
import { property_from } from "../../../love/public/src/property_from.mjs";
import { js_declaration_asyncify } from "../../../love/public/src/js_declaration_asyncify.mjs";
import { js_declaration_single } from "../../../love/public/src/js_declaration_single.mjs";
export async function js_declaration_asyncify_params_from(
  ast,
  declaration_call,
) {
  let declaration = js_declaration_single(ast);
  js_declaration_asyncify(declaration, declaration_call);
  property_from(declaration, "params", declaration_call);
  await js_imports_missing_add(ast);
}
