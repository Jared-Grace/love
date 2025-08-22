import { function_alias_add_generic } from "./function_alias_add_generic.mjs";
export async function function_aliases() {
  let a = await function_alias_add_generic("");
  let { aliases } = a;
  return aliases;
}
