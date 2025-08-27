import {list_add} from "./list_add.mjs";
import {js_declaration_params_get} from "./js_declaration_params_get.mjs";
import {marker} from "./marker.mjs";
export function js_declaration_param_add_node(declaration, item) {
  marker("1");
  let params = js_declaration_params_get(declaration);
  marker("2");
  list_add(params, item);
}
