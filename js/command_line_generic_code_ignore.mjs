import { fn_name } from "./fn_name.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
export function command_line_generic_code_ignore() {
  let combined = function_name_combine(
    fn_name("command_line_generic"),
    "code_ignore",
  );
  return combined;
}
