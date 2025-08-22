import { string_suffix_without } from "./string_suffix_without.mjs";
import { marker } from "./marker.mjs";
import { function_identifier_replace } from "./function_identifier_replace.mjs";
export async function function_identifier_replace_ending_remove(
  identifier_name,
  ending_to_remove,
) {
  marker("1");
  let removed = string_suffix_without(identifier_name, ending_to_remove);
  let v = await function_identifier_replace(identifier_name, removed);
  return v;
}
