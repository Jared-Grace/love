import { property_get } from "./property_get.mjs";
import { function_aliases_inverted } from "./function_aliases_inverted.mjs";
export async function function_aliases_for(fn) {
  let inverted = await function_aliases_inverted();
  let value = property_get(inverted, fn.name);
  return value;
}
