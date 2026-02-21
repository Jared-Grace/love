import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_parse_declaration } from "../../../love/public/src/function_parse_declaration.mjs";
export async function function_cache_name(f_name) {
  let parsed = await function_parse_declaration(f_name);
  let unaliased = property_get(parsed, "unaliased");
  let f_name_cache = function_name_combine(unaliased, "cache");
  let v3 = {
    parsed,
    unaliased,
    f_name_cache,
  };
  return v3;
}
