import { property_get } from "./property_get.mjs";
import { function_alias_add_generic } from "./function_alias_add_generic.mjs";
export async function function_aliases() {
  "Every shorthand key this repo answers to, with the full function name each one stands for.";
  let v = await function_alias_add_generic("");
  let aliases = property_get(v, "aliases");
  return aliases;
}
