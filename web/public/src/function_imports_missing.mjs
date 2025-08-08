import {object_merge} from './object_merge.mjs';
import {function_parse} from "./function_parse.mjs";
import {js_imports} from "./js_imports.mjs";
import {js_declaration_single} from "./js_declaration_single.mjs";
import {js_identifiers_names} from "./js_identifiers_names.mjs";
import {list_difference} from "./list_difference.mjs";
import {list_concat} from "./list_concat.mjs";
import {functions_names} from "./functions_names.mjs";
import {list_intersect} from "./list_intersect.mjs";
export async function function_imports_missing(f_name) {
  let parsed = await function_parse(f_name);
  let {ast,unaliased} = parsed;
  let imports = js_imports(ast);
  let declaration = js_declaration_single(ast);
  let identifiers = js_identifiers_names(declaration);
  let imports_self = list_concat(imports, [unaliased]);
  let missing = list_difference(identifiers, imports_self);
  let f_names = functions_names();
  let imports_missing = list_intersect(missing, f_names);
  return object_merge({
    imports_missing,
  }, parsed);
}
