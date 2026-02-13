import { ternary } from "../../../love/public/src/ternary.mjs";
import { list_map_squash } from "../../../love/public/src/list_map_squash.mjs";
import { js_declaration_params_get } from "../../../love/public/src/js_declaration_params_get.mjs";
import { js_identifiers_to_names } from "../../../love/public/src/js_identifiers_to_names.mjs";
import { js_declaration_params_names_node } from "../../../love/public/src/js_declaration_params_names_node.mjs";
export function js_declaration_params_names(declaration) {
  let params = js_declaration_params_get(declaration);
  let params_names = null;
  let on_true = js_identifiers_to_names(params);
  let on_false = list_map_squash(params, js_declaration_params_names_node);
  params_names = ternary(false, on_true, on_false);
  return params_names;
  let b = false;
}
