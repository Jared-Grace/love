import { function_name_extension } from "./function_name_extension.mjs";
export function function_name_to_base(funcName) {
  let v = funcName + function_name_extension();
  return v;
}
