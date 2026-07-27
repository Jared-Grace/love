import { text_suffix_without } from "./text_suffix_without.mjs";
import { function_identifier_replace_current } from "./function_identifier_replace_current.mjs";
export async function function_identifier_replace_ending_remove(
  identifier_name,
  ending_to_remove,
) {
  let removed = text_suffix_without(identifier_name, ending_to_remove);
  let v = await function_identifier_replace_current(identifier_name, removed);
  return v;
}
