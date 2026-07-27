import { function_name_combine } from "./function_name_combine.mjs";
import { function_identifier_replace_current } from "./function_identifier_replace_current.mjs";
export async function function_identifier_replace_suffix_add(
  identifier_name,
  suffix_to_add,
) {
  let replacement = function_name_combine(identifier_name, suffix_to_add);
  let v = await function_identifier_replace_current(
    identifier_name,
    replacement,
  );
  return v;
}
