import { function_alias_add_generic } from "../../../love/public/src/function_alias_add_generic.mjs";
export async function function_aliases() {
  let { aliases } = await function_alias_add_generic("");
  return aliases;
}
