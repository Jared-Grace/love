import { property_get_or } from "./property_get_or.mjs";
import { function_aliases_inverted } from "./function_aliases_inverted.mjs";
export async function function_alias_keys(f_name) {
  "Lists the alias keys the human types at the keyboard to reach this fn, empty when it has none";
  "An alias is evidence a human uses the fn even when no code imports it";
  let inverted = await function_aliases_inverted();
  let keys = property_get_or(inverted, f_name, []);
  return keys;
}
