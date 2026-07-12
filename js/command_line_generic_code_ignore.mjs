import { command_line_generic } from "./command_line_generic.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
export function command_line_generic_code_ignore() {
  let combined = function_name_combine(
    command_line_generic.name,
    "code_ignore",
  );
  return combined;
}
