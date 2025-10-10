import { list_map_squash } from "../../../love/public/src/list_map_squash.mjs";
import { js_declaration_params_get } from "../../../love/public/src/js_declaration_params_get.mjs";
import { js_identifiers_to_names } from "../../../love/public/src/js_identifiers_to_names.mjs";
import { js_declaration_params_names_node } from "../../../love/public/src/js_declaration_params_names_node.mjs";
export function js_declaration_params_names(declaration) {
  let params = js_declaration_params_get(declaration);
  let params_names = null;
  if (false) {
    params_names = js_identifiers_to_names(params);
  } else {
    params_names = list_map_squash(params, js_declaration_params_names_node);
  }
  return params_names;
}
