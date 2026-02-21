import { text_suffix_without } from "../../../love/public/src/text_suffix_without.mjs";
import { function_identifier_replace } from "../../../love/public/src/function_identifier_replace.mjs";
export async function function_identifier_replace_ending_remove(
  identifier_name,
  ending_to_remove,
) {
  let removed = text_suffix_without(identifier_name, ending_to_remove);
  let v = await function_identifier_replace(identifier_name, removed);
  return v;
}
