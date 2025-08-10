import { function_params_new } from "./function_params_new.mjs";
import { js_declaration_param_add } from "./js_declaration_param_add.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { function_transform } from "./function_transform.mjs";
import { marker } from "./marker.mjs";
import { log } from "./log.mjs";
import { list_add } from "./list_add.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
export async function function_param_new(param_name) {
  await function_params_new([param_name]);
}
