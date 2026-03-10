import { function_name_separator } from "../../../love/public/src/function_name_separator.mjs";
export function function_name_separator_trail(a_name) {
  let separator = function_name_separator();
  const c = a_name + separator + "";
  return c;
}
