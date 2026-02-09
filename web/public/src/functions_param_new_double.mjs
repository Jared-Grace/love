import { functions_param_new } from "../../../love/public/src/functions_param_new.mjs";
export async function functions_param_new_double(f_names_comma, param_name) {
  let v = await functions_param_new(f_names_comma, param_name, param_name);
  return v;
}
