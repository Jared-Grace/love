import { app_code_operators_arithmetic_generic } from "../../../love/public/src/app_code_operators_arithmetic_generic.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_code_operators_arithmetic(parent) {
  app_code_operators_arithmetic_generic(parent, operator_map);
  function operator_map(item) {
    item = property_get(item, "operator");
    return item;
  }
}
