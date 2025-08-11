import { marker } from "./marker.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { function_identifier_replace } from "./function_identifier_replace.mjs";
export async function function_identifier_replace_ending_remove(
  identifier_name,
  ending_to_remove,
) {
  marker();
  let combined = function_name_combine(identifier_name, ending_to_remove);
  return await function_identifier_replace(identifier_name, combined);
}
