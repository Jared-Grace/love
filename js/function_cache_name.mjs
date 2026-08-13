import { function_name_unalias } from "./function_name_unalias.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { property_get } from "./property_get.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
export async function function_cache_name(f_name) {
  "The name a function's remembering twin goes under, worked out alongside the reading of the function itself.";
  "The plain name is asked for on its own rather than taken off the reading, because the reading answers what the source says and an alias is not written there. Reading it off the parse was what this did before, and the property was never there to read - so every caller threw before it reached the work.";
  let parsed = await function_parse_declaration(f_name);
  let u = await function_name_unalias(f_name);
  let unaliased = property_get(u, "unaliased");
  let f_name_cache = function_name_combine(unaliased, "cache");
  let r = {
    parsed,
    unaliased,
    f_name_cache,
  };
  return r;
}
