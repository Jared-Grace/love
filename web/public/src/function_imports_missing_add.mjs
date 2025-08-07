import { function_parse } from "./function_parse.mjs";
import { js_imports } from "./js_imports.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_concat } from "./list_concat.mjs";

export async function function_imports_missing_add(f_name) {
  let parsed = await function_parse(f_name);
  let imports = js_imports(parsed);

  let declaration = js_declaration_single(parsed);
  let identifiers = js_identifiers_names(declaration);

let imports_self = list_concat(imports,[f_name])

  let missing = list_difference(identifiers, imports);

  console.log(missing);
}
