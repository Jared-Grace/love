import { function_name_combine } from "./function_name_combine.mjs";
import { function_identifier_replace } from "./function_identifier_replace.mjs";
export async function function_identifier_replace_suffix_add(
  identifier_name,
  suffix_to_add,
) {
  let replacement = function_name_combine(identifier_name, suffix_to_add);
  let v = await function_identifier_replace(identifier_name, replacement);
  return v;
}
