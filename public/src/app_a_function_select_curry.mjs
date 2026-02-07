import { app_a_function_select } from "../../../love/public/src/app_a_function_select.mjs";
export function app_a_function_select_curry(context) {
  let v = function lambda(f_name) {
    app_a_function_select(context, f_name);
  };
  return v;
}
