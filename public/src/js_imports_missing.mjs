import { js_declaration_single_name } from "../../../love/public/src/js_declaration_single_name.mjs";
import { list_intersect } from "../../../love/public/src/list_intersect.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { list_difference } from "../../../love/public/src/list_difference.mjs";
import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { js_identifiers_names } from "../../../love/public/src/js_identifiers_names.mjs";
import { js_imports } from "../../../love/public/src/js_imports.mjs";
import { js_declaration_single } from "../../../love/public/src/js_declaration_single.mjs";
export async function js_imports_missing(ast) {
  let name = js_declaration_single_name(ast);
  let declaration = js_declaration_single(ast);
  let imports = js_imports(ast);
  let identifiers = js_identifiers_names(declaration);
  let imports_self = list_concat(imports, [name]);
  let missing = list_difference(identifiers, imports_self);
  let f_names = await functions_names();
  let imports_missing = list_intersect(missing, f_names);
  return imports_missing;
}
