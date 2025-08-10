import { function_name_separator } from "./function_name_separator.mjs";
export function function_name_combine(left, right) {
  return left + function_name_separator() + right;
}
