import { function_name_extension } from "./function_name_extension.mjs";
export function function_name_to_base(f_name) {
  let v = f_name + function_name_extension();
  return v;
}
