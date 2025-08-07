import { function_name_extension } from "./function_name_extension.mjs";

export function function_name_to_base(funcName) {
  return funcName + function_name_extension();
}
