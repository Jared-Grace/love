import { string_suffix_without } from "../../../love/public/src/string_suffix_without.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { function_identifier_replace } from "../../../love/public/src/function_identifier_replace.mjs";
export async function function_identifier_replace_ending_remove(
  identifier_name,
  ending_to_remove,
) {
  marker("1");
  let removed = string_suffix_without(identifier_name, ending_to_remove);
  let v = await function_identifier_replace(identifier_name, removed);
  return v;
}
