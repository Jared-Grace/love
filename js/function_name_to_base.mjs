import { function_name_extension } from "./function_name_extension.mjs";
import { text_combine } from "./text_combine.mjs";
export function function_name_to_base(f_name) {
  let f_name_ext = text_combine(f_name, function_name_extension());
  return f_name_ext;
}
