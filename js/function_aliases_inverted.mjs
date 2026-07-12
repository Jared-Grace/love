import { object_invert } from "./object_invert.mjs";
import { function_aliases } from "./function_aliases.mjs";
export async function function_aliases_inverted() {
  let aliases = await function_aliases();
  let inverted = object_invert(aliases);
  return inverted;
}
