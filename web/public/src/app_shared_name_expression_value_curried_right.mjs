import { app_shared_name_expression_value } from "../../../love/public/src/app_shared_name_expression_value.mjs";
export function app_shared_name_expression_value_curried_right(prefix) {
  let c = function app_shared_name_expression_value_curried_right_result(e) {
    let name_new = app_shared_name_expression_value(e, prefix);
    return name_new;
  };
  return c;
}
