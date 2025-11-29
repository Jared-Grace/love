import { log } from "../../../love/public/src/log.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
export function js_declaration_param_named(declaration, param_name) {
  let { params } = declaration;
  log({
    param_name,
    params,
  });
  let result = list_find_property(params, "name", param_name);
  return result;
}
