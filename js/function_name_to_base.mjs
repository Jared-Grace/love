import { function_name_extension } from "../../../love/public/src/function_name_extension.mjs";
export function function_name_to_base(f_name) {
  let f_name_ext = f_name + function_name_extension();
  return f_name_ext;
}
