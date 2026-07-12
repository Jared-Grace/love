import { function_name_combine } from "./function_name_combine.mjs";
import { property_get } from "./property_get.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
export async function function_cache_name(f_name) {
  let parsed = await function_parse_declaration(f_name);
  let unaliased = property_get(parsed, "unaliased");
  let f_name_cache = function_name_combine(unaliased, "cache");
  let r = {
    parsed,
    unaliased,
    f_name_cache,
  };
  return r;
}
